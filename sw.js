// Offline cache: serve from cache first, refresh it in the background when online.
const CACHE = "star-checkin-v10";
const FILES = ["./", "index.html", "manifest.webmanifest", "icon-180.png", "icon-512.png", "bunny.png", "audio/alldone0.mp3", "audio/alldone1.mp3", "audio/cn0.mp3", "audio/done0.mp3", "audio/done1.mp3", "audio/done2.mp3", "audio/done3.mp3", "audio/done4.mp3", "audio/done5.mp3", "audio/done6.mp3", "audio/done7.mp3", "audio/grow0.mp3", "audio/hw0.mp3", "audio/item0.mp3", "audio/plan0.mp3", "audio/plan1.mp3", "audio/raz0.mp3", "audio/raz1.mp3", "audio/tap0.mp3", "audio/tap1.mp3", "audio/tap2.mp3", "audio/tap3.mp3", "audio/tap4.mp3", "audio/tutor0.mp3", "audio/tutor1.mp3", "audio/zheng0.mp3", "audio/zheng1.mp3"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(e.request, {ignoreSearch: true});
    const net = fetch(e.request).then(r => { if (r.ok) c.put(e.request, r.clone()); return r; }).catch(() => hit);
    return hit || net;
  }));
});
