"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface CaseSectionProps {
  data: {
    title: string
    kpis: string[]
    story: string
    testimonial: {
      text: string
      author: string
      role: string
    }
  }
}

export function CaseSection({ data }: CaseSectionProps) {
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
      id="case"
      ref={ref}
      className="py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-semibold leading-tight bg-gradient-to-br from-gray-800 via-gray-700 to-gray-500 bg-clip-text text-transparent drop-shadow-2xl mb-8 animate-appear">
            {data.title}
          </h3>
          
          {/* KPI badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {data.kpis.map((kpi, index) => (
              <div
                key={index}
                className={cn(
                  "bg-white px-6 py-3 rounded-full shadow-lg border border-blue-200 transition-all duration-700 ease-out",
                  `delay-${index * 200}`,
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
              >
                <span className="text-lg font-semibold text-blue-700">
                  {kpi}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-16">
          {/* Historia i Testimonial */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Historia */}
            <div
              className={cn(
                "space-y-6 transition-all duration-700 ease-out",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Historia sukcesu
              </h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                {data.story}
              </p>
            </div>

            {/* Testimonial */}
            <div
              className={cn(
                "transition-all duration-700 ease-out delay-200",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
            <blockquote className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <div className="mb-6">
                <svg className="w-8 h-8 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-4c0-2.2 1.8-4 4-4V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-4c0-2.2 1.8-4 4-4V8z" />
                </svg>
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  "{data.testimonial.text}"
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {data.testimonial.author.charAt(0)}
                  </span>
                </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {data.testimonial.author}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {data.testimonial.role}
                    </div>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>

          {/* Dashboardy z wynikami */}
          <div
            className={cn(
              "transition-all duration-700 ease-out delay-400",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Konkretne wyniki w liczbach
            </h4>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Dashboard kampanii */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4">
                  <h5 className="text-white font-semibold text-lg">Wyniki kampanii Meta Ads</h5>
                </div>
                <div className="p-6">
                  <img
                    src="/wyniki_kampania (1).jpg"
                    alt="Dashboard z wynikami kampanii Meta Ads - wyświetlenia, zasięg, interakcje"
                    className="w-full h-auto rounded-lg shadow-md"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Dashboard SEO */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-teal-600 p-4">
                  <h5 className="text-white font-semibold text-lg">Wyniki pozycjonowania SEO</h5>
                </div>
                <div className="p-6">
                  <img
                    src="/wyniki_seo.jpg"
                    alt="Dashboard z wynikami SEO - pozycje w Google, ruch organiczny, słowa kluczowe"
                    className="w-full h-auto rounded-lg shadow-md"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
