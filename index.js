

let currentSlideIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');

    if (direction < 0 && currentSlideIndex === 0) return;
    if (direction > 0 && currentSlideIndex === slides.length - 1) return;

    currentSlideIndex += direction;
    updateSlides();
}

function currentSlide(index) {
    const slides = document.querySelectorAll('.slide');

    if (index < 0 || index >= slides.length) return;

    currentSlideIndex = index;
    updateSlides();
}

function updateSlides() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    slides.forEach((slide, index) => {
        slide.style.display = index === currentSlideIndex ? "block" : "none";
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlideIndex);
    });
}

updateSlides();
