// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
    console.log('Script offers.js se está ejecutando.');

    // Aquí puedes añadir interactividad específica para la página de ofertas.
    // Por ejemplo, cargar ofertas dinámicamente, filtros, etc.

    // No hay funcionalidad interactiva específica para la tabla simple en la imagen,
    // pero si en el futuro quieres añadir algo, este es el lugar.

    // Ejemplo: Puedes añadir un evento de clic a las filas de la tabla si quisieras
    // que al hacer clic en una oferta, se mostrara un detalle o algo similar.
    const offerRows = document.querySelectorAll('.offers-table-container tbody tr');
    offerRows.forEach(row => {
        row.addEventListener('click', () => {
            const detailText = row.querySelector('td').textContent;
            console.log(`Fila de oferta clickeada: ${detailText}`);
            // alert(`Has seleccionado: ${detailText}`); // Puedes activar una alerta o un modal
        });
    });

    // El botón de inicio ya funciona con el href directo en HTML, no necesita JS aquí.
});
