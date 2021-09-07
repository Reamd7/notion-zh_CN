const BaseUrl = "自定义cloudflare worker 域名"
const NotionUrl = "www.notion.so";
const BasePath = `https://${BaseUrl}`;
const NotionPath = `https://${NotionUrl}`;

addEventListener('fetch', function(event) {
  event.respondWith(handleRequest(event.request))
})

class ElementHandler {
  async element(element) {
    const res = await fetch("https://cdn.jsdelivr.net/gh/Reamd7/notion-zh_CN@main/json/zh.json").then(res => {
      return res.text();
    })
    element.prepend(`
    <script id="messages" type="application/json" data-locale="zh-CN">
      ${res}
    </script>
    `, {
      html: true
    })
  }
}
class ScriptHandler {
  element(element) {
    element.append(`
    <script>
    window.CONFIG.domainBaseUrl = "${BasePath}"
    </script>
    `, {
      html: true
    })
  }
}

async function handleRequest(request) {

  const method = request.method;
  const headers = new Headers(request.headers);
  headers.set("origin", NotionPath)
  headers.set("referer", NotionPath);
  headers.set("host", NotionPath);

  const destinationURL = request.url.replace(BaseUrl, NotionUrl);
  if (method === "GET") {
    const headers = request.headers;
    return fetch(destinationURL, {
      method: request.method,
      headers: headers,
    }).then(rep => {
        const contentType = rep.headers.get("Content-Type")
        if (contentType.startsWith("text/html")) {
          return new HTMLRewriter().on("head", new ElementHandler()).on("body", new ScriptHandler()).transform(rep)
        }
        return rep;
    })
  } else {
    let selfheader = {};
    headers.forEach((v, k) => {
      selfheader[k] = v;
    })
    selfheader = {
      ...selfheader,
      origin: NotionPath,
      referer: NotionPath,
      host: NotionPath,
    }
    const newR = new Request(destinationURL, {
      ...request,
      method: request.method,
      headers: selfheader,
      body: request.body,
    });
    return fetch(newR).then(rep => {
        let selfheader = {};
        rep.headers.forEach((v, k) => {
          selfheader[k] = v.replaceAll(NotionUrl, BaseUrl);
        })
        return new Response(rep.body, {
          status: rep.status,
          statusText: rep.statusText,
          headers: selfheader
        })
    })
  }
}


