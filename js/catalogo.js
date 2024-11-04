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
        categoria: { nombre: "Sakura Card Captor", id: "Sakura" },
        precio: 8000  
    },
    {
        id: "DemonS-01",
        titulo: "Katana de Shinobu",
        imagen: "../img/shinobuKatana.jpg",
        categoria: { nombre: "Demon Slayer", id: "DS" },
        precio: 15000
    },
    {
        id: "Deckbox-01",
        titulo: "Deckbox Tower",
        imagen: "../img/deckboxTower.jpeg",
        categoria: { nombre: "Deckbox", id: "DB" },
        precio: 20000
    },
    {
        id: "Deckbox-02",
        titulo: "Deckbox Engranages",
        imagen: "../img/deckboxEngranage.jpeg",
        categoria: { nombre: "Deckbox", id: "DB" },
        precio: 15000
    },
    {
        id: "Switch-01",
        titulo: "Joycon Switch",
        imagen: "../img/joyconsSwitch.jpeg",
        categoria: { nombre: "joycon", id: "NS" },
        precio: 15000
    },
    {
        id: "Dados-01",
        titulo: "Porta Dados DnD",
        imagen: "../img/dados.jpeg",
        categoria: { nombre: "Dados", id: "DD" },
        precio: 8000
    },
    {
        id: "Perifericos-01",
        titulo: "Stand Auriculares",
        imagen: "../img/standAuris.jpeg",
        categoria: { nombre: "Perifericos", id: "peris" },
        precio: 12000
    },
    {
        id: "Catan-01",
        titulo: "Cajas Catan",
        imagen: "../img/cajaCatan.jpeg",
        categoria: { nombre: "Catan", id: "CT" },
        precio: 6000
    },
  
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
