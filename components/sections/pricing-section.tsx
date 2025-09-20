"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface PricingSectionProps {
  data: {
    title: string
    packages: {
      name: string
      description: string
      price: string
      features: string[]
      popular: boolean
    }[]
  }
}

export function PricingSection({ data }: PricingSectionProps) {
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
      id="pricing"
      ref={ref}
      className="py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {data.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {data.packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={cn(
                "relative bg-white rounded-2xl border-2 p-8 transition-all duration-700 ease-out",
                `delay-${index * 200}`,
                pkg.popular
                  ? "border-purple-500 shadow-xl scale-105"
                  : "border-gray-200 shadow-lg hover:shadow-xl",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
              {/* Badge "Najczęściej wybierany" */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Najczęściej wybierany
                  </div>
                </div>
              )}

              <div className="space-y-6">
                {/* Nagłówek pakietu */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="text-3xl font-bold text-gray-900">
                    {pkg.price}
                  </div>
                </div>

                {/* Lista korzyści */}
                <ul className="space-y-4">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Przycisk */}
                <div className="pt-4">
                  <a
                    href="#contact"
                    className={cn(
                      "w-full inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-200",
                      pkg.popular
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    )}
                  >
                    Umów konsultację
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
