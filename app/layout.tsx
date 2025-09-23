import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "next-themes"
import { Suspense } from "react"
import "./globals.css"
import Script from "next/script"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/header.css" />
        <link rel="stylesheet" href="/services-cards.css" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <header id="site-header">
          <nav className="nav-root" data-state="inactive">
            <div className="nav-shell">
              <div className="nav-row">
                {/* Left: Logo */}
                <a href="/" aria-label="home" className="brand" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                  <img
                    src="/AERO DIGITAL (7).png"
                    alt="Aero Digital Logo"
                    className="logo"
                    style={{ height: '120px', width: 'auto', maxHeight: '100%', objectFit: 'contain' }}
                  />
                </a>

                {/* Center: desktop nav */}
                <div className="nav-center">
                  <ul className="nav-list">
                    <li><a href="#problem">Problem</a></li>
                    <li><a href="#solution">Rozwiązanie</a></li>
                    <li><a href="#pricing">Cennik</a></li>
                    <li><a href="#contact">Kontakt</a></li>
                  </ul>
                </div>

                {/* Right: actions / burger */}
                <div className="actions">
                  <a className="btn btn-outline show-when-top" href="#">Login</a>
                  <a className="btn btn-solid show-when-top" href="#">Sign Up</a>
                  <a className="btn btn-solid show-when-scrolled" href="#">Get Started</a>

                  <button className="menu-toggle" aria-label="Open Menu" aria-expanded="false">
                    {/* hamburger */}
                    <svg className="icon icon-open" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    {/* close */}
                    <svg className="icon icon-close" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                      <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Mobile drawer */}
              <div className="mobile-panel">
                <ul className="mobile-list">
                  <li><a href="#problem">Problem</a></li>
                  <li><a href="#solution">Rozwiązanie</a></li>
                  <li><a href="#pricing">Cennik</a></li>
                  <li><a href="#contact">Kontakt</a></li>
                </ul>
                <div className="mobile-actions">
                  <a className="btn btn-outline" href="#">Login</a>
                  <a className="btn btn-solid" href="#">Sign Up</a>
                  <a className="btn btn-solid show-when-scrolled" href="#">Get Started</a>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
        <Script src="/header.js" strategy="afterInteractive" />
        <Script src="/services-cards.js" strategy="afterInteractive" />
        <Script src="/tabs.js" strategy="afterInteractive" />
        <Script src="/problems-lines.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
