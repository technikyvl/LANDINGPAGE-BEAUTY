(function() {
  function initTabs() {
    const tabs = document.querySelectorAll('#uslugi-problemy .tab');
    const panels = document.querySelectorAll('#uslugi-problemy .panel');
    
    if (tabs.length === 0 || panels.length === 0) {
      return false;
    }

    function activate(idx) {
      tabs.forEach((tab, i) => {
        const isActive = i === idx;
        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-selected', isActive.toString());
        
        if (panels[i]) {
          panels[i].hidden = !isActive;
          panels[i].classList.toggle('is-active', isActive);
        }
      });
    }

    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => activate(i));
      tab.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          tabs[(i + 1) % tabs.length].focus();
        }
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          tabs[(i - 1 + tabs.length) % tabs.length].focus();
        }
      });
    });
    
    return true;
  }

  // Try to initialize immediately
  if (!initTabs()) {
    // If not ready, try on DOMContentLoaded
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(initTabs, 100);
    });
  }
})();
