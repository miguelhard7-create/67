const CACHE_NAME = '67-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
  // Removidos os ícones locais, pois usamos o link da web no manifest
];

// Instala o Service Worker e guarda os arquivos no cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Responde as requisições usando o cache
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
