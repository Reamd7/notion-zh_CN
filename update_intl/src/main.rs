mod sync_assest_js_script;
mod update_version;
use std::{path::Path, collections::HashMap};
use anyhow::Result;
use reqwest::RequestBuilder;
use tokio::join;

use crate::{update_script::ScriptTemplate, update_version::EnvToml, sync_assest_js_script::{JSScript, get_js_script}};
mod update_script;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    println!("Hello, world!");
    let mut doc = EnvToml::of();
    
    let res: sync_assest_js_script::AssetsScript = sync_assest_js_script::get_js_intl_script().await?;

    if !doc.compare_and_update_notion_version(&res.version) {
        return Ok(())
    }

    let res = get_js_script(res).await?;

    let next_version = doc.update_version();
    let zh_cn = ScriptTemplate {
        version: next_version.clone(),
        script: res.zh_cn,
        template_file_path: Path::new("./template/notion-zh_CN.template.js").to_path_buf(),
        target_path: Path::new("./notion-zh_CN.js").to_path_buf(),
    };
    let zh_tw = ScriptTemplate {
        version: next_version.clone(),
        script: res.zh_tw,
        template_file_path: Path::new("./template/notion-zh_TW.template.js").to_path_buf(),
        target_path: Path::new("./notion-zh_TW.js").to_path_buf(),
    };
    zh_cn.generator()?;
    zh_tw.generator()?;
    doc.write()?;
    // deps dprint format
    std::process::Command::new("dprint").arg("fmt ./*.js").output().expect("Failed to execute command");
    Ok(())
}
