var globalself = self;
globalself.addEventListener("install", function () {
  globalself.skipWaiting();
});
globalself.addEventListener("activate", function (event) {
  event.waitUntil(globalself.clients.claim());
});
// Request handling
var BaseUrl = "自定义cloudflare worker 域名";
var NotionUrl = "www.notion.so";
var BasePath = "https://" + BaseUrl;
var NotionPath = "https://" + NotionUrl;
async function handleRequest(event) {
  const request = event.request;
  const method = request.method;
  const headers = new Headers(request.headers);
  headers.set("origin", NotionPath);
  headers.set("referer", NotionPath);
  headers.set("host", NotionPath);
  headers.set("Access-Control-Allow-Origin", "*")

  const destinationURL = request.url.replace(BaseUrl, NotionUrl);
  if (method === "GET") {
    if (destinationURL === `${NotionUrl}/sw.js`) {
      // return new Response(```
      //   console.log(1)
      // ```)
    }
    const headers = request.headers;
    return event.respondWith(
      fetch(destinationURL, {
        method: request.method,
        headers: headers
      }).then((rep) => {
        const contentType = rep.headers.get("Content-Type");
        //   if (contentType.startsWith("text/html")) {
        //     return new HTMLRewriter().on("head", new ElementHandler()).on("body", new ScriptHandler()).transform(rep)
        //   }
        return rep;
      })
    );
  } else {
    let selfheader = {};
    headers.forEach((v, k) => {
      selfheader[k] = v;
    });
    selfheader = {
      ...selfheader,
      origin: NotionPath,
      referer: NotionPath,
      host: NotionPath,
      "Access-Control-Allow-Origin": "*"
    };
    const newR = new Request(destinationURL, {
      ...request,
      method: request.method,
      headers: selfheader,
      body: request.body
    });
    return event.respondWith(
      fetch(newR).then((rep) => {
        let selfheader = {
            "Access-Control-Allow-Origin": "*"
        };
        rep.headers.forEach((v, k) => {
          selfheader[k] = v.replaceAll(NotionUrl, BaseUrl);
        });
        return new Response(rep.body, {
          status: rep.status,
          statusText: rep.statusText,
          headers: selfheader
        });
      })
    );
  }
}
globalself.addEventListener("fetch", function FetchHandler(event) {
  console.log(event.request.url);
  var Request = event.request;
  handleRequest(event);
});
