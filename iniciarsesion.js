document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        let errorMessage = '';

        if (email === '') {
            errorMessage += 'El correo electrónico es obligatorio.\n';
        } else if (!validateEmail(email)) {
            errorMessage += 'Correo electrónico inválido.\n';
        }

        if (password === '') {
            errorMessage += 'La contraseña es obligatoria.\n';
        }

        if (errorMessage) {
            alert('Errores:\n' + errorMessage);
            return;
        }

        const usuarioRegistrado = JSON.parse(localStorage.getItem("usuarioRegistrado"));

        if (!usuarioRegistrado) {
            alert("No hay ningún usuario registrado. Por favor regístrate primero.");
            return;
        }

        if (email === usuarioRegistrado.email && password === usuarioRegistrado.password) {
            alert(`¡Bienvenido, ${usuarioRegistrado.name}!`);
            window.location.href = "categoria.html";
        } else {
            alert("por favor, ingresa tu Correo o contraseña incorrectos. Intenta de nuevo.");
        }
        
    });

    
});



 