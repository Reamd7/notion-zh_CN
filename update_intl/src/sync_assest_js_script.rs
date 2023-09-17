use std::{collections::HashMap, rc::Rc, hash::Hash};
use serde::{Deserialize, Serialize};
use reqwest::{self, Response, Error, header::HeaderMap, Client, RequestBuilder};
use serde_json;
use regex::Regex;
use tokio::join;

#[allow(non_snake_case)]
#[derive(Deserialize, Serialize, Debug)]
struct AssetsScript {
  // entry: String,
  files: Vec<AssetsScriptFile>,
  // hash: String,
  // headersWhitelist: Vec<String>,
  // localeHtml: HashMap<String, String>,
  // proxyServerPathPrefixes: Vec<String>,
  sqliteMigrationVersion: i32,
  version: String
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
  ko_kr: String,
  zh_cn: String,
  zh_tw: String,
}

pub async fn get_js_intl_script() -> Result<JSScript, Box<dyn std::error::Error>>  {
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
      let mut assest_locale_setup_js = HashMap::new();
      let localesetup_regex = regex::Regex::new(
        r"localeSetup\-([a-zA-Z]{2}\-[a-zA-Z]{2})"
      )?;
  
      res.files.into_iter().filter(|item| {
        return item.path.starts_with("/localeSetup")
      }).for_each( |item| {
        let path = &item.path;
        let res = localesetup_regex.captures(path);
        if let Some(res) = res {
          if let Some(locale) = res.get(1) {
            if !locale.is_empty() {
              assest_locale_setup_js.insert(locale.as_str().to_string(), item.path);
            }
          }
        }
      });
  
      println!("{:?}", assest_locale_setup_js);
  
      let gen_client = |key: &str| -> RequestBuilder {
        let ko_kr_lient = reqwest::Client::new();
        let mut ko_kr_url = String::from("https://www.notion.so");
        ko_kr_url.push_str(assest_locale_setup_js.get(key).unwrap());
        let ko_kr_lient = ko_kr_lient.get(
          ko_kr_url
        )
        .header("Cache-Control", "no-cache")
        .header("upgrade-insecure-requests", "1")
        .header("sec-fetch-user", "?1")
        .header("authority", "www.notion.so")
        .header("if-modified-since", "Tue, 06 Jun 2023 22:49:53 GMT")
        .header("if-none-match", "W/\"4b79efc8d01ace001fb68165f049cf0d\"");
  
        ko_kr_lient
      };
      
      let ko_kr_lient = gen_client("ko-KR");
      let zh_cn_lient = gen_client("zh-CN");
      let zh_tw_lient = gen_client("zh-TW");
      
      let (ko_kr_res, zh_cn_res, zh_tw_res) = join!(
        ko_kr_lient.send(),
        zh_cn_lient.send(),
        zh_tw_lient.send()
      );
      let (ko_kr_res, zh_cn_res, zh_tw_res) = join!(
        ko_kr_res?.text(),
        zh_cn_res?.text(),
        zh_tw_res?.text()
      );
  
      return Ok(JSScript {
        ko_kr: ko_kr_res?,
        zh_cn: zh_cn_res?,
        zh_tw: zh_tw_res?,
      })
    }
    Err(assets_err_content) => {
      println!("assets actual result is: {:?}", text);
      return Err(Box::new(assets_err_content))
    }
  }
}