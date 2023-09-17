use std::{fs, io::Read};
use anyhow::Result;
use toml_edit::{Document, value};

fn get_next_version() -> String {
  let major = env!("CARGO_PKG_VERSION_MAJOR");
  let minor = env!("CARGO_PKG_VERSION_MINOR");
  let patch = (env!("CARGO_PKG_VERSION_PATCH").parse::<i32>().unwrap() + 1).to_string();
  let next_version = format!("{}.{}.{}", major, minor, patch);
  next_version
}

pub fn update_version() -> Result<String> {
  let mut cargo_toml_file = fs::File::open("./cargo.toml")?;
  let mut toml = String::new();
  cargo_toml_file.read_to_string(&mut toml)?;
  let next_version = get_next_version();

  let mut doc = toml.parse::<Document>()?;
  doc["package"]["version"] = value(&next_version);

  fs::write("./cargo.toml", doc.to_string())?;
  Ok(next_version)
}