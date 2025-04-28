document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
    }

    setInterval(showNextSlide, 5000);
});
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    
    fadeInElements.forEach(element => {
    element.classList.add('show');
    });

    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
    }

    setInterval(showNextSlide, 5000);
});