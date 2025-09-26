document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registerForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const campos = [
            "documentType",
            "documentNumber",
            "name",
            "email",
            "password"
        ];

        const camposCompletos = campos.every(id => {
            const valor = document.getElementById(id).value.trim();
            return valor !== "";
        });

        if (!camposCompletos) {
            alert("Por favor completa todos los campos.");
            return;
        }

        // Guardar datos en localStorage
        const user = {
            email: document.getElementById("email").value.trim(),
            password: document.getElementById("password").value.trim(),
            name: document.getElementById("name").value.trim()
        };

        localStorage.setItem("usuarioRegistrado", JSON.stringify(user));

        alert("Registro exitoso. Ahora puedes iniciar sesión.");
        window.location.href = "iniciarsesion.html";
    });
});