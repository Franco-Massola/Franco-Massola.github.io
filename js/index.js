const images = [
    '../img/GEEKSTALE00.png', 
    '../img/PLA-CICLO-1024x640.jpg',
    '../img/deckboxs.jpeg'
];

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carrusel-slide');
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); // Elimina la clase activa de todas las imágenes
        if (i === index) {
            slide.classList.add('active'); // Añade la clase activa solo a la imagen actual
        }
    });
}

function nextSlide() {
    const slides = document.querySelectorAll('.carrusel-slide');
    currentIndex = (currentIndex + 1) % slides.length; // Circula al siguiente
    showSlide(currentIndex);
}

function prevSlide() {
    const slides = document.querySelectorAll('.carrusel-slide');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Circula al anterior
    showSlide(currentIndex);
}

// Inicializar el carrusel
showSlide(currentIndex);
