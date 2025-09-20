"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRightIcon } from "lucide-react"
import { Mockup, MockupFrame } from "@/components/ui/mockup"
import { Glow } from "@/components/ui/glow"
import Image from "next/image"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

interface HeroAction {
  text: string
  href: string
  icon?: React.ReactNode
  variant?: "default" | "glow"
}

interface HeroProps {
  badge?: {
    text: string
    action: {
      text: string
      href: string
    }
  }
  title: string
  description: string
  actions: HeroAction[]
  image: {
    light: string
    dark: string
    alt: string
  }
}

export function HeroSection({ badge, title, description, actions, image }: HeroProps) {
  const { resolvedTheme } = useTheme()
  const imageSrc = resolvedTheme === "light" ? image.light : image.dark

  return (
    <section
      className={cn("bg-gradient-to-b from-white via-orange-50/30 to-orange-100/50 text-foreground", "py-12 sm:py-24 md:py-32 px-4", "overflow-hidden pb-0")}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-4 text-center sm:gap-8">
          {/* Badge */}
          {badge && (
            <Badge variant="outline" className="animate-appear gap-2">
              <span className="text-muted-foreground">{badge.text}</span>
              <a href={badge.action.href} className="flex items-center gap-1">
                {badge.action.text}
                <ArrowRightIcon className="h-3 w-3" />
              </a>
            </Badge>
          )}

          {/* Title */}
          <h1 className="relative z-10 inline-block animate-appear text-4xl font-semibold leading-tight bg-gradient-to-br from-gray-800 via-gray-700 to-gray-500 bg-clip-text text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-7xl md:leading-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="text-sm relative z-10 max-w-[500px] animate-appear font-medium text-gray-600 opacity-0 delay-100 sm:text-lg">
            {description}
          </p>

          {/* Actions */}
          <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300">
            {actions.map((action, index) => (
              <Button key={index} variant={action.variant} size="lg" asChild>
                <a href={action.href} className="flex items-center gap-2">
                  {action.icon}
                  {action.text}
                </a>
              </Button>
            ))}
          </div>

          {/* Asymetryczny grid ze zdjęciami */}
          <div className="relative pt-8 w-full max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-appear opacity-0 delay-700">
              {/* Duże zdjęcie - zajmuje 2 kolumny */}
              <div className="col-span-2 row-span-2">
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.jpg"
                    alt="Główne zdjęcie salonu beauty"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              
              {/* Małe zdjęcie 1 */}
              <div className="col-span-1">
                <div className="relative h-32 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.jpg"
                    alt="Zdjęcie 1 - salon beauty"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Małe zdjęcie 2 */}
              <div className="col-span-1">
                <div className="relative h-32 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.jpg"
                    alt="Zdjęcie 2 - salon beauty"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Małe zdjęcie 3 */}
              <div className="col-span-1">
                <div className="relative h-32 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.jpg"
                    alt="Zdjęcie 3 - salon beauty"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Małe zdjęcie 4 */}
              <div className="col-span-1">
                <div className="relative h-32 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.jpg"
                    alt="Zdjęcie 4 - salon beauty"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <Glow variant="top" className="animate-appear-zoom opacity-0 delay-1000" />
          </div>
        </div>
      </div>
    </section>
  )
}
