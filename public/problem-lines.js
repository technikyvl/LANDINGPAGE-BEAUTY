(function () {
  const section = document.getElementById('problemy');
  if (!section) return;

  const svg = section.querySelector('.problemy__lines');
  const heading = section.querySelector('#problemy-heading');
  const items = Array.from(section.querySelectorAll('#problemy-list .problem'));

  // helpers
  function rectRelTo(el, ref) {
    const r1 = el.getBoundingClientRect();
    const r2 = ref.getBoundingClientRect();
    return {
      x: r1.left - r2.left,
      y: r1.top - r2.top,
      w: r1.width,
      h: r1.height
    };
  }

  function pathFor(sx, sy, ex, ey) {
    // Curvy S-shape: first control pulls down from heading,
    // second control lifts up toward the target.
    const midY = sy + (ey - sy) * 0.5;
    const c1x = sx, c1y = midY - 80;
    const c2x = ex, c2y = midY + 80;
    return `M ${sx},${sy} C ${c1x},${c1y} ${c2x},${c2y} ${ex},${ey}`;
  }

  function ensurePaths(n) {
    // create/update exactly n <path> elements
    const existing = Array.from(svg.querySelectorAll('path.problemy__link'));
    while (existing.length < n) {
      const p = document.createElementNS('http://www.w3.org/2000/svg','path');
      p.setAttribute('class','problemy__link');
      svg.appendChild(p);
      existing.push(p);
    }
    while (existing.length > n) {
      existing.pop().remove();
    }
    return existing;
  }

  function draw() {
    // size svg to section's content box
    const s = section.getBoundingClientRect();
    svg.setAttribute('viewBox', `0 0 ${s.width} ${s.height}`);

    // start anchor: center-bottom of heading (8px below)
    const hr = rectRelTo(heading, section);
    const sx = hr.x + hr.w / 2;
    const sy = hr.y + hr.h + 8;

    const paths = ensurePaths(items.length);

    items.forEach((item, i) => {
      const ir = rectRelTo(item, section);
      // end anchor: center-top of item (a bit above top for nice touch)
      const ex = ir.x + ir.w / 2;
      const ey = ir.y - 10;

      const d = pathFor(sx, sy, ex, ey);
      paths[i].setAttribute('d', d);

      // responsive thickness
      const sw = Math.max(5, Math.min(8, s.width / 200));
      paths[i].setAttribute('stroke-width', sw);
    });
  }

  // animate on reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        svg.classList.add('is-visible');
      }
    });
  }, { threshold: 0.2 });
  io.observe(section);

  // redraw on load/resize/font reflow
  const ro = new ResizeObserver(draw);
  ro.observe(section);
  window.addEventListener('load', draw, { once: true });
  window.addEventListener('resize', draw);
  // if you use custom fonts:
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(draw);

  // ensure initial paint (in case of SSR hydrate)
  setTimeout(draw, 0);
})();
