const CACHE_NAME = 'wiskunde-app-v3';

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // 'reload' = rechtstreeks van de server, niet uit de browseropslag
      return cache.addAll([
        new Request('./', { cache: 'reload' }),
        new Request('./index.html', { cache: 'reload' })
      ]);
    })
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;

  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return; // andere websites (KaTeX, Supabase, ...) niet aanraken

  const isPagina = e.request.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname.endsWith('/');
  const isScript = url.pathname.endsWith('.js');

  // Pagina's en scripts: altijd eerst bij de server navragen of er een nieuwe versie is
  // ('no-cache' slaat de browseropslag van 10 minuten over). Offline: de laatst geladen versie.
  if (isPagina || isScript) {
    e.respondWith(
      fetch(e.request, { cache: 'no-cache' })
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(e.request, copy));
          }
          return response;
        })
        .catch(() => caches.match(e.request).then((r) => r || caches.match(e.request, { ignoreSearch: true })))
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
