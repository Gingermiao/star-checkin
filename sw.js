// Offline cache: everything is served from the iPad's saved copy, so the app opens without waiting for the network.
// Change CACHE on every update. Files whose hash didn't change are copied over from the old cache instead of downloaded again.
const CACHE = "star-checkin-v21";
const FILES = {"./": "8661774b2d", "index.html": "8661774b2d", "manifest.webmanifest": "ad2ca9ad2f", "icon-180.png": "3118158317", "icon-512.png": "2be0853e93", "zheng/": "36da0d64d8", "zheng/bunny.png": "ea81ea3b5f", "zheng/font.woff2": "857dcdde18", "zheng/index.html": "36da0d64d8", "zheng/pals/cat.webp": "779ec9cd4d", "zheng/pals/dog.webp": "6a6164fc37", "zheng/pals/frog.webp": "7942c830c6", "zheng/pals/lion.webp": "5195ae8041", "zheng/pals/mouse.webp": "ba529fb0af", "zheng/pals/rabbit.webp": "b96a0bed77", "zheng/pals/tiger.webp": "9078df4ed2", "zheng/voice/13a8126c2c57.mp3": "efa814af89", "zheng/voice/19b8fd7ad484.mp3": "f14b2b2a0c", "zheng/voice/1c57b33a977f.mp3": "bce68ef236", "zheng/voice/238cb6d8dbc0.mp3": "546fd19eb9", "zheng/voice/2b2a510a4f72.mp3": "79951d02f2", "zheng/voice/3769dd88139f.mp3": "c761cdffbd", "zheng/voice/37a2e7aeffd9.mp3": "787e174619", "zheng/voice/386fe4be7eac.mp3": "d7ec5e8044", "zheng/voice/3983ab96daf3.mp3": "25efe671bc", "zheng/voice/3bce0d041634.mp3": "7868c62f2c", "zheng/voice/41a65a54bff0.mp3": "9f8cdbe9a6", "zheng/voice/478c79f320f2.mp3": "9ce535b539", "zheng/voice/483776fb16f3.mp3": "ddf0fb3c4a", "zheng/voice/4c4c90d3e7f0.mp3": "ccf7175043", "zheng/voice/52a5b8ead3b2.mp3": "a9d102ef29", "zheng/voice/5a0023d6b014.mp3": "ee1245802f", "zheng/voice/5a716e38ec41.mp3": "f881425c6e", "zheng/voice/5e3b138d0262.mp3": "517a72873c", "zheng/voice/62e26a193fb4.mp3": "08f720e888", "zheng/voice/74db3a2d63f1.mp3": "6700393132", "zheng/voice/7ac2d4dcfeb1.mp3": "dd5c7295d3", "zheng/voice/7d92cc08008b.mp3": "1b306755bc", "zheng/voice/7e56a3098a16.mp3": "cbfbecf472", "zheng/voice/7f420d4dffb3.mp3": "40af524761", "zheng/voice/80bce25bdb81.mp3": "e76434e276", "zheng/voice/8501447352d1.mp3": "302a8c81c7", "zheng/voice/872d24e04c2e.mp3": "b27b0a425b", "zheng/voice/8b88900b1879.mp3": "58fd75e9fb", "zheng/voice/8db7791b83b5.mp3": "80138797bd", "zheng/voice/95703777a895.mp3": "1737c31872", "zheng/voice/98186b1ff63d.mp3": "e8074b6685", "zheng/voice/9c3b1deeb26a.mp3": "03aaecfa49", "zheng/voice/a2ad66771145.mp3": "b76d530581", "zheng/voice/a2e1ea86a095.mp3": "62b4a445a3", "zheng/voice/ad5ab8dbf53d.mp3": "2f0bacfc5a", "zheng/voice/b244ce391bff.mp3": "d0503d7bf6", "zheng/voice/b6933402837d.mp3": "572c72172c", "zheng/voice/b6a8cfb63d1a.mp3": "fffbbea5dc", "zheng/voice/bc241a7c2dca.mp3": "10e3b4f670", "zheng/voice/bc7f40f1afd9.mp3": "e9c9198404", "zheng/voice/c00c86796179.mp3": "b7fac7ccfe", "zheng/voice/c01fc70b4ae9.mp3": "80be0b0964", "zheng/voice/c991c9c5f001.mp3": "caba4daf50", "zheng/voice/d2e3ed1caf6f.mp3": "ab4d24037e", "zheng/voice/d70276531842.mp3": "16371ae152", "zheng/voice/e32bb357104a.mp3": "b130bbb7b9", "zheng/voice/ec9bd2274ea1.mp3": "1fd8482d1c", "zheng/voice/f41cb98d00fd.mp3": "217338363b", "zheng/voice/f7f10f0555a0.mp3": "9ef4d17b07", "zheng/voice/fd63f8aa1b59.mp3": "714640cc64", "zheng/voice/fe3f3706e06a.mp3": "8f8161c819", "audio/alldone0.mp3": "086185f427", "audio/alldone1.mp3": "d751b721df", "audio/cn0.mp3": "41a40faf73", "audio/done0.mp3": "baf87e5d6f", "audio/done1.mp3": "d95e06d824", "audio/done2.mp3": "a5959f73f3", "audio/done3.mp3": "4ecacb3bce", "audio/done4.mp3": "ed8406d4b8", "audio/done5.mp3": "3cf4dd9396", "audio/done6.mp3": "efc78b347b", "audio/done7.mp3": "e51082eb83", "audio/grow0.mp3": "f77ce7f3db", "audio/hw0.mp3": "906991fde7", "audio/item0.mp3": "3d1f283d64", "audio/plan0.mp3": "a01688902b", "audio/plan1.mp3": "29787bd387", "audio/raz0.mp3": "88b0c935de", "audio/raz1.mp3": "af41cffe34", "audio/tap0.mp3": "34b36d09f9", "audio/tap1.mp3": "9dccc5caf7", "audio/tap2.mp3": "37e1026cdf", "audio/tap3.mp3": "fddaa2508b", "audio/tap4.mp3": "d8e81b9e57", "audio/tutor0.mp3": "16ad3d49fa", "audio/tutor1.mp3": "61ef0d573c", "audio/zheng0.mp3": "9c9e49061d", "audio/zheng1.mp3": "5a563bcc3f"};
const CORE = ["./", "index.html", "manifest.webmanifest", "icon-180.png"];
const HASHES = "__hashes__";

