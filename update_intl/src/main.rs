mod sync_assest_js_script;
mod update_version;
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
        template_file_path: String::from("./template/notion-zh_CN.template.js"),
        target_path: String::from("./notion-zh_CN.js"),
    };
    let zh_tw = ScriptTemplate {
        version: next_version.clone(),
        script: res.zh_tw,
        template_file_path: String::from("./template/notion-zh_TW.template.js"),
        target_path: String::from("./notion-zh_TW.js"),
    };
    zh_cn.generator()?;
    zh_tw.generator()?;
    Ok(())
}
