/**
 * CLEAN SCROLL PARALLAX SYSTEM
 * Scroll-focused animations, minimal hover effects
 * Dramatic reveals, smooth transitions
 */

(function() {
  'use strict';

  // ==========================================
  // CONFIGURATION
  // ==========================================
  const CONFIG = {
    // Scroll settings
    scrollRevealThreshold: 0.2,
    scrollParallaxStrength: 0.4,
    
    // Very subtle mouse
    mouseParallaxStrength: 0.01,
    mouseSmoothness: 0.05,
    
    // Minimal tilt
    tiltMaxAngle: 3,
    
    // Performance
    throttleDelay: 16,
    useRAF: true
  };

  // ==========================================
  // STATE MANAGEMENT
  // ==========================================
  const state = {
    mouseX: 0,
    mouseY: 0,
    targetMouseX: 0,
    targetMouseY: 0,
    scrollY: 0,
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    isTouch: window.matchMedia('(pointer: coarse)').matches,
    reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    ticking: false
  };

  // ==========================================
  // UTILITY FUNCTIONS
  // ==========================================
  
  function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  function lerp(start, end, factor) {
    return start + (end - start) * factor;
  }

  function isInViewport(element, threshold = CONFIG.scrollRevealThreshold) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    return (
      rect.top < windowHeight * (1 - threshold) &&
      rect.bottom > windowHeight * threshold
    );
  }

  // ==========================================
  // MOUSE PARALLAX - VERY SUBTLE
  // ==========================================
  const mouseParallax = {
    elements: [],
    
    init() {
      if (state.isTouch || state.reducedMotion) return;
      
      this.elements = document.querySelectorAll('[data-parallax]');
      this.elements.forEach(el => {
        el._parallaxStrength = parseFloat(el.dataset.parallax) || CONFIG.mouseParallaxStrength;
        el._currentX = 0;
        el._currentY = 0;
      });
    },
    
    update() {
      if (state.isTouch || state.reducedMotion || this.elements.length === 0) return;
      
      state.mouseX = lerp(state.mouseX, state.targetMouseX, CONFIG.mouseSmoothness);
      state.mouseY = lerp(state.mouseY, state.targetMouseY, CONFIG.mouseSmoothness);
      
      const centerX = state.windowWidth / 2;
      const centerY = state.windowHeight / 2;
      
      this.elements.forEach(el => {
        const strength = el._parallaxStrength;
        const targetX = (state.mouseX - centerX) * strength;
        const targetY = (state.mouseY - centerY) * strength;
        
        el._currentX = lerp(el._currentX, targetX, 0.05);
        el._currentY = lerp(el._currentY, targetY, 0.05);
        
        el.style.transform = `translate3d(${el._currentX}px, ${el._currentY}px, 0)`;
      });
    }
  };

  // ==========================================
  // SUBTLE TILT - CSS HANDLES MOST
  // ==========================================
  const tiltCards = {
    elements: [],
    
    init() {
      if (state.isTouch || state.reducedMotion) return;
      
      // Just add class, CSS handles the hover
      this.elements = document.querySelectorAll('.tilt-card, [data-tilt]');
      // No JS needed - CSS :hover handles it cleaner
    }
  };

  // ==========================================
  // DRAMATIC SCROLL REVEAL
  // ==========================================
  const scrollReveal = {
    elements: [],
    
    init() {
      this.elements = document.querySelectorAll('.reveal-element, [data-reveal]');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add stagger delay based on element position
            const rect = entry.target.getBoundingClientRect();
            const delay = Math.min(rect.top / window.innerHeight * 200, 500);
            
            setTimeout(() => {
              entry.target.classList.add('revealed');
            }, delay);
            
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      });
      
      this.elements.forEach(el => observer.observe(el));
    }
  };

  // ==========================================
  // SCROLL PARALLAX BACKGROUNDS
  // ==========================================
  const scrollParallax = {
    elements: [],
    
    init() {
      this.elements = document.querySelectorAll('[data-scroll-parallax]');
      this.elements.forEach(el => {
        el._parallaxSpeed = parseFloat(el.dataset.scrollParallax) || 0.3;
      });
    },
    
    update() {
      if (state.reducedMotion) return;
      
      const scrollY = window.scrollY;
      
      this.elements.forEach(el => {
        const speed = el._parallaxSpeed;
        const yPos = scrollY * speed;
        el.style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    }
  };

  // ==========================================
  // NAVBAR SCROLL EFFECTS
  // ==========================================
  const navbarEffects = {
    navbar: null,
    lastScrollY: 0,
    
    init() {
      this.navbar = document.querySelector('.navbar, .navbar-3d');
      if (!this.navbar) return;
      
      window.addEventListener('scroll', throttle(() => {
        this.update();
      }, 100), { passive: true });
    },
    
    update() {
      const currentScrollY = window.scrollY;
      
      // Add scrolled class for 3D lift effect
      if (currentScrollY > 50) {
        this.navbar.classList.add('navbar-scrolled');
      } else {
        this.navbar.classList.remove('navbar-scrolled');
      }
      
      this.lastScrollY = currentScrollY;
    }
  };

  // ==========================================
  // SCROLL PROGRESS INDICATOR
  // ==========================================
  const scrollProgress = {
    indicator: null,
    
    init() {
      this.indicator = document.querySelector('.scroll-progress');
      if (!this.indicator) return;
      
      window.addEventListener('scroll', throttle(() => {
        this.update();
      }, 50), { passive: true });
    },
    
    update() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      
      this.indicator.style.transform = `scaleX(${scrollPercent})`;
    }
  };

  // ==========================================
  // MAGNETIC BUTTON - DISABLED (CSS ONLY)
  // ==========================================
  const magneticButtons = {
    init() {
      // CSS handles this now
    }
  };

  // ==========================================
  // FLOATING ELEMENTS - SCROLL BASED
  // ==========================================
  const floatingElements = {
    elements: [],
    
    init() {
      if (state.reducedMotion) return;
      
      this.elements = document.querySelectorAll('.floating-element');
    },
    
    update() {
      // CSS animation handles the floating
      // No JS needed for basic floating
    }
  };

  // ==========================================
  // SECTION BACKGROUND TRANSITIONS
  // ==========================================
  const sectionTransitions = {
    sections: [],
    
    init() {
      this.sections = document.querySelectorAll('section');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      }, { threshold: 0.2 });
      
      this.sections.forEach(section => observer.observe(section));
    }
  };

  // ==========================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ==========================================
  const smoothScroll = {
    init() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          const targetId = anchor.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
              behavior: state.reducedMotion ? 'auto' : 'smooth',
              block: 'start'
            });
          }
        });
      });
    }
  };

  // ==========================================
  // TEXT REVEAL ANIMATIONS
  // ==========================================
  const textReveal = {
    elements: [],
    
    init() {
      this.elements = document.querySelectorAll('.text-reveal, .word-reveal');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });
      
      this.elements.forEach(el => observer.observe(el));
      
      // Split words for word-reveal
      document.querySelectorAll('.word-reveal').forEach(el => {
        const text = el.textContent;
        el.innerHTML = text.split(' ').map(word => 
          `<span class="word" style="transition-delay: ${Math.random() * 200}ms">${word}</span>`
        ).join(' ');
      });
    }
  };

  // ==========================================
  // MAIN ANIMATION LOOP - SCROLL FOCUSED
  // ==========================================
  function animate() {
    if (!state.ticking) {
      state.ticking = true;
      
      requestAnimationFrame(() => {
        // Only update scroll-based effects
        scrollParallax.update();
        mouseParallax.update(); // Very subtle
        
        state.ticking = false;
      });
    }
    
    if (CONFIG.useRAF) {
      requestAnimationFrame(animate);
    }
  }

  // ==========================================
  // EVENT LISTENERS
  // ==========================================
  function setupEventListeners() {
    // Mouse movement tracking
    if (!state.isTouch) {
      document.addEventListener('mousemove', throttle((e) => {
        state.targetMouseX = e.clientX;
        state.targetMouseY = e.clientY;
      }, CONFIG.throttleDelay), { passive: true });
    }
    
    // Window resize
    window.addEventListener('resize', throttle(() => {
      state.windowWidth = window.innerWidth;
      state.windowHeight = window.innerHeight;
    }, 100), { passive: true });
    
    // Scroll events
    window.addEventListener('scroll', throttle(() => {
      state.scrollY = window.scrollY;
      scrollParallax.update();
      scrollProgress.update();
    }, 16), { passive: true });
    
    // Reduced motion preference change
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
      state.reducedMotion = e.matches;
    });
  }

  // ==========================================
  // INITIALIZATION
  // ==========================================
  function init() {
    if (state.reducedMotion) {
      document.querySelectorAll('.reveal-element, [data-reveal]').forEach(el => {
        el.classList.add('revealed');
      });
      return;
    }
    
    // Initialize all modules
    mouseParallax.init();
    tiltCards.init();
    scrollReveal.init();
    scrollParallax.init();
    navbarEffects.init();
    scrollProgress.init();
    magneticButtons.init();
    floatingElements.init();
    sectionTransitions.init();
    smoothScroll.init();
    textReveal.init();
    
    // Setup event listeners
    setupEventListeners();
    
    // Start animation loop
    if (!state.isTouch) {
      animate();
    }
    
    console.log('Clean Parallax System initialized ✨');
  }

  // ==========================================
  // PUBLIC API
  // ==========================================
  window.Parallax3D = {
    init,
    refresh() {
      mouseParallax.init();
      tiltCards.init();
      scrollReveal.init();
      scrollParallax.init();
    },
    config: CONFIG,
    state
  };

  // Auto-initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
