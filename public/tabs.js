// Simple test first
console.log('Tabs script loaded');

// Try multiple approaches
function initTabs() {
  console.log('Initializing tabs...');
  
  const tabs = document.querySelectorAll('#uslugi-problemy .tab');
  const panels = document.querySelectorAll('#uslugi-problemy .panel');
  
  console.log('Found tabs:', tabs.length);
  console.log('Found panels:', panels.length);

  if (tabs.length === 0 || panels.length === 0) {
    console.error('Tabs or panels not found!');
    return false;
  }

  function activate(idx){
    console.log('Activating tab:', idx);
    tabs.forEach((t,i)=>{
      const active = i === idx;
      console.log(`Tab ${i}: active=${active}`);
      t.classList.toggle('is-active', active);
      t.setAttribute('aria-selected', String(active));
      if (panels[i]) {
        panels[i].hidden = !active;
        panels[i].classList.toggle('is-active', active);
        console.log(`Panel ${i}: hidden=${panels[i].hidden}`);
      }
    });
  }

  tabs.forEach((tab,i)=>{
    tab.addEventListener('click', ()=>{
      console.log('Tab clicked:', i);
      activate(i);
    });
    tab.addEventListener('keydown', (e)=>{
      if(e.key === 'ArrowRight'){ e.preventDefault(); tabs[(i+1)%tabs.length].focus(); }
      if(e.key === 'ArrowLeft'){ e.preventDefault(); tabs[(i-1+tabs.length)%tabs.length].focus(); }
    });
  });
  
  return true;
}

// Try multiple times
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, trying to init tabs...');
  setTimeout(() => {
    if (!initTabs()) {
      console.log('Retrying in 500ms...');
      setTimeout(() => {
        if (!initTabs()) {
          console.log('Retrying in 1000ms...');
          setTimeout(initTabs, 1000);
        }
      }, 500);
    }
  }, 100);
});

// Also try on window load
window.addEventListener('load', function() {
  console.log('Window loaded, trying to init tabs...');
  setTimeout(initTabs, 200);
});
