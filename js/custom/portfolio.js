/* =====================================================
   Ansh Gupta Portfolio - Custom JavaScript
   ===================================================== */

jQuery(function($) {
    'use strict';
    
    // Initialize custom cursor (desktop only)
    initCustomCursor();
    
    // Scroll reveal animations for elements
    scrollRevealAnimations();
    
    // Smooth scroll for anchor links
    smoothScrollEnhancement();
    
    // Navbar transparency on scroll
    navbarEnhancements();
});

// Custom Cursor Implementation
var initCustomCursor = function() {
    // Only on desktop devices
    if (window.matchMedia('(pointer: coarse)').matches || $(window).width() <= 768) {
        return;
    }
    
    // Create cursor elements
    var $cursor = $('<div class="custom-cursor"></div>');
    var $cursorDot = $('<div class="custom-cursor-dot"></div>');
    
    $('body').append($cursor).append($cursorDot);
    
    var cursorX = 0, cursorY = 0;
    var dotX = 0, dotY = 0;
    var mouseX = 0, mouseY = 0;
    
    // Track mouse movement
    $(document).on('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Smooth cursor animation
    function animateCursor() {
        // Lagging cursor (outer circle)
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        $cursor.css({
            left: cursorX,
            top: cursorY
        });
        
        // Following cursor (inner dot)
        dotX += (mouseX - dotX) * 0.35;
        dotY += (mouseY - dotY) * 0.35;
        $cursorDot.css({
            left: dotX,
            top: dotY
        });
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // Hover effects
    var $hoverElements = $('a, button, .btn, .nav-link, .project-card, .service-card, .tech-item, .contact-btn, .footer-social a, input, textarea, select');
    
    $hoverElements.on('mouseenter', function() {
        $cursor.addClass('hover');
    }).on('mouseleave', function() {
        $cursor.removeClass('hover');
    });
};

// Scroll reveal animations
var scrollRevealAnimations = function() {
    var revealElements = $('.reveal-on-scroll');
    
    if (revealElements.length) {
        var revealOnScroll = function() {
            revealElements.each(function() {
                var $this = $(this);
                var windowHeight = $(window).height();
                var elementTop = $this.offset().top;
                var elementVisible = 100;
                
                if (elementTop < $(window).scrollTop() + windowHeight - elementVisible) {
                    $this.addClass('revealed');
                }
            });
        };
        
        // Initial check
        revealOnScroll();
        
        // Check on scroll
        $(window).on('scroll', revealOnScroll);
    }
};

// Smooth scroll enhancement
var smoothScrollEnhancement = function() {
    $('a[href^="#"]').on('click', function(e) {
        var target = $(this.getAttribute('href'));
        
        if (target.length) {
            e.preventDefault();
            
            var offset = target.offset().top - 80; // Account for fixed nav
            
            $('html, body').animate({
                scrollTop: offset
            }, 800, 'easeInOutExpo');
        }
    });
};

// Navbar enhancements
var navbarEnhancements = function() {
    var navbar = $('.unslate_co--site-nav');
    var lastScroll = 0;
    
    $(window).on('scroll', function() {
        var currentScroll = $(this).scrollTop();
        
        // Add/remove scrolled class
        if (currentScroll > 100) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }
        
        // Hide/show on scroll direction
        if (currentScroll > lastScroll && currentScroll > 300) {
            navbar.addClass('nav-hidden');
        } else {
            navbar.removeClass('nav-hidden');
        }
        
        lastScroll = currentScroll;
    });
};

// Preload critical images
window.addEventListener('load', function() {
    // Add loaded class to body for CSS transitions
    document.body.classList.add('page-loaded');
});
