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
            Nie kupujesz usługi – inwestujesz w swój biznes.
          </h2>
        </div>

        {/* Chart Container */}
        <div className="flex justify-center items-center mt-16 px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              "relative w-full max-w-5xl h-[400px] sm:h-[450px] lg:h-[500px]",
              "transition-all duration-700 ease-out",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            {/* White glare effect at the top */}
            <div className="absolute top-0 left-0 right-0 h-24 sm:h-28 lg:h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
            
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
              <svg width="100%" height="100%" className="absolute inset-0" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet">
                {/* Y-axis */}
                <line x1="80" y1="50" x2="80" y2="450" stroke="#e5e7eb" strokeWidth="2"/>
                
                {/* X-axis */}
                <line x1="80" y1="450" x2="920" y2="450" stroke="#e5e7eb" strokeWidth="2"/>
                
                {/* Y-axis labels */}
                <text x="70" y="60" textAnchor="end" className="text-xs sm:text-sm fill-gray-500 font-medium">100k</text>
                <text x="70" y="120" textAnchor="end" className="text-xs sm:text-sm fill-gray-500 font-medium">80k</text>
                <text x="70" y="180" textAnchor="end" className="text-xs sm:text-sm fill-gray-500 font-medium">60k</text>
                <text x="70" y="240" textAnchor="end" className="text-xs sm:text-sm fill-gray-500 font-medium">40k</text>
                <text x="70" y="300" textAnchor="end" className="text-xs sm:text-sm fill-gray-500 font-medium">20k</text>
                
                {/* X-axis labels */}
                <text x="160" y="480" textAnchor="middle" className="text-xs sm:text-sm fill-gray-500 font-medium">Miesiąc 1</text>
                <text x="320" y="480" textAnchor="middle" className="text-xs sm:text-sm fill-gray-500 font-medium">Miesiąc 2</text>
                <text x="480" y="480" textAnchor="middle" className="text-xs sm:text-sm fill-gray-500 font-medium">Miesiąc 3</text>
                <text x="640" y="480" textAnchor="middle" className="text-xs sm:text-sm fill-gray-500 font-medium">Miesiąc 4</text>
                <text x="800" y="480" textAnchor="middle" className="text-xs sm:text-sm fill-gray-500 font-medium">Miesiąc 5</text>
                <text x="960" y="480" textAnchor="middle" className="text-xs sm:text-sm fill-gray-500 font-medium">Miesiąc 6</text>
                
                {/* Data points with non-linear upward growth - scaled down 20% */}
                <circle cx="160" cy="420" r="5" fill="#ff6900" className="drop-shadow-sm" style={{
                  opacity: isVisible ? 1 : 0,
                  animation: isVisible ? `fadeInScale 0.6s ease-out 0.2s both` : 'none'
                }}/>
                <circle cx="320" cy="380" r="5" fill="#ff6900" className="drop-shadow-sm" style={{
                  opacity: isVisible ? 1 : 0,
                  animation: isVisible ? `fadeInScale 0.6s ease-out 0.4s both` : 'none'
                }}/>
                <circle cx="480" cy="300" r="5" fill="#ff6900" className="drop-shadow-sm" style={{
                  opacity: isVisible ? 1 : 0,
                  animation: isVisible ? `fadeInScale 0.6s ease-out 0.6s both` : 'none'
                }}/>
                <circle cx="640" cy="180" r="5" fill="#ff6900" className="drop-shadow-sm" style={{
                  opacity: isVisible ? 1 : 0,
                  animation: isVisible ? `fadeInScale 0.6s ease-out 0.8s both` : 'none'
                }}/>
                <circle cx="800" cy="90" r="5" fill="#ff6900" className="drop-shadow-sm" style={{
                  opacity: isVisible ? 1 : 0,
                  animation: isVisible ? `fadeInScale 0.6s ease-out 1.0s both` : 'none'
                }}/>
                <circle cx="960" cy="60" r="5" fill="#ff6900" className="drop-shadow-sm" style={{
                  opacity: isVisible ? 1 : 0,
                  animation: isVisible ? `fadeInScale 0.6s ease-out 1.2s both` : 'none'
                }}/>
                
                {/* Animated trend line with exponential curve - scaled down 20% */}
                <path 
                  d="M 160,420 Q 240,400 320,380 Q 400,340 480,300 Q 560,240 640,180 Q 720,135 800,90 Q 880,75 960,60" 
                  stroke="#ff6900" 
                  strokeWidth="3" 
                  fill="none"
                  className="drop-shadow-sm"
                  style={{
                    strokeDasharray: isVisible ? '1200' : '0',
                    strokeDashoffset: isVisible ? '0' : '1200',
                    animation: isVisible ? `drawLine 2s ease-out 0.5s both` : 'none'
                  }}
                />
                
                {/* Animated gradient fill under the line - scaled down 20% */}
                <defs>
                  <linearGradient id={`chartGradient-${animationKey}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ff6900" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#ff6900" stopOpacity="0.05"/>
                  </linearGradient>
                </defs>
                <path 
                  d="M 160,420 Q 240,400 320,380 Q 400,340 480,300 Q 560,240 640,180 Q 720,135 800,90 Q 880,75 960,60 L 960,450 L 160,450 Z" 
                  fill={`url(#chartGradient-${animationKey})`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    animation: isVisible ? `fadeInFill 1s ease-out 1.5s both` : 'none'
                  }}
                />
              </svg>

              {/* Value indicators */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 sm:px-4 sm:py-3 border border-gray-200 z-20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-orange-500 rounded-full"></div>
                  <span className="text-sm sm:text-base font-medium text-gray-700">Przychody</span>
                </div>
              </div>

              {/* Current value highlight */}
              <div className="absolute top-16 right-4 sm:top-20 sm:right-6 lg:top-24 lg:right-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg px-4 py-2 sm:px-6 sm:py-3 shadow-lg z-20" style={{
                opacity: isVisible ? 1 : 0,
                animation: isVisible ? `fadeInScale 0.6s ease-out 1.8s both` : 'none'
              }}>
                <div className="text-sm sm:text-base font-medium">+300% wzrost</div>
                <div className="text-xs sm:text-sm opacity-90">w ciągu 6 miesięcy</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}
