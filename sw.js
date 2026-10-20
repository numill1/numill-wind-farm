/* Numill Wind Farm service worker — generated at build */
const CACHE = "nwf-mvh73x50";
const SHELL = ["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png","./apple-touch-icon.png","./favicon.ico","./icon-maskable-192.png","./icon-maskable-512.png","./numill-official-glow.webp","./assets/numis-coin-DreV0E4R.webp","./assets/numill-official-glow-DFJWBnRC.webp","./assets/numill-official-gold-A25JRv-2.webp","./assets/numill-theme-DnvTohvH.mp3","./assets/numill-mark-transparent-CbPki8RR.png","./assets/index-CFRlc9-t.css","./assets/index-DBAVgDP8.js","./assets/Park3D-CfYOfOiz.js"];
self.addEventListener("install", (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith("nwf-") && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", (e) => {
  const r = e.request; if (r.method !== "GET" || new URL(r.url).origin !== location.origin) return;
  if (r.mode === "navigate") { // network first for the page so updates arrive; offline falls back to the cached shell
    e.respondWith(fetch(r).then((res) => { const cp = res.clone(); caches.open(CACHE).then((c) => c.put("./index.html", cp)); return res; }).catch(() => caches.match("./index.html")));
    return;
  }
  e.respondWith(caches.match(r).then((hit) => hit || fetch(r).then((res) => { if (res.ok) { const cp = res.clone(); caches.open(CACHE).then((c) => c.put(r, cp)); } return res; })));
});
