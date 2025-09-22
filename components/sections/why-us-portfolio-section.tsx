"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

export function WhyUsPortfolioSection() {
  return (
    <section id="why-us" className={cn("py-24 md:py-32 lg:py-40 bg-white")}> 
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mb-16 text-center">
          <div className="badge inline-block px-3 py-1 text-sm border border-gray-300 rounded-full mb-4">
            Nasze portfolio
          </div>
          <h2 className="text-4xl font-semibold leading-tight bg-gradient-to-br from-gray-800 via-gray-700 to-gray-500 bg-clip-text text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-7xl md:leading-tight">
            Dlaczego akurat my?
          </h2>
          <p className="text-sm font-medium text-gray-600 max-w-2xl mx-auto sm:text-lg opacity-75 mt-4">
            Przykłady realizacji: strony WWW, kampanie i projekty graficzne, które dowożą efekt.
          </p>
        </div>

        {/* Glare za gridem */}
        <div className="relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] bg-orange-500/10 rounded-full blur-3xl"></div>
          </div>

          {/* Asymetryczny grid inspirowany hero-section, ale elementy jak .card */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            {/* Duży kafel 2x2 */}
            <div className="col-span-2 row-span-2">
              <div className="card h-full p-0">
                <div className="relative h-64 md:h-[22rem] w-full overflow-hidden rounded-[1.5rem]">
                  <Image src="/modern-dashboard-interface-dark-theme.jpg" alt="Projekt 1 — dashboard" fill className="object-cover" />
                </div>
                <hr className="line" />
                <div className="card_title__container p-6">
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
              <div className="col-span-1" key={idx}>
                <div className="card p-0">
                  <div className="relative h-40 w-full overflow-hidden rounded-[1.5rem]">
                    <Image src={item.src} alt={item.title} fill className="object-cover" />
                  </div>
                  <hr className="line" />
                  <div className="card_title__container p-4">
                    <span className="card_title">{item.title}</span>
                    <p className="card_paragraph">{item.desc}</p>
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


