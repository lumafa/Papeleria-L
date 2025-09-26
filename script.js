// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
    console.log('¡Script.js se está ejecutando!');
    console.log('El DOM ha sido cargado completamente.');

    // Obtener referencias a todos los botones y enlaces por su ID
    // Estos IDs corresponden a los definidos en el archivo index.html
    const registerBtn = document.getElementById('registerBtn');
    const loginBtn = document.getElementById('loginBtn');
    const categoryBtn = document.getElementById('categoryBtn');
    const aboutUsBtn = document.getElementById('aboutUsBtn');
    const offersBtn = document.getElementById('offersBtn');
    const trackOrderBtn = document.getElementById('trackOrderBtn');
    const easyBuyLink = document.getElementById('easyBuyLink');
    const contactBtn = document.getElementById('contactBtn');

    // Función genérica para manejar clics de botones
    // Esto evita repetir el código para cada botón
    const handleButtonClick = (buttonName) => {
        console.log(`Botón "${buttonName}" clickeado.`);
        // Aquí puedo añadir la lógica específica para cada botón.
        // Por ejemplo, para navegar a otra página:
        // if (buttonName === 'Registrarse') {
        //     window.location.href = 'pagina-registro.html';
        // } else if (buttonName === 'Iniciar Sesión') {
        //     window.location.href = 'pagina-login.html';
        // }
        // O para abrir un modal:
        // if (buttonName === 'Contáctanos') {
        //     alert('Abriendo formulario de contacto...'); // Usar un modal en lugar de alert en un entorno real
        // }
    };

    // Añadir event listeners a cada botón/enlace
    // Se verifica si el elemento existe antes de añadir el listener para evitar errores
    if (registerBtn) {
        registerBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Previene la acción por defecto del enlace (navegar)
            handleButtonClick('Registrarse');
        });
    }

    if (loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            handleButtonClick('Iniciar Sesión');
        });
    }

    if (categoryBtn) {
        categoryBtn.addEventListener('click', (e) => {
            e.preventDefault();
            handleButtonClick('Categoría');
        });
    }

    if (aboutUsBtn) {
        aboutUsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            handleButtonClick('Sobre Nosotros');
        });
    }

    if (offersBtn) {
        offersBtn.addEventListener('click', (e) => {
            e.preventDefault();
            handleButtonClick('Ofertas');
        });
    }

    if (trackOrderBtn) {
        trackOrderBtn.addEventListener('click', (e) => {
            e.preventDefault();
            handleButtonClick('Rastrea tu pedido');
        });
    }

    if (easyBuyLink) {
        easyBuyLink.addEventListener('click', (e) => {
            e.preventDefault();
            handleButtonClick('Compra fácil aquí');
        });
    }

    if (contactBtn) {
        contactBtn.addEventListener('click', (e) => {
            e.preventDefault();
            handleButtonClick('Contáctanos');
        });
    }

    // Puedo añadir más funcionalidades aquí, como:
    // - Animaciones al desplazamiento
    // - Validación de formularios (si los añades)
    // - Carga de contenido dinámico
});
