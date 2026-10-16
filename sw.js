// Offline cache: serve from cache first, refresh it in the background when online.
const CACHE = "star-checkin-v17";
const FILES = ["./", "index.html", "manifest.webmanifest", "icon-180.png", "icon-512.png", "zheng/", "zheng/bunny.png", "zheng/font.woff2", "zheng/index.html", "zheng/voice/129355c1c859.mp3", "zheng/voice/13a8126c2c57.mp3", "zheng/voice/19b8fd7ad484.mp3", "zheng/voice/238cb6d8dbc0.mp3", "zheng/voice/3769dd88139f.mp3", "zheng/voice/37a2e7aeffd9.mp3", "zheng/voice/3983ab96daf3.mp3", "zheng/voice/3bce0d041634.mp3", "zheng/voice/41a65a54bff0.mp3", "zheng/voice/4c4c90d3e7f0.mp3", "zheng/voice/52a5b8ead3b2.mp3", "zheng/voice/5a0023d6b014.mp3", "zheng/voice/5e3b138d0262.mp3", "zheng/voice/62e26a193fb4.mp3", "zheng/voice/74db3a2d63f1.mp3", "zheng/voice/7ac2d4dcfeb1.mp3", "zheng/voice/7d92cc08008b.mp3", "zheng/voice/7f420d4dffb3.mp3", "zheng/voice/80bce25bdb81.mp3", "zheng/voice/8501447352d1.mp3", "zheng/voice/872d24e04c2e.mp3", "zheng/voice/8b88900b1879.mp3", "zheng/voice/8db7791b83b5.mp3", "zheng/voice/95703777a895.mp3", "zheng/voice/98186b1ff63d.mp3", "zheng/voice/9c3b1deeb26a.mp3", "zheng/voice/a099d8808dcf.mp3", "zheng/voice/a2ad66771145.mp3", "zheng/voice/a2e1ea86a095.mp3", "zheng/voice/ad5ab8dbf53d.mp3", "zheng/voice/b244ce391bff.mp3", "zheng/voice/b6933402837d.mp3", "zheng/voice/bc241a7c2dca.mp3", "zheng/voice/bc7f40f1afd9.mp3", "zheng/voice/c01fc70b4ae9.mp3", "zheng/voice/c991c9c5f001.mp3", "zheng/voice/d70276531842.mp3", "zheng/voice/e32bb357104a.mp3", "zheng/voice/ec9bd2274ea1.mp3", "zheng/voice/f3b1285bbf03.mp3", "zheng/voice/f41cb98d00fd.mp3", "zheng/voice/fd63f8aa1b59.mp3", "zheng/voice/fe3f3706e06a.mp3", "audio/alldone0.mp3", "audio/alldone1.mp3", "audio/cn0.mp3", "audio/done0.mp3", "audio/done1.mp3", "audio/done2.mp3", "audio/done3.mp3", "audio/done4.mp3", "audio/done5.mp3", "audio/done6.mp3", "audio/done7.mp3", "audio/grow0.mp3", "audio/hw0.mp3", "audio/item0.mp3", "audio/plan0.mp3", "audio/plan1.mp3", "audio/raz0.mp3", "audio/raz1.mp3", "audio/tap0.mp3", "audio/tap1.mp3", "audio/tap2.mp3", "audio/tap3.mp3", "audio/tap4.mp3", "audio/tutor0.mp3", "audio/tutor1.mp3", "audio/zheng0.mp3", "audio/zheng1.mp3"];

self.addEventListener("install", e => {
  // The page itself must be cached; the rest (voices, 古筝陪练 files) is best effort, one by one,
  // so one slow file on a weak connection doesn't throw the whole cache away.
  const CORE = ["./", "index.html", "manifest.webmanifest", "icon-180.png"];
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE).then(() => {
    Promise.allSettled(FILES.filter(f => !CORE.includes(f)).map(f => c.match(f).then(hit => hit || c.add(f))));
  })).then(() => self.skipWaiting()));
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
