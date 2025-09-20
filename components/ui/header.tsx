"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out",
        "bg-white/95 backdrop-blur-sm",
        isScrolled
          ? "mt-4 rounded-3xl shadow-lg w-1/2"
          : "w-full",
        className
      )}
    >
      <div className={cn(
        "container mx-auto px-6 transition-all duration-500 ease-in-out",
        isScrolled ? "py-2" : "py-4"
      )}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/AERO DIGITAL (7).png"
              alt="Aero Digital Logo"
              className={cn(
                "w-auto transition-all duration-500 ease-in-out",
                isScrolled ? "h-12" : "h-20"
              )}
            />
          </div>

          {/* Navigation */}
          <nav className={cn(
            "hidden md:flex items-center transition-all duration-500 ease-in-out",
            isScrolled ? "space-x-6" : "space-x-8"
          )}>
            <a
              href="#problem"
              className={cn(
                "text-gray-700 hover:text-gray-900 transition-all duration-200",
                isScrolled ? "text-sm" : "text-base"
              )}
            >
              Problem
            </a>
            <a
              href="#solution"
              className={cn(
                "text-gray-700 hover:text-gray-900 transition-all duration-200",
                isScrolled ? "text-sm" : "text-base"
              )}
            >
              Rozwiązanie
            </a>
            <a
              href="#pricing"
              className={cn(
                "text-gray-700 hover:text-gray-900 transition-all duration-200",
                isScrolled ? "text-sm" : "text-base"
              )}
            >
              Cennik
            </a>
            <a
              href="#contact"
              className={cn(
                "text-gray-700 hover:text-gray-900 transition-all duration-200",
                isScrolled ? "text-sm" : "text-base"
              )}
            >
              Kontakt
            </a>
          </nav>

          {/* CTA Button */}
          <button className={cn(
            "inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-500 ease-in-out shadow-md hover:shadow-lg",
            isScrolled ? "px-4 py-1.5 text-xs" : "px-6 py-2 text-sm"
          )}>
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}
