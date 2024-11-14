import { agregarProducto, filtrarPorCategoria, filtrarPorPrecioMinimo, ordenarPorPrecio, productos } from './funciones.js'

const productForm = document.getElementById('product-form');
const productTableBody = document.getElementById('productTableBody');

function updateTable(productos) {
    productTableBody.innerHTML = ''
    productos.forEach(producto => {
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.categoria}</td>
            <td>${producto.precio}</td>
        `
        productTableBody.append(row)
    })
}


document.getElementById('addProductButton').addEventListener('click', () => {
    const nombre = document.getElementById('productName').value
    const categoria = document.getElementById('productCategory').value
    const precio = parseFloat(document.getElementById('productPrice').value)

    if (nombre && categoria && precio) {
        agregarProducto(nombre, categoria, precio)
        updateTable(productos)
        productForm.reset()
    }
    else {
        alert("Por favor, complete todos los campos antes de agregar el producto.")
    }
    
})

document.getElementById('filterCategoryButton').addEventListener('click', () => {
    const categoria = prompt('Ingrese la categoría a filtrar:')
    
    if (categoria) {
        const productosFiltrados = filtrarPorCategoria(categoria)
        updateTable(productosFiltrados)
    }
})


document.getElementById('filterPriceButton').addEventListener('click', () => {
    const precioMax = parseFloat(prompt('Ingrese el precio máximo:'))
    if (!isNaN(precioMax)) {
        const productosFiltrados = filtrarPorPrecioMinimo(precioMax)
        updateTable(productosFiltrados)
    }
});

document.getElementById('sortPriceButton').addEventListener('click', () => {
    const productosOrdenados = ordenarPorPrecio()
    updateTable(productosOrdenados)
})
