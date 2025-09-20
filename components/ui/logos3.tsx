"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

interface Logos3Props {
  className?: string
}

const logos = [
  {
    name: "Salon Urody Bella",
    description: "Partner 1",
    logo: "/placeholder-logo.svg",
  },
  {
    name: "Beauty Studio Glamour",
    description: "Partner 2", 
    logo: "/placeholder-logo.svg",
  },
  {
    name: "Spa & Wellness Center",
    description: "Partner 3",
    logo: "/placeholder-logo.svg",
  },
  {
    name: "Hair & Beauty Studio",
    description: "Partner 4",
    logo: "/placeholder-logo.svg",
  },
  {
    name: "Nail Art Studio",
    description: "Partner 5",
    logo: "/placeholder-logo.svg",
  },
  {
    name: "Luxury Beauty Salon",
    description: "Partner 6",
    logo: "/placeholder-logo.svg",
  },
  {
    name: "Modern Beauty Center",
    description: "Partner 7",
    logo: "/placeholder-logo.svg",
  },
  {
    name: "Elite Beauty Studio",
    description: "Partner 8",
    logo: "/placeholder-logo.svg",
  },
]

export function Logos3({ className }: Logos3Props) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const scrollPrev = React.useCallback(() => {
    if (api) api.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    if (api) api.scrollNext()
  }, [api])

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden">
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {logos.map((logo, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
              >
                <div className="flex items-center justify-center p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-200 h-20">
                  <img
                    src={logo.logo}
                    alt={`Logo ${logo.name}`}
                    className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 h-8 w-8 rounded-full bg-white shadow-md hover:bg-gray-50"
        onClick={scrollPrev}
        disabled={current === 1}
        aria-label="Poprzednie loga"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 h-8 w-8 rounded-full bg-white shadow-md hover:bg-gray-50"
        onClick={scrollNext}
        disabled={current === count}
        aria-label="Następne loga"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
