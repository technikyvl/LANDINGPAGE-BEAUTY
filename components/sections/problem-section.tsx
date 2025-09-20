"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface ProblemSectionProps {
  data: {
    title: string
    problems: string[]
    promise: string
  }
}

export function ProblemSection({ data }: ProblemSectionProps) {
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
      id="problem"
      ref={ref}
      className="py-16 md:py-24 bg-gradient-to-b from-orange-100/50 via-orange-50/30 to-white"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Tekst */}
          <div
            className={cn(
              "space-y-8 transition-all duration-700 ease-out",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight bg-gradient-to-br from-gray-800 via-gray-700 to-gray-500 bg-clip-text text-transparent drop-shadow-2xl animate-appear">
              {data.title}
            </h2>
            
            <div className="space-y-4">
              <ul className="space-y-3">
                {data.problems.map((problem, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-lg text-gray-800 font-medium">
                {data.promise}
              </p>
            </div>
          </div>

          {/* Obraz */}
          <div
            className={cn(
              "transition-all duration-700 ease-out delay-200",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-200/50 to-purple-200/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">💄</span>
                    </div>
                    <p className="text-gray-600 font-medium">Salon Beauty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
