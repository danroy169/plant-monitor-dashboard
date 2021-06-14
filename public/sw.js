self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('static').then(cache => {
            return cache.addAll(['./', './style/style.css', './images/192.png', './js/sse-setup.js', './js/get-metric.js', './js/render.js', './js/const.js', './manifest.json'])
        })
    )
})

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request)
        })
    )
})