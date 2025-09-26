document.addEventListener('DOMContentLoaded', () => {
    // Código JavaScript para la página "Sobre Nosotros"
    console.log('La página "Sobre Nosotros" ha cargado completamente.');

    // Aquí puedes añadir interactividad específica para esta página si la necesitas.
    // Por ejemplo, si tuvieras una galería de imágenes, un formulario de contacto dinámico, etc.

    // Ejemplo: Un evento para el botón de WhatsApp (aunque es un enlace directo en HTML)
    const whatsappButton = document.querySelector('.whatsapp-btn');
    if (whatsappButton) {
        whatsappButton.addEventListener('click', () => {
            console.log('Se hizo clic en el botón de WhatsApp.');
            // Podrías añadir lógica adicional aquí, como un seguimiento de Google Analytics
        });
    }
});