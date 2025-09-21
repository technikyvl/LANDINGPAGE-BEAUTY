(function(){
  const track = document.getElementById('g6-track');
  const btnPrev = document.getElementById('g6-prev');
  const btnNext = document.getElementById('g6-next');

  if (!track || !btnPrev || !btnNext) {
    console.log('Gallery 6 elements not found');
    return;
  }

  // konfiguracja przewijania o szerokość widoczną (z uwzględnieniem gap)
  const getStep = () => track.clientWidth * 0.9; // ~90% viewportu

  function updateButtons(){
    const maxScroll = track.scrollWidth - track.clientWidth - 1; // margines
    btnPrev.disabled = track.scrollLeft <= 0;
    btnNext.disabled = track.scrollLeft >= maxScroll;
  }

  function scrollByStep(dir){
    track.scrollBy({ left: dir * getStep(), behavior: 'smooth' });
  }

  btnPrev.addEventListener('click', () => scrollByStep(-1));
  btnNext.addEventListener('click', () => scrollByStep(1));

  // klawiatura (gdy fokus w obrębie sekcji)
  document.getElementById('gallery-6').addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); scrollByStep(-1); }
    if (e.key === 'ArrowRight'){ e.preventDefault(); scrollByStep(1); }
  });

  // aktywacja/zmiana stanu
  ['scroll','resize'].forEach(evt => track.addEventListener(evt, updateButtons, { passive:true }));
  window.addEventListener('resize', updateButtons);
  updateButtons();
})();
