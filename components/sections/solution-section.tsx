"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface SolutionSectionProps {
  data: {
    title: string
    pillar1: {
      title: string
      items: string[]
    }
    pillar2: {
      title: string
      items: string[]
    }
  }
}

export function SolutionSection({ data }: SolutionSectionProps) {
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
      id="solution"
      ref={ref}
      className="py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {data.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Filar 1 */}
          <div
            className={cn(
              "bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 transition-all duration-700 ease-out",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl font-bold">1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {data.pillar1.title}
                </h3>
              </div>
              
              <ul className="space-y-4">
                {data.pillar1.items.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Filar 2 */}
          <div
            className={cn(
              "bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100 transition-all duration-700 ease-out delay-200",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl font-bold">2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {data.pillar2.title}
                </h3>
              </div>
              
              <ul className="space-y-4">
                {data.pillar2.items.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Przycisk główny */}
        <div
          className={cn(
            "text-center mt-12 transition-all duration-700 ease-out delay-400",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
        >
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Umów konsultację
          </a>
        </div>
      </div>
    </section>
  )
}
