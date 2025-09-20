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
          ? "mt-4 rounded-2xl shadow-lg w-1/2"
          : "w-full",
        className
      )}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">Beauty</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#logos"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Partnerzy
            </a>
            <a
              href="#problem"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Problem
            </a>
            <a
              href="#solution"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Rozwiązanie
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Cennik
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Kontakt
            </a>
          </nav>

          {/* CTA Button */}
          <button className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg">
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}
