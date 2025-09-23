"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

export function WhyUsPortfolioSection() {
  return (
    <section id="why-us" className={cn("py-24 md:py-32 lg:py-40 bg-white")}> 
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mb-12">
          <div className="text-8xl md:text-9xl font-bold text-gray-200 absolute -top-20 -left-4 select-none">
            03
          </div>
          <h2 className="relative z-10 text-4xl font-semibold leading-tight bg-gradient-to-br from-gray-800 via-gray-700 to-gray-500 bg-clip-text text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-7xl md:leading-tight">
            DLACZEGO AKURAT MY?
          </h2>
        </div>
        
        <div className="text-center mb-8">
          <p className="text-sm relative z-10 max-w-[500px] font-medium text-gray-600 opacity-0 delay-100 sm:text-lg mb-4 mx-auto">
            Przykłady realizacji: strony WWW, kampanie i projekty graficzne, które dowożą efekt.
          </p>
        </div>

        {/* Glare za gridem (pomniejszone o ~30%) */}
        <div className="relative origin-top mx-auto w-full" style={{ transform: "scale(0.85)", transformOrigin: "top center" }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] bg-orange-500/10 rounded-full blur-3xl"></div>
          </div>

          {/* Asymetryczny grid inspirowany hero-section, ale elementy jak .card */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            {/* Duży kafel 2x2 */}
            <div className="col-span-2 row-span-2">
              <div className="card h-full p-0">
                <div className="relative h-48 md:h-56 w-full overflow-hidden rounded-[1.5rem]">
                  <Image src="/modern-dashboard-interface-dark-theme.jpg" alt="Projekt 1 — dashboard" fill className="object-cover" />
                </div>
                <hr className="line" />
                <div className="card_title__container p-4">
                  <span className="card_title">System rezerwacji + dashboard</span>
                  <p className="card_paragraph">Szybka strona z modułem zapisów i analityką pod beauty.</p>
                </div>
              </div>
            </div>

            {/* Małe kafle 1x1 */}
            {[{
              src: "/modern-dashboard-interface-light-theme.jpg",
              title: "Landing sprzedażowy",
              desc: "Konwersyjny one‑pager: rezerwacje i leady z kampanii."
            },{
              src: "/wyniki_seo.jpg",
              title: "Wzrosty SEO",
              desc: "Widoczność lokalna i zapytania z Google."
            },{
              src: "/wyniki_kampania (1).jpg",
              title: "Kampanie Performance",
              desc: "Ads skonfigurowane pod szybkie rezerwacje."
            },{
              src: "/placeholder.jpg",
              title: "Identyfikacja wizualna",
              desc: "Spójne kreacje i sesje foto pod beauty."
            }].map((item, idx) => (
              <div className="col-span-1 flex" key={idx}>
                <div className="card p-0 flex flex-col h-full">
                  <div className="relative h-32 w-full overflow-hidden rounded-[1.5rem]">
                    <Image src={item.src} alt={item.title} fill className="object-cover" />
                  </div>
                  <hr className="line" />
                  <div className="card_title__container p-3 flex-1 flex flex-col">
                    <span className="card_title">{item.title}</span>
                    <p className="card_paragraph flex-1">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


