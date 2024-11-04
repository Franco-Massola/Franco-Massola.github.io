const productos = [
    {
        id: "Sakura-01",
        titulo: "Baculo del Sello",
        imagen: "../img/baculoDelSello.jpg",
        categoria: { nombre: "Sakura Card Captor", id: "Sakura" },
        precio: 15000
    },
    {
        id: "Sakura-02",
        titulo: "Baston Estrella",
        imagen: "../img/bastonEstrella.jpg",
        categoria: { nombre: "Sakura Card Captor", id: "Sakura" },
        precio: 15000
    },
    {
        id: "Sakura-03",
        titulo: "Kero-chan",
        imagen: "../img/kero.jpeg",
        categoria: { nombre: "Sakura Card Captor", id: "Kero" },
        precio: 8000  
    },
    {
        id: "DemonS-01",
        titulo: "Katana de Shinobu",
        imagen: "../img/shinobuKatana.jpg",
        categoria: { nombre: "Demon Slayer", id: "DS" },
        precio: 15000
    },
    // Agrega los productos restantes aquí
];

const contenedorProductos = document.querySelector(".contenedor-productos");

function cargarProductos() {
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
            </div>
        `;
        contenedorProductos.appendChild(div);
    });
}

cargarProductos();
