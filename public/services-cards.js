(function(){
  const MAIN = getCss('--svc-main') || '#ff6900';
  const SEC  = getCss('--svc-sec')  || '#f54900';

  function getCss(v){ return getComputedStyle(document.documentElement).getPropertyValue(v).trim(); }

  /* ===== Card 1 & 3 – bars ===== */
  function drawBars(svg, dataset, onHover){
    const NS = 'http://www.w3.org/2000/svg';
    while(svg.firstChild) svg.removeChild(svg.firstChild);
    dataset.forEach(d=>{
      const r = document.createElementNS(NS,'rect');
      r.setAttribute('x', d.x);
      r.setAttribute('y', d.y);
      r.setAttribute('width', d.w);
      r.setAttribute('height', d.h);
      r.setAttribute('rx','2'); r.setAttribute('ry','2');
      r.setAttribute('fill', d.fill);
      r.style.transition = 'all .5s cubic-bezier(.6,.6,0,1)';
      svg.appendChild(r);
    });
    if(onHover){
      svg.closest('.svc-card').addEventListener('mouseenter', ()=>onHover(true, svg));
      svg.closest('.svc-card').addEventListener('mouseleave', ()=>onHover(false, svg));
    }
  }

  // Card 1 dataset (lekko losowane dla życia)
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
  function hoverBars1(active, svg){
    const rects = [...svg.querySelectorAll('rect')];
    const map = [
      {hoverY:130, hoverH:20}, {hoverY:130, hoverH:20}, {hoverY:120, hoverH:30},
      {hoverY:100, hoverH:50}, {hoverY:110, hoverH:40}, {hoverY:130, hoverH:20},
      {hoverY:120, hoverH:30}, {hoverY:130, hoverH:20}, {hoverY:110, hoverH:40},
      {hoverY:90,  hoverH:60}, {hoverY:80,  hoverH:70}, {hoverY:100, hoverH:50},
      {hoverY:70,  hoverH:80}, {hoverY:60,  hoverH:90}
    ];
    rects.forEach((r,i)=>{
      const y0 = base1[i].y, h0 = base1[i].h;
      const {hoverY, hoverH} = map[i];
      r.setAttribute('y', active ? hoverY : y0);
      r.setAttribute('height', active ? hoverH : h0);
      if(base1[i].fill=== 'currentColor'){ r.setAttribute('fill', active? SEC : '#000'); }
    });
  }

  document.querySelectorAll('.svc-bars').forEach(svg=>{
    drawBars(svg, base1, hoverBars1);
  });

  // Card 3 – inny układ słupków
  const base3 = [
    {x:8,w:20,y:175,h:21,fill:MAIN}, {x:32,w:20,y:165,h:31,fill:SEC},
    {x:67,w:20,y:170,h:26,fill:MAIN}, {x:91,w:20,y:150,h:46,fill:SEC},
    {x:126,w:20,y:139,h:57,fill:MAIN}, {x:150,w:20,y:155,h:41,fill:SEC},
    {x:187,w:20,y:130,h:66,fill:MAIN}, {x:211,w:20,y:158,h:38,fill:SEC},
    {x:248,w:20,y:147,h:49,fill:MAIN}, {x:272,w:20,y:127,h:69,fill:SEC},
    {x:307,w:20,y:130,h:66,fill:MAIN}
  ];
  function hoverBars3(active, svg){
    const rects=[...svg.querySelectorAll('rect')];
    rects.forEach((r,i)=>{
      const y0 = base3[i].y, h0 = base3[i].h;
      const y1 = Math.max(60, y0 - 25), h1 = h0 + 25;
      r.setAttribute('y', active ? y1 : y0);
      r.setAttribute('height', active ? h1 : h0);
    });
  }
  document.querySelectorAll('.svc-bars-variant').forEach(svg=>{
    drawBars(svg, base3, hoverBars3);
  });

  /* ===== Card 2 – donut ===== */
  const donutCard = document.querySelector('.svc-card--donut');
  if(donutCard){
    const main = donutCard.querySelector('.donut-main');
    const sec  = donutCard.querySelector('.donut-sec');
    const value = donutCard.querySelector('.donut-value');
    const C = 2*Math.PI*40; // circumference
    function setProgress(mainPct, secPct){
      const mainOff = C - (mainPct/100)*C;
      const secOff  = C - (secPct/100)*C;
      main.style.strokeDasharray = C;
      sec.style.strokeDasharray  = C;
      main.style.strokeDashoffset = mainOff;
      sec.style.strokeDashoffset  = secOff;
      value.textContent = `${Math.round(secPct>66?secPct:mainPct)}%`;
    }
    setProgress(12.5, 0);
    donutCard.addEventListener('mouseenter', ()=>{ setProgress(66, 100); });
    donutCard.addEventListener('mouseleave', ()=>{ setProgress(12.5, 0); });
  }

  /* ===== Observed reveal if IntersectionObserver exists (enhance) ===== */
  if('IntersectionObserver' in window){
    const io = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting) e.target.classList.add('is-inview');
      });
    },{threshold:.12});
    document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  }
})();
