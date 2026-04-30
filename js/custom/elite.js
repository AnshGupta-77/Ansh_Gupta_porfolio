// ===== ELITE PORTFOLIO JS - Clean & Minimal =====

// ===== IMAGE ROTATION =====
const projectImages = {
  biketribe: [
    "assets/images/projects/bike-tribe/img1.png",
    "assets/images/projects/bike-tribe/img2.png",
    "assets/images/projects/bike-tribe/img3.png",
    "assets/images/projects/bike-tribe/img4.png"
  ],
  freelanceflow: [
    "assets/images/projects/freelanceflow/img1.png",
    "assets/images/projects/freelanceflow/img2.png",
    "assets/images/projects/freelanceflow/img3.png",
    "assets/images/projects/freelanceflow/img4.png"
  ],
  liver: ["assets/images/projects/liver-disease/img1.png"]
};

function initImageRotation(id, images) {
  if (!images || images.length <= 1) return;
  
  const img = document.getElementById(id);
  if (!img) return;
  
  let currentIndex = 0;
  
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    
    // Fade out
    img.style.opacity = '0';
    
    setTimeout(() => {
      img.src = images[currentIndex];
      // Fade in
      img.style.opacity = '1';
    }, 400);
  }, 3000);
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);
  
  // Observe all reveal elements
  document.querySelectorAll('.reveal, .project-card, .service-card, .process-card, .tech-item').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

// ===== HERO FADE IN =====
function initHeroAnimation() {
  const hero = document.querySelector('.hero-centered');
  if (hero) {
    hero.style.opacity = '0';
    hero.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      hero.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      hero.style.opacity = '1';
      hero.style.transform = 'translateY(0)';
    }, 200);
  }
}

// ===== INIT ALL =====
document.addEventListener('DOMContentLoaded', () => {
  initImageRotation('bike-img', projectImages.biketribe);
  initImageRotation('freelance-img', projectImages.freelanceflow);
  initImageRotation('liver-img', projectImages.liver);
  
  initScrollReveal();
  initHeroAnimation();
});
