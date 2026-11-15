self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('wiskunde-app-v1').then((cache) => {
      return cache.addAll([
        './',
        './index.html'
        // Voeg hier eventueel andere belangrijke bestanden toe
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});