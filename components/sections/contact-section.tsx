"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface FormData {
  name: string
  phone: string
  city: string
  usesBooksy: string
  hasClientBase: string
  averagePrice: string
  interestedService: string
  budget: string
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    city: "",
    usesBooksy: "",
    hasClientBase: "",
    averagePrice: "",
    interestedService: "",
    budget: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Symulacja wysyłania formularza
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Tutaj można dodać prawdziwą logikę wysyłania
      console.log("Form data:", formData)
      
      setIsSubmitted(true)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 md:py-32 lg:py-40 bg-white">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Dziękujemy za wypełnienie formularza!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Skontaktujemy się z Tobą w ciągu 24 godzin, aby omówić szczegóły współpracy.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  name: "",
                  phone: "",
                  city: "",
                  usesBooksy: "",
                  hasClientBase: "",
                  averagePrice: "",
                  interestedService: "",
                  budget: ""
                })
              }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Wypełnij ponownie
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 md:py-32 lg:py-40 bg-white">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold leading-tight bg-gradient-to-br from-gray-800 via-gray-700 to-gray-500 bg-clip-text text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-7xl md:leading-tight">
            KONTAKT
          </h2>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 24 godzin, aby omówić szczegóły współpracy.
          </p>
        </div>

        {/* Form Card */}
        <div
          className="relative w-full p-8 rounded-2xl border border-gray-200 shadow-lg"
          style={{
            backgroundImage: `
              radial-gradient(60% 55% at 70% 100%, rgba(255,105,0,.14) 0%, rgba(255,105,0,0) 70%),
              radial-gradient(45% 40% at 10% 95%, rgba(245,73,0,.12) 0%, rgba(245,73,0,0) 70%),
              radial-gradient(35% 40% at 50% 0%, rgba(255,255,255,.75) 0%, rgba(255,255,255,0) 60%)
            `,
            boxShadow: `
              0 12px 28px rgba(17,24,39,.08),
              inset 0 -14px 22px -10px rgba(255,105,0,.12)
            `
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Imię */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Jak masz na imię? *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                placeholder="Wpisz swoje imię"
              />
            </div>

            {/* Numer telefonu */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Podaj swój numer telefonu *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                placeholder="np. 123 456 789"
              />
            </div>

            {/* Miasto */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                W jakim mieście znajduje się Twój salon? *
              </label>
              <input
                type="text"
                required
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                placeholder="np. Warszawa"
              />
            </div>

            {/* Booksy */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Czy używasz Booksy?
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="usesBooksy"
                    value="tak"
                    checked={formData.usesBooksy === "tak"}
                    onChange={(e) => handleInputChange('usesBooksy', e.target.value)}
                    className="mr-2 text-orange-500 focus:ring-orange-500"
                  />
                  Tak
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="usesBooksy"
                    value="nie"
                    checked={formData.usesBooksy === "nie"}
                    onChange={(e) => handleInputChange('usesBooksy', e.target.value)}
                    className="mr-2 text-orange-500 focus:ring-orange-500"
                  />
                  Nie
                </label>
              </div>
            </div>

            {/* Baza klientów */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Czy masz swoją bazę klientów/klientek? (np. Booksy)
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="hasClientBase"
                    value="tak"
                    checked={formData.hasClientBase === "tak"}
                    onChange={(e) => handleInputChange('hasClientBase', e.target.value)}
                    className="mr-2 text-orange-500 focus:ring-orange-500"
                  />
                  Tak
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="hasClientBase"
                    value="nie"
                    checked={formData.hasClientBase === "nie"}
                    onChange={(e) => handleInputChange('hasClientBase', e.target.value)}
                    className="mr-2 text-orange-500 focus:ring-orange-500"
                  />
                  Nie
                </label>
              </div>
            </div>

            {/* Średnia cena */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Jaka jest średnia cena usługi w Twoim salonie?
              </label>
              <select
                value={formData.averagePrice}
                onChange={(e) => handleInputChange('averagePrice', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
              >
                <option value="">Wybierz przedział cenowy</option>
                <option value="do-50">Do 50 zł</option>
                <option value="50-100">50-100 zł</option>
                <option value="100-200">100-200 zł</option>
                <option value="200-300">200-300 zł</option>
                <option value="powyzej-300">Powyżej 300 zł</option>
              </select>
            </div>

            {/* Usługa */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Jaka usługa interesuje Cię najbardziej? *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Strona www",
                  "Kampanie reklamowe", 
                  "SEO lokalne",
                  "Email marketing",
                  "SMS marketing"
                ].map((service) => (
                  <label key={service} className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="interestedService"
                      value={service}
                      checked={formData.interestedService === service}
                      onChange={(e) => handleInputChange('interestedService', e.target.value)}
                      className="mr-3 text-orange-500 focus:ring-orange-500"
                    />
                    {service}
                  </label>
                ))}
              </div>
            </div>

            {/* Budżet */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ile chcesz przeznaczyć na przeskalowanie Twojego salonu?
              </label>
              <select
                value={formData.budget}
                onChange={(e) => handleInputChange('budget', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
              >
                <option value="">Wybierz przedział budżetowy</option>
                <option value="do-1000">Do 1000 zł</option>
                <option value="1000-3000">1000-3000 zł</option>
                <option value="3000-5000">3000-5000 zł</option>
                <option value="5000-10000">5000-10000 zł</option>
                <option value="powyzej-10000">Powyżej 10000 zł</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "inline-flex items-center px-8 py-4 text-white font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl",
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                )}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Wysyłanie...
                  </>
                ) : (
                  "Wyślij formularz"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}