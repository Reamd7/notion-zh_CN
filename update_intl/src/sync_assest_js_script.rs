use std::collections::HashMap;
use serde::{Deserialize, Serialize};
use reqwest::RequestBuilder;
use tokio::join;
use anyhow::{
  Result, anyhow
};

use crate::update_version::EnvToml;

// Example code that deserializes and serializes the model.
// extern crate serde;
// #[macro_use]
// extern crate serde_derive;
// extern crate serde_json;
//
// use generated_module::AssetsScript;
//
// fn main() {
//     let json = r#"{"answer": 42}"#;
//     let model: AssetsScript = serde_json::from_str(&json).unwrap();
// }


/// Request
#[derive(Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AssetsScript {
    // entry: String,

    pub files: Vec<File>,

    // hash: String,

    // headers_whitelist: Vec<String>,

    // locale_html: AssetsScriptLocaleHtml,

    // proxy_server_path_prefixes: Vec<String>,

    // server_paths: ServerPaths,

    // sqlite_migration_version: i64,

    pub version: String,
}

#[derive(Serialize, Deserialize)]
pub struct File {
    hash: String,

    pub path: String,

    size: i64,
}

#[derive(Serialize, Deserialize)]
pub struct AssetsScriptLocaleHtml {
    #[serde(rename = "da-DK")]
    da_dk: String,

    #[serde(rename = "de-DE")]
    de_de: String,

    #[serde(rename = "en-US")]
    en_us: String,

    #[serde(rename = "es-ES")]
    es_es: String,

    #[serde(rename = "es-LA")]
    es_la: String,

    #[serde(rename = "fi-FI")]
    fi_fi: String,

    #[serde(rename = "fr-FR")]
    fr_fr: String,

    #[serde(rename = "ja-JP")]
    ja_jp: String,

    #[serde(rename = "ko-KR")]
    ko_kr: String,

    #[serde(rename = "nb-NO")]
    nb_no: String,

    #[serde(rename = "nl-NL")]
    nl_nl: String,

    pseudo: String,

    #[serde(rename = "pt-BR")]
    pt_br: String,

    #[serde(rename = "sv-SE")]
    sv_se: String,

    #[serde(rename = "zh-CN")]
    zh_cn: String,

    #[serde(rename = "zh-TW")]
    zh_tw: String,
}

#[derive(Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ServerPaths {
    locale_html: ServerPathsLocaleHtml,
}

#[derive(Serialize, Deserialize)]
pub struct ServerPathsLocaleHtml {
    #[serde(rename = "da-DK")]
    da_dk: String,

    #[serde(rename = "de-DE")]
    de_de: String,

    #[serde(rename = "en-US")]
    en_us: String,

    #[serde(rename = "es-ES")]
    es_es: String,

    #[serde(rename = "es-LA")]
    es_la: String,

    #[serde(rename = "fi-FI")]
    fi_fi: String,

    #[serde(rename = "fr-FR")]
    fr_fr: String,

    #[serde(rename = "ja-JP")]
    ja_jp: String,

    #[serde(rename = "ko-KR")]
    ko_kr: String,

    #[serde(rename = "nb-NO")]
    nb_no: String,

    #[serde(rename = "nl-NL")]
    nl_nl: String,

    pseudo: String,

    #[serde(rename = "pt-BR")]
    pt_br: String,

    #[serde(rename = "sv-SE")]
    sv_se: String,

    #[serde(rename = "zh-CN")]
    zh_cn: String,

    #[serde(rename = "zh-TW")]
    zh_tw: String,
}


#[allow(non_snake_case)]
#[derive(Deserialize, Serialize, Debug)]
struct AssetsScriptFile {
  // hash: String,
  path: String,
  // size: i64,
}


#[allow(non_snake_case)]
#[derive(Deserialize, Serialize, Debug)]
struct AssetsScriptContent {
  // hash: String,
  data: String,
  // size: i64,
}

#[allow(non_snake_case)]
#[derive(Deserialize, Serialize, Debug)]
pub struct JSScript {
  pub ko_kr: String,
  pub zh_cn: String,
  pub zh_tw: String,
}

pub async fn get_js_intl_script() -> Result<AssetsScript>  {
  let mut fetch_config = HashMap::new();
  fetch_config.insert("hash", "");

  let client = reqwest::Client::new();
  let res = client
    .post("https://www.notion.so/api/v3/getAssetsJsonV2")
    .json(&fetch_config)
    .send()
    .await?;

  let text = res.text().await?;
  // 为了在解析json失败的时候可以重新解析，
  let parse_assets = serde_json::from_str::<AssetsScript>(&text);

  match parse_assets {
    Ok(res) => {
      return Ok(res);
    }
    Err(assets_err_content) => {
      println!("assets actual result is: {:?}", text);
      Err(anyhow!(Box::new(assets_err_content)))
    }
  }
}

pub async fn get_js_script(res: AssetsScript) -> Result<JSScript> {
  let mut assets_locale_setup_js = HashMap::new();
  let locale_setup_regex = regex::Regex::new(
    r"localeSetup\-([a-zA-Z]{2}\-[a-zA-Z]{2})"
  )?;
  
  res.files.into_iter().filter(|item| {
    item.path.starts_with("/_assets/localeSetup")
  }).for_each( |item| {
    let path = &item.path;
    let res = locale_setup_regex.captures(path);
    if let Some(res) = res {
      if let Some(locale) = res.get(1) {
        if !locale.is_empty() {
          assets_locale_setup_js.insert(locale.as_str().to_string(), item.path);
        }
      }
    }
  });

  // println!("{:?}", assets_locale_setup_js);

  let gen_client = |key: &str| -> RequestBuilder {
    let client = reqwest::Client::new();
    let mut url = String::from("https://www.notion.so");
    url.push_str(assets_locale_setup_js.get(key).unwrap());

    client.get(
      url
    )
    .header("Cache-Control", "no-cache")
    .header("upgrade-insecure-requests", "1")
    .header("sec-fetch-user", "?1")
    .header("authority", "www.notion.so")
    .header("if-modified-since", "Tue, 06 Jun 2023 22:49:53 GMT")
    .header("if-none-match", "W/\"4b79efc8d01ace001fb68165f049cf0d\"")
  };
  
  let ko_kr_client = gen_client("ko-KR");
  let zh_cn_client = gen_client("zh-CN");
  let zh_tw_client = gen_client("zh-TW");
  
  let (ko_kr_res, zh_cn_res, zh_tw_res) = join!(
    ko_kr_client.send(),
    zh_cn_client.send(),
    zh_tw_client.send()
  );
  let (ko_kr_res, zh_cn_res, zh_tw_res) = join!(
    ko_kr_res?.text(),
    zh_cn_res?.text(),
    zh_tw_res?.text()
  );

  Ok(JSScript {
    ko_kr: ko_kr_res?,
    zh_cn: zh_cn_res?,
    zh_tw: zh_tw_res?,
  })
}