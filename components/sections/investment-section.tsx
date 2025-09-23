"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export function InvestmentSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animationKey, setAnimationKey] = useState(0)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Reset animation key to restart the chart animation
          setAnimationKey(prev => prev + 1)
        } else {
          setIsVisible(false)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  // Highlight animation effect
  useEffect(() => {
    const highlightElement = document.querySelector('.hero h1 .hl-fix')
    if (!highlightElement) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReducedMotion) {
      // Immediately show full highlight without animation
      highlightElement.classList.add('is-animated')
      return
    }

    // Use IntersectionObserver for smooth animation
    const highlightObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          highlightElement.classList.add('is-animated')
          // Disconnect after first trigger
          highlightObserver.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    highlightObserver.observe(highlightElement)

    return () => highlightObserver.disconnect()
  }, [])

  return (
    <>
      <style jsx>{`
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes drawLine {
          0% {
            stroke-dashoffset: 1000;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes fadeInFill {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        
        /* 1) brutaly wyłącz wszelkie pseudo-elementy i wcześniejsze eksperymenty */
        .hero h1 .hl-fix::before,
        .hero h1 .hl-fix::after {
          content: none !important;
          display: none !important;
        }

        /* 2) wyczyść efekty, które robią „przezroczyste" litery */
        .hero h1 .hl-fix {
          /* layout bez ruszania baseline */
          display: inline;
          position: relative;
          line-height: 1em;
          vertical-align: baseline;
          padding-inline: 0.16em;
          border-radius: 0.5rem;

          /* TŁO — jak w 21st.dev: background na tym samym elemencie co tekst */
          background-image: linear-gradient(120deg, #ff6900 0%, #ea580c 100%);
          background-repeat: no-repeat;
          background-position: left center;
          background-size: 0% 100%; /* start */

          /* GLIFY — twarde przywrócenie koloru tekstu */
          color: inherit !important;
          -webkit-text-fill-color: currentColor !important;
          -webkit-background-clip: padding-box !important;
          background-clip: padding-box !important;
          mix-blend-mode: normal !important;
          text-shadow: none !important;
          opacity: 1 !important;

          /* żadnych warstwowych sztuczek */
          z-index: auto !important;
          filter: none !important;
        }

        /* 3) animacja po aktywacji */
        .hero h1 .hl-fix.is-animated {
          transition: background-size 2s linear 0.5s;
          background-size: 100% 100%;
        }

        /* 4) dostępność */
        @media (prefers-reduced-motion: reduce) {
          .hero h1 .hl-fix { 
            transition: none !important; 
            background-size: 100% 100% !important; 
          }
        }
      `}</style>
      <section
        id="investment"
        ref={ref}
        className="py-24 md:py-32 lg:py-40 bg-white"
      >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold leading-tight bg-gradient-to-br from-gray-800 via-gray-700 to-gray-500 bg-clip-text text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-7xl md:leading-tight">
            Nie kupujesz usługi –{" "}
            <span className="hl-fix" data-hl id="highlight-text">
              inwestujesz
            </span>
            {" "}w swój biznes.
          </h2>
        </div>

        {/* Chart Container */}
        <div className="flex justify-center items-center mt-12 px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              "relative w-full max-w-4xl h-[300px] sm:h-[350px] lg:h-[400px]",
              "transition-all duration-700 ease-out",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            {/* White glare effect at the top */}
            <div className="absolute top-0 left-0 right-0 h-20 sm:h-24 lg:h-28 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
            
            {/* Chart Container */}
            <div className="relative h-full w-full">
              {/* Grid Background */}
              <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%" className="w-full h-full">
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Chart Area */}
              <svg width="100%" height="100%" className="absolute inset-0" viewBox="0 0 800 350" preserveAspectRatio="xMidYMid meet">
                {/* Y-axis */}
                <line x1="40" y1="40" x2="40" y2="320" stroke="#e5e7eb" strokeWidth="1.5"/>
                
                {/* X-axis */}
                <line x1="40" y1="320" x2="760" y2="320" stroke="#e5e7eb" strokeWidth="1.5"/>
                
                {/* Y-axis labels */}
                <text x="30" y="48" textAnchor="end" className="text-xs fill-gray-500 font-medium">100k</text>
                <text x="30" y="88" textAnchor="end" className="text-xs fill-gray-500 font-medium">80k</text>
                <text x="30" y="128" textAnchor="end" className="text-xs fill-gray-500 font-medium">60k</text>
                <text x="30" y="168" textAnchor="end" className="text-xs fill-gray-500 font-medium">40k</text>
                <text x="30" y="208" textAnchor="end" className="text-xs fill-gray-500 font-medium">20k</text>
                
                {/* X-axis labels */}
                <text x="100" y="340" textAnchor="middle" className="text-xs fill-gray-500 font-medium">Miesiąc 1</text>
                <text x="220" y="340" textAnchor="middle" className="text-xs fill-gray-500 font-medium">Miesiąc 2</text>
                <text x="340" y="340" textAnchor="middle" className="text-xs fill-gray-500 font-medium">Miesiąc 3</text>
                <text x="460" y="340" textAnchor="middle" className="text-xs fill-gray-500 font-medium">Miesiąc 4</text>
                <text x="580" y="340" textAnchor="middle" className="text-xs fill-gray-500 font-medium">Miesiąc 5</text>
                <text x="700" y="340" textAnchor="middle" className="text-xs fill-gray-500 font-medium">Miesiąc 6</text>
                
                {/* Data points with more gradual upward growth - starting from Y-axis */}
                <circle cx="100" cy="300" r="4" fill="#ff6900" className="drop-shadow-sm" style={{
                  opacity: isVisible ? 1 : 0,
                  animation: isVisible ? `fadeInScale 0.6s ease-out 0.2s both` : 'none'
                }}/>
                <circle cx="220" cy="280" r="4" fill="#ff6900" className="drop-shadow-sm" style={{
                  opacity: isVisible ? 1 : 0,
                  animation: isVisible ? `fadeInScale 0.6s ease-out 0.4s both` : 'none'
                }}/>
                <circle cx="340" cy="250" r="4" fill="#ff6900" className="drop-shadow-sm" style={{
                  opacity: isVisible ? 1 : 0,
                  animation: isVisible ? `fadeInScale 0.6s ease-out 0.6s both` : 'none'
                }}/>
                <circle cx="460" cy="210" r="4" fill="#ff6900" className="drop-shadow-sm" style={{
                  opacity: isVisible ? 1 : 0,
                  animation: isVisible ? `fadeInScale 0.6s ease-out 0.8s both` : 'none'
                }}/>
                <circle cx="580" cy="160" r="4" fill="#ff6900" className="drop-shadow-sm" style={{
                  opacity: isVisible ? 1 : 0,
                  animation: isVisible ? `fadeInScale 0.6s ease-out 1.0s both` : 'none'
                }}/>
                <circle cx="700" cy="120" r="4" fill="#ff6900" className="drop-shadow-sm" style={{
                  opacity: isVisible ? 1 : 0,
                  animation: isVisible ? `fadeInScale 0.6s ease-out 1.2s both` : 'none'
                }}/>
                
                {/* Animated trend line with more gradual curve - starting from origin (0,0) */}
                <path 
                  d="M 40,320 Q 70,310 100,300 Q 160,290 220,280 Q 280,265 340,250 Q 400,230 460,210 Q 520,185 580,160 Q 640,140 700,120" 
                  stroke="#ff6900" 
                  strokeWidth="2.5" 
                  fill="none"
                  className="drop-shadow-sm"
                  style={{
                    strokeDasharray: isVisible ? '1000' : '0',
                    strokeDashoffset: isVisible ? '0' : '1000',
                    animation: isVisible ? `drawLine 2s ease-out 0.5s both` : 'none'
                  }}
                />
                
                {/* Animated gradient fill under the line - starting from origin (0,0) */}
                <defs>
                  <linearGradient id={`chartGradient-${animationKey}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ff6900" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#ff6900" stopOpacity="0.05"/>
                  </linearGradient>
                </defs>
                <path 
                  d="M 40,320 Q 70,310 100,300 Q 160,290 220,280 Q 280,265 340,250 Q 400,230 460,210 Q 520,185 580,160 Q 640,140 700,120 L 700,320 L 40,320 Z" 
                  fill={`url(#chartGradient-${animationKey})`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    animation: isVisible ? `fadeInFill 1s ease-out 1.5s both` : 'none'
                  }}
                />
              </svg>

              {/* Value indicators */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-6 lg:right-6 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 border border-gray-200 z-20">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-xs sm:text-sm font-medium text-gray-700">Przychody</span>
                </div>
              </div>

              {/* Current value highlight */}
              <div className="absolute top-12 right-3 sm:top-14 sm:right-4 lg:top-18 lg:right-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg z-20" style={{
                opacity: isVisible ? 1 : 0,
                animation: isVisible ? `fadeInScale 0.6s ease-out 1.8s both` : 'none'
              }}>
                <div className="text-xs sm:text-sm font-medium">+300% wzrost</div>
                <div className="text-xs opacity-90">w ciągu 6 miesięcy</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}
