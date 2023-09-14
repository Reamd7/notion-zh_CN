mod sync_assest_js_script;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    println!("Hello, world!");

    let res = sync_assest_js_script::get_js_intl_script().await?;
    println!("{:?}", res);

    Ok(())
}
