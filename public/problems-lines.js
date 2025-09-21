(function(){
  const section = document.getElementById('problems-section');
  if(!section) return;

  const svg = section.querySelector('.problems__lines');
  const heading = section.querySelector('#problems-heading');
  const boxes = Array.from(section.querySelectorAll('.problem-box'));

  // konfigurowalne odstępy
  const GAP_BELOW_HEADING = 24; // px od dołu nagłówka do startu bus
  const BOX_TOP_OFFSET    = 6;  // px nad topem boxa, gdzie kończy linia

  function rectRel(el, ref){
    const a = el.getBoundingClientRect();
    const b = ref.getBoundingClientRect();
    return { x:a.left-b.left, y:a.top-b.top, w:a.width, h:a.height };
  }

  function ensurePaths(n){
    const paths = svg.querySelectorAll('path.problems__path');
    const miss = n - paths.length;
    for(let i=0;i<miss;i++){
      const p = document.createElementNS('http://www.w3.org/2000/svg','path');
      p.setAttribute('class','problems__path');
      svg.appendChild(p);
    }
    if(miss<0){
      for(let i=0;i<Math.abs(miss);i++){
        svg.lastChild && svg.removeChild(svg.lastChild);
      }
    }
    return svg.querySelectorAll('path.problems__path');
  }

  function draw(){
    const s = section.getBoundingClientRect();
    svg.setAttribute('viewBox', `0 0 ${s.width} ${s.height}`);

    // start: środek poniżej nagłówka
    const hr = rectRel(heading, section);
    const startX = hr.x + hr.w/2;
    const startY = hr.y + hr.h;
    // wspólna linia bazowa (idealne wyrównanie)
    const busY = startY + GAP_BELOW_HEADING;

    // dopasowanie grubości linii do szerokości
    const strokeW = Math.max(4, Math.min(8, s.width/220));
    section.style.setProperty('--line-width', strokeW + 'px');

    const paths = ensurePaths(boxes.length);

    boxes.forEach((box, i)=>{
      const br = rectRel(box, section);
      const boxTop = br.y;
      const boxCenterX = br.x + br.w/2;

      // końcówka lekko nad boxem
      const endY = boxTop - BOX_TOP_OFFSET;

      // ŚCIEŻKA Z TRZEMA ODCINKAMI: pion -> poziom -> pion (90°)
      const d = [
        `M ${startX},${startY}`, // start pod nagłówkiem
        `V ${busY}`,             // pion w dół do wspólnej linii
        `H ${boxCenterX}`,       // poziom do środka boxa
        `V ${endY}`              // pion w dół tuż nad box
      ].join(' ');

      paths[i].setAttribute('d', d);
    });
  }

  // rysuj na ładowanie / resize / po załadowaniu fontów
  window.addEventListener('load', draw, {once:true});
  window.addEventListener('resize', draw);
  const ro = new ResizeObserver(draw);
  ro.observe(section);
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(draw);

  // fallback
  setTimeout(draw, 0);
})();
