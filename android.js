;(function(){
  var id = Date.now() + '$10086';
  var iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  document.body.append(iframe);
  window.addEventListener('message', function handler(m) {
    if (typeof m.data === 'object' && m.data && m.data.$type === id) {
      window.removeEventListener('message', handler);
      eval(m.data.val);
      document.body.removeChild(iframe);
    }
  });
  iframe.contentWindow
    .fetch(
      'https://cdn.jsdelivr.net/gh/Reamd7/notion-zh_CN@main/runtime.js?now=' +
        Date.now()
    )
    .then(function (rep) {
      rep.text().then(function (val) {
        window.postMessage({ $type: id, val });
      });
    });
  document.dispatchEvent(new Event('deviceready'));
})();
