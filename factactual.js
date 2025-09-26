document.addEventListener('DOMContentLoaded', () => {
    console.log('Script factactual.js se está ejecutando.');

    const invoiceTableBody = document.querySelector('#invoiceTable tbody');
    const invoiceTotalSpan = document.getElementById('invoiceTotal');
    const invoiceNumberDisplay = document.getElementById('invoiceNumber');

    // Datos de cliente simulados (en un sistema real, vendrían de un inicio de sesión o registro)
    const customerData = {
        name: 'Cliente Ejemplo Nombre Apellido Apellido',
        id: '12345678',
        address: 'Calle Ficticia 123 - 45',
        phone: '3001234567'
    };

    // Mostrar datos del cliente
    document.getElementById('customerName').textContent = customerData.name;
    document.getElementById('customerID').textContent = customerData.id;
    document.getElementById('customerAddress').textContent = customerData.address;
    document.getElementById('customerPhone').textContent = customerData.phone;

    // Función para obtener/generar un número de factura
    function getNextInvoiceId() {
        let lastInvoiceId = parseInt(localStorage.getItem('lastInvoiceId')) || 0;
        lastInvoiceId++;
        localStorage.setItem('lastInvoiceId', lastInvoiceId);
        // Formato simple "0001"
        return String(lastInvoiceId).padStart(4, '0');
    }

    // Mostrar el número de factura al cargar la página
    let currentInvoiceId = getNextInvoiceId();
    invoiceNumberDisplay.textContent = `Factura No. ${currentInvoiceId}`;

    // Recuperar los datos del carrito actual de localStorage
    const savedCartData = localStorage.getItem('currentCart');

    if (savedCartData) {
        const cart = JSON.parse(savedCartData);
        let calculatedTotal = 0;

        if (cart.items && cart.items.length > 0) {
            const today = new Date().toLocaleDateString('es-CO', { // Formato de fecha para Colombia
                year: '2-digit',
                month: '2-digit',
                day: '2-digit'
            });

            cart.items.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td class="column-fecha" data-label="Fecha">${today}</td>
                    <td class="column-unid" data-label="Unid">${item.quantity}</td>
                    <td class="column-detalle" data-label="Detalle">${item.name}</td>
                    <td class="column-vr-unidad" data-label="Vr unidad">$${parseFloat(item.unitPrice).toFixed(2)}</td>
                    <td class="column-vr-total" data-label="Vr Total">$${parseFloat(item.subtotal).toFixed(2)}</td>
                `;
                invoiceTableBody.appendChild(row);
                calculatedTotal += parseFloat(item.subtotal);
            });
        } else {
            const row = document.createElement('tr');
            row.innerHTML = `<td colspan="5">No hay productos en este pedido.</td>`; // Ajustado colspan
            invoiceTableBody.appendChild(row);
        }

        invoiceTotalSpan.textContent = `$${calculatedTotal.toFixed(2)}`;
        console.log('Datos del carrito cargados en la factura.');

        // Opcional: Limpiar el carrito de localStorage después de generar la factura
        // Esto depende de si quieres que la factura sea el "fin" del proceso de compra para ese carrito.
        // localStorage.removeItem('currentCart');

    } else {
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="5">No se encontraron datos del pedido actual.</td>`; // Ajustado colspan
        invoiceTableBody.appendChild(row);
        invoiceTotalSpan.textContent = '$0.00';
        console.log('No se encontraron datos del carrito en localStorage.');
    }

    // Funcionalidad para los botones de navegación inferior
    const homeNav = document.querySelector('.bottom-nav a[href="index.html"]');
    const masNav = document.querySelector('.bottom-nav a[href="menu.html"]');

    if (homeNav) {
        homeNav.addEventListener('click', () => {
            console.log('Navegando a Inicio desde la factura.');
        });
    }

    if (masNav) {
        masNav.addEventListener('click', () => {
            console.log('Navegando a Más (Menú) desde la factura.');
        });
    }
});
