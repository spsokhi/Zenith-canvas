// Service worker — caches the app shell so the hosted version works offline and
// is installable. (Inactive for the local double-click file, which runs on file://.)
const CACHE = 'zenith-canvas-v1';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon.svg'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith((async () => {
    const cached = await caches.match(req);
    if (cached) return cached;
    try {
      const res = await fetch(req);
      if (res.ok && new URL(req.url).origin === location.origin) {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
      }
      return res;
    } catch {
      if (req.mode === 'navigate') return caches.match('./index.html');
      return Response.error();
    }
  })());
});
