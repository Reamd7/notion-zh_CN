if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("https://notion-sw.j4owff5zgdjj4zuxzw1l.workers.dev/sw.js")
    .then(function (registration) {
      console.log(registration);
      console.log(navigator.serviceWorker.controller.state);
      if (navigator.serviceWorker.controller) {
      } else {
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
