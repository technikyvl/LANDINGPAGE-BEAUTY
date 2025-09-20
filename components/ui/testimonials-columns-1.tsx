"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  text: string
  image: string
  name: string
  role: string
}

interface TestimonialsColumns1Props {
  testimonials: Testimonial[]
  className?: string
}

export function TestimonialsColumns1({ testimonials, className }: TestimonialsColumns1Props) {
  const [currentIndex, setCurrentIndex] = useState(0)
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section
      ref={ref}
      className={cn("py-16 md:py-24 bg-white", className)}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight bg-gradient-to-br from-gray-800 via-gray-700 to-gray-500 bg-clip-text text-transparent drop-shadow-2xl mb-6 animate-appear">
            Opinie klientów
          </h2>
          <p className="text-sm font-medium text-gray-600 max-w-3xl mx-auto sm:text-lg animate-appear opacity-0 delay-100">
            Zobacz, co mówią o nas właścicielki salonów beauty
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div
            className={cn(
              "bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12 transition-all duration-700 ease-out",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            {/* Gwiazdki */}
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current"
                />
              ))}
            </div>

            {/* Tekst opinii */}
            <blockquote className="text-lg md:text-xl text-gray-700 italic text-center mb-8 leading-relaxed">
              "{currentTestimonial.text}"
            </blockquote>

            {/* Informacje o autorze */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src={currentTestimonial.image}
                  alt={`Zdjęcie ${currentTestimonial.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {currentTestimonial.name}
                </h3>
                <p className="text-gray-600">
                  {currentTestimonial.role}
                </p>
              </div>
            </div>
          </div>

          {/* Przyciski nawigacji */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border-gray-300 hover:border-gray-400 transition-colors duration-200"
              aria-label="Poprzednia opinia"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-gray-300 hover:border-gray-400 transition-colors duration-200"
              aria-label="Następna opinia"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Wskaźniki */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors duration-200",
                  index === currentIndex
                    ? "bg-gray-800"
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Przejdź do opinii ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
