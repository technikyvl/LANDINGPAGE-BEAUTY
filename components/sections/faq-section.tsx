"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface FAQSectionProps {
  data: {
    title: string
    items: {
      question: string
      answer: string
    }[]
  }
}

export function FAQSection({ data }: FAQSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [openItems, setOpenItems] = useState<number[]>([])
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

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section
      id="faq"
      ref={ref}
      className="py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight bg-gradient-to-br from-gray-800 via-gray-700 to-gray-500 bg-clip-text text-transparent drop-shadow-2xl mb-6 animate-appear">
            {data.title}
          </h2>
        </div>

        <div className="space-y-4">
          {data.items.map((item, index) => (
            <div
              key={index}
              className={cn(
                "bg-white rounded-xl border border-gray-200 transition-all duration-700 ease-out",
                `delay-${index * 100}`,
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </span>
                <div className={cn(
                  "w-6 h-6 flex items-center justify-center transition-transform duration-200",
                  openItems.includes(index) ? "rotate-180" : ""
                )}>
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                openItems.includes(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              )}>
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
