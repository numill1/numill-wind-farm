/* Numill Wind Farm service worker — generated at build */
const CACHE = "nwf-mvjy9gsd";
const SHELL = ["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png","./apple-touch-icon.png","./favicon.ico","./icon-maskable-192.png","./icon-maskable-512.png","./numill-glow-512-black.webp","./assets/numill-glow-oficial-fundo-preto-640-OxrsUiUb.png","./assets/numis-coin-icon-ixwtGgPl.png","./assets/numill-official-theme-TiLIOqFa.mp3","./assets/inter-latin-400-normal-C38fXH4l.woff2","./assets/inter-latin-500-normal-Cerq10X2.woff2","./assets/outfit-latin-500-normal-DKnIMDSk.woff2","./assets/outfit-latin-700-normal-Cu9v6i1X.woff2","./assets/outfit-latin-600-normal-B7SfZ07L.woff2","./assets/outfit-latin-800-normal-CQna6-G7.woff2","./assets/inter-latin-700-normal-Yt3aPRUw.woff2","./assets/inter-latin-600-normal-LgqL8muc.woff2","./assets/inter-latin-400-normal-CyCys3Eg.woff","./assets/outfit-latin-500-normal-ClnHRwRh.woff","./assets/inter-latin-500-normal-BL9OpVg8.woff","./assets/outfit-latin-700-normal-D4itBLBr.woff","./assets/outfit-latin-600-normal-BEfTtDA7.woff","./assets/inter-latin-700-normal-BLAVimhd.woff","./assets/inter-latin-600-normal-CiBQ2DWP.woff","./assets/outfit-latin-800-normal-BRHLSPcU.woff","./assets/puzzle-numi-turbine-4WCOrvg3.png","./assets/index-DuOUG1JO.css","./assets/index-D22EnIxk.js","./assets/Park3D-CzFz7mvC.js","./assets/index-B206gAl4.js"];
self.addEventListener("install", (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith("nwf-") && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", (e) => {
  const r = e.request; if (r.method !== "GET" || new URL(r.url).origin !== location.origin) return;
  if (r.mode === "navigate") { // network first for the page so updates arrive; offline falls back to the cached shell
    e.respondWith(fetch(r).then((res) => { const cp = res.clone(); caches.open(CACHE).then((c) => c.put(r, cp)); return res; }).catch(() => caches.match(r).then((hit) => hit || caches.match("./index.html"))));
    return;
  }
  e.respondWith(caches.match(r).then((hit) => hit || fetch(r).then((res) => { if (res.ok) { const cp = res.clone(); caches.open(CACHE).then((c) => c.put(r, cp)); } return res; })));
});
