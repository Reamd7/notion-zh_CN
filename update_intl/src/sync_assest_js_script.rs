use std::{collections::HashMap, rc::Rc};
use serde::{Deserialize, Serialize};
use reqwest::{self, Response, Error};

#[derive(Deserialize, Serialize, Debug)]
pub struct AssetsScript {
  data: AssetsFiles
}

#[derive(Deserialize, Serialize, Debug)]
struct AssetsFiles {
  files: Vec<AssetsFile>
}
#[derive(Deserialize, Serialize, Debug)]
struct AssetsFile {
  path: String
}

pub async fn get_js_intl_script() -> Result<AssetsScript, Box<dyn std::error::Error>>  {
  let mut map = HashMap::new();
  map.insert("hash", "");

  let client = reqwest::Client::new();
  let res = client
    .post("https://www.notion.so/api/v3/getAssetsJsonV2")
    .json(&map)
    .send()
    .await?;

  let text = res.text().await?;
  // 为了在解析json失败的时候可以重新解析，
  let parse_assets = serde_json::from_str::<AssetsScript>(&text)?;
  Ok(parse_assets)
}