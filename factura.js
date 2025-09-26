document.addEventListener('DOMContentLoaded', () => {
    console.log('Script facturas.js se está ejecutando.');

    // Aquí puedes añadir interactividad específica para la página de facturas.
    // Por ejemplo, cargar un listado de facturas, filtros, etc.

    // Los botones de navegación inferior ya funcionan con el href directo en HTML.
    const homeNav = document.querySelector('.bottom-nav #homeNav');
    const menuNav = document.querySelector('.bottom-nav a[href="menu.html"]');

    if (homeNav) {
        homeNav.addEventListener('click', () => {
            console.log('Navegando a Inicio desde Facturas.');
        });
    }

    if (menuNav) {
        menuNav.addEventListener('click', () => {
            console.log('Navegando a Menú desde Facturas.');
        });
    }
});
