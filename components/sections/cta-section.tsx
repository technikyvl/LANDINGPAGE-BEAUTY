"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface CTASectionProps {
  data: {
    title: string
    buttons: {
      text: string
      href: string
    }[]
  }
}

export function CTASection({ data }: CTASectionProps) {
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
      id="cta"
      ref={ref}
      className="py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center transition-all duration-700 ease-out",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-4xl font-semibold leading-tight bg-gradient-to-br from-gray-800 via-gray-700 to-gray-500 bg-clip-text text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-7xl md:leading-tight mb-8 animate-appear">
            {data.title}
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {data.buttons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                className={cn(
                  "inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-all duration-200",
                  index === 0
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                )}
              >
                {button.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
