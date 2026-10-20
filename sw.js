// Offline cache: everything is served from the iPad's saved copy, so the app opens without waiting for the network.
// Change CACHE on every update. Files whose hash didn't change are copied over from the old cache instead of downloaded again.
const CACHE = "star-checkin-v42";
const FILES = {"./": "02034a8c9e", "index.html": "02034a8c9e", "manifest.webmanifest": "ad2ca9ad2f", "icon-180.png": "3118158317", "icon-512.png": "2be0853e93", "zheng/": "0d98104fe4", "zheng/font.woff2": "d7ad1cb827", "zheng/home_music.m4a": "13549c9871", "zheng/index.html": "0d98104fe4", "zheng/ip/band_anim.webp": "fbbde0ddd6", "zheng/ip/cat_anim.webp": "de549e6186", "zheng/ip/cat_calm.webp": "31e52e0e1b", "zheng/ip/cat_great.webp": "ef7ea79848", "zheng/ip/cat_rest.webp": "3ce607c387", "zheng/ip/cat_start.webp": "61cce72c4f", "zheng/ip/dog_anim.webp": "98cc169ac2", "zheng/ip/dog_calm.webp": "c192d99469", "zheng/ip/dog_great.webp": "39246df238", "zheng/ip/dog_rest.webp": "c32a799eba", "zheng/ip/dog_start.webp": "72186b0fb8", "zheng/ip/frog_anim.webp": "f9166c42f3", "zheng/ip/frog_calm.webp": "5c58e4a6fa", "zheng/ip/frog_great.webp": "eaf7d1cee3", "zheng/ip/frog_rest.webp": "265de0b105", "zheng/ip/frog_start.webp": "565df9c34a", "zheng/ip/lion_anim.webp": "f1d1ce6eeb", "zheng/ip/lion_calm.webp": "55b368a801", "zheng/ip/lion_great.webp": "1608b18a68", "zheng/ip/lion_rest.webp": "b358c92c3f", "zheng/ip/lion_start.webp": "5705cc0c8b", "zheng/ip/rabbit_anim.webp": "d7cd27d9e2", "zheng/ip/rabbit_calm.webp": "8e077351e6", "zheng/ip/rabbit_great.webp": "66e3849cb3", "zheng/ip/rabbit_rest.webp": "a2b19377fc", "zheng/ip/rabbit_start.webp": "b2cf256a94", "zheng/ip/sheep_anim.webp": "b5bb4784a3", "zheng/ip/sheep_calm.webp": "e16f06cd57", "zheng/ip/sheep_great.webp": "c9078c3517", "zheng/ip/sheep_rest.webp": "151cc40ad0", "zheng/ip/sheep_start.webp": "c9d9407d99", "zheng/ip/tiger_anim.webp": "3283da4ae9", "zheng/ip/tiger_calm.webp": "b9df7b154c", "zheng/ip/tiger_great.webp": "c77709bb49", "zheng/ip/tiger_rest.webp": "c517d7842d", "zheng/ip/tiger_start.webp": "de8e4aa524", "zheng/park_bg.jpg": "f7172bb948", "zheng/park_sign.webp": "b34500c458", "zheng/voice/012f1d746586.mp3": "14ee9b97bf", "zheng/voice/05bd1abc550e.mp3": "1cbbcd4aab", "zheng/voice/0670730166ce.mp3": "99dd76821d", "zheng/voice/0ee2d81a8365.mp3": "6c299ad5fc", "zheng/voice/11b7846c8184.mp3": "939f78399f", "zheng/voice/13a8126c2c57.mp3": "efa814af89", "zheng/voice/19b8fd7ad484.mp3": "f14b2b2a0c", "zheng/voice/19fd67f87e49.mp3": "46be45cf07", "zheng/voice/1c57b33a977f.mp3": "bce68ef236", "zheng/voice/21c925aac48a.mp3": "77a840a0e9", "zheng/voice/2333663b9969.mp3": "71ccb1c21f", "zheng/voice/238cb6d8dbc0.mp3": "546fd19eb9", "zheng/voice/24ee0207278c.mp3": "d6f2b06190", "zheng/voice/2b2a510a4f72.mp3": "79951d02f2", "zheng/voice/2d238ebd74b6.mp3": "2f790d1854", "zheng/voice/2d3ac51560b5.mp3": "1b37e30551", "zheng/voice/2f497a67efcf.mp3": "75cd961161", "zheng/voice/30aa29a62ddf.mp3": "3f7c1f21e1", "zheng/voice/32106e274dd2.mp3": "ba7f0ab0ae", "zheng/voice/3769dd88139f.mp3": "c761cdffbd", "zheng/voice/37a2e7aeffd9.mp3": "787e174619", "zheng/voice/386fe4be7eac.mp3": "d7ec5e8044", "zheng/voice/3983ab96daf3.mp3": "25efe671bc", "zheng/voice/3bce0d041634.mp3": "7868c62f2c", "zheng/voice/3e6c6ae0f0b2.mp3": "18f8f74368", "zheng/voice/41a65a54bff0.mp3": "9f8cdbe9a6", "zheng/voice/44559cdd3519.mp3": "3891c8d4dc", "zheng/voice/478c79f320f2.mp3": "9ce535b539", "zheng/voice/483776fb16f3.mp3": "ddf0fb3c4a", "zheng/voice/4c4c90d3e7f0.mp3": "ccf7175043", "zheng/voice/4cb9a5b216e2.mp3": "e5bd148794", "zheng/voice/50a2aed2bfe6.mp3": "5014362b93", "zheng/voice/52a5b8ead3b2.mp3": "a9d102ef29", "zheng/voice/5315d4ed5a2d.mp3": "8fb16bfc3b", "zheng/voice/544f1d66e464.mp3": "a9ccdf97ef", "zheng/voice/55a9323eb1d9.mp3": "f0a235e671", "zheng/voice/563adbdcd80e.mp3": "25f613f2e8", "zheng/voice/5818a55723d3.mp3": "2d9f425d54", "zheng/voice/5a0023d6b014.mp3": "ee1245802f", "zheng/voice/5a6ab9b713b9.mp3": "817c037688", "zheng/voice/5a716e38ec41.mp3": "f881425c6e", "zheng/voice/5aa2a8057c3d.mp3": "7ba220ceeb", "zheng/voice/5de9cb0e72d5.mp3": "16befdbee4", "zheng/voice/5e3b138d0262.mp3": "517a72873c", "zheng/voice/5f2a53b78abb.mp3": "678c887eb9", "zheng/voice/647eb757b21f.mp3": "73752cbb1b", "zheng/voice/6493943c88be.mp3": "26aa1c63b9", "zheng/voice/67cee9c7d5b6.mp3": "e6b5dc9ae7", "zheng/voice/6ec59fd5a62a.mp3": "542d39d708", "zheng/voice/74db3a2d63f1.mp3": "6700393132", "zheng/voice/7a1e5a4dbbad.mp3": "48ccb8e443", "zheng/voice/7ac2d4dcfeb1.mp3": "dd5c7295d3", "zheng/voice/7d92cc08008b.mp3": "1b306755bc", "zheng/voice/7e56a3098a16.mp3": "cbfbecf472", "zheng/voice/7f420d4dffb3.mp3": "40af524761", "zheng/voice/7fe82af64376.mp3": "56afe12321", "zheng/voice/80bce25bdb81.mp3": "e76434e276", "zheng/voice/84df6e87f252.mp3": "4762ceef25", "zheng/voice/8501447352d1.mp3": "302a8c81c7", "zheng/voice/872d24e04c2e.mp3": "b27b0a425b", "zheng/voice/8b88900b1879.mp3": "58fd75e9fb", "zheng/voice/8b94af0a449e.mp3": "0e1f66cc08", "zheng/voice/8db7791b83b5.mp3": "80138797bd", "zheng/voice/95703777a895.mp3": "1737c31872", "zheng/voice/977458baac35.mp3": "0d2e23dc84", "zheng/voice/980772999fce.mp3": "feaa672e86", "zheng/voice/98186b1ff63d.mp3": "e8074b6685", "zheng/voice/9a5d3b26974a.mp3": "15cc4b21e1", "zheng/voice/9c3b1deeb26a.mp3": "03aaecfa49", "zheng/voice/a2ad66771145.mp3": "b76d530581", "zheng/voice/a2e1ea86a095.mp3": "62b4a445a3", "zheng/voice/ad5ab8dbf53d.mp3": "2f0bacfc5a", "zheng/voice/adad958a1614.mp3": "e4ede53735", "zheng/voice/b244ce391bff.mp3": "d0503d7bf6", "zheng/voice/b28e3b3d68f3.mp3": "705ede7833", "zheng/voice/b4c893c4773f.mp3": "5caf389e2f", "zheng/voice/b6933402837d.mp3": "572c72172c", "zheng/voice/b6a8cfb63d1a.mp3": "fffbbea5dc", "zheng/voice/bc241a7c2dca.mp3": "10e3b4f670", "zheng/voice/bc7f40f1afd9.mp3": "e9c9198404", "zheng/voice/bcc5606428f7.mp3": "9c32fc49e9", "zheng/voice/bd38dd8e01e2.mp3": "d29c29437e", "zheng/voice/c00c86796179.mp3": "b7fac7ccfe", "zheng/voice/c01fc70b4ae9.mp3": "80be0b0964", "zheng/voice/c07ed4ea6b7b.mp3": "1048d4f020", "zheng/voice/c102558eef2a.mp3": "f3f1d2fc57", "zheng/voice/c57f18a07571.mp3": "b2c55b6b5b", "zheng/voice/c991c9c5f001.mp3": "caba4daf50", "zheng/voice/c9b8ccdb74e2.mp3": "6038d3b1a8", "zheng/voice/ca8b4026b2a9.mp3": "f083683ccc", "zheng/voice/d0c48b8bf140.mp3": "d3627fd054", "zheng/voice/d2e3ed1caf6f.mp3": "ab4d24037e", "zheng/voice/d48d3b932999.mp3": "f0723da76d", "zheng/voice/d517968f6bc8.mp3": "0a09e4d633", "zheng/voice/d6dc29cf8b21.mp3": "f30614816b", "zheng/voice/d70276531842.mp3": "16371ae152", "zheng/voice/dcae2124b43b.mp3": "b93a39ee93", "zheng/voice/def0f897250b.mp3": "95d1c1429b", "zheng/voice/df8c5561ef63.mp3": "9ee17c8a89", "zheng/voice/e32bb357104a.mp3": "b130bbb7b9", "zheng/voice/e5eebe994434.mp3": "d1ec0ac4d5", "zheng/voice/e973b1fed146.mp3": "af65831b08", "zheng/voice/ec9bd2274ea1.mp3": "1fd8482d1c", "zheng/voice/f41cb98d00fd.mp3": "217338363b", "zheng/voice/f6c0b5ab4275.mp3": "69c0ec9cef", "zheng/voice/f7f10f0555a0.mp3": "9ef4d17b07", "zheng/voice/fba0218b5f1a.mp3": "1b402a46d1", "zheng/voice/fcdac721754f.mp3": "64bfef936c", "zheng/voice/fd63f8aa1b59.mp3": "714640cc64", "zheng/voice/fe3f3706e06a.mp3": "8f8161c819", "zheng/voice/ffad3d10420e.mp3": "fa23d40cdb", "audio/alldone0.mp3": "086185f427", "audio/alldone1.mp3": "d751b721df", "audio/cn0.mp3": "41a40faf73", "audio/done0.mp3": "baf87e5d6f", "audio/done1.mp3": "d95e06d824", "audio/done2.mp3": "a5959f73f3", "audio/done3.mp3": "4ecacb3bce", "audio/done4.mp3": "ed8406d4b8", "audio/done5.mp3": "3cf4dd9396", "audio/done6.mp3": "efc78b347b", "audio/done7.mp3": "e51082eb83", "audio/grow0.mp3": "f77ce7f3db", "audio/hw0.mp3": "906991fde7", "audio/item0.mp3": "3d1f283d64", "audio/plan0.mp3": "a01688902b", "audio/plan1.mp3": "29787bd387", "audio/raz0.mp3": "88b0c935de", "audio/raz1.mp3": "af41cffe34", "audio/tap0.mp3": "34b36d09f9", "audio/tap1.mp3": "9dccc5caf7", "audio/tap2.mp3": "37e1026cdf", "audio/tap3.mp3": "fddaa2508b", "audio/tap4.mp3": "d8e81b9e57", "audio/tutor0.mp3": "16ad3d49fa", "audio/tutor1.mp3": "61ef0d573c", "audio/zheng0.mp3": "9c9e49061d", "audio/zheng1.mp3": "5a563bcc3f"};
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
