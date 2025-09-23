"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export function InvestmentSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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

        {/* Dashboard Chart Card */}
        <div className="flex justify-center">
          <div
            className={cn(
              "investment-dashboard-card",
              "relative w-full max-w-4xl h-96 p-8",
              "bg-white rounded-2xl border border-gray-200",
              "shadow-lg transition-all duration-700 ease-out",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
            style={{
              backgroundImage: `
                radial-gradient(60% 55% at 70% 100%, rgba(255,105,0,.14) 0%, rgba(255,105,0,0) 70%),
                radial-gradient(45% 40% at 10% 95%, rgba(245,73,0,.12) 0%, rgba(245,73,0,0) 70%),
                radial-gradient(35% 40% at 50% 0%, rgba(255,255,255,.75) 0%, rgba(255,255,255,0) 60%)
              `,
              boxShadow: `
                0 12px 28px rgba(17,24,39,.08),
                inset 0 -14px 22px -10px rgba(255,105,0,.12)
              `
            }}
          >
            {/* Chart Title */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Wzrost przychodów salonu
              </h3>
              <p className="text-gray-600">
                Przewidywane rezultaty po wdrożeniu naszego systemu
              </p>
            </div>

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
                
                {/* Data points */}
                <circle cx="120" cy="200" r="4" fill="#ff6900" className="drop-shadow-sm"/>
                <circle cx="240" cy="170" r="4" fill="#ff6900" className="drop-shadow-sm"/>
                <circle cx="360" cy="140" r="4" fill="#ff6900" className="drop-shadow-sm"/>
                <circle cx="480" cy="110" r="4" fill="#ff6900" className="drop-shadow-sm"/>
                <circle cx="600" cy="80" r="4" fill="#ff6900" className="drop-shadow-sm"/>
                <circle cx="720" cy="50" r="4" fill="#ff6900" className="drop-shadow-sm"/>
                
                {/* Trend line */}
                <path 
                  d="M 120,200 Q 180,185 240,170 Q 300,155 360,140 Q 420,125 480,110 Q 540,95 600,80 Q 660,65 720,50" 
                  stroke="#ff6900" 
                  strokeWidth="3" 
                  fill="none"
                  className="drop-shadow-sm"
                />
                
                {/* Gradient fill under the line */}
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ff6900" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#ff6900" stopOpacity="0.05"/>
                  </linearGradient>
                </defs>
                <path 
                  d="M 120,200 Q 180,185 240,170 Q 300,155 360,140 Q 420,125 480,110 Q 540,95 600,80 Q 660,65 720,50 L 720,240 L 120,240 Z" 
                  fill="url(#chartGradient)"
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
              <div className="absolute top-16 right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg px-4 py-2 shadow-lg">
                <div className="text-sm font-medium">+150% wzrost</div>
                <div className="text-xs opacity-90">w ciągu 6 miesięcy</div>
              </div>
            </div>

            {/* Chart Legend */}
            <div className="mt-6 flex flex-wrap gap-6 justify-center">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-orange-500 rounded"></div>
                <span className="text-sm text-gray-600">Przed wdrożeniem</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded"></div>
                <span className="text-sm text-gray-600">Po wdrożeniu systemu</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={cn(
            "text-center mt-12 transition-all duration-700 ease-out delay-300",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Każda złotówka zainwestowana w nasz system to realny wzrost przychodów Twojego salonu.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Chcę zobaczyć mój wzrost
          </a>
        </div>
      </div>
    </section>
  )
}
