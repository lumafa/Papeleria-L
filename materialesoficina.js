document.addEventListener('DOMContentLoaded', () => {
    console.log('Script materialesoficina.js se está ejecutando.');

    const productTable = document.getElementById('productTable');
    const cartTotalSpan = document.getElementById('cartTotal');
    const addToCartBtn = document.querySelector('.add-to-cart-btn');

    let totalCartValue = 0;

    // Función para actualizar el subtotal de un producto y el total del carrito
    function updateProductTotal(event) {
        const input = event.target;
        // Asegurarse de que el valor sea un número no negativo
        let quantity = parseInt(input.value);
        if (isNaN(quantity) || quantity < 0) {
            quantity = 0;
            input.value = 0; // Resetear el input a 0 si es inválido
        }

        const row = input.closest('tr');
        const unitPrice = parseFloat(row.dataset.unitPrice); // Obtener el precio unitario del data-attribute

        const subtotal = quantity * unitPrice;
        // La columna "Valor" es la última celda de la fila (índice 3 en 0-based)
        row.querySelector('.product-subtotal').textContent = `$${subtotal.toFixed(2)}`;

        // Recalcular el total general del carrito
        calculateCartTotal();
    }

    // Función para calcular el total general del carrito
    function calculateCartTotal() {
        totalCartValue = 0;
        document.querySelectorAll('.product-table tbody tr').forEach(row => {
            const quantityInput = row.querySelector('.product-quantity');
            const quantity = parseInt(quantityInput.value) || 0;
            const unitPrice = parseFloat(row.dataset.unitPrice) || 0;
            totalCartValue += (quantity * unitPrice);
        });
        cartTotalSpan.textContent = `$${totalCartValue.toFixed(2)}`;
    }

    // Añadir event listeners a todos los campos de cantidad
    document.querySelectorAll('.product-quantity').forEach(input => {
        input.addEventListener('input', updateProductTotal);
        // También inicializar los subtotales al cargar la página
        // Simular un evento para llamar a updateProductTotal para cada input
        const event = new Event('input');
        input.dispatchEvent(event);
    });

    // Funcionalidad para el botón "Agregar al Carrito"
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            let itemsToAddToCart = [];
            document.querySelectorAll('.product-table tbody tr').forEach(row => {
                const quantityInput = row.querySelector('.product-quantity');
                const quantity = parseInt(quantityInput.value) || 0;
                const productName = row.dataset.productName;
                const unitPrice = parseFloat(row.dataset.unitPrice) || 0;

                if (quantity > 0) {
                    itemsToAddToCart.push({
                        name: productName,
                        quantity: quantity,
                        unitPrice: unitPrice.toFixed(2), // Formatear para consistencia
                        subtotal: (quantity * unitPrice).toFixed(2)
                    });
                }
            });

            if (itemsToAddToCart.length > 0) {
                // Guardar los artículos seleccionados y el total en localStorage
                const cartData = {
                    items: itemsToAddToCart,
                    total: totalCartValue.toFixed(2)
                };
                // Obtener carritos existentes o inicializar un array vacío
                let allCarts = JSON.parse(localStorage.getItem('allUserCarts')) || [];
                allCarts.push(cartData); // Añadir el nuevo carrito
                localStorage.setItem('allUserCarts', JSON.stringify(allCarts)); // Guardar todos los carritos

                // También guardar el carrito actual para mostrarlo en la página de pedidos
                localStorage.setItem('currentCart', JSON.stringify(cartData));

                alert('Artículos agregados al carrito y redirigiendo a la página de pedidos.');
                console.log('Contenido del carrito guardado:', cartData);
                // Redirigir a la página de pedidos
                window.location.href = 'pedidos.html';
            } else {
                alert('No has seleccionado ningún artículo para agregar al carrito.');
            }
        });
    }

    // Funcionalidad para el botón de regreso (flecha izquierda)
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', (e) => {
            console.log('Botón de regreso clickeado. Volviendo a la página de categorías.');
            // La redirección se maneja directamente por el href en el HTML.
        });
    }

    // Calcular el total inicial del carrito al cargar la página
    calculateCartTotal();
});
