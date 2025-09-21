(function(){
  function initGallery6() {
    console.log('Initializing Gallery 6...');
    
    const track = document.getElementById('g6-track');
    const btnPrev = document.getElementById('g6-prev');
    const btnNext = document.getElementById('g6-next');

    console.log('Elements found:', { track: !!track, btnPrev: !!btnPrev, btnNext: !!btnNext });

    if (!track || !btnPrev || !btnNext) {
      console.log('Gallery 6 elements not found, retrying...');
      return false;
    }

    // konfiguracja przewijania o szerokość widoczną (z uwzględnieniem gap)
    const getStep = () => {
      // Przewijaj o szerokość jednej karty + gap
      const firstSlide = track.querySelector('.gallery6__slide');
      if (firstSlide) {
        const slideWidth = firstSlide.offsetWidth;
        const gap = 16; // 1rem = 16px
        const step = slideWidth + gap;
        console.log('Scroll step:', step, 'slideWidth:', slideWidth);
        return step;
      }
      return track.clientWidth * 0.9;
    };

    function updateButtons(){
      const maxScroll = track.scrollWidth - track.clientWidth - 1; // margines
      const isAtStart = track.scrollLeft <= 0;
      const isAtEnd = track.scrollLeft >= maxScroll;
      
      console.log('Updating buttons:', { 
        scrollLeft: track.scrollLeft, 
        maxScroll, 
        isAtStart, 
        isAtEnd 
      });
      
      btnPrev.disabled = isAtStart;
      btnNext.disabled = isAtEnd;
    }

    function scrollByStep(dir){
      const step = getStep();
      console.log('Scrolling by step:', dir * step);
      track.scrollBy({ left: dir * step, behavior: 'smooth' });
    }

    btnPrev.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Prev button clicked');
      scrollByStep(-1);
    });
    
    btnNext.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Next button clicked');
      scrollByStep(1);
    });

    // klawiatura (gdy fokus w obrębie sekcji)
    const gallery = document.getElementById('gallery-6');
    if (gallery) {
      gallery.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') { e.preventDefault(); scrollByStep(-1); }
        if (e.key === 'ArrowRight'){ e.preventDefault(); scrollByStep(1); }
      });
    }

    // aktywacja/zmiana stanu
    ['scroll','resize'].forEach(evt => track.addEventListener(evt, updateButtons, { passive:true }));
    window.addEventListener('resize', updateButtons);
    updateButtons();
    
    console.log('Gallery 6 initialized successfully');
    return true;
  }

  // Try to initialize immediately
  if (!initGallery6()) {
    // If not ready, try on DOMContentLoaded
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        if (!initGallery6()) {
          console.log('Gallery 6 initialization failed after DOMContentLoaded');
        }
      }, 100);
    });
  }
})();
