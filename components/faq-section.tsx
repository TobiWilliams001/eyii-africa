'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  title: string
  description?: string
  faqs: FAQItem[]
}

export function FAQSection({ title, description, faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 text-balance">
            {title}
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-red-600 to-red-400 rounded-full mb-8" />
          {description && (
            <p className="text-xl text-gray-700 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="bg-white border border-red-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden rounded-2xl"
            >
              <button
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-red-50 transition-colors text-left group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="font-bold text-lg text-gray-900 pr-4 group-hover:text-red-600 transition-colors">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`h-6 w-6 text-red-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="border-t border-red-100 px-8 py-6 bg-red-50/30">
                  <p className="text-gray-800 leading-relaxed text-lg">
                    {faq.answer}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
