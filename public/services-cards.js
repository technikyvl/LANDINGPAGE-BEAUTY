document.addEventListener('DOMContentLoaded', () => {
  const MAIN = getCss('--svc-main') || '#ff6900';
  const SEC  = getCss('--svc-sec')  || '#f54900';

  function getCss(v){ return getComputedStyle(document.documentElement).getPropertyValue(v).trim(); }

  // Dodaj małe opóźnienie, aby upewnić się, że wszystkie elementy są załadowane
  setTimeout(() => {
    initCharts();
  }, 100);

  function initCharts() {
    console.log('Inicjalizacja wykresów...');
    
    /* ===== helpers ===== */
    function drawBars(svg, dataset) {
      const NS = 'http://www.w3.org/2000/svg';
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      dataset.forEach(d => {
        const r = document.createElementNS(NS, 'rect');
        r.setAttribute('x', d.x);
        r.setAttribute('y', d.y);
        r.setAttribute('width', d.w);
        r.setAttribute('height', d.h);
        r.setAttribute('rx', '2');
        r.setAttribute('ry', '2');
        r.setAttribute('fill', d.fill);
        r.style.transition = 'all .5s cubic-bezier(.6,.6,0,1)';
        svg.appendChild(r);
      });
    }

    /* ===== Card 1 – bars ===== */
    const base1 = [
      {x:40,w:15,y:110,h:20,fill:SEC},
      {x:60,w:15,y:90,h:20,fill:MAIN},
      {x:80,w:15,y:70,h:40,fill:MAIN},
      {x:100,w:15,y:80,h:30,fill:MAIN},
      {x:120,w:15,y:110,h:30,fill:SEC},
      {x:140,w:15,y:110,h:50,fill:SEC},
      {x:160,w:15,y:60,h:50,fill:MAIN},
      {x:180,w:15,y:80,h:30,fill:MAIN},
      {x:200,w:15,y:110,h:20,fill:SEC},
      {x:220,w:15,y:70,h:40,fill:MAIN},
      {x:240,w:15,y:110,h:30,fill:SEC},
      {x:260,w:15,y:110,h:50,fill:SEC},
      {x:280,w:15,y:110,h:20,fill:SEC},
      {x:300,w:15,y:80,h:30,fill:MAIN},
    ];
    const hoverMap1 = [
      {y:130,h:20},{y:130,h:20},{y:120,h:30},{y:100,h:50},{y:110,h:40},
      {y:130,h:20},{y:120,h:30},{y:130,h:20},{y:110,h:40},{y:90,h:60},
      {y:80,h:70},{y:100,h:50},{y:70,h:80},{y:60,h:90}
    ];

    const barsElements = document.querySelectorAll('.svc-bars');
    console.log('Znaleziono elementów .svc-bars:', barsElements.length);
    
    barsElements.forEach(svg => {
      drawBars(svg, base1);
      const rects = [...svg.querySelectorAll('rect')];
      const card = svg.closest('.svc-card');
      card.addEventListener('mouseenter', () => {
        rects.forEach((r, i) => { r.setAttribute('y', hoverMap1[i].y); r.setAttribute('height', hoverMap1[i].h); });
      });
      card.addEventListener('mouseleave', () => {
        rects.forEach((r, i) => { r.setAttribute('y', base1[i].y); r.setAttribute('height', base1[i].h); });
      });
    });

    /* ===== Card 3 – bars variant ===== */
    const base3 = [
      {x:8,w:20,y:175,h:21,fill:MAIN}, {x:32,w:20,y:165,h:31,fill:SEC},
      {x:67,w:20,y:170,h:26,fill:MAIN}, {x:91,w:20,y:150,h:46,fill:SEC},
      {x:126,w:20,y:139,h:57,fill:MAIN}, {x:150,w:20,y:155,h:41,fill:SEC},
      {x:187,w:20,y:130,h:66,fill:MAIN}, {x:211,w:20,y:158,h:38,fill:SEC},
      {x:248,w:20,y:147,h:49,fill:MAIN}, {x:272,w:20,y:127,h:69,fill:SEC},
      {x:307,w:20,y:130,h:66,fill:MAIN}
    ];
    
    const barsVariantElements = document.querySelectorAll('.svc-bars-variant');
    console.log('Znaleziono elementów .svc-bars-variant:', barsVariantElements.length);
    
    barsVariantElements.forEach(svg => {
      drawBars(svg, base3);
      const rects = [...svg.querySelectorAll('rect')];
      const card = svg.closest('.svc-card');
      card.addEventListener('mouseenter', () => {
        rects.forEach((r, i) => {
          const y0 = base3[i].y, h0 = base3[i].h;
          r.setAttribute('y', Math.max(60, y0 - 25));
          r.setAttribute('height', h0 + 25);
        });
      });
      card.addEventListener('mouseleave', () => {
        rects.forEach((r, i) => { r.setAttribute('y', base3[i].y); r.setAttribute('height', base3[i].h); });
      });
    });

    /* ===== Card 2 – donut ===== */
    const donut = document.querySelector('.svc-card--donut');
    console.log('Znaleziono element donut:', donut);
    
    if (donut) {
      const main = donut.querySelector('.donut-main');
      const sec  = donut.querySelector('.donut-sec');
      const value = donut.querySelector('.donut-value');
      const C = 2 * Math.PI * 40;

      function setProgress(mainPct, secPct){
        const mainOff = C - (mainPct/100)*C;
        const secOff  = C - (secPct/100)*C;
        main.style.strokeDasharray = C;
        main.style.strokeDashoffset = mainOff;
        main.style.stroke = MAIN;
        sec.style.strokeDasharray = C;
        sec.style.strokeDashoffset = secOff;
        sec.style.stroke = SEC;
        value.textContent = `${Math.round(secPct>66?secPct:mainPct)}%`;
      }

      setProgress(12.5, 0);
      donut.addEventListener('mouseenter', ()=> setProgress(66, 100));
      donut.addEventListener('mouseleave', ()=> setProgress(12.5, 0));
    }

    /* Re-render on resize (gdyby layout przeliczał się inaczej) */
    let rAF;
    window.addEventListener('resize', () => {
      cancelAnimationFrame(rAF);
      rAF = requestAnimationFrame(() => {
        document.querySelectorAll('.svc-bars').forEach(svg => drawBars(svg, base1));
        document.querySelectorAll('.svc-bars-variant').forEach(svg => drawBars(svg, base3));
      });
    });
  }
});