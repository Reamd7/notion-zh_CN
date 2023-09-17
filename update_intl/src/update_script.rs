use std::{io::Read, fs};
use anyhow::{Result, Ok};

pub struct ScriptTemplate {
  pub version: String,
  pub script: String,
  pub template_file_path: String,
  pub target_path: String,
}

impl ScriptTemplate {
  fn get_template_content(self: &ScriptTemplate)-> Result<String> {
    let mut template_file = std::fs::File::open(&self.template_file_path)?;
    let mut template_content = String::new();
    template_file.read_to_string(&mut template_content)?;
    
    Ok(template_content)
  }

  pub fn generator(self: &ScriptTemplate) -> Result<()> {
    let version = self.version.as_str();
    let script = self.script.as_str();
    let template_content = self.get_template_content()?;
    
    let new_script_content = template_content
      .replace("%version%", version)
      .replace("%zh%", script);
    fs::write(&self.target_path, new_script_content)?;
    Ok(())
  }
}