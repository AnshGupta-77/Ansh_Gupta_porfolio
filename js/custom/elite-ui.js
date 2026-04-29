// ===== IMAGE ROTATION =====
const images = {
  biketribe: [
    "assets/images/projects/bike-tribe/img1.jpg",
    "assets/images/projects/bike-tribe/img2.jpg",
    "assets/images/projects/bike-tribe/img3.jpg",
    "assets/images/projects/bike-tribe/img4.jpg"
  ],
  freelance: [
    "assets/images/projects/freelanceflow/img1.jpg",
    "assets/images/projects/freelanceflow/img2.jpg",
    "assets/images/projects/freelanceflow/img3.jpg",
    "assets/images/projects/freelanceflow/img4.jpg"
  ],
  liver: ["assets/images/projects/liver-disease/img1.jpg"]
};

function rotate(id, arr) {
  let i = 0;
  const el = document.getElementById(id);
  if (!el || arr.length <= 1) return;

  setInterval(() => {
    i = (i + 1) % arr.length;
    el.src = arr[i];
  }, 2500);
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
  rotate("bike-img", images.biketribe);
  rotate("free-img", images.freelance);
  rotate("liver-img", images.liver);

  // ===== CURSOR GLOW =====
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--y', `${e.clientY - rect.top}px`);
    });
  });
});
