
let currentSlideIndex = 0; // Initialize the current slide index  

function moveSlide(direction) {
    // Prevent moving left if there's only one slide  
    if (direction < 0 && currentSlideIndex === 0) return;

    // Here, you can customize the logic if you plan to add more slides later  
    currentSlideIndex += direction;

    // Show the appropriate slide (In this case, you might not need to change anything since there's only one)  
    updateSlides();
}

function currentSlide(index) {
    // Set the current slide index and update the display (useful for multiple slides)  
    currentSlideIndex = index;
    updateSlides();
}

function updateSlides() {
    // Update the slides display, active dots, etc.  
    const slides = document.querySelectorAll('.slide'); // Get all slides  
    const dots = document.querySelectorAll('.dot'); // Get all dots  

    // Hide all slides  
    slides.forEach((slide, index) => {
        slide.style.display = index === currentSlideIndex ? "block" : "none";
    });

    // Remove 'active' class from all dots  
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlideIndex);
    });
}

// Call updateSlides initially to set the first slide correctly  
updateSlides();