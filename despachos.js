document.addEventListener('DOMContentLoaded', () => {
    console.log('Script despachos.js se está ejecutando.');

    const dispatchForm = document.getElementById('dispatchForm');

    if (dispatchForm) {
        dispatchForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Evita el envío por defecto del formulario

            // Recopilar los datos del formulario
            const dispatchData = {
                city: document.getElementById('dispatchCity').value,
                invoiceNumber: document.getElementById('dispatchInvoiceNumber').value,
                customerName: document.getElementById('dispatchCustomerName').value,
                deliveryAddress: document.getElementById('dispatchDeliveryAddress').value,
                phone: document.getElementById('dispatchPhone').value,
                departureDate: document.getElementById('dispatchDepartureDate').value,
                estimatedDeliveryDate: document.getElementById('dispatchEstimatedDeliveryDate').value,
                vehicle: document.getElementById('dispatchVehicle').value,
                driverName: document.getElementById('dispatchDriverName').value,
                code: document.getElementById('dispatchCode').value // El código que usará rastrear pedido
            };

            // Validar que el código de pedido no esté vacío
            if (!dispatchData.code) {
                alert('El Código de Pedido es obligatorio para guardar el despacho.');
                return;
            }

            // Obtener despachos existentes o inicializar un objeto vacío
            let allDispatches = JSON.parse(localStorage.getItem('allDispatches')) || {};

            // Guardar el nuevo despacho usando el código como clave
            allDispatches[dispatchData.code] = dispatchData;

            // Guardar el objeto actualizado en localStorage
            localStorage.setItem('allDispatches', JSON.stringify(allDispatches));

            alert('¡Despacho guardado exitosamente!');
            console.log('Despacho guardado:', dispatchData);

            // Opcional: Limpiar el formulario después de guardar
            dispatchForm.reset();
        });
    }

    // Funcionalidad para los botones de navegación inferior
    const homeNav = document.querySelector('.bottom-nav a[href="index.html"]');
    const masNav = document.querySelector('.bottom-nav a[href="menu.html"]');

    if (homeNav) {
        homeNav.addEventListener('click', () => {
            console.log('Navegando a Inicio desde despachos.');
        });
    }

    if (masNav) {
        masNav.addEventListener('click', () => {
            console.log('Navegando a Más (Menú) desde despachos.');
        });
    }
});
