document.addEventListener('DOMContentLoaded', () => {
    console.log('Script pedido.js se está ejecutando.');

    const orderSummaryTableBody = document.querySelector('#orderSummaryTable tbody');
    const finalOrderTotalSpan = document.getElementById('finalOrderTotal');
    const orderNumberDisplay = document.getElementById('orderNumberDisplay');
    const confirmOrderBtn = document.querySelector('.confirm-order-btn');

    // Recuperar los datos del carrito actual de localStorage
    const savedCartData = localStorage.getItem('currentCart');

    // Función para obtener/generar un número de pedido
    function getNextOrderId() {
        let lastOrderId = parseInt(localStorage.getItem('lastOrderId')) || 0;
        lastOrderId++;
        localStorage.setItem('lastOrderId', lastOrderId);
        return '00' + lastOrderId; // Formato simple para demostración
    }

    // Mostrar el número de pedido al cargar la página
    let currentOrderId = getNextOrderId();
    orderNumberDisplay.textContent = `Pedido No ${currentOrderId}`;

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
                    <td class="column-fecha">${today}</td>
                    <td class="column-unid">${item.quantity}</td>
                    <td class="column-detalle">${item.name}</td>
                    <td class="column-v-unidad">$${parseFloat(item.unitPrice).toFixed(2)}</td>
                    <td class="column-v-total">$${parseFloat(item.subtotal).toFixed(2)}</td>
                `;
                orderSummaryTableBody.appendChild(row);
                calculatedTotal += parseFloat(item.subtotal);
            });
        } else {
            const row = document.createElement('tr');
            row.innerHTML = `<td colspan="5">No hay productos en el carrito.</td>`; // Ajustado colspan
            orderSummaryTableBody.appendChild(row);
        }

        finalOrderTotalSpan.textContent = `$${calculatedTotal.toFixed(2)}`;
        console.log('Datos del carrito cargados y mostrados.');

    } else {
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="5">No hay pedidos pendientes.</td>`; // Ajustado colspan
        orderSummaryTableBody.appendChild(row);
        finalOrderTotalSpan.textContent = '$0.00';
        console.log('No se encontraron datos del carrito en localStorage.');
    }

    // Funcionalidad para el botón "Confirmar Pedido"
    if (confirmOrderBtn) {
        confirmOrderBtn.addEventListener('click', () => {
            // Obtener el carrito actual que se está mostrando
            const cartToConfirm = JSON.parse(localStorage.getItem('currentCart'));

            if (cartToConfirm && cartToConfirm.items.length > 0) {
                // Añadir detalles adicionales al carrito antes de guardarlo en el historial
                cartToConfirm.orderId = currentOrderId;
                cartToConfirm.date = new Date().toISOString(); // Guarda la fecha y hora de confirmación

                let allUserCarts = JSON.parse(localStorage.getItem('allUserCarts')) || [];
                allUserCarts.push(cartToConfirm);
                localStorage.setItem('allUserCarts', JSON.stringify(allUserCarts));

                // Limpiar el carrito actual después de la confirmación
                localStorage.removeItem('currentCart');

                alert(`¡Pedido No. ${currentOrderId} confirmado! Gracias por tu compra.`);
                console.log('Pedido confirmado y guardado en historial.');
                window.location.href = 'index.html'; // Redirigir a la página principal
            } else {
                alert('No hay productos en el carrito para confirmar.');
            }
        });
    }

    // Los botones de navegación inferior
    const homeNav = document.querySelector('.bottom-nav a[href="index.html"]');
    const masNav = document.querySelector('.bottom-nav a[href="menu.html"]');

    if (homeNav) {
        homeNav.addEventListener('click', () => {
            console.log('Navegando a Inicio.');
        });
    }

    if (masNav) {
        masNav.addEventListener('click', () => {
            console.log('Navegando a Más (Menú).');
        });
    }
});
