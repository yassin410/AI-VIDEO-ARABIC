const CACHE_VERSION = 'ai-academy-v1';

self.addEventListener('install', function (event) {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

// Keep normal network behavior; this listener makes the app PWA-ready
// without caching or altering Supabase/video requests.
self.addEventListener('fetch', function () {});
