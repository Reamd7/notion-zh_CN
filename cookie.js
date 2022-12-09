(async function main() {
    await cookieStore.delete("NEXT_LOCALE");
    await cookieStore.delete("notion_locale");
    await cookieStore.set("NEXT_LOCALE", "zh-CN");
    await cookieStore.delete("notion_locale", "zh-CN/autodetect");
    console.log(cookieStore.getAll().then(console.log));

    cookieStore.addEventListener("change", async (event) => {
        await cookieStore.delete("NEXT_LOCALE");
        await cookieStore.delete("notion_locale");
        await cookieStore.set({
            name: "NEXT_LOCALE",
            value: "zh-CN",
        });
        await cookieStore.delete("notion_locale", "zh-CN/autodetect");
      });
})()


let headers = $request.headers;
let cookies = headers.cookie;
const locale = "NEXT_LOCALE:zh-CN; notion_locale:zh-CN/autodetect;"
if (cookies) {
    $request.headers.cookie = cookie.split(";").filter(value => !(value.includes("NEXT_LOCALE") || value.includes("notion_locale"))).join(";") + locale
} else {
    $request.headers.cookie = locale;
}
