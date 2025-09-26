document.addEventListener('DOMContentLoaded', () => {
    console.log('Script inventario.js se está ejecutando.');

    const inventoryTableBody = document.querySelector('#inventoryTable tbody');

    // Datos del inventario combinados de todas las categorías
    const inventoryData = [
        // Útiles Escolares
        { name: "Bolígrafos", initialQuantity: 100, unitPrice: 1.50 },
        { name: "Borrador", initialQuantity: 150, unitPrice: 0.75 },
        { name: "Cuadernos", initialQuantity: 80, unitPrice: 3.00 },
        { name: "Cartulinas", initialQuantity: 200, unitPrice: 0.25 },
        { name: "Cartucheras", initialQuantity: 50, unitPrice: 5.00 },
        { name: "Compas", initialQuantity: 70, unitPrice: 2.50 },
        { name: "Colbón", initialQuantity: 90, unitPrice: 1.20 },
        { name: "Colores", initialQuantity: 60, unitPrice: 8.00 },
        { name: "Lápices", initialQuantity: 120, unitPrice: 0.50 },
        { name: "Marcadores", initialQuantity: 100, unitPrice: 1.75 },
        { name: "Sacapuntas", initialQuantity: 110, unitPrice: 0.90 },
        { name: "Tijeras de punta roma", initialQuantity: 40, unitPrice: 3.50 },
        { name: "Pegamento en barra", initialQuantity: 80, unitPrice: 1.00 },
        { name: "Plastilina", initialQuantity: 75, unitPrice: 2.00 },
        { name: "Reglas", initialQuantity: 95, unitPrice: 0.80 },
        { name: "Vinilos", initialQuantity: 30, unitPrice: 4.50 },
        { name: "Materiales para aseo personal", initialQuantity: 25, unitPrice: 6.00 },

        // Material de Oficina
        { name: "Carpetas", initialQuantity: 150, unitPrice: 2.50 },
        { name: "Archivadores", initialQuantity: 50, unitPrice: 7.00 },
        { name: "Clips", initialQuantity: 300, unitPrice: 1.20 },
        { name: "Ganchos de cosedora", initialQuantity: 250, unitPrice: 1.80 },
        { name: "Cosedoras", initialQuantity: 30, unitPrice: 12.00 },
        { name: "Perforadoras", initialQuantity: 20, unitPrice: 15.00 },
        { name: "Tinta para impresora", initialQuantity: 40, unitPrice: 25.00 },
        { name: "Tóner", initialQuantity: 20, unitPrice: 45.00 },
        { name: "Resmas de papel", initialQuantity: 60, unitPrice: 6.00 },
        { name: "Calculadoras", initialQuantity: 25, unitPrice: 20.00 },
        { name: "Destructoras de papel", initialQuantity: 5, unitPrice: 150.00 },
        { name: "Cajas de seguridad", initialQuantity: 8, unitPrice: 80.00 },
        { name: "Pizarras acrílicas", initialQuantity: 15, unitPrice: 35.00 },
        { name: "Borradores de pizarra", initialQuantity: 50, unitPrice: 3.00 },
        { name: "Etiquetadoras", initialQuantity: 10, unitPrice: 40.00 },

        // Productos Esenciales
        { name: "Arte y Manualidades", initialQuantity: 40, unitPrice: 10.50 },
        { name: "Bolsas regalo", initialQuantity: 100, unitPrice: 1.80 },
        { name: "Bombas", initialQuantity: 200, unitPrice: 0.50 },
        { name: "Balones", initialQuantity: 20, unitPrice: 8.00 },
        { name: "Cajas regalo", initialQuantity: 70, unitPrice: 3.00 },
        { name: "Decoraciones", initialQuantity: 30, unitPrice: 7.50 },
        { name: "Juguetería", initialQuantity: 25, unitPrice: 15.00 },
        { name: "Juegos didácticos", initialQuantity: 15, unitPrice: 20.00 },
        { name: "Libros", initialQuantity: 50, unitPrice: 12.00 },
        { name: "Maletines", initialQuantity: 18, unitPrice: 25.00 },
        { name: "Pasillos", initialQuantity: 60, unitPrice: 5.00 },
        { name: "Reloj", initialQuantity: 10, unitPrice: 30.00 }
    ];

    // Función para cargar los datos del inventario en la tabla
    function loadInventory() {
        inventoryTableBody.innerHTML = ''; // Limpiar cualquier contenido existente

        inventoryData.forEach(product => {
            const row = document.createElement('tr');
            // Por ahora, 'cantidad existente' es igual a 'cantidad de inicio'.
            // Si hay un sistema de ventas, se podría restar de aquí.
            const existingQuantity = product.initialQuantity; // Esto podría ser dinámico en el futuro

            row.innerHTML = `
                <td>${product.name}</td>
                <td>${product.initialQuantity}</td>
                <td>${existingQuantity}</td>
                <td>$${product.unitPrice.toFixed(2)}</td>
            `;
            inventoryTableBody.appendChild(row);
        });
        console.log('Inventario cargado en la tabla.');
    }

    // Cargar el inventario al cargar la página
    loadInventory();

    // Funcionalidad para los botones de navegación inferior
    const homeNav = document.querySelector('.bottom-nav a[href="index.html"]');
    const masNav = document.querySelector('.bottom-nav a[href="menu.html"]');

    if (homeNav) {
        homeNav.addEventListener('click', () => {
            console.log('Navegando a Inicio desde inventario.');
        });
    }

    if (masNav) {
        masNav.addEventListener('click', () => {
            console.log('Navegando a Más (Menú) desde inventario.');
        });
    }
});