// Download what the new cache is still missing, one file at a time (a weak connection stays free for the page).
let filling = null;
function fill() {
  return filling || (filling = (async () => {
    const c = await caches.open(CACHE);
    for (const f of Object.keys(FILES)) {
      if (await c.match(f)) continue;
      try { const r = await fetch(new Request(f, {cache: "reload"})); if (r.ok) await c.put(f, r); } catch (x) {}
    }
  })().finally(() => { filling = null; }));
}

self.addEventListener("install", e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    // reuse unchanged files from older versions
    for (const k of await caches.keys()) {
      if (k === CACHE) continue;
      const old = await caches.open(k), h = await old.match(HASHES);
      const oh = h ? await h.json().catch(() => ({})) : {};
      for (const f of Object.keys(FILES)) {
        if (oh[f] !== FILES[f] || await c.match(f)) continue;
        const r = await old.match(f); if (r) await c.put(f, r);
      }
    }
    await c.put(HASHES, new Response(JSON.stringify(FILES)));
    // the page itself must be there before the new version takes over
    for (const f of CORE) if (!await c.match(f)) {
      const r = await fetch(new Request(f, {cache: "reload"})); if (!r.ok) throw new Error(f); await c.put(f, r);
    }
    self.skipWaiting();
  })());
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  if (e.request.mode === "navigate") e.waitUntil(fill());
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(e.request, {ignoreSearch: true});
    if (hit) return hit;
    const r = await fetch(e.request);
    if (r.ok && new URL(e.request.url).origin === location.origin) c.put(e.request, r.clone());
    return r;
  }));
});
