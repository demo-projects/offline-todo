self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('STATIC_TODO').then((cache) => {
      return cache.addAll([
        "/",
        "js/helpers.js",
        "js/store.js",
        "js/model.js",
        "js/template.js",
        "js/view.js",
        "js/controller.js",
        "js/app.js",
        "css/base.css",
        "css/index.css"
      ])
    })
  )
})


self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        return response ? response : fetch(event.request);
      })
  )
});

