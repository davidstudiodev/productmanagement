export const productos = [];

export let agregarProducto = (nombre, categoria, precio) => {
    productos.push({ nombre, categoria, precio })
    document.getElementById('productTable').style.display = 'table'
}


export let filtrarPorCategoria = (categoria) => {
    
    const productosFiltrados = productos.filter(producto => producto.categoria === categoria)

    document.getElementById('productTable').style.display = 'table'
    
    return productosFiltrados
}


export function filtrarPorPrecioMinimo(precioMax) {
    return productos.filter(producto => producto.precio <= precioMax)
    
}


export function ordenarPorPrecio() {
    return productos.sort((a, b) => a.precio - b.precio)
    
}
