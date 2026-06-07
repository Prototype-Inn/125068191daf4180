// =========================================================================
// LATATA PWA SERVICE WORKER (VERSION: 1.0.4 - TECH REBOOT)
// =========================================================================

const CACHE_NAME = 'latata-atomic-v1.0.4';

// Svarbiausi failai, kurie privalo veikti neprisijungus (Offline Mode)
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/favicon.svg',
  '/manifest.json',
  '/offline.html' // PWA atsarginis puslapis dingus ryšiui
];

// 1. DIEGIMAS (INSTALL): Talpinami pagrindiniai atominiai komponentai
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Archyvuojamos gamybinės dedamosios...');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => self.skipWaiting()) // Priverstinai aktyvuoja SW be laukimo
  );
});

// 2. AKTYVAVIMAS (ACTIVATE): Krizinis cache išvalymas (Cache Flush)
// Jei versijos kodas pasikeičia, senas nesaugus cache ištrinamas akimirksniu
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Krizinis saugiklis: valomas senas cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim()) // Perima valdymą visuose atvertuose skirtukuose
  );
});

// 3. UŽKLAUSŲ VALDYMAS (FETCH): Stratefija „Tinklas, tada atsarginis Cache“
// Optimizuota HTTP/3 QUIC protokolui – bandomas greitas tinklas, o jei jo nėra – griebiamas cache
self.addEventListener('fetch', (event) => {
  // Ignoruojame ne GET užklausas (pvz., API POST užklausas į AI modelius)
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Jei atsakas geras, atnaujiname failą cache atmintyje (foniškai)
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // DINGUS RYŠIUI: Bandoma ieškoti faile cache atmintyje
        return caches.match(event.request)
          .then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            // Jei vartotojas bando užkrauti puslapį, kurio nėra cache, gražiname offline.html
            if (event.request.mode === 'navigate') {
              return caches.match('/offline.html');
            }
          });
      })
  );
});
