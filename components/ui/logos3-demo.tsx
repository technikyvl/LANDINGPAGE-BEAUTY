"use client"

import { Logos3 } from "./logos3"

export function Logos3Demo() {
  return (
    <section id="logos" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Zaufali nam
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Salon beauty, które już korzystają z naszych rozwiązań marketingowych
          </p>
        </div>
        
        <Logos3 className="relative" />
      </div>
    </section>
  )
}
