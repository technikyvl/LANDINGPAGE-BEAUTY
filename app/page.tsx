"use client"

import { HeroSection } from "@/components/ui/hero-section"
import { Header } from "@/components/ui/header"
import { Logos3Demo } from "@/components/ui/logos3-demo"
import { ProblemSection } from "@/components/sections/problem-section"
import { SolutionSection } from "@/components/sections/solution-section"
import { ProcessSection } from "@/components/sections/process-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { CaseSection } from "@/components/sections/case-section"
import { TrustSection } from "@/components/sections/trust-section"
import { CTASection } from "@/components/sections/cta-section"
import { FAQSection } from "@/components/sections/faq-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/sections/footer"
import { Icons } from "@/components/ui/icons"
import aeroBeautyData from "@/lib/data/aeroBeauty.pl.json"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section - nie modyfikujemy */}
        <HeroSection
          badge={{
            text: "Specjalizacja: tylko beauty",
            action: {
              text: "Dowiedz się więcej",
              href: "#problem",
            },
          }}
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

        {/* Logos Section */}
        <Logos3Demo />

        {/* Problem & Obietnica */}
        <ProblemSection data={aeroBeautyData.sections.problem} />

        {/* Dwa filary */}
        <SolutionSection data={aeroBeautyData.sections.solution} />

        {/* Jak to działa - 3 kroki */}
        <ProcessSection data={aeroBeautyData.sections.process} />

        {/* Pakiety / Cennik */}
        <PricingSection data={aeroBeautyData.sections.pricing} />

        {/* Case study */}
        <CaseSection data={aeroBeautyData.sections.case} />

        {/* Dlaczego my / Zaufanie */}
        <TrustSection data={aeroBeautyData.sections.trust} />

        {/* Mocne wezwanie */}
        <CTASection data={aeroBeautyData.sections.cta} />

        {/* FAQ */}
        <FAQSection data={aeroBeautyData.sections.faq} />

        {/* Kontakt / Rezerwacja konsultacji */}
        <ContactSection data={aeroBeautyData.sections.contact} />
      </main>
      
      <Footer />
    </>
  )
}
