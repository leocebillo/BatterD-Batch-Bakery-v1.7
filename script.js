// ================================
// NAVIGATION
// ================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('open');
});

// ================================
// INSTAGRAM SLIDESHOW WITH DOTS
// ================================
const slides = document.querySelector('.slides');
const allSlides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');

let currentSlide = 0;

// Create dots dynamically
allSlides.forEach((_, index) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');

  dot.addEventListener('click', () => {
    currentSlide = index;
    updateSlider();
  });

  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateSlider() {
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentSlide].classList.add('active');
}

// Auto slide every 6 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % allSlides.length;
  updateSlider();
}, 6000);

// ================================
