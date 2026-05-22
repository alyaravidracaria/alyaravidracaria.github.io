const CACHE_NAME = "alyara-site-v1.0";
const CORE_ASSETS = [
    "/",
    "/index.html",
    "/styles.css?v=1.0",
    "/script.js?v=1.0",
    "/robots.txt",
    "/sitemap.xml",
    "/image/fachada-de-ripado.webp",
    "/image/guarda-corpo-em-vidro-laminado.webp",
    "/image/box-de-correr-ate-o-teto.webp",
    "/image/porta-de-entrada-aluminio-ripado.webp",
    "/image/box-de-correr-2-folhas-ate-o-teto.webp",
    "/image/fachada-em-acm-azul-e-amarelo-vibrante.webp",
    "/image/porta-integrada-linha-gold-guarda-corpo-de-vidro.webp",
    "/image/projeto-completo-portas-janelas-guarda-corpo-e-mais.webp",
    "/image/guarda-corpo-protecao-de-escada.webp",
    "/image/box-de-correr.webp",
    "/image/janela-de-correr.webp",
    "/image/marquise-de-vidro.webp",
    "/image/porta-lateral.webp",
    "/image/marquise-de-vidro-1.webp",
    "/image/box-de-3-folhas.webp",
];

self.addEventListener("install", (event) => {
    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)),
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) =>
            Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }

                    return Promise.resolve();
                }),
            ),
        ).then(() => self.clients.claim()),
    );
});

self.addEventListener("fetch", (event) => {
    const { request } = event;
    const url = new URL(request.url);

    if (request.method !== "GET" || url.origin !== self.location.origin) {
        return;
    }

    if (request.mode === "navigate") {
        event.respondWith(
            fetch(request)
                .then((response) => {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put("/index.html", responseClone));
                    return response;
                })
                .catch(() => caches.match("/index.html")),
        );
        return;
    }

    event.respondWith(
        caches.match(request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }

            return fetch(request).then((networkResponse) => {
                if (!networkResponse || networkResponse.status !== 200) {
                    return networkResponse;
                }

                const responseClone = networkResponse.clone();
                caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));

                return networkResponse;
            });
        }),
    );
});
