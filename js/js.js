const icono = document.querySelector('.navBarIcono');
const nav = document.querySelector('.navBar');
const carousel = document.querySelector('.carousel');

// Variables

// Eventos
icono.addEventListener('click', abrirNav);
icono.addEventListener('click', rotarIcono);

// Funciones
function abrirNav() {
    if (nav.classList.contains('navBarActivo')) {
        nav.classList.remove('navBarActivo');
        carousel.classList.remove('ocultarCarousel');
    } else {
        nav.classList.add('navBarActivo');
        carousel.classList.add('ocultarCarousel');
    }
}

function rotarIcono() {
    if (icono.classList.contains('navBarIconoRotar')) {
        icono.classList.remove('navBarIconoRotar');
    } else {
        icono.classList.add('navBarIconoRotar');
    }
}
