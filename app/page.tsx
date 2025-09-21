"use client"

import { HeroSection } from "@/components/ui/hero-section"
import { TestimonialsMarqueeSection } from "@/components/sections/testimonials-marquee-section"
import { Icons } from "@/components/ui/icons"

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

        {/* Problem Question Section */}
        <section className="py-24 md:py-32 lg:py-40 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Czy Twojego salonu też dotyczą te problemy?
              </h2>
            </div>
          </div>
        </section>

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

        {/* Sekcja: Problemy i rozwiązania (tabs) */}
        <section id="uslugi-problemy" className="section-wrap">
          <div className="container">
            <div className="head">
              <span className="badge-outline">dla salonów beauty</span>
              <h2 className="heading-xl">Rozwiązujemy realne problemy</h2>
              <p className="sub">Zobacz, co naprawiamy krok po kroku.</p>
            </div>

            {/* Tabs */}
            <div className="tabs">
              <div className="tabs-list" role="tablist" aria-label="Wybierz problem">
                <button className="tab is-active" role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1">
                  Brak klientów
                </button>
                <button className="tab" role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2">
                  Słaba widoczność online
                </button>
                <button className="tab" role="tab" aria-selected="false" aria-controls="panel-3" id="tab-3">
                  Brak powrotów klientek
                </button>
                <button className="tab" role="tab" aria-selected="false" aria-controls="panel-4" id="tab-4">
                  Brak stałego ruchu w salonie
                </button>
              </div>

              {/* Panels */}
              <div className="panels">
                {/* Panel 1 */}
                <div className="panel is-active" role="tabpanel" id="panel-1" aria-labelledby="tab-1">
                  <div className="panel-grid">
                    <div className="panel-copy">
                      <span className="badge-outline bg-white">Problem: Brak klientów</span>
                      <h3 className="title">Salon świeci pustkami — sporadyczne nowe wizyty.</h3>
                      <p className="desc">
                        <strong>Rozwiązanie:</strong> Budujemy system pozyskiwania klientek od podstaw:
                        nowoczesna strona z rezerwacją, kampanie reklamowe w social mediach i Google
                        kierujące prosto na Twoją ofertę. Dzięki temu kalendarz zaczyna się realnie
                        wypełniać, a nie czekać na przypadkowe wizyty z Booksy.
                      </p>
                      <a href="#kontakt" className="btn">Chcę system pozyskiwania klientek</a>
                    </div>
                    <div className="panel-visual"><div className="placeholder"></div></div>
                  </div>
                </div>

                {/* Panel 2 */}
                <div className="panel" role="tabpanel" id="panel-2" aria-labelledby="tab-2" hidden>
                  <div className="panel-grid">
                    <div className="panel-copy">
                      <span className="badge-outline bg-white">Problem: Słaba widoczność online</span>
                      <h3 className="title">Nikt nie znajduje salonu w Google ani w social mediach.</h3>
                      <p className="desc">
                        <strong>Rozwiązanie:</strong> Tworzymy profesjonalną stronę z lokalnym SEO i
                        pozycjonujemy ją tak, aby Twój salon pojawiał się w Google Maps i wynikach
                        wyszukiwania. Dodatkowo dbamy o spójny wizerunek w social mediach i reklamach —
                        jesteś widoczna tam, gdzie Twoje klientki Cię szukają.
                      </p>
                      <a href="#kontakt" className="btn">Chcę widoczność w Google i social</a>
                    </div>
                    <div className="panel-visual"><div className="placeholder"></div></div>
                  </div>
                </div>

                {/* Panel 3 */}
                <div className="panel" role="tabpanel" id="panel-3" aria-labelledby="tab-3" hidden>
                  <div className="panel-grid">
                    <div className="panel-copy">
                      <span className="badge-outline bg-white">Problem: Brak powrotów klientek</span>
                      <h3 className="title">Klientki przychodzą raz i znikają — brak lojalności.</h3>
                      <p className="desc">
                        <strong>Rozwiązanie:</strong> Wdrażamy e-mail i SMS marketing: przypomnienia o
                        kolejnych wizytach, nowości i oferty VIP. Budujemy poczucie wyjątkowości, dzięki
                        czemu Twoje klientki wracają regularnie, a nie tylko „od święta".
                      </p>
                      <a href="#kontakt" className="btn">Chcę powracające klientki</a>
                    </div>
                    <div className="panel-visual"><div className="placeholder"></div></div>
                  </div>
                </div>

                {/* Panel 4 */}
                <div className="panel" role="tabpanel" id="panel-4" aria-labelledby="tab-4" hidden>
                  <div className="panel-grid">
                    <div className="panel-copy">
                      <span className="badge-outline bg-white">Problem: Brak stałego ruchu</span>
                      <h3 className="title">Raz kalendarz pełny, innym razem pusty — zero stabilności.</h3>
                      <p className="desc">
                        <strong>Rozwiązanie:</strong> Budujemy przewidywalny system rezerwacji: kampanie
                        generujące stały dopływ nowych klientek + automatyczne przypomnienia i follow-upy.
                        Grafiki przestają mieć „dziury", a salon pracuje równym tempem cały miesiąc.
                      </p>
                      <a href="#kontakt" className="btn">Chcę stabilny ruch</a>
                    </div>
                    <div className="panel-visual"><div className="placeholder"></div></div>
                  </div>
                </div>
              </div>
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
