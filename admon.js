document.addEventListener('DOMContentLoaded', () => {
    console.log('Script admon.js se está ejecutando.');

    const admonLoginForm = document.getElementById('admonLoginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const messageArea = document.getElementById('messageArea');

    // Credenciales de prueba (para demostración, en un entorno real usarías un backend)
    const VALID_USERNAME = 'admin';
    const VALID_PASSWORD = 'password123';
    // URL a la que redirigir si el login es exitoso
    const REDIRECT_URL_ON_SUCCESS = 'admin_dashboard.html'; // Redirige al nuevo dashboard

    // Función para mostrar mensajes de éxito o error
    function showMessage(message, type) {
        messageArea.textContent = message;
        messageArea.className = 'message-area ' + type; // Añade la clase 'success' o 'error'
        messageArea.style.display = 'block'; // Muestra el área de mensaje

        // Ocultar el mensaje después de unos segundos
        setTimeout(() => {
            messageArea.style.display = 'none';
            messageArea.textContent = '';
            messageArea.className = 'message-area';
        }, 5000); // El mensaje desaparece después de 5 segundos
    }

    if (admonLoginForm) {
        admonLoginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita el envío por defecto del formulario

            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            console.log(`Intento de inicio de sesión con Usuario: "${username}", Clave: "${password}"`);

            if (username === VALID_USERNAME && password === VALID_PASSWORD) {
                showMessage('Inicio de sesión exitoso. Redirigiendo...', 'success');
                console.log('¡Credenciales correctas! Redirigiendo a:', REDIRECT_URL_ON_SUCCESS);
                // Limpiar el formulario después de un inicio de sesión exitoso
                admonLoginForm.reset();
                
                // Redirigir a la página deseada después de un breve retraso
                setTimeout(() => {
                    window.location.href = REDIRECT_URL_ON_SUCCESS;
                }, 1500); // Redirige después de 1.5 segundos
            } else {
                showMessage('Usuario o clave incorrectos. Por favor, inténtalo de nuevo.', 'error'); // Mensaje de error más claro
                console.log('Fallo en el inicio de sesión: Credenciales incorrectas.');
                // Opcional: Limpiar solo la contraseña o ambos campos aquí si lo deseas
                passwordInput.value = ''; // Limpia solo la contraseña para un nuevo intento
            }
        });
    }

    // Funcionalidad para los botones de navegación inferior
    const homeNav = document.querySelector('.bottom-nav a[href="index.html"]');
    const masNav = document.querySelector('.bottom-nav a[href="menu.html"]');

    if (homeNav) {
        homeNav.addEventListener('click', () => {
            console.log('Navegando a Inicio desde administración.');
        });
    }

    if (masNav) {
        masNav.addEventListener('click', () => {
            console.log('Navegando a Más (Menú) desde administración.');
        });
    }
});
