document.addEventListener('DOMContentLoaded', () => {
    console.log('Script admin_dashboard.js se está ejecutando.');

    const logoutBtn = document.getElementById('logoutBtn');

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            // Aquí iría la lógica para cerrar la sesión del usuario (ej. limpiar tokens)
            alert('Sesión cerrada. Redirigiendo a la página de inicio.');
            console.log('Sesión de administración cerrada.');
            // Redirigir a la página de inicio o a la página de login de administración
            window.location.href = 'index.html'; // O 'administracion.html' si quieres que vuelva al login
        });
    }

    // Funcionalidad para los botones de navegación inferior
    const homeNav = document.querySelector('.bottom-nav a[href="index.html"]');
    const menuNav = document.querySelector('.bottom-nav a[href="menu.html"]');

    if (homeNav) {
        homeNav.addEventListener('click', () => {
            console.log('Navegando a Inicio (Tienda) desde el panel de administración.');
        });
    }

    if (menuNav) {
        menuNav.addEventListener('click', () => {
            console.log('Navegando al Menú Principal (cliente) desde el panel de administración.');
        });
    }

    // No se necesita lógica compleja para los enlaces del grid, ya que son enlaces directos en HTML.
});
