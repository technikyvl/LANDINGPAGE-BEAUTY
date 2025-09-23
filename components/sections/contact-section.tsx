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

const questions = [
  {
    id: 'name',
    question: 'Jak masz na imię?',
    type: 'text',
    required: true,
    placeholder: 'Wpisz swoje imię'
  },
  {
    id: 'phone',
    question: 'Podaj swój numer telefonu',
    type: 'tel',
    required: true,
    placeholder: 'np. 123 456 789'
  },
  {
    id: 'city',
    question: 'W jakim mieście znajduje się Twój salon?',
    type: 'text',
    required: true,
    placeholder: 'np. Warszawa'
  },
  {
    id: 'usesBooksy',
    question: 'Czy używasz Booksy?',
    type: 'radio',
    required: false,
    options: ['Tak', 'Nie']
  },
  {
    id: 'hasClientBase',
    question: 'Czy masz swoją bazę klientów/klientek? (np. Booksy)',
    type: 'radio',
    required: false,
    options: ['Tak', 'Nie']
  },
  {
    id: 'averagePrice',
    question: 'Jaka jest średnia cena usługi w Twoim salonie?',
    type: 'select',
    required: false,
    options: [
      'Do 50 zł',
      '50-100 zł',
      '100-200 zł',
      '200-300 zł',
      'Powyżej 300 zł'
    ]
  },
  {
    id: 'interestedService',
    question: 'Jaka usługa interesuje Cię najbardziej?',
    type: 'radio',
    required: true,
    options: [
      'Strona www',
      'Kampanie reklamowe',
      'SEO lokalne',
      'Email marketing',
      'SMS marketing'
    ]
  },
  {
    id: 'budget',
    question: 'Ile chcesz przeznaczyć na przeskalowanie Twojego salonu?',
    type: 'select',
    required: false,
    options: [
      'Do 1000 zł',
      '1000-3000 zł',
      '3000-5000 zł',
      '5000-10000 zł',
      'Powyżej 10000 zł'
    ]
  }
]

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

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const currentQuestion = questions[currentQuestionIndex] || questions[0]
  const isLastQuestion = currentQuestionIndex === questions.length - 1
  const isFirstQuestion = currentQuestionIndex === 0

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (currentQuestion?.required && !formData[currentQuestion?.id as keyof FormData]) {
      return
    }
    
    if (isLastQuestion) {
      handleSubmit()
    } else {
      setCurrentQuestionIndex(prev => prev + 1)
    }
  }

  const handleBack = () => {
    if (!isFirstQuestion) {
      setCurrentQuestionIndex(prev => prev - 1)
    }
  }

  const handleSubmit = async () => {
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
                setCurrentQuestionIndex(0)
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

  const renderQuestion = () => {
    if (!currentQuestion) return null
    
    const currentValue = formData[currentQuestion.id as keyof FormData] || ""

    switch (currentQuestion.type) {
      case 'text':
      case 'tel':
        return (
          <input
            type={currentQuestion.type}
            value={currentValue}
            onChange={(e) => handleInputChange(currentQuestion.id as keyof FormData, e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
            placeholder={currentQuestion.placeholder}
            required={currentQuestion.required}
          />
        )
      
      case 'radio':
        return (
          <div className="space-y-3">
            {currentQuestion.options?.map((option) => (
              <label key={option} className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="radio"
                  name={currentQuestion.id}
                  value={option}
                  checked={currentValue === option}
                  onChange={(e) => handleInputChange(currentQuestion.id as keyof FormData, e.target.value)}
                  className="mr-3 text-orange-500 focus:ring-orange-500"
                />
                {option}
              </label>
            ))}
          </div>
        )
      
      case 'select':
        return (
          <select
            value={currentValue}
            onChange={(e) => handleInputChange(currentQuestion.id as keyof FormData, e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
          >
            <option value="">Wybierz opcję</option>
            {currentQuestion.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )
      
      default:
        return null
    }
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

        {/* Form Card - Single Question */}
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
          {/* Question */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              {currentQuestion?.question || ""}
              {currentQuestion?.required && <span className="text-orange-500 ml-1">*</span>}
            </h3>
            {renderQuestion()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={handleBack}
              disabled={isFirstQuestion}
              className={cn(
                "px-6 py-3 rounded-lg font-medium transition-all duration-200",
                isFirstQuestion
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              )}
            >
              WSTECZ
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={isSubmitting || (currentQuestion?.required && !formData[currentQuestion?.id as keyof FormData])}
              className={cn(
                "px-6 py-3 rounded-lg font-medium transition-all duration-200",
                isSubmitting || (currentQuestion?.required && !formData[currentQuestion?.id as keyof FormData])
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl"
              )}
            >
              {isSubmitting ? "Wysyłanie..." : isLastQuestion ? "WYŚLIJ" : "DALEJ"}
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              Pytanie {currentQuestionIndex + 1} z {questions.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}