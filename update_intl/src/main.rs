mod sync_assest_js_script;
mod update_version;
use std::path::Path;
use anyhow::Result;

use crate::update_script::ScriptTemplate;
mod update_script;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    println!("Hello, world!");

    let res = sync_assest_js_script::get_js_intl_script().await?;

    let next_version = update_version::update_version()?;
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
    Ok(())
}
