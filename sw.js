// Minimal service worker — just enough for Chrome/Android to treat this
// site as an installable PWA so "Add to Home Screen" uses the manifest icon
// instead of a generic screenshot/placeholder.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

// Pass-through fetch handler (required for Chrome's installability check;
// no offline caching is done here).
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
