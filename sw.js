const CACHE_NAME = 'v1_cache_atravezdelvehiculo',
urlsToCache = [
    './',
    'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;1,700&display=swap',
    'video/video.mp4',
    'build/css/app.css',
    'build/js/app.js',
    'build/js/slider.js',
    'build/img/cars.jpg',
    'build/img/bmw.jpg',
    'build/img/mustang.jpg',
    'build/img/ferrari.jpg',
    'build/img/bmw_banner1.jpg',
    'build/img/mustang_banner1.jpg',
    'build/img/ferrari_banner1.jpg',
    'build/img/bmw_banner2.jpg',
    'build/img/mustang_banner2.jpg',
    'build/img/ferrari_banner3.jpg'
]

//Almacena en cache los activos estaticos
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache)
                    .then(() => self.skipWaiting())
            })
        .catch(err => console.log('Fallo registro de cache', err))
    )
})

//Una vez instalado el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener('active', e => {
    const cacheWhitelist = [CACHE_NAME]

    e.waitUntil(
        caches.keys()
            .then(cacheNames => {
                cacheNames.map(cacheName => {
                    //Elimina lo que ya no se necesita en el cache
                    if(cacheWhitelist.indexOf(cacheName) === -1 ){
                        return caches.delete(cacheName)
                    }
                })
            })
        //Le indicamos al SW activar el cache actual
        .then(() => self.clients.claim())
    )
})

//Recuperar todos los recuros del navegador
self.addEventListener('fetch', e => {
    //Responder ya sea con el objeto en caché o continuar y buscar la url real
    e.respondWith(
        caches.match(e.request)
            .then (res => {
                if(res) {
                    //recuperar cache
                    return res
                }


                //Recuperar la peticion del URL
                return fetch(e.request)
            })
    )
})