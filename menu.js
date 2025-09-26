document.addEventListener('DOMContentLoaded', () => {
    console.log('Script menu.js se está ejecutando.');

    // Obtener referencias a los elementos del menú (ya no necesitan event listeners para redirección)
    const menuItems = document.querySelectorAll('.menu-item');
    const endProcessBtn = document.getElementById('endProcessBtn');

    // Aquí ya no necesitamos un event listener para cada menu-item,
    // ya que la redirección se manejará directamente por el atributo href en el HTML.
    // Sin embargo, podemos dejar un console.log para saber si se hizo clic.
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // No se usa preventDefault() para permitir la navegación del href
            const itemName = item.querySelector('span').textContent;
            console.log(`Clic en el elemento del menú: ${itemName}`);
        });
    });


    // Event listener para el botón "Finalizar proceso"
    if (endProcessBtn) {
        endProcessBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Botón "Finalizar proceso" clickeado.');
            // Aquí puedes añadir la lógica para cerrar sesión, redirigir a una página de confirmación, etc.
            alert('Proceso finalizado. (Funcionalidad por implementar)');
        });
    }

    // El botón de inicio ya funciona con el href directo en HTML, no necesita JS aquí.
    const homeNav = document.getElementById('homeNav');
    if (homeNav) {
        homeNav.addEventListener('click', () => {
            console.log('Navegando a Inicio desde el menú.');
        });
    }

});
