// 1.Arreglo de productos 
const catalogoSonidoVivo = [
    {
        id: 1,
        nombre: "Guitarra Eléctrica Stratocaster",
        precio: 250000,
        imagen: "img/guitarra.jpg",
        categoria: "Cuerdas"
    },
    {
        id: 2,
        nombre: "Batería Acústica 5 piezas",
        precio: 550000,
        imagen: "img/bateria.jpg",
        categoria: "Percusión"
    },
    {
        id: 3,
        nombre: "Amplificador de Bajo 50W",
        precio: 120000,
        imagen: "img/amplificador.jpg",
        categoria: "Equipos"
    },
    {
        id: 4,
        nombre: "Micrófono Dinámico Vocal",
        precio: 45000,
        imagen: "img/microfono.jpg",
        categoria: "Accesorios"
    }
];

// 2. Mostrar los productos del arreglo en el HTML
function renderizarProductos() {
    const contenedor = document.getElementById("contenedor-productos");
    contenedor.innerHTML = ""; // Limpiar antes de renderizar

    catalogoSonidoVivo.forEach(producto => {
        // Usamos <article> para mantener la semántica HTML5
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta-producto");

        tarjeta.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" width="100%">
            <h3>${producto.nombre}</h3>
            <p class="precio">$${producto.precio.toLocaleString('es-CL')}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Añadir al carrito</button>
        `;
        contenedor.appendChild(tarjeta);
    });
}

// 3. Guardar información del carrito en LOCALSTORAGE
function agregarAlCarrito(idProducto) {
    // Obtener el carrito actual del localStorage o crear uno vacío si no existe
    let carrito = JSON.parse(localStorage.getItem("carritoSonidoVivo")) || [];

    // Buscar el producto que el usuario quiere agregar
    const productoSeleccionado = catalogoSonidoVivo.find(p => p.id === idProducto);

    // Verificar si el producto ya está en el carrito
    const existeEnCarrito = carrito.find(p => p.id === idProducto);

    if (existeEnCarrito) {
        existeEnCarrito.cantidad += 1; // Si existe, sumamos 1 a la cantidad
    } else {
        // Si no existe, lo agregamos con cantidad 1
        carrito.push({
            id: productoSeleccionado.id,
            nombre: productoSeleccionado.nombre,
            precio: productoSeleccionado.precio,
            cantidad: 1
        });
    }

    // Guardar el arreglo actualizado en el localStorage
    localStorage.setItem("carritoSonidoVivo", JSON.stringify(carrito));
    
    actualizarContadorCarrito();
    alert(`Se agregó ${productoSeleccionado.nombre} al carrito.`);
}

function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carritoSonidoVivo")) || [];
    const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    document.getElementById("contador-carrito").textContent = totalItems;
}

// Ejecutar funciones al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    renderizarProductos();
    actualizarContadorCarrito();
});