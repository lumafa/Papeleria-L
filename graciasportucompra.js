document.addEventListener('DOMContentLoaded', () => {
    console.log('Script graciasportucompra.js se está ejecutando.');

    // Funcionalidad para los botones de navegación inferior
    const homeNav = document.querySelector('.bottom-nav a[href="index.html"]');
    const categoriesNav = document.querySelector('.bottom-nav a[href="categories.html"]');

    if (homeNav) {
        homeNav.addEventListener('click', () => {
            console.log('Navegando a Inicio desde la página de agradecimiento.');
        });
    }

    if (categoriesNav) {
        categoriesNav.addEventListener('click', () => {
            console.log('Navegando a Comprar Más (Categorías) desde la página de agradecimiento.');
        });
    }

    // Opcional: Podrías añadir un temporizador para redirigir automáticamente después de unos segundos
    // setTimeout(() => {
    //     window.location.href = 'index.html'; // Redirige a la página de inicio
    // }, 10000); // 10 segundos
});
