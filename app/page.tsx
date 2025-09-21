"use client"

import { HeroSection } from "@/components/ui/hero-section"
import { TestimonialsMarqueeSection } from "@/components/sections/testimonials-marquee-section"
import { Icons } from "@/components/ui/icons"
import { OrbitingCircles } from "@/components/ui/orbiting-circles"
import { PlatformIcons } from "@/components/ui/platform-icons"

export default function HomePage() {
  return (
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

        {/* Services Cards Section */}
        <section id="services" className="py-24 md:py-32 lg:py-40 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="relative mb-20">
              <div className="text-8xl md:text-9xl font-bold text-gray-200 absolute -top-20 -left-4 select-none">
                02
              </div>
              <h2 className="relative z-10 text-4xl font-semibold leading-tight bg-gradient-to-br from-gray-800 via-gray-700 to-gray-500 bg-clip-text text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-7xl md:leading-tight">
                NASZE USŁUGI
              </h2>
            </div>
            
            <div className="text-center mb-16">
              <p className="text-sm relative z-10 max-w-[500px] font-medium text-gray-600 opacity-0 delay-100 sm:text-lg mb-4 mx-auto">
                Rozwiązania, które pracują za Ciebie
              </p>
              <p className="text-sm relative z-10 max-w-[500px] font-medium text-gray-600 opacity-0 delay-100 sm:text-lg mb-8 mx-auto">
                Interaktywne komponenty, które wyjaśniają skomplikowane rzeczy w prosty sposób.
              </p>
            </div>

            <div className="services-grid">
              {/* Card 1 */}
              <div className="card">
                <div className="card_title__container">
                  <span className="card_title">Pozycjonowanie SEO</span>
                  <p className="card_paragraph">
                    Stabilny wzrost widoczności na lokalne frazy związane z branżą beauty.
                  </p>
                </div>
                <hr className="line" />
                <ul className="card__list">
                  <li className="card__list_item">
                    <span className="check">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg"><path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"></path></svg>
                    </span>
                    <span className="list_text">On-page i content plan</span>
                  </li>
                  <li className="card__list_item">
                    <span className="check"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg"><path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"></path></svg></span>
                    <span className="list_text">Link building lokalny</span>
                  </li>
                  <li className="card__list_item">
                    <span className="check"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg"><path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"></path></svg></span>
                    <span className="list_text">Raporty z wynikami</span>
                  </li>
                </ul>
                <button className="button">Zamów Usługę</button>
              </div>

              {/* Card 2 */}
              <div className="card">
                <div className="card_title__container">
                  <span className="card_title">Kampanie Google Ads</span>
                  <p className="card_paragraph">
                    Skuteczne reklamy w wyszukiwarce, które dowożą zapytania i rezerwacje.
                  </p>
                </div>
                <hr className="line" />
                <ul className="card__list">
                  <li className="card__list_item"><span className="check"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg"><path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"></path></svg></span><span className="list_text">Struktura SKAG / tematyczna</span></li>
                  <li className="card__list_item"><span className="check"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg"><path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"></path></svg></span><span className="list_text">Zarządzanie budżetem</span></li>
                  <li className="card__list_item"><span className="check"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg"><path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"></path></svg></span><span className="list_text">Optymalizacja konwersji</span></li>
                </ul>
                <button className="button">Zamów Usługę</button>
              </div>

              {/* Card 3 */}
              <div className="card">
                <div className="card_title__container">
                  <span className="card_title">Strona WWW</span>
                  <p className="card_paragraph">
                    Szybka, lekka i dopasowana do beauty – z modułem rezerwacji.
                  </p>
                </div>
                <hr className="line" />
                <ul className="card__list">
                  <li className="card__list_item"><span className="check"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg"><path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"></path></svg></span><span className="list_text">UX zoptymalizowany pod rezerwacje</span></li>
                  <li className="card__list_item"><span className="check"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg"><path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"></path></svg></span><span className="list_text">Szybkość i SEO-ready</span></li>
                  <li className="card__list_item"><span className="check"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg"><path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"></path></svg></span><span className="list_text">Integracja z kalendarzem</span></li>
                </ul>
                <button className="button">Zamów Usługę</button>
              </div>

              {/* Card 4 */}
              <div className="card">
                <div className="card_title__container">
                  <span className="card_title">Social & Influencer</span>
                  <p className="card_paragraph">
                    Tworzymy i promujemy treści, które realnie dowożą Klientki.
                  </p>
                </div>
                <hr className="line" />
                <ul className="card__list">
                  <li className="card__list_item"><span className="check"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg"><path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"></path></svg></span><span className="list_text">Plan publikacji i kreacje</span></li>
                  <li className="card__list_item"><span className="check"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg"><path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"></path></svg></span><span className="list_text">Współprace z lokalnymi twórcami</span></li>
                  <li className="card__list_item"><span className="check"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg"><path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"></path></svg></span><span className="list_text">Raporty i rekomendacje</span></li>
                </ul>
                <button className="button">Zamów Usługę</button>
              </div>
            </div>
          </div>
        </section>

        {/* Orbital Animation Section */}
        <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Integracje
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Współpracujemy z najpopularniejszymi platformami, aby Twój salon beauty działał sprawnie
              </p>
            </div>
            
            {/* Orbital Animation */}
            <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">

              {/* Orbit 1 - Inner (100px radius) - 3 ikony */}
              <OrbitingCircles
                className="size-[50px] bg-white shadow-lg"
                duration={20}
                delay={0}
                radius={100}
                path={true}
              >
                <PlatformIcons.google />
              </OrbitingCircles>
              <OrbitingCircles
                className="size-[50px] bg-white shadow-lg"
                duration={20}
                delay={6.7}
                radius={100}
                path={false}
              >
                <PlatformIcons.booksy />
              </OrbitingCircles>
              <OrbitingCircles
                className="size-[50px] bg-white shadow-lg"
                duration={20}
                delay={13.3}
                radius={100}
                path={false}
              >
                <PlatformIcons.instagram />
              </OrbitingCircles>

              {/* Orbit 2 - Outer (200px radius) - 2 ikony */}
              <OrbitingCircles
                className="size-[50px] bg-white shadow-lg"
                radius={200}
                duration={18}
                reverse
                path={true}
              >
                <PlatformIcons.facebook />
              </OrbitingCircles>
              <OrbitingCircles
                className="size-[50px] bg-white shadow-lg"
                radius={200}
                duration={18}
                delay={9}
                reverse
                path={false}
              >
                <PlatformIcons.wordpress />
              </OrbitingCircles>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 md:py-32 lg:py-40 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="relative mb-20">
              <div className="text-8xl md:text-9xl font-bold text-gray-200 absolute -top-20 -left-4 select-none">
                01
              </div>
              <h2 className="relative z-10 text-4xl font-semibold leading-tight bg-gradient-to-br from-gray-800 via-gray-700 to-gray-500 bg-clip-text text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-7xl md:leading-tight">
                MARKETING BEAUTY
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
                <h3 className="text-xl font-bold text-black mb-3">Pozycjonowanie SEO</h3>
                <p className="text-gray-600">Wysokie pozycje w Google dla fraz związanych z usługami beauty w Twojej okolicy</p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-9H3v2h16V2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Kampanie Google Ads</h3>
                <p className="text-gray-600">Reklamy w wyszukiwarce Google, które przyciągają klientki szukające usług beauty</p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Strona Internetowa</h3>
                <p className="text-gray-600">Nowoczesna strona WWW dostosowana do branży beauty z systemem rezerwacji</p>
              </div>

              {/* Feature 4 */}
              <div className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Kampanie Meta Ads</h3>
                <p className="text-gray-600">Reklamy na Facebooku i Instagramie docierające do potencjalnych klientek beauty</p>
              </div>

              {/* Feature 5 */}
              <div className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Email Marketing</h3>
                <p className="text-gray-600">Automatyczne emaile do klientek z ofertami i przypomnieniami o wizytach</p>
              </div>

              {/* Feature 6 */}
              <div className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">SMS Marketing</h3>
                <p className="text-gray-600">Wysyłanie SMS-ów z ofertami last minute i przypomnieniami o wizytach</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 md:py-32 lg:py-40 bg-orange-500">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              {/* Left Side - Header */}
              <div className="lg:w-1/2 mb-16 lg:mb-0">
                <div className="relative">
                  <div className="text-8xl md:text-9xl font-bold text-orange-200 absolute -top-20 -left-4 select-none">
                    02
                  </div>
                  <h2 className="relative z-10 text-4xl font-semibold leading-tight bg-gradient-to-br from-gray-800 via-gray-700 to-gray-500 bg-clip-text text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-7xl md:leading-tight mb-6">
                    PAKIETY MARKETINGOWE
                  </h2>
                </div>
                
                <h3 className="text-sm relative z-10 max-w-[500px] font-medium text-gray-600 opacity-0 delay-100 sm:text-lg mb-4">
                  Kompleksowe rozwiązania marketingowe dla salonów beauty - bez ukrytych kosztów!
                </h3>
                
                <p className="text-sm relative z-10 max-w-[500px] font-medium text-gray-600 opacity-0 delay-100 sm:text-lg mb-8">
                  Zwiększ liczbę klientek i przychody swojego salonu beauty dzięki profesjonalnym kampaniom reklamowym, pozycjonowaniu SEO i nowoczesnej stronie internetowej.
                </p>
                
                <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Zobacz pełny cennik
                </button>
              </div>

              {/* Right Side - Package Card */}
              <div className="lg:w-1/2 flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Diamond Shape */}
                  <div className="w-80 h-80 bg-gradient-to-br from-purple-600 to-orange-500 rounded-3xl transform rotate-45 flex items-center justify-center shadow-2xl">
                    <div className="transform -rotate-45 text-center text-white">
                      {/* Beauty Icon */}
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      
                      {/* Package Name */}
                      <div className="text-2xl font-bold mb-2">GROWTH BEAUTY</div>
                      
                      {/* Price */}
                      <div className="text-lg font-semibold">od 2 990 zł/miesiąc</div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    <button className="bg-purple-800 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-900 transition-colors duration-200">
                      <div>Starter</div>
                      <div className="text-xs">1 990 zł</div>
                    </button>
                    <button className="bg-purple-800 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-900 transition-colors duration-200">
                      <div>Growth</div>
                      <div className="text-xs">2 990 zł</div>
                    </button>
                    <button className="bg-purple-800 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-900 transition-colors duration-200">
                      <div>All-in-One</div>
                      <div className="text-xs">4 990 zł</div>
                    </button>
                  </div>
                  
                  {/* Purchase Button */}
                  <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                    <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                      Umów konsultację
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 md:py-32 lg:py-40 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
              {/* Left Side - Header */}
              <div className="lg:w-1/2">
                <div className="relative mb-12">
                  <div className="text-8xl md:text-9xl font-bold text-gray-200 absolute -top-20 -left-4 select-none">
                    03
                  </div>
                  <h2 className="relative z-10 text-4xl font-semibold leading-tight bg-gradient-to-br from-gray-800 via-gray-700 to-gray-500 bg-clip-text text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-7xl md:leading-tight">
                    USŁUGI MARKETINGOWE
                  </h2>
                </div>
                
                <h3 className="text-sm relative z-10 max-w-[500px] font-medium text-gray-600 opacity-0 delay-100 sm:text-lg mb-6">
                  Kompleksowe usługi marketingowe, które pomogą Ci zwiększyć liczbę klientek
                </h3>
                
                <p className="text-sm relative z-10 max-w-[500px] font-medium text-gray-600 opacity-0 delay-100 sm:text-lg">
                  Specjalizujemy się w marketingu dla branży beauty. Nasze rozwiązania pomagają salonom kosmetycznym, fryzjerskim i SPA zwiększyć liczbę rezerwacji i budować lojalność klientek.
                </p>
              </div>

              {/* Right Side - Services Cards */}
              <div className="lg:w-1/2 space-y-6">
                {/* Service 1 - Strona Internetowa */}
                <div className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-3">Strona Internetowa</h3>
                      <p className="text-gray-600">
                        Nowoczesna strona WWW z systemem rezerwacji online, galerią prac i integracją z Booksy. Dostosowana do branży beauty.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service 2 - Kampanie Reklamowe */}
                <div className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H3V5h18v10z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-3">Kampanie Reklamowe</h3>
                      <p className="text-gray-600">
                        Profesjonalne kampanie Google Ads i Meta Ads, które docierają do potencjalnych klientek w Twojej okolicy.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service 3 - Pozycjonowanie SEO */}
                <div className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-3">Pozycjonowanie SEO</h3>
                      <p className="text-gray-600">
                        Optymalizacja strony pod kątem wyszukiwarek, aby Twoja strona pojawiała się na pierwszych pozycjach w Google.
                      </p>
                    </div>
                  </div>
                </div>
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
  )
}
