(function() {
  'use strict';
  
  let currentSlide = 0;
  let isAnimating = false;
  
  function initCarousel() {
    const track = document.getElementById('carousel-track');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const slides = document.querySelectorAll('.carousel-slide');
    
    if (!track || !prevBtn || !nextBtn || slides.length === 0) {
      console.log('Carousel elements not found');
      return false;
    }
    
    console.log('Carousel initialized with', slides.length, 'slides');
    
    function updateButtons() {
      const isAtStart = currentSlide === 0;
      const isAtEnd = currentSlide >= slides.length - 1;
      
      prevBtn.disabled = isAtStart;
      nextBtn.disabled = isAtEnd;
      
      console.log('Current slide:', currentSlide, 'Prev disabled:', isAtStart, 'Next disabled:', isAtEnd);
    }
    
    function scrollToSlide(slideIndex) {
      if (isAnimating) return;
      
      isAnimating = true;
      currentSlide = Math.max(0, Math.min(slideIndex, slides.length - 1));
      
      const slideWidth = slides[0].offsetWidth;
      const gap = 24; // 1.5rem = 24px
      const scrollPosition = currentSlide * (slideWidth + gap);
      
      console.log('Scrolling to slide:', currentSlide, 'Position:', scrollPosition);
      
      track.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      
      updateButtons();
      
      // Reset animation flag after scroll completes
      setTimeout(() => {
        isAnimating = false;
      }, 500);
    }
    
    function nextSlide() {
      if (currentSlide < slides.length - 1) {
        scrollToSlide(currentSlide + 1);
      }
    }
    
    function prevSlide() {
      if (currentSlide > 0) {
        scrollToSlide(currentSlide - 1);
      }
    }
    
    // Event listeners
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      nextSlide();
    });
    
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
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
})();
