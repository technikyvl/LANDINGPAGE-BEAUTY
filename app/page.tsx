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
          image={{
            light: "/modern-dashboard-interface-light-theme.jpg",
            dark: "/modern-dashboard-interface-dark-theme.jpg",
            alt: "System marketingowy dla salonów beauty",
          }}
        />

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
