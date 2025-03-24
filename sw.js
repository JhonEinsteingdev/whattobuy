const CACHE_NAME = 'lista-compras-v2';
const ASSETS = [
//   '/',
//   '/index.html',
//   '/styles.css',
//   '/app.js',
//   '/groceries.png'
  '/whattobuy/',
  '/whattobuy/index.html',
  '/whattobuy/styles.css',
  '/whattobuy/app.js',
  '/whattobuy/groceries.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});