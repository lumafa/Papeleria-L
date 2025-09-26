document.addEventListener('DOMContentLoaded', () => {
    console.log('Script pagosenlinea.js se está ejecutando.');

    const paymentInvoiceNumberSpan = document.getElementById('paymentInvoiceNumber');
    const paymentInvoiceTableBody = document.querySelector('#paymentInvoiceTable tbody');
    const paymentTotalAmountSpan = document.getElementById('paymentTotalAmount');

    // Funcionalidad para los botones de navegación inferior
    const homeNav = document.querySelector('.bottom-nav a[href="index.html"]');
    const masNav = document.querySelector('.bottom-nav a[href="menu.html"]');

    if (homeNav) {
        homeNav.addEventListener('click', () => {
            console.log('Navegando a Inicio desde pagos en línea.');
        });
    }

    if (masNav) {
        masNav.addEventListener('click', () => {
            console.log('Navegando a Más (Menú) desde pagos en línea.');
        });
    }

    // Opcional: Podrías añadir interactividad a las imágenes de tarjetas,
    // como un efecto de clic o una redirección simulada.
    document.querySelectorAll('.card-images img').forEach(cardImg => {
        cardImg.addEventListener('click', () => {
            const altText = cardImg.alt;
            // Aquí podrías añadir lógica para iniciar un proceso de pago real
            alert(`Has seleccionado pagar con: ${altText}. Por favor, ingresa tus datos de pago. (Funcionalidad de pago por implementar)`);
            console.log(`Imagen de tarjeta clickeada: ${altText}`);
            // Podrías redirigir a un formulario de pago, o abrir un modal
        });
    });

    // --- Lógica para cargar y mostrar la información de la factura ---

    // Obtener la información del último carrito/factura desde localStorage
    // Asumimos que 'currentCart' contiene los detalles del pedido más reciente.
    // Si la factura ya se generó y guardó con un 'orderId' en 'allUserCarts',
    // podríamos buscar el último pedido de 'allUserCarts' si 'currentCart' se limpia.
    const savedCartData = localStorage.getItem('currentCart'); // Datos del carrito/pedido actual

    if (savedCartData) {
        const cart = JSON.parse(savedCartData);
        let calculatedTotal = 0;

        // Si tenemos un número de pedido/factura asignado (ej. desde pedidos.js)
        // Puedes establecer una lógica para el número de factura aquí.
        // Para este demo, usaremos un número de factura simple.
        let invoiceNum = localStorage.getItem('lastInvoiceId');
        if (!invoiceNum) {
            invoiceNum = String(1).padStart(4, '0'); // Si no hay, empieza en 0001
        } else {
             // Si el último ID de factura fue de la página "factactual.html",
             // podemos usar ese mismo, o incrementarlo si esta es una nueva "factura" de pago.
             // Para consistencia con factactual, usaremos el mismo lastInvoiceId.
             invoiceNum = String(parseInt(invoiceNum)).padStart(4, '0');
        }
        paymentInvoiceNumberSpan.textContent = invoiceNum;


        if (cart.items && cart.items.length > 0) {
            cart.items.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td class="col-detalle" data-label="Detalle">${item.name}</td>
                    <td class="col-unid" data-label="Unid">${item.quantity}</td>
                    <td class="col-vr-unidad" data-label="Vr unidad">$${parseFloat(item.unitPrice).toFixed(2)}</td>
                    <td class="col-vr-total" data-label="Vr Total">$${parseFloat(item.subtotal).toFixed(2)}</td>
                `;
                paymentInvoiceTableBody.appendChild(row);
                calculatedTotal += parseFloat(item.subtotal);
            });
        } else {
            const row = document.createElement('tr');
            row.innerHTML = `<td colspan="4">No hay productos en este pedido para pagar.</td>`;
            paymentInvoiceTableBody.appendChild(row);
        }

        paymentTotalAmountSpan.textContent = `$${calculatedTotal.toFixed(2)}`;
        console.log('Información del pedido cargada en la sección de pagos.');

    } else {
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="4">No se encontraron detalles del pedido actual.</td>`;
        paymentInvoiceTableBody.appendChild(row);
        paymentTotalAmountSpan.textContent = '$0.00';
        paymentInvoiceNumberSpan.textContent = 'N/A';
        console.log('No se encontraron datos del carrito en localStorage para mostrar en pagos.');
    }
});
