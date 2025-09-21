(function(){
  const section = document.getElementById('problems-section');
  if(!section) return;

  const svg = section.querySelector('.problems__lines');
  const heading = section.querySelector('#problems-heading');
  const boxes = Array.from(section.querySelectorAll('.problem-box'));

  // odstępy (możesz stroić)
  const GAP_BELOW_HEADING = 24; // od dołu h2 do „szyny"
  const BOX_TOP_OFFSET    = 6;  // kończymy tuż nad boxem

  function relRect(el, ref){
    const a = el.getBoundingClientRect();
    const b = ref.getBoundingClientRect();
    return { x: a.left - b.left, y: a.top - b.top, w: a.width, h: a.height };
  }

  function ensurePaths(n){
    // stwórz dokładnie n ścieżek <path>
    let paths = svg.querySelectorAll('path.problems__path');
    const diff = n - paths.length;
    if (diff > 0){
      for (let i=0; i<diff; i++){
        const p = document.createElementNS('http://www.w3.org/2000/svg','path');
        p.setAttribute('class','problems__path');
        svg.appendChild(p);
      }
    } else if (diff < 0){
      for (let i=0; i<Math.abs(diff); i++){
        svg.lastChild && svg.removeChild(svg.lastChild);
      }
    }
    return svg.querySelectorAll('path.problems__path');
  }

  function draw(){
    const s = section.getBoundingClientRect();
    svg.setAttribute('viewBox', `0 0 ${s.width} ${s.height}`);

    const hr = relRect(heading, section);
    const startX = hr.x + hr.w/2;
    const startY = hr.y + hr.h;

    const busY = startY + GAP_BELOW_HEADING;

    // dopasuj grubość do szerokości
    const strokeW = Math.max(4, Math.min(8, s.width/220));
    section.style.setProperty('--line-width', strokeW + 'px');

    const paths = ensurePaths(boxes.length);

    boxes.forEach((box, i) =>{
      const br = relRect(box, section);
      const boxCenterX = br.x + br.w/2;
      const endY = br.y - BOX_TOP_OFFSET;

      const d = [
        `M ${startX},${startY}`,
        `V ${busY}`,
        `H ${boxCenterX}`,
        `V ${endY}`
      ].join(' ');

      paths[i].setAttribute('d', d);
    });
  }

  // rysuj po załadowaniu, na resize i po fontach
  window.addEventListener('load', draw, {once:true});
  window.addEventListener('resize', draw);
  const ro = new ResizeObserver(draw);
  ro.observe(section);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(draw);
  setTimeout(draw, 0); // fallback
})();
