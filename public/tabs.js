(function () {
  const tabs = document.querySelectorAll('#uslugi-problemy .tab');
  const panels = document.querySelectorAll('#uslugi-problemy .panel');

  function activate(idx){
    tabs.forEach((t,i)=>{
      const active = i === idx;
      t.classList.toggle('is-active', active);
      t.setAttribute('aria-selected', String(active));
      panels[i].hidden = !active;
      panels[i].classList.toggle('is-active', active);
    });
  }

  tabs.forEach((tab,i)=>{
    tab.addEventListener('click', ()=>activate(i));
    tab.addEventListener('keydown', (e)=>{
      if(e.key === 'ArrowRight'){ e.preventDefault(); tabs[(i+1)%tabs.length].focus(); }
      if(e.key === 'ArrowLeft'){ e.preventDefault(); tabs[(i-1+tabs.length)%tabs.length].focus(); }
    });
  });
})();
