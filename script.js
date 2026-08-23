// Menu mobile
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Chiudi il menu mobile quando si clicca un link
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// Anno corrente nel footer
document.getElementById('year').textContent = new Date().getFullYear();

// Header con ombra leggera dopo lo scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 10 ? '0 4px 12px rgba(0,0,0,0.3)' : 'none';
});

// Galleria hero: scorrimento automatico + frecce manuali
const heroSlides = document.querySelectorAll('.hero-slide');
const heroDots = document.querySelectorAll('.hero-dot');
const heroPrev = document.getElementById('heroPrev');
const heroNext = document.getElementById('heroNext');
const HERO_INTERVAL = 5000;
let heroIndex = 0;
let heroTimer = null;

function showHeroSlide(index) {
  heroIndex = (index + heroSlides.length) % heroSlides.length;
  heroSlides.forEach((slide, i) => slide.classList.toggle('active', i === heroIndex));
  heroDots.forEach((dot, i) => dot.classList.toggle('active', i === heroIndex));
}

function startHeroAutoplay() {
  clearInterval(heroTimer);
  heroTimer = setInterval(() => showHeroSlide(heroIndex + 1), HERO_INTERVAL);
}

if (heroSlides.length) {
  heroNext.addEventListener('click', () => { showHeroSlide(heroIndex + 1); startHeroAutoplay(); });
  heroPrev.addEventListener('click', () => { showHeroSlide(heroIndex - 1); startHeroAutoplay(); });
  heroDots.forEach(dot => {
    dot.addEventListener('click', () => { showHeroSlide(Number(dot.dataset.slide)); startHeroAutoplay(); });
  });
  startHeroAutoplay();
}

// Animazioni allo scroll: gli elementi con classe "reveal" appaiono
// con una piccola dissolvenza + slide quando entrano nel viewport.
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
