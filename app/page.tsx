"use client"

import { HeroSection } from "@/components/ui/hero-section"
import { Header } from "@/components/ui/header"
import { Icons } from "@/components/ui/icons"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection
        badge={{
          text: "Introducing our new components",
          action: {
            text: "Learn more",
            href: "/docs",
          },
        }}
        title="Nowi klienci dla Twojego salonu beauty."
        description="Premium UI components built with React and Tailwind CSS. Save time and ship your next project faster with our ready-to-use components."
        actions={[
          {
            text: "Get Started",
            href: "/docs/getting-started",
            variant: "default",
          },
          {
            text: "GitHub",
            href: "https://github.com/your-repo",
            variant: "glow",
            icon: <Icons.gitHub className="h-5 w-5" />,
          },
        ]}
        image={{
          light: "/modern-dashboard-interface-light-theme.jpg",
          dark: "/modern-dashboard-interface-dark-theme.jpg",
          alt: "Modern Dashboard Interface",
        }}
      />
      </main>
    </>
  )
}
