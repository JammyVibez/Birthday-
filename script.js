// Countdown Timer
function countdown() {
    const endDate = new Date().setHours(23, 59, 59); 
    setInterval(() => {
        const now = new Date();
        const diff = endDate - now;
        document.getElementById('timer').innerText = 
        new Date(diff).toISOString().substr(11, 8);
    }, 1000);
}
countdown();

// Love Letter Modal
function openLoveLetter() {
    document.getElementById('love-letter-modal').style.display = 'block';
}

function closeLoveLetter() {
    document.getElementById('love-letter-modal').style.display = 'none';
}

// Surprise Alert
function revealSurprise() {
    alert('Surprise! You are the most special person in my life ❤️💫');
}


// Hero Carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Image Modal
function openImageModal(imageSrc, message) {
    document.getElementById('modal-image').src = imageSrc;
    document.getElementById('modal-message').innerText = message;
    document.getElementById('image-modal').style.display = 'block';
}

function closeImageModal() {
    document.getElementById('image-modal').style.display = 'none';
}

// Love Letter Modal
function openLoveLetter() {
    document.getElementById('love-letter-modal').style.display = 'block';
}

function closeLoveLetter() {
    document.getElementById('love-letter-modal').style.display = 'none';
}

// Start Carousel
showSlide(currentSlide);


// Background Music Toggle
const music = document.getElementById('background-music');
const musicToggle = document.getElementById('music-toggle');

function toggleMusic() {
    if (music.paused) {
        music.play();
        musicToggle.innerText = '🎵 Pause Music';
    } else {
        music.pause();
        musicToggle.innerText = '🎵 Play Music';
    }
}
