"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface TrustSectionProps {
  data: {
    title: string
    features: {
      title: string
      description: string
    }[]
    integrations: string[]
  }
}

export function TrustSection({ data }: TrustSectionProps) {
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
      id="trust"
      ref={ref}
      className="py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {data.title}
          </h2>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {data.features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "text-center space-y-4 transition-all duration-700 ease-out",
                `delay-${index * 200}`,
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto flex items-center justify-center">
                <span className="text-white text-2xl">
                  {index === 0 && "💄"}
                  {index === 1 && "⚙️"}
                  {index === 2 && "🤖"}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Integrations */}
        <div
          className={cn(
            "text-center transition-all duration-700 ease-out delay-600",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
        >
          <h3 className="text-lg font-semibold text-gray-600 mb-8">
            Integracje
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {data.integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-gray-100 px-6 py-3 rounded-lg text-gray-600 font-medium hover:bg-gray-200 transition-colors duration-200"
              >
                {integration}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
