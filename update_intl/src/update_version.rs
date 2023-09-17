use std::{fs, io::Read};
use anyhow::Result;
use toml_edit::{Document, value};

fn get_env_toml() -> Document {
  let env_toml = String::from_utf8(fs::read("./env.toml").unwrap()).unwrap();
  let env_toml = env_toml.parse::<Document>().unwrap();
  env_toml
}

fn get_next_version(env_toml: &Document) -> String {
  // todo 在这个库中补充一个 ToString 的 trait 以正确实现
  let version = env_toml["version"].as_str().unwrap().to_string();
  let version = version.split('.').collect::<Vec<_>>();
  let major = version[0];
  let minor = version[1];
  let patch = (version[2].parse::<i32>().unwrap() + 1).to_string();
  let next_version = format!("{}.{}.{}", major, minor, patch);
  next_version
}

pub fn update_version() -> Result<String> {
  let mut doc = get_env_toml();
  let next_version = get_next_version(&mut doc);
  doc["version"] = value(&next_version);
  fs::write("./env.toml", doc.to_string())?;
  Ok(next_version)
}