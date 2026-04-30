// ===== CLEAN IMAGE ROTATION - SMOOTH SLIDESHOW =====
const images = {
  biketribe: [
    "assets/images/projects/bike-tribe/img1.png",
    "assets/images/projects/bike-tribe/img2.png",
    "assets/images/projects/bike-tribe/img3.png",
    "assets/images/projects/bike-tribe/img4.png"
  ],
  freelance: [
    "assets/images/projects/freelanceflow/img1.png",
    "assets/images/projects/freelanceflow/img2.png",
    "assets/images/projects/freelanceflow/img3.png",
    "assets/images/projects/freelanceflow/img4.png"
  ],
  liver: ["assets/images/projects/liver-disease/img1.png"]
};

function rotate(id, arr) {
  let i = 0;
  const el = document.getElementById(id);
  if (!el || arr.length <= 1) return;

  setInterval(() => {
    i = (i + 1) % arr.length;
    
    // Gentle fade out
    el.style.opacity = 0;
    
    setTimeout(() => {
      el.src = arr[i];
      // Gentle fade in
      el.style.opacity = 1;
    }, 700);
  }, 5000);
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
  rotate("bike-img", images.biketribe);
  rotate("free-img", images.freelance);
  rotate("liver-img", images.liver);

  // ===== LIGHT SCROLL REVEAL =====
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal, .project-card, .featured, .cta').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
});
