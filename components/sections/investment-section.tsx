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
        <div className="flex justify-center">
          <div
            className={cn(
              "relative w-full max-w-4xl h-96",
              "transition-all duration-700 ease-out",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            {/* Chart Container */}
            <div className="relative h-64 w-full">
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
              <svg width="100%" height="100%" className="absolute inset-0">
                {/* Y-axis */}
                <line x1="60" y1="20" x2="60" y2="240" stroke="#e5e7eb" strokeWidth="2"/>
                
                {/* X-axis */}
                <line x1="60" y1="240" x2="740" y2="240" stroke="#e5e7eb" strokeWidth="2"/>
                
                {/* Y-axis labels */}
                <text x="50" y="30" textAnchor="end" className="text-xs fill-gray-500 font-medium">100k</text>
                <text x="50" y="80" textAnchor="end" className="text-xs fill-gray-500 font-medium">80k</text>
                <text x="50" y="130" textAnchor="end" className="text-xs fill-gray-500 font-medium">60k</text>
                <text x="50" y="180" textAnchor="end" className="text-xs fill-gray-500 font-medium">40k</text>
                <text x="50" y="230" textAnchor="end" className="text-xs fill-gray-500 font-medium">20k</text>
                
                {/* X-axis labels */}
                <text x="120" y="255" textAnchor="middle" className="text-xs fill-gray-500 font-medium">Miesiąc 1</text>
                <text x="240" y="255" textAnchor="middle" className="text-xs fill-gray-500 font-medium">Miesiąc 2</text>
                <text x="360" y="255" textAnchor="middle" className="text-xs fill-gray-500 font-medium">Miesiąc 3</text>
                <text x="480" y="255" textAnchor="middle" className="text-xs fill-gray-500 font-medium">Miesiąc 4</text>
                <text x="600" y="255" textAnchor="middle" className="text-xs fill-gray-500 font-medium">Miesiąc 5</text>
                <text x="720" y="255" textAnchor="middle" className="text-xs fill-gray-500 font-medium">Miesiąc 6</text>
                
                {/* Data points with non-linear upward growth */}
                <circle cx="120" cy="220" r="4" fill="#ff6900" className="drop-shadow-sm" style={{
                  opacity: isVisible ? 1 : 0,
                  animation: isVisible ? `fadeInScale 0.6s ease-out 0.2s both` : 'none'
                }}/>
                <circle cx="240" cy="200" r="4" fill="#ff6900" className="drop-shadow-sm" style={{
                  opacity: isVisible ? 1 : 0,
                  animation: isVisible ? `fadeInScale 0.6s ease-out 0.4s both` : 'none'
                }}/>
                <circle cx="360" cy="160" r="4" fill="#ff6900" className="drop-shadow-sm" style={{
                  opacity: isVisible ? 1 : 0,
                  animation: isVisible ? `fadeInScale 0.6s ease-out 0.6s both` : 'none'
                }}/>
                <circle cx="480" cy="100" r="4" fill="#ff6900" className="drop-shadow-sm" style={{
                  opacity: isVisible ? 1 : 0,
                  animation: isVisible ? `fadeInScale 0.6s ease-out 0.8s both` : 'none'
                }}/>
                <circle cx="600" cy="50" r="4" fill="#ff6900" className="drop-shadow-sm" style={{
                  opacity: isVisible ? 1 : 0,
                  animation: isVisible ? `fadeInScale 0.6s ease-out 1.0s both` : 'none'
                }}/>
                <circle cx="720" cy="25" r="4" fill="#ff6900" className="drop-shadow-sm" style={{
                  opacity: isVisible ? 1 : 0,
                  animation: isVisible ? `fadeInScale 0.6s ease-out 1.2s both` : 'none'
                }}/>
                
                {/* Animated trend line with exponential curve */}
                <path 
                  d="M 120,220 Q 200,210 240,200 Q 320,180 360,160 Q 420,120 480,100 Q 540,70 600,50 Q 660,35 720,25" 
                  stroke="#ff6900" 
                  strokeWidth="3" 
                  fill="none"
                  className="drop-shadow-sm"
                  style={{
                    strokeDasharray: isVisible ? '1000' : '0',
                    strokeDashoffset: isVisible ? '0' : '1000',
                    animation: isVisible ? `drawLine 2s ease-out 0.5s both` : 'none'
                  }}
                />
                
                {/* Animated gradient fill under the line */}
                <defs>
                  <linearGradient id={`chartGradient-${animationKey}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ff6900" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#ff6900" stopOpacity="0.05"/>
                  </linearGradient>
                </defs>
                <path 
                  d="M 120,220 Q 200,210 240,200 Q 320,180 360,160 Q 420,120 480,100 Q 540,70 600,50 Q 660,35 720,25 L 720,240 L 120,240 Z" 
                  fill={`url(#chartGradient-${animationKey})`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    animation: isVisible ? `fadeInFill 1s ease-out 1.5s both` : 'none'
                  }}
                />
              </svg>

              {/* Value indicators */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Przychody</span>
                </div>
              </div>

              {/* Current value highlight */}
              <div className="absolute top-16 right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg px-4 py-2 shadow-lg" style={{
                opacity: isVisible ? 1 : 0,
                animation: isVisible ? `fadeInScale 0.6s ease-out 1.8s both` : 'none'
              }}>
                <div className="text-sm font-medium">+300% wzrost</div>
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
