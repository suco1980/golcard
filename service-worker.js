<<<<<<< HEAD
// self.addEventListener("install", event => {
//   console.log("Service Worker instalado");
// });

// self.addEventListener("activate", event => {
//   console.log("Service Worker activado");
// });
=======

>>>>>>> 86b7a48436d1dcf39dba7c3129e36d24d0ef715e
const CACHE_NAME = "khauling-v1";
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("activate", event => {
  console.log("Service Worker activado");
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});