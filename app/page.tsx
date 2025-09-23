"use client"

import { HeroSection } from "@/components/ui/hero-section"
import { TestimonialsMarqueeSection } from "@/components/sections/testimonials-marquee-section"
import { InvestmentSection } from "@/components/sections/investment-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Icons } from "@/components/ui/icons"
import { WhyUsPortfolioSection } from "@/components/sections/why-us-portfolio-section"
import { Footer } from "@/components/sections/footer"
import { Header } from "@/components/ui/header"

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

        {/* Problem Question Section */}
        <section id="problems-section" className="problems py-24 md:py-32 lg:py-40 bg-white">
          <div className="problems__inner container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="problems-heading" className="problems__heading text-4xl font-semibold leading-tight bg-gradient-to-br from-gray-800 via-gray-700 to-gray-500 bg-clip-text text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-7xl md:leading-tight">
              Czy to są problemy Twojego salonu?
              </h2>

            {/* SVG overlay for the lines */}
            <svg className="problems__lines" aria-hidden="true"></svg>

            {/* Problems list */}
            <div id="problems-list" className="problems__list">
              <div className="problem-box" id="problem-1">
                <div className="problem-card">
                  <div className="problem-number">1</div>
                  <h3 className="problem-title">Brak klientów</h3>
                  <p className="problem-description">
                    Twój grafik świeci pustkami, a mimo promocji nowe klientki nie przychodzą.
                  </p>
                </div>
              </div>

              <div className="problem-box" id="problem-2">
                <div className="problem-card">
                  <div className="problem-number">2</div>
                  <h3 className="problem-title">Słaba widoczność online</h3>
                  <p className="problem-description">
                    Konkurencja dominuje w social media i Google, a Twój salon ginie w tłumie.
                  </p>
                </div>
              </div>

              <div className="problem-box" id="problem-3">
                <div className="problem-card">
                  <div className="problem-number">3</div>
                  <h3 className="problem-title">Brak powrotów klientek</h3>
                  <p className="problem-description">
                    Klientki przychodzą raz i znikają – brakuje systemu, który sprawi, że wrócą regularnie.
                  </p>
                </div>
              </div>

              <div className="problem-box" id="problem-4">
                <div className="problem-card">
                  <div className="problem-number">4</div>
                  <h3 className="problem-title">Brak stałego ruchu w salonie</h3>
                  <p className="problem-description">
                    Raz masz pełne obłożenie, a raz puste dni – przychody są nieprzewidywalne.
                  </p>
                </div>
              </div>

              <div className="problem-box" id="problem-5">
                <div className="problem-card">
                  <div className="problem-number">5</div>
                  <h3 className="problem-title">Brak systemu rezerwacji</h3>
                  <p className="problem-description">
                    Klientki nie mogą łatwo umówić wizyty online – a Ty tracisz rezerwacje każdego dnia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sekcja: Problemy i rozwiązania (tabs) */}
        <section id="uslugi-problemy" className="section-wrap">
          <div className="container">
            <div className="head">
              <span className="badge-outline">dla salonów beauty</span>
              <h2 className="text-4xl font-semibold leading-tight bg-gradient-to-br from-gray-800 via-gray-700 to-gray-500 bg-clip-text text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-7xl md:leading-tight">
                Rozwiązujemy realne problemy
              </h2>
              <p className="sub">Zobacz, co naprawiamy krok po kroku.</p>
            </div>
                
            {/* Tabs */}
            <div className="tabs">
              <div className="tabs-list" role="tablist" aria-label="Wybierz problem">
                <button className="tab is-active" role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1" onClick={(e) => {
                  e.preventDefault();
                  document.querySelectorAll('.panel').forEach(p => p.hidden = true);
                  document.querySelectorAll('.tab').forEach(t => t.classList.remove('is-active'));
                  document.getElementById('panel-1').hidden = false;
                  document.getElementById('tab-1').classList.add('is-active');
                }}>
                  Brak klientów
                </button>
                <button className="tab" role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2" onClick={(e) => {
                  e.preventDefault();
                  document.querySelectorAll('.panel').forEach(p => p.hidden = true);
                  document.querySelectorAll('.tab').forEach(t => t.classList.remove('is-active'));
                  document.getElementById('panel-2').hidden = false;
                  document.getElementById('tab-2').classList.add('is-active');
                }}>
                  Słaba widoczność online
                </button>
                <button className="tab" role="tab" aria-selected="false" aria-controls="panel-3" id="tab-3" onClick={(e) => {
                  e.preventDefault();
                  document.querySelectorAll('.panel').forEach(p => p.hidden = true);
                  document.querySelectorAll('.tab').forEach(t => t.classList.remove('is-active'));
                  document.getElementById('panel-3').hidden = false;
                  document.getElementById('tab-3').classList.add('is-active');
                }}>
                  Brak powrotów klientek
                </button>
                <button className="tab" role="tab" aria-selected="false" aria-controls="panel-4" id="tab-4" onClick={(e) => {
                  e.preventDefault();
                  document.querySelectorAll('.panel').forEach(p => p.hidden = true);
                  document.querySelectorAll('.tab').forEach(t => t.classList.remove('is-active'));
                  document.getElementById('panel-4').hidden = false;
                  document.getElementById('tab-4').classList.add('is-active');
                }}>
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

        {/* Dlaczego akurat my? — Portfolio Grid */}
        <WhyUsPortfolioSection />

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

        {/* Investment Section */}
        <InvestmentSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />

      </main>
    </>
  )
}