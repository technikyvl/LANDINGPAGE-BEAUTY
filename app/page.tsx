"use client"

import { HeroSection } from "@/components/ui/hero-section"
import { Header } from "@/components/ui/header"
import { TestimonialsMarqueeSection } from "@/components/sections/testimonials-marquee-section"
import { Icons } from "@/components/ui/icons"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <HeroSection
          title="Nowi klienci dla Twojego salonu beauty."
          description="Budujemy systemy marketingowe, które zwiększają liczbę rezerwacji i budują lojalność klientek. Specjalizujemy się wyłącznie w branży beauty."
          actions={[
            {
              text: "Umów konsultację",
              href: "#contact",
              variant: "default",
            },
            {
              text: "Zobacz cennik",
              href: "#pricing",
              variant: "glow",
              icon: <Icons.gitHub className="h-5 w-5" />,
            },
          ]}
        />

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="relative mb-16">
              <div className="text-8xl md:text-9xl font-bold text-gray-200 absolute -top-4 -left-4 select-none">
                01
              </div>
              <h2 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-bold text-black uppercase tracking-wide">
                DOMINA'S FEATURES
              </h2>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h2l4-8 4 8h2l-5-10-5 10zm16 0h2l-5-10-5 10h2l4-8 4 8z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Quality SEO Rankings</h3>
                <p className="text-gray-600">Consectetur adipisicing elit dolor seddo eiusmod tempor</p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-9H3v2h16V2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Strong Keywords</h3>
                <p className="text-gray-600">Consectetur adipisicing elit dolor seddo eiusmod tempor</p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Short URL</h3>
                <p className="text-gray-600">Consectetur adipisicing elit dolor seddo eiusmod tempor</p>
              </div>

              {/* Feature 4 */}
              <div className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">500+ Blacklinks</h3>
                <p className="text-gray-600">Consectetur adipisicing elit dolor seddo eiusmod tempor</p>
              </div>

              {/* Feature 5 */}
              <div className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Who Is Search</h3>
                <p className="text-gray-600">Consectetur adipisicing elit dolor seddo eiusmod tempor</p>
              </div>

              {/* Feature 6 */}
              <div className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Domain Locking</h3>
                <p className="text-gray-600">Consectetur adipisicing elit dolor seddo eiusmod tempor</p>
              </div>
            </div>
          </div>
        </section>

        {/* Opinie klientów - Marquee */}
        <section id="opinie" className="opinie section py-16 md:py-24 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="section-head text-center mb-16">
              <div className="badge inline-block px-3 py-1 text-sm border border-gray-300 rounded-full mb-4">
                Opinie klientów
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight bg-gradient-to-br from-gray-800 via-gray-700 to-gray-500 bg-clip-text text-transparent drop-shadow-2xl mb-4">
                Co mówią właścicielki salonów beauty
              </h2>
              <p className="text-sm font-medium text-gray-600 max-w-3xl mx-auto sm:text-lg opacity-75">
                Zobacz, jakie efekty osiągają po wdrożeniu naszego systemu.
              </p>
            </div>

            <div className="testimonials-mask" style={{
              maskImage: 'linear-gradient(to bottom, transparent, #000 20%, #000 80%, transparent)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 20%, #000 80%, transparent)'
            }}>
              <div className="columns">
                <div className="column js-marquee" data-speed="15"></div>
                <div className="column js-marquee" data-speed="19"></div>
                <div className="column js-marquee" data-speed="17"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Marquee JS */}
        <TestimonialsMarqueeSection />
      </main>
    </>
  )
}
