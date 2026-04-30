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
    }, 500);
  }, 6000);
}

// ===== ENHANCED SCROLL STORYTELLING =====
function initScrollReveal() {
  // Main reveal observer
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add stagger delay for multiple elements
        const delay = entry.target.dataset.delay || index * 100;
        setTimeout(() => {
          entry.target.classList.add('active');
        }, delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
  });
  
  // Observe all reveal elements
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  
  // Stagger animations for grids
  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const children = entry.target.querySelectorAll('.stagger-item');
        children.forEach((child, i) => {
          setTimeout(() => {
            child.classList.add('active');
          }, i * 100);
        });
        staggerObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.stagger-container').forEach(el => staggerObserver.observe(el));
}

// ===== HERO FADE IN =====
function initHeroAnimation() {
  const heroContent = document.querySelector('.hero-centered .container');
  if (heroContent) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';
    heroContent.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    
    setTimeout(() => {
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    }, 200);
  }
}

// ===== PARALLAX SUBTLE =====
function initParallax() {
  let ticking = false;
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax-slow');
        
        parallaxElements.forEach(el => {
          const speed = 0.5;
          el.style.transform = `translateY(${scrolled * speed}px)`;
        });
        
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// ===== WEBGL HERO BACKGROUND =====
function initWebGLHero() {
  const hero = document.querySelector('.hero-centered');
  if (!hero || window.matchMedia('(pointer: coarse)').matches) return;
  
  const canvas = document.createElement('canvas');
  canvas.id = 'hero-canvas';
  canvas.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: 0.4;
    pointer-events: none;
  `;
  hero.insertBefore(canvas, hero.firstChild);
  
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let mouseX = 0, mouseY = 0;
  let animationId;
  
  function resize() {
    width = canvas.width = hero.offsetWidth;
    height = canvas.height = hero.offsetHeight;
  }
  
  function createParticles() {
    particles = [];
    const count = Math.min(25, Math.floor(width * height / 30000));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
  }
  
  function animate() {
    ctx.clearRect(0, 0, width, height);
    
    particles.forEach((p, i) => {
      // Mouse influence (subtle)
      const dx = mouseX - p.x;
      const dy = mouseY - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 150) {
        p.vx += dx * 0.00005;
        p.vy += dy * 0.00005;
      }
      
      p.x += p.vx;
      p.y += p.vy;
      
      // Wrap around
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;
      
      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 182, 182, ${p.opacity})`;
      ctx.fill();
      
      // Draw connections (limited)
      if (i % 3 === 0) {
        particles.forEach((p2, j) => {
          if (i === j || j % 3 !== 0) return;
          const d = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(197, 163, 255, ${0.1 * (1 - d / 100)})`;
            ctx.stroke();
          }
        });
      }
    });
    
    animationId = requestAnimationFrame(animate);
  }
  
  // Mouse tracking
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  }, { passive: true });
  
  // Init
  resize();
  createParticles();
  animate();
  
  // Cleanup on resize
  window.addEventListener('resize', () => {
    resize();
    createParticles();
  });
  
  // Pause when not visible
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationId);
    } else {
      animate();
    }
  });
}

// ===== INIT ALL =====
document.addEventListener('DOMContentLoaded', () => {
  initImageRotation('bike-img', projectImages.biketribe);
  initImageRotation('freelance-img', projectImages.freelanceflow);
  initImageRotation('liver-img', projectImages.liver);
  
  initScrollReveal();
  initHeroAnimation();
  initParallax();
  initWebGLHero();
});
