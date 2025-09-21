(function() {
  'use strict';
  
  let currentSlide = 0;
  let isAnimating = false;
  let initAttempts = 0;
  const maxAttempts = 10;
  
  function initCarousel() {
    initAttempts++;
    console.log('Attempting to initialize carousel, attempt:', initAttempts);
    
    const track = document.getElementById('carousel-track');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const slides = document.querySelectorAll('.carousel-slide');
    
    console.log('Elements found:', {
      track: !!track,
      prevBtn: !!prevBtn,
      nextBtn: !!nextBtn,
      slides: slides.length
    });
    
    if (!track || !prevBtn || !nextBtn || slides.length === 0) {
      if (initAttempts < maxAttempts) {
        console.log('Carousel elements not found, retrying in 100ms...');
        setTimeout(initCarousel, 100);
        return false;
      } else {
        console.log('Carousel initialization failed after', maxAttempts, 'attempts');
        return false;
      }
    }
    
    console.log('Carousel initialized successfully with', slides.length, 'slides');
    
    function updateButtons() {
      const isAtStart = currentSlide === 0;
      const isAtEnd = currentSlide >= slides.length - 1;
      
      prevBtn.disabled = isAtStart;
      nextBtn.disabled = isAtEnd;
      
      console.log('Current slide:', currentSlide, 'Prev disabled:', isAtStart, 'Next disabled:', isAtEnd);
    }
    
    function scrollToSlide(slideIndex) {
      if (isAnimating) {
        console.log('Animation in progress, skipping scroll');
        return;
      }
      
      isAnimating = true;
      currentSlide = Math.max(0, Math.min(slideIndex, slides.length - 1));
      
      const slideWidth = slides[0].offsetWidth;
      const gap = 8; // 0.5rem = 8px
      const scrollPosition = currentSlide * (slideWidth + gap);
      
      console.log('Scrolling to slide:', currentSlide, 'Position:', scrollPosition, 'Slide width:', slideWidth);
      
      // Try both methods
      try {
        track.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      } catch (e) {
        console.log('scrollTo failed, using scrollLeft');
        track.scrollLeft = scrollPosition;
      }
      
      updateButtons();
      
      // Reset animation flag after scroll completes
      setTimeout(() => {
        isAnimating = false;
        console.log('Animation completed');
      }, 500);
    }
    
    function nextSlide() {
      console.log('nextSlide called, currentSlide:', currentSlide, 'slides.length:', slides.length);
      if (currentSlide < slides.length - 1) {
        scrollToSlide(currentSlide + 1);
      } else {
        console.log('Already at last slide');
      }
    }
    
    function prevSlide() {
      console.log('prevSlide called, currentSlide:', currentSlide);
      if (currentSlide > 0) {
        scrollToSlide(currentSlide - 1);
      } else {
        console.log('Already at first slide');
      }
    }
    
    // Event listeners
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Next button clicked, current slide:', currentSlide);
      nextSlide();
    });
    
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Prev button clicked, current slide:', currentSlide);
      prevSlide();
    });
    
    // Keyboard navigation
    const carousel = document.getElementById('projects-carousel');
    if (carousel) {
      carousel.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          prevSlide();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          nextSlide();
        }
      });
    }
    
    // Touch/swipe support
    let startX = 0;
    let startY = 0;
    let isDragging = false;
    
    track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isDragging = true;
    });
    
    track.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      
      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const diffX = startX - currentX;
      const diffY = startY - currentY;
      
      // Only handle horizontal swipes
      if (Math.abs(diffX) > Math.abs(diffY)) {
        e.preventDefault();
      }
    });
    
    track.addEventListener('touchend', (e) => {
      if (!isDragging) return;
      
      const endX = e.changedTouches[0].clientX;
      const diffX = startX - endX;
      const threshold = 50;
      
      if (Math.abs(diffX) > threshold) {
        if (diffX > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
      
      isDragging = false;
    });
    
    // Initialize
    updateButtons();
    
    return true;
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarousel);
  } else {
    initCarousel();
  }
  
  // Also try on window load as fallback
  window.addEventListener('load', () => {
    if (initAttempts === 0) {
      console.log('Trying carousel init on window load');
      initCarousel();
    }
  });
})();
