"use client"

import { TestimonialsColumns1 } from "@/components/ui/testimonials-columns-1"

interface TestimonialsCarouselSectionProps {
  data: {
    title: string
    subtitle: string
    testimonials: {
      name: string
      role: string
      salon: string
      image: string
      quote: string
    }[]
  }
}

export function TestimonialsCarouselSection({ data }: TestimonialsCarouselSectionProps) {
  // Transform the data to match the carousel component interface
  const carouselTestimonials = data.testimonials.map(testimonial => ({
    text: testimonial.quote,
    image: testimonial.image,
    name: testimonial.name,
    role: testimonial.role
  }))

  return (
    <TestimonialsColumns1 
      testimonials={carouselTestimonials}
    />
  )
}
