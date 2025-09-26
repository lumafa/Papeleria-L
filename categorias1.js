document.addEventListener('DOMContentLoaded', () => {
    console.log('Script categorias.js se está ejecutando.');

    const viewProductBtns = document.querySelectorAll('.view-product-btn');

    viewProductBtns.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            const card = e.target.closest('.category-card');
            const categoryName = card.querySelector('h2').textContent.trim();

            console.log(`Botón "Ver Producto" clickeado para: ${categoryName}`);

            // Redirigir según el nombre de la categoría
            switch (categoryName) {
                case "Útiles Escolares":
                    window.location.href = "escolares.html";
                    break;
                case "Material de Oficina":
                    window.location.href = "material-de-oficina.html";
                    break;
                case "Productos Esenciales":
                    window.location.href = "productos-esenciales.html";
                    break;
                default:
                    alert(`Categoría no reconocida: ${categoryName}`);
            }
        });
    });

    // Navegación inferior
    const homeNav = document.getElementById('homeNav');
    const notificationsNav = document.getElementById('notificationsNav');
    const moreNav = document.getElementById('moreNav');

    if (homeNav) {
        homeNav.addEventListener('click', () => {
            console.log('Icono "Inicio" clickeado.');
        });
    }

    if (notificationsNav) {
        notificationsNav.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Icono "Notificaciones" clickeado.');
            alert('Abriendo notificaciones. (Funcionalidad por implementar)');
        });
    }

    if (moreNav) {
        moreNav.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Icono "Más" clickeado.');
            alert('Mostrando más opciones. (Funcionalidad por implementar)');
        });
    }
});



