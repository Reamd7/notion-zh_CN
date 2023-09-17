use std::path::Path; 
use std::fs;
use asar::{AsarReader};
use anyhow::Result;

fn main() -> Result<()> {
    let notion_install_path = Path::new("C:\\Users\\fdzm\\AppData\\Local\\Programs\\Notion");

    let notion_resource_path = notion_install_path.join("./resources");

    let notion_app_asar = notion_resource_path.join("./app.asar");
    let app_asar_copy = notion_resource_path.join("./app.asar.backup");

    let app_asar_is_file = notion_app_asar.is_file();
    if app_asar_is_file {
        // 先备份
        fs::copy(&notion_app_asar, &app_asar_copy)?;
        fs::remove_file(&notion_app_asar)?;
    }
    if app_asar_copy.is_file() {
        let asar_file = fs::read(&app_asar_copy)?;
        let asar = AsarReader::new(
            &asar_file, app_asar_copy
        )?;

        if !notion_app_asar.is_dir() {
            fs::create_dir(&notion_app_asar)?;

            // unzip
            for path in asar.files().keys() {
                println!("{}", path.display());
            }
            fs::write(path, contents)
        }

        println!("There are {} files in archive.asar", asar.files().len());
        
        // let files = asar.files().keys().collect::<Vec<_>>();
        let preload_path = Path::new("renderer\\preload.js");
        let preload_js_file = asar.files().get(preload_path).unwrap();
        let preload_js_contents = std::str::from_utf8(preload_js_file.data()).unwrap();

        fs::write(
            notion_app_asar.join(preload_path), 
            format!("{}\n{}", preload_js_contents, "require('./Notion-zh_CN');")
        )?;

        let i18n_content = "alert(1)";
        let i18n_path = Path::new("renderer\\notion-zh_CN.js");

        fs::write(
            notion_app_asar.join(i18n_path),
            i18n_content
        )?;
    }
    Ok(())
}
