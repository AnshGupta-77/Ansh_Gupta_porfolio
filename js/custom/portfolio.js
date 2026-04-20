/* =====================================================
   Ansh Gupta Portfolio - Custom JavaScript
   ===================================================== */

jQuery(function($) {
    'use strict';
    
    // Scroll reveal animations for elements
    scrollRevealAnimations();
    
    // Smooth scroll for anchor links
    smoothScrollEnhancement();
    
    // Navbar transparency on scroll
    navbarEnhancements();
});

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
