(function(){
  const nav = document.querySelector('.nav-root');
  const shell = document.querySelector('.nav-shell');
  const toggle = document.querySelector('.menu-toggle');
  const panel = document.querySelector('.mobile-panel');

  // Scroll state -> glass nav
  const onScroll = () => {
    const scrolled = window.scrollY > 50;
    shell.classList.toggle('is-scrolled', scrolled);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile toggle
  function setMenuState(active){
    nav.dataset.state = active ? 'active' : 'inactive';
    panel.style.display = active ? 'flex' : 'none';
    toggle.setAttribute('aria-expanded', String(active));
    toggle.setAttribute('aria-label', active ? 'Close Menu' : 'Open Menu');

    // ikonki
    const open = toggle.querySelector('.icon-open');
    const close = toggle.querySelector('.icon-close');
    if(active){
      open.style.opacity = 0; open.style.transform = 'rotate(180deg) scale(0.5)';
      close.style.opacity = 1; close.style.transform = 'rotate(0) scale(1)';
    }else{
      open.style.opacity = 1; open.style.transform = 'rotate(0) scale(1)';
      close.style.opacity = 0; close.style.transform = 'rotate(-180deg) scale(0.5)';
    }
  }

  let active = false;
  toggle.addEventListener('click', () => {
    active = !active;
    setMenuState(active);
  });

  // zamknij menu po kliknięciu w link (mobile)
  panel.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=>{ active=false; setMenuState(false); });
  });

  // zamknij na resize do desktopu
  window.addEventListener('resize', ()=>{
    if(window.innerWidth >= 1024 && active){
      active = false; setMenuState(false);
    }
  });
})();
