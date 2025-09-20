"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface ProcessSectionProps {
  data: {
    title: string
    steps: {
      number: number
      title: string
    }[]
  }
}

export function ProcessSection({ data }: ProcessSectionProps) {
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
      id="process"
      ref={ref}
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {data.title}
          </h2>
        </div>

        {/* Linia czasu - mobile: pionowa, desktop: pozioma */}
        <div className="relative">
          {/* Linia łącząca - ukryta na mobile, widoczna na desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform -translate-y-1/2" />
          
          {/* Linia łącząca - mobile: pionowa */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
            {data.steps.map((step, index) => (
              <div
                key={step.number}
                className={cn(
                  "relative transition-all duration-700 ease-out",
                  `delay-${index * 200}`,
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Badge z numerem */}
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl font-bold">
                      {step.number}
                    </span>
                  </div>

                  {/* Treść kroku */}
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 max-w-sm">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
