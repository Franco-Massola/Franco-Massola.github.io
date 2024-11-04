const images = [
    '../img/GEEKSTALE00.png', 
    '../img/PLA-CICLO-1024x640.jpg',
    '../img/deckboxs.jpeg'
];

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carrusel-slide');
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); 
        if (i === index) {
            slide.classList.add('active'); 
        }
    });
}

function nextSlide() {
    const slides = document.querySelectorAll('.carrusel-slide');
    currentIndex = (currentIndex + 1) % slides.length; 
    showSlide(currentIndex);
}

function prevSlide() {
    const slides = document.querySelectorAll('.carrusel-slide');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; 
    showSlide(currentIndex);
}


showSlide(currentIndex);
