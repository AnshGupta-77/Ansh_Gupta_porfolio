// ===================================================
// CINEMATIC PORTFOLIO — Phases 9-20
// Runs after elite.js — enhances without breaking
// ===================================================

(function () {
  'use strict';

  // ===================================================
  // PHASE 16 — INTRO LOADER V2
  // ===================================================
  function initIntroV2() {
    var intro = document.querySelector('.intro-v2');
    if (!intro) return;

    // One-per-session
    if (sessionStorage.getItem('introSeen')) {
      intro.classList.add('skip');
      document.body.style.overflow = '';
      // Still run hero entrance (no delay needed)
      setTimeout(runHeroEntrance, 80);
      return;
    }

    document.body.style.overflow = 'hidden';

    // Animate AI bar inside the hero AFTER it enters view — trigger early
    setTimeout(function () {
      var fill = document.querySelector('.ai-card-bar-fill');
      if (fill) fill.classList.add('run');
    }, 600);

    // Dismiss at 2300ms
    setTimeout(function () {
      intro.classList.add('fade-out');
      document.body.style.overflow = '';
      sessionStorage.setItem('introSeen', 'true');

      // Delay hero entrance until after fade-out transition (0.9s)
      setTimeout(runHeroEntrance, 700);
    }, 2300);
  }

  // ===================================================
  // PHASE 9 — HERO CINEMATIC ENTRANCE
  // ===================================================
  function runHeroEntrance() {
    var lines = document.querySelectorAll('.hero-title-line, .hero-title-accent');
    lines.forEach(function (line, i) {
      setTimeout(function () {
        line.classList.add('in-view');
        // Activate word spans if present
        line.querySelectorAll('.word-reveal').forEach(function (span) {
          span.style.opacity = '1';
          span.style.filter  = 'blur(0)';
          span.style.transform = 'translateY(0)';
        });
      }, i * 180);
    });

    var enters = document.querySelectorAll('.hero-enter');
    enters.forEach(function (el) {
      var delay = parseInt(el.getAttribute('data-delay') || '0', 10);
      setTimeout(function () {
        el.classList.add('visible');
      }, delay);
    });

    setTimeout(function () {
      var fill = document.querySelector('.ai-card-bar-fill');
      if (fill) fill.classList.add('run');
    }, 1400);
  }

  // ===================================================
  // PHASE 10 — FLOATING UI PARALLAX ON MOUSE
  // ===================================================
  function initFloatingParallax() {
    var hero = document.querySelector('.hero-cinematic');
    if (!hero) return;

    // Skip on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    var cards   = hero.querySelectorAll('.float-card, .micro-chip');
    var portrait = hero.querySelector('.hero-portrait');

    var targetX = 0, targetY = 0;
    var currentX = 0, currentY = 0;
    var rafId = null;

    function lerp(a, b, t) { return a + (b - a) * t; }

    function tick() {
      currentX = lerp(currentX, targetX, 0.07);
      currentY = lerp(currentY, targetY, 0.07);

      cards.forEach(function (card) {
        var speed = parseFloat(card.getAttribute('data-float-speed') || '1');
        var x = currentX * speed * 14;
        var y = currentY * speed * 10;
        card.style.transform = 'translate(' + x + 'px,' + y + 'px)';
      });

      if (portrait) {
        var px = currentX * -7;
        var py = currentY * -5;
        // Keep the float animation by adding to it via custom property
        portrait.style.setProperty('--px', px + 'px');
        portrait.style.setProperty('--py', py + 'px');
      }

      rafId = requestAnimationFrame(tick);
    }

    var mouseMoveTimer;
    hero.addEventListener('mousemove', function (e) {
      var rect = hero.getBoundingClientRect();
      var cx = rect.width / 2;
      var cy = rect.height / 2;
      targetX = (e.clientX - rect.left - cx) / cx;
      targetY = (e.clientY - rect.top - cy) / cy;
    }, { passive: true });

    hero.addEventListener('mouseleave', function () {
      targetX = 0;
      targetY = 0;
    });

    rafId = requestAnimationFrame(tick);

    // Pause when tab hidden
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
      } else {
        rafId = requestAnimationFrame(tick);
      }
    });
  }

  // ===================================================
  // PHASE 11 — INSIDE THE STACK STORYTELLING
  // ===================================================
  function initStackSection() {
    var blocks  = document.querySelectorAll('.stack-block');
    var portrait = document.querySelector('.stack-portrait');
    if (!blocks.length) return;

    // Activate first when section enters view
    var sectionEl = document.querySelector('.stack-section');
    if (sectionEl) {
      var entryObs = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
          blocks[0] && blocks[0].classList.add('active');
          entryObs.disconnect();
        }
      }, { threshold: 0.15 });
      entryObs.observe(sectionEl);
    }

    // Activate block on scroll
    var blockObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          blocks.forEach(function (b) { b.classList.remove('active'); });
          entry.target.classList.add('active');

          if (portrait) {
            var idx = parseInt(entry.target.getAttribute('data-index') || '0', 10);
            var scale = 1 + idx * 0.008;
            portrait.style.transform = 'scale(' + scale + ')';
          }
        }
      });
    }, {
      threshold: 0.55,
      rootMargin: '-15% 0px -25% 0px'
    });

    blocks.forEach(function (b) { blockObs.observe(b); });
  }

  // ===================================================
  // PHASE 12 — PROJECT SPOTLIGHT (MOUSE FOLLOW)
  // ===================================================
  function initProjectSpotlight() {
    var rows = document.querySelectorAll('.project-row-enhanced');

    rows.forEach(function (row) {
      var wrap = row.querySelector('.project-image-wrap');
      if (!wrap) return;

      // Inject spotlight overlay
      var spotlight = document.createElement('div');
      spotlight.className = 'project-spotlight';
      wrap.style.position = 'relative';
      wrap.style.overflow  = 'hidden';
      wrap.appendChild(spotlight);

      row.addEventListener('mousemove', function (e) {
        var rect = wrap.getBoundingClientRect();
        var x = ((e.clientX - rect.left) / rect.width)  * 100;
        var y = ((e.clientY - rect.top)  / rect.height) * 100;
        spotlight.style.setProperty('--mx', x + '%');
        spotlight.style.setProperty('--my', y + '%');
      }, { passive: true });
    });
  }

  // ===================================================
  // PHASE 12 — TECH PILLS FROM EXISTING TEXT
  // ===================================================
  function initTechPills() {
    document.querySelectorAll('.project-row-enhanced').forEach(function (row) {
      var techEl = row.querySelector('.project-tech');
      if (!techEl) return;

      var raw   = techEl.textContent || '';
      var techs = raw.split('•').map(function (t) { return t.trim(); }).filter(Boolean);
      if (!techs.length) return;

      var container = document.createElement('div');
      container.className = 'project-tech-pills';

      techs.forEach(function (tech) {
        var pill = document.createElement('span');
        pill.className = 'tech-pill';
        pill.textContent = tech;
        container.appendChild(pill);
      });

      // Replace text node with pills
      techEl.style.display = 'none';
      techEl.parentNode.insertBefore(container, techEl.nextSibling);
    });
  }

  // ===================================================
  // PHASE 15 — NAVBAR GLASS + ACTIVE SECTION TRACKING
  // ===================================================
  function initNavbar() {
    var nav = document.querySelector('.unslate_co--site-nav');
    if (!nav) return;

    // Compress on scroll
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 70) {
        nav.classList.add('nav-scrolled');
      } else {
        nav.classList.remove('nav-scrolled');
      }
    }, { passive: true });

    // Active link tracking
    var sections  = document.querySelectorAll('div[id$="-section"], section[id$="-section"]');
    var navLinks  = document.querySelectorAll('.unslate_co--site-nav .nav-link');

    if (!sections.length || !navLinks.length) return;

    var sectionObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          navLinks.forEach(function (link) {
            link.classList.remove('nav-active');
            var href = link.getAttribute('href') || '';
            if (href === '#' + id) {
              link.classList.add('nav-active');
            }
          });
        }
      });
    }, {
      threshold: 0.35,
      rootMargin: '-80px 0px -40% 0px'
    });

    sections.forEach(function (s) { sectionObs.observe(s); });
  }

  // ===================================================
  // PHASE 17 — AMBIENT OVERLAYS (vignette + noise)
  // ===================================================
  function initAmbientOverlays() {
    // Vignette
    var vignette = document.createElement('div');
    vignette.className = 'site-vignette';
    document.body.appendChild(vignette);

    // Noise
    var noise = document.createElement('div');
    noise.className = 'site-noise';
    document.body.appendChild(noise);
  }

  // ===================================================
  // PHASE 20 — IMAGE SKELETON LOADING
  // ===================================================
  function initSkeletonImages() {
    var lazyImgs = document.querySelectorAll('img[loading="lazy"]');

    lazyImgs.forEach(function (img) {
      if (img.complete && img.naturalWidth > 0) return;

      var wrap = img.closest('.project-image-wrap') || img.parentElement;
      if (!wrap) return;

      wrap.classList.add('img-skeleton');

      img.addEventListener('load', function () {
        wrap.classList.remove('img-skeleton');
      });

      img.addEventListener('error', function () {
        wrap.classList.remove('img-skeleton');
        img.style.opacity = '0';
        wrap.style.background = 'linear-gradient(135deg, rgba(139,92,246,0.07) 0%, rgba(255,182,182,0.04) 100%)';
      });
    });
  }

  // ===================================================
  // PHASE 13 — BLUR-TO-CLEAR SCROLL REVEALS
  // ===================================================
  function initBlurReveal() {
    var blurEls = document.querySelectorAll('.reveal-blur');
    if (!blurEls.length) return;

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    blurEls.forEach(function (el) { obs.observe(el); });
  }

  // ===================================================
  // PHASE 14 — MAGNETIC CTA BUTTON
  // ===================================================
  function initMagneticCTA() {
    var btns = document.querySelectorAll('.btn-cta-primary, .btn-cta-ghost');
    if (!btns.length) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    btns.forEach(function (btn) {
      var targetX = 0, targetY = 0;
      var currentX = 0, currentY = 0;
      var rafId = null;
      var isHovered = false;

      function lerp(a, b, t) { return a + (b - a) * t; }

      function tick() {
        currentX = lerp(currentX, targetX, 0.12);
        currentY = lerp(currentY, targetY, 0.12);
        btn.style.transform = 'translate(' + currentX.toFixed(2) + 'px,' + currentY.toFixed(2) + 'px)';
        if (isHovered || Math.abs(currentX) > 0.1 || Math.abs(currentY) > 0.1) {
          rafId = requestAnimationFrame(tick);
        } else {
          cancelAnimationFrame(rafId);
        }
      }

      btn.addEventListener('mousemove', function (e) {
        var rect = btn.getBoundingClientRect();
        var cx = rect.left + rect.width  / 2;
        var cy = rect.top  + rect.height / 2;
        targetX = (e.clientX - cx) * 0.35;
        targetY = (e.clientY - cy) * 0.35;
        if (!isHovered) { isHovered = true; tick(); }
      }, { passive: true });

      btn.addEventListener('mouseleave', function () {
        isHovered = false;
        targetX = 0;
        targetY = 0;
        tick();
      });
    });
  }

  // ===================================================
  // PHASE 14 — WORD-BY-WORD HERO TITLE REVEAL
  // ===================================================
  function initWordReveal() {
    var lines = document.querySelectorAll('.hero-title-line, .hero-title-accent');
    lines.forEach(function (line) {
      var text = line.textContent.trim();
      var words = text.split(' ');
      line.textContent = '';
      words.forEach(function (word, i) {
        var span = document.createElement('span');
        span.className = 'word-reveal';
        span.textContent = word + (i < words.length - 1 ? ' ' : '');
        span.style.cssText = 'display:inline-block;opacity:0;filter:blur(6px);transform:translateY(12px);transition:opacity 0.5s ease ' + (i * 80) + 'ms,filter 0.5s ease ' + (i * 80) + 'ms,transform 0.5s cubic-bezier(0.16,1,0.3,1) ' + (i * 80) + 'ms;';
        line.appendChild(span);
      });
    });
  }

  // ===================================================
  // PHASE 11 POLISH — PORTRAIT LIGHT SWEEP (periodic)
  // ===================================================
  function initPortraitSweep() {
    var portrait = document.querySelector('.stack-portrait');
    if (!portrait) return;

    function triggerSweep() {
      var wrap = portrait.closest('.stack-portrait-wrap');
      if (!wrap) return;

      var sweep = wrap.querySelector('.stack-portrait-sweep');
      if (!sweep) {
        sweep = document.createElement('div');
        sweep.className = 'stack-portrait-sweep';
        wrap.appendChild(sweep);
      }

      sweep.classList.remove('sweeping');
      // Force reflow
      void sweep.offsetWidth;
      sweep.classList.add('sweeping');
    }

    // Trigger every 5 seconds when stack section is visible
    var sectionEl = document.querySelector('.stack-section');
    if (!sectionEl) return;

    var sweepInterval = null;
    var visObs = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        triggerSweep();
        sweepInterval = setInterval(triggerSweep, 5000);
      } else {
        if (sweepInterval) clearInterval(sweepInterval);
      }
    }, { threshold: 0.2 });

    visObs.observe(sectionEl);
  }

  // ===================================================
  // PHASE 19 — THROTTLED MOUSE EVENTS (already handled
  // via RAF in parallax — no extra work needed)
  // Ensure hero canvas pauses when hidden (already in elite.js)
  // ===================================================

  // ===================================================
  // BOOT
  // ===================================================
  document.addEventListener('DOMContentLoaded', function () {
    initWordReveal();
    initIntroV2();
    initFloatingParallax();
    initStackSection();
    initPortraitSweep();
    initProjectSpotlight();
    initTechPills();
    initMagneticCTA();
    initNavbar();
    initAmbientOverlays();
    initSkeletonImages();
    initBlurReveal();
  });

  // If intro was already seen, run hero entrance right away
  if (sessionStorage.getItem('introSeen')) {
    document.addEventListener('DOMContentLoaded', function () {
      setTimeout(runHeroEntrance, 120);
    });
  }

})();
