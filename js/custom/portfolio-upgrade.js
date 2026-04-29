// ===== IMAGE ROTATOR =====
const projectImages = {
  biketribe: [
    "assets/projects/biketribe/1.png",
    "assets/projects/biketribe/2.png",
    "assets/projects/biketribe/3.png",
    "assets/projects/biketribe/4.png"
  ],
  freelanceflow: [
    "assets/projects/freelanceflow/1.png",
    "assets/projects/freelanceflow/2.png",
    "assets/projects/freelanceflow/3.png",
    "assets/projects/freelanceflow/4.png"
  ],
  liver: [
    "assets/projects/liver/1.png"
  ]
};

function startImageRotation(id, key) {
  const img = document.getElementById(id);
  let i = 0;

  if (!img || projectImages[key].length <= 1) return;

  setInterval(() => {
    i = (i + 1) % projectImages[key].length;
    
    // Fade out effect
    img.style.opacity = 0;
    
    setTimeout(() => {
      img.src = projectImages[key][i];
      // Fade in
      img.style.opacity = 1;
    }, 200);
  }, 2500);
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
  startImageRotation("biketribe-img", "biketribe");
  startImageRotation("freelance-img", "freelanceflow");
  // Liver has only 1 image - no rotation needed

  // ===== GLOW EFFECT =====
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--y', `${e.clientY - rect.top}px`);
    });
  });
});
