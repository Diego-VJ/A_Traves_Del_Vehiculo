document.addEventListener('DOMContentLoaded', function(){
    iniciarAPP();
});

function iniciarAPP(){
    navegacionFija();
    scrollNav();
}

function navegacionFija(){
    const barra = document.querySelector('.header');
    const sobreVehiculo = document.querySelector('.sobre-vehiculo');
    const body = document.querySelector('body');

    window.addEventListener('scroll', function() {
        if(sobreVehiculo.getBoundingClientRect().bottom < 0 ) {
            barra.classList.add('fijo');
            body.classList.add('body-scroll');
        } else {
            barra.classList.remove('fijo');
            body.classList.remove('body-scroll');
        }
    })
}

// Creadro del Scroll Nav
function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach( enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
           
            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({ behavior: "smooth" });
        });
    });
}

//Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
}