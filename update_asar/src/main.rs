use std::path::{Path, PathBuf}; 
use std::fs;
use asar::{AsarReader};
use anyhow::Result;

fn main() -> Result<()> {
    let notion_install_path = Path::new("/mnt/c/Users/Gemini/AppData/Local/Programs/Notion");

    let notion_resource_path = notion_install_path.join("resources");

    let notion_app_asar = notion_resource_path.join("app.asar");
    let app_asar_copy = notion_resource_path.join("app.asar.backup");
    println!("{:?} is {}", notion_app_asar, notion_app_asar.is_file());
    if notion_app_asar.is_file() {
        // 先备份
        fs::copy(&notion_app_asar, &app_asar_copy)?;
        fs::remove_file(&notion_app_asar)?;
    }
    if app_asar_copy.is_file() {
        let asar_file = fs::read(&app_asar_copy)?;
        let asar = AsarReader::new(
            &asar_file, notion_app_asar.clone()
        )?;

        if !notion_app_asar.is_dir() {
            fs::create_dir(&notion_app_asar)?;
            // unzip
            for file_path in asar.files().keys() {
                let file = asar.files().get(file_path).unwrap();
                
                let extra_path = notion_app_asar.join(file_path);
                let extra_parent_path = extra_path.parent();
                if let Some(extra_parent_path) = extra_parent_path {
                    if !extra_parent_path.is_dir() {
                        if let Err(err) = fs::create_dir_all(extra_parent_path) {
                            println!("CreateDirError {:?}", err);
                        }
                    }
                }
                // 涉及系统平台的内容不一定是标准的utf-8 格式，所以是不可以直接转换的
                let content = file.data();
                fs::write(extra_path, content)?;
            }
        }

        println!("There are {} files in archive.asar", asar.files().len());
        
        // let files = asar.files().keys().collect::<Vec<_>>();
        let preload_path = Path::new("renderer/preload.js");
        let preload_js_file = asar.files().get(preload_path).unwrap();
        let preload_js_contents = std::str::from_utf8(preload_js_file.data()).unwrap();

        fs::write(
            notion_app_asar.join(preload_path), 
            format!("{}\n{}", preload_js_contents, "require('./Notion-zh_CN');")
        )?;

        let i18n_content = "alert(1)";
        let i18n_path = Path::new("renderer/notion-zh_CN.js");

        fs::write(
            notion_app_asar.join(i18n_path),
            i18n_content
        )?;
    }
    Ok(())
}
