document.addEventListener('DOMContentLoaded', function() {
  function drawProblemLines() {
    const svg = document.getElementById('problem-lines');
    if (!svg) return;

    // Clear existing lines
    svg.innerHTML = '';

    // Get header position (center of the heading)
    const header = document.querySelector('h2');
    if (!header) return;

    const headerRect = header.getBoundingClientRect();
    const containerRect = svg.getBoundingClientRect();
    
    // Calculate header center position relative to SVG
    const headerCenterX = (headerRect.left + headerRect.width / 2) - containerRect.left;
    const headerCenterY = (headerRect.bottom + 20) - containerRect.top; // 20px below header

    // Get only Problem 1 circle
    const problem1Circle = document.querySelector('[data-problem="1"] .problem-circle');
    
    if (problem1Circle) {
      const circleRect = problem1Circle.getBoundingClientRect();
      
      // Calculate circle center position relative to SVG
      const circleCenterX = (circleRect.left + circleRect.width / 2) - containerRect.left;
      const circleCenterY = (circleRect.top + circleRect.height / 2) - containerRect.top;

      // Create path element
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      
      // Calculate control point for smooth curve
      const controlX = headerCenterX + (circleCenterX - headerCenterX) * 0.3;
      const controlY = headerCenterY + (circleCenterY - headerCenterY) * 0.7;

      // Create curved path from header to Problem 1 circle
      const pathData = `M ${headerCenterX} ${headerCenterY} Q ${controlX} ${controlY} ${circleCenterX} ${circleCenterY}`;
      
      path.setAttribute('d', pathData);
      path.setAttribute('stroke', '#ff6900');
      path.setAttribute('stroke-width', '4');
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke-linecap', 'round');
      
      // Add animation
      path.style.animation = 'drawLine 1.2s ease-out forwards';
      path.style.strokeDasharray = '1000';
      path.style.strokeDashoffset = '1000';

      svg.appendChild(path);
    }
  }

  // Draw lines when page loads
  drawProblemLines();

  // Redraw lines on window resize
  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(drawProblemLines, 100);
  });

  // Redraw lines when images load (in case they affect layout)
  window.addEventListener('load', drawProblemLines);
});

// CSS animation for drawing lines
const style = document.createElement('style');
style.textContent = `
  @keyframes drawLine {
    to {
      stroke-dashoffset: 0;
    }
  }
`;
document.head.appendChild(style);
