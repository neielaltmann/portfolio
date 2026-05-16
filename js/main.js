// Main JavaScript File - Navigation and utilities only
// Translations are now handled by translations.js

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }
  
  // Active navigation link highlighting
  const currentPage = window.location.pathname.split('/').pop();
  const allNavLinks = document.querySelectorAll('.nav-links a');
  
  allNavLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  initSoftPhotoParallax();
  
  console.log('Portfolio website loaded successfully');
});

/**
 * Licht parallax-shift op hero-foto’s (desktop); past bij layered hero-CSS.
 */
function initSoftPhotoParallax() {
  if (!window.matchMedia || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }
  if (window.matchMedia('(max-width: 768px)').matches) {
    return;
  }

  const shells = document.querySelectorAll('[data-soft-parallax]');
  if (!shells.length) return;

  function updateParallaxPhotos() {
    const vh = window.innerHeight || 1;
    shells.forEach(function(shell) {
      const img = shell.querySelector('.parallax-photo-target');
      if (!img) return;
      const rect = shell.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      const offset = centerY - vh / 2;
      let shift = offset / vh * 22;
      if (shift > 14) shift = 14;
      if (shift < -14) shift = -14;
      shell.style.setProperty('--parallax-y', shift.toFixed(2) + 'px');
    });
  }

  let ticking = false;
  window.addEventListener('scroll', function() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function() {
      updateParallaxPhotos();
      ticking = false;
    });
  }, { passive: true });

  window.addEventListener('resize', updateParallaxPhotos, { passive: true });
  updateParallaxPhotos();
}
