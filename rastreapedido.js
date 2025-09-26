// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
    console.log('Script track.js se está ejecutando.');

    const trackForm = document.querySelector('.track-form');
    const codeInput = document.getElementById('code');
    const cityInput = document.getElementById('city');
    const deliveryAddressInput = document.getElementById('deliveryAddress');
    const phoneInput = document.getElementById('phone');
    const departureDateInput = document.getElementById('departureDate');
    const deliveryDateInput = document.getElementById('deliveryDate');
    const arrivalTimeInput = document.getElementById('arrivalTime');
    const driverNameInput = document.getElementById('driverName');
    const plateNumberInput = document.getElementById('plateNumber');

    // Datos simulados de pedidos (en un entorno real, esto vendría de un servidor/DB)
    const simulatedOrders = {
        'ABC12345': {
            city: 'Tuluá',
            deliveryAddress: 'Calle 25 #10-15',
            phone: '3333333333',
            departureDate: '2025-06-18',
            deliveryDate: '2025-06-21',
            arrivalTime: '14:00',
            driverName: 'Juan Pérez',
            plateNumber: 'XYZ-789'
        },
        'DEF67890': {
            city: 'Cali',
            deliveryAddress: 'Avenida Siempre Viva #742',
            phone: '3101234567',
            departureDate: '2025-06-19',
            deliveryDate: '2025-06-22',
            arrivalTime: '10:30',
            driverName: 'María García',
            plateNumber: 'ABC-123'
        }
        // Puedes añadir más pedidos simulados aquí
    };

    if (trackForm) {
        trackForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita el envío por defecto del formulario

            const enteredCode = codeInput.value.trim().toUpperCase(); // Obtener el código y limpiarlo

            if (enteredCode === '') {
                alert('Por favor, ingresa un código de pedido.');
                // Limpiar campos si el código está vacío
                cityInput.value = '';
                deliveryAddressInput.value = '';
                phoneInput.value = '';
                departureDateInput.value = '';
                deliveryDateInput.value = '';
                arrivalTimeInput.value = '';
                driverNameInput.value = '';
                plateNumberInput.value = '';
                return;
            }

            const order = simulatedOrders[enteredCode];

            if (order) {
                // Rellenar los campos con los datos del pedido
                cityInput.value = order.city;
                deliveryAddressInput.value = order.deliveryAddress;
                phoneInput.value = order.phone;
                departureDateInput.value = order.departureDate;
                deliveryDateInput.value = order.deliveryDate;
                arrivalTimeInput.value = order.arrivalTime;
                driverNameInput.value = order.driverName;
                plateNumberInput.value = order.plateNumber;
                console.log(`Pedido ${enteredCode} encontrado.`);
                alert('¡Pedido encontrado! Detalles cargados.');
            } else {
                // Limpiar campos y mostrar mensaje si el pedido no se encuentra
                cityInput.value = '';
                deliveryAddressInput.value = '';
                phoneInput.value = '';
                departureDateInput.value = '';
                deliveryDateInput.value = '';
                arrivalTimeInput.value = '';
                driverNameInput.value = '';
                plateNumberInput.value = '';
                console.log(`Pedido ${enteredCode} no encontrado.`);
                alert('Lo sentimos, el código de pedido no fue encontrado. Por favor, verifica e inténtalo de nuevo.');
            }
        });
    }

    // Funcionalidad para los botones de navegación inferior
    const homeNav = document.getElementById('homeNav');
    const moreNav = document.getElementById('moreNav');

    if (homeNav) {
        homeNav.addEventListener('click', () => {
            // La redirección se maneja directamente en el href del HTML
            console.log('Navegando a Inicio.');
        });
    }

    if (moreNav) {
        moreNav.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Botón "Más" clickeado.');
            alert('Funcionalidad "Más" por implementar.');
        });
    }
});
