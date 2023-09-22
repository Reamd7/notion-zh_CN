#![feature(is_terminal)]

use anyhow::Result;
use asar::AsarReader;
use colored::Colorize;
use directories::BaseDirs;
use std::fs;
use std::io::Read;
use std::path::Path;
use toml_edit::Document;

struct UpdateScriptEnv {
    version: String,
    folder: String,
    url: Option<URL>,
    __doc__: Document,
}

enum URL {
    Local(String),
    Remote(String),
}

impl UpdateScriptEnv {
    fn new() -> UpdateScriptEnv {
        let cwd = std::env::current_dir().unwrap();
        println!("[log] 当前执行路径 {}", cwd.to_str().unwrap().green());
        let toml_path = cwd.join(Path::new("env.toml"));
        println!("[log] 配置文件路径 {}", toml_path.to_str().unwrap().green());
        let mut toml_file = fs::File::open(toml_path)
            .unwrap_or_else(|_| panic!("{}", "[Error] 找不到配置文件".red()));
        let mut toml = String::new();
        toml_file
            .read_to_string(&mut toml)
            .unwrap_or_else(|_| panic!("{}", "[Error] 配置文件读取失败".red()));

        let doc = toml
            .parse::<Document>()
            .unwrap_or_else(|_| panic!("{}", "[Error] 解析配置文件失败".red()));
        UpdateScriptEnv {
            version: doc["version"]
                .as_str()
                .unwrap_or_else(|| panic!("{}", "[Error] 解析配置 version 失败".red().to_string()))
                .to_string(),
            folder: match doc["folder"].as_str() {
                Some("~") => UpdateScriptEnv::find_notion_install_path(),
                Some(dir) => dir.to_string(),
                None => panic!("{}", "[Error] 解析配置 folder 失败".red().to_string()),
            },
            url: match doc.get("local_url") {
                Some(local) => Some(URL::Local(match local.as_str() {
                    Some(s) => s.to_string(),
                    None => panic!("{}", "[Error] 解析配置 local_url 失败".red().to_string()),
                })),
                None => doc.get("remote_url").map(|remote| {
                    URL::Remote(
                        remote
                            .as_str()
                            .unwrap_or_else(|| {
                                panic!("{}", "[Error] 解析配置 remote_url 失败".red().to_string())
                            })
                            .to_string(),
                    )
                }),
            },
            __doc__: doc,
        }
    }
    pub fn update_version(&mut self, next_version: &str) {
        self.__doc__["version"] = toml_edit::value(next_version);
        self.version = next_version.to_string();
    }

    fn find_notion_install_path() -> String {
        if cfg!(target_os = "windows") {
            // windows系统要执行的代码段
            if let Some(d) = BaseDirs::new() {
                let mut x = String::from(d.data_local_dir().to_str().unwrap());
                x.push_str("/Programs/Notion");
                return x;
            } else {
                panic!()
            }
        }
        if cfg!(target_os = "macos") {
            return String::from("/Applications/Notion.app/");
        }
        // linux系统要执行的代码段
        panic!();
    }
}

#[tokio::main]
async fn main() -> Result<()> {
    let env = UpdateScriptEnv::new();

    let notion_install_path = Path::new(&env.folder);

    let notion_resource_path = notion_install_path.join("resources");

    let notion_app_asar = notion_resource_path.join("app.asar");
    let app_asar_copy = notion_resource_path.join("app.asar.backup");

    if notion_app_asar.is_file() {
        // 先备份
        fs::copy(&notion_app_asar, &app_asar_copy)?;
        fs::remove_file(&notion_app_asar)?;
        println!("备份 app.asar");
    }
    if app_asar_copy.is_file() {
        let asar_file = fs::read(&app_asar_copy)
            .unwrap_or_else(|_| { panic!("{}", "读取 asar 文件失败".red().to_string()) });

        let asar = AsarReader::new(&asar_file, notion_app_asar.clone())
            .unwrap_or_else(|_| { panic!("{}", "解析 asar 文件失败".red().to_string()) });

        if !notion_app_asar.is_dir() {
            fs::create_dir(&notion_app_asar).unwrap_or_else(|_| { panic!("{}", "创建 app.asar 文件夹失败".red().to_string()) });;
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
            println!("解压 app.asar");
        }

        // let files = asar.files().keys().collect::<Vec<_>>();
        let preload_path = Path::new("renderer/preload.js");
        let preload_js_file = asar.files().get(preload_path).unwrap();
        let preload_js_contents = std::str::from_utf8(preload_js_file.data()).unwrap();

        fs::write(
            notion_app_asar.join(preload_path),
            format!("{}\n{}", preload_js_contents, "require('./Notion-zh_CN');"),
        )?;

        let text: String = match &env.url {
            Some(url) => match url {
                URL::Local(local) => match fs::read_to_string(local) {
                    Ok(r) => r.to_string(),
                    Err(_) => panic!(),
                },
                URL::Remote(remote) => match reqwest::Client::new()
                    .get(remote)
                    .send()
                    .await?
                    .text()
                    .await
                {
                    Ok(r) => r,
                    Err(_) => panic!(),
                },
            },
            _ => panic!(),
        };

        let i18n_path = Path::new("renderer/notion-zh_CN.js");

        fs::write(notion_app_asar.join(i18n_path), text)?;

        println!("完成 i18n 注入");
    }
    Ok(())
}
