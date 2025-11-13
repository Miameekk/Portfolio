
const API_URL = 'https://portfolio-production-6d0c.up.railway.app/api';

let vouches = [];
let currentSlide = 0;
let autoScrollInterval;

// Inicjalizacja
document.addEventListener('DOMContentLoaded', () => {
    loadVouches();
    setupEventListeners();
});

// Ładowanie opinii
async function loadVouches() {
    try {
        const response = await fetch(`${API_URL}/vouches`);
        vouches = await response.json();
        displayVouches();
        startAutoScroll();
    } catch (error) {
        console.error('Błąd ładowania opinii:', error);
    }
}

// Wyświetlanie opinii
function displayVouches() {
    const carousel = document.getElementById('vouchCarousel');
    const dotsContainer = document.getElementById('carouselDots');
    
    carousel.innerHTML = '';
    dotsContainer.innerHTML = '';
    
    vouches.forEach((vouch, index) => {
        // Tworzenie karty opinii
        const card = document.createElement('div');
        card.className = 'vouch-card';
        
        console.log('Vouch data:', vouch); // Debug full vouch object
        
        const rating = Number(vouch.rating) || 0;
        const stars = '⭐'.repeat(rating);
        const date = new Date(vouch.createdAt).toLocaleDateString('pl-PL');
        
        console.log('Rating:', rating, 'Stars:', stars, 'Stars length:', stars.length); // Debug
        
        card.innerHTML = `
            <div class="vouch-header">
                <img src="${vouch.avatar}" alt="${vouch.username}" class="vouch-avatar">
                <div class="vouch-username">${vouch.username}</div>
            </div>
            ${vouch.title ? `<div class="vouch-title">${vouch.title}</div>` : ''}
            <div class="vouch-stars">${stars}</div>
            <div class="vouch-description">${vouch.description}</div>
            <hr class="vouch-separator">
            <div class="vouch-date">${date}</div>
        `;
        
        carousel.appendChild(card);
        
        // Tworzenie kropek nawigacji
        const dot = document.createElement('div');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
}

// Automatyczne przewijanie
function startAutoScroll() {
    if (autoScrollInterval) clearInterval(autoScrollInterval);
    
    autoScrollInterval = setInterval(() => {
        if (vouches.length === 0) return;
        
        let nextIndex = currentSlide + 1;
        
        if (nextIndex >= vouches.length) {
            nextIndex = 0;
        }
        
        goToSlide(nextIndex);
    }, 5000); // Przewijanie co 5 sekund
}

// Nawigacja karuzeli
function goToSlide(index) {
    const carousel = document.getElementById('vouchCarousel');
    const cards = carousel.querySelectorAll('.vouch-card');
    const dots = document.querySelectorAll('.dot');
    
    if (cards.length === 0) return;
    
    currentSlide = index;
    
    // Przewijanie do wybranego slajdu
    const cardWidth = cards[0].offsetWidth;
    const gap = 32; // Odstęp między kartami
    carousel.scrollTo({
        left: (cardWidth + gap) * index,
        behavior: 'smooth'
    });
    
    // Aktualizacja kropek
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    
    // Restart autoscroll       
    startAutoScroll();
}

function nextSlide() {
    const nextIndex = (currentSlide + 1) % vouches.length;
    goToSlide(nextIndex);
}

function prevSlide() {
    const prevIndex = (currentSlide - 1 + vouches.length) % vouches.length;
    goToSlide(prevIndex);
}

// Event listeners
function setupEventListeners() {
    // Przyciski nawigacji karuzeli
    document.getElementById('prevBtn').addEventListener('click', prevSlide);
    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    
    // Smooth scrolling dla linków nawigacji
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Zatrzymanie autoscrollu gdy użytkownik przewija ręcznie
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('vouchCarousel');
    if (carousel) {
        carousel.addEventListener('scroll', () => {
            clearInterval(autoScrollInterval);
            setTimeout(startAutoScroll, 10000); // Wznów po 10 sekundach
        });
    }
});
