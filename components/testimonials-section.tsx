'use client'

import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

interface Testimonial {
  name: string
  school: string
  quote: string
  colors: {
    gradient: string
    border: string
  }
}

interface TestimonialsSectionProps {
  title: string
  subtitle?: string
  testimonials: Testimonial[]
  columns?: 2 | 3
}

const defaultColors = [
  {
    gradient: 'from-red-600 to-red-400',
    border: 'border-red-100',
  },
  {
    gradient: 'from-orange-600 to-red-500',
    border: 'border-orange-100',
  },
  {
    gradient: 'from-yellow-500 to-orange-600',
    border: 'border-yellow-100',
  },
]

export function TestimonialsSection({
  title,
  subtitle,
  testimonials,
  columns = 3,
}: TestimonialsSectionProps) {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            {title}
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-red-600 to-red-400 rounded-full" />
          {subtitle && (
            <p className="mt-6 text-lg text-gray-600">{subtitle}</p>
          )}
        </div>

        <div
          className={`grid gap-8 ${
            columns === 2
              ? 'md:grid-cols-2'
              : columns === 3
                ? 'md:grid-cols-2 lg:grid-cols-3'
                : 'md:grid-cols-2'
          }`}
        >
          {testimonials.map((testimonial, index) => {
            const colorSet = defaultColors[index % defaultColors.length]
            return (
              <Link
                key={index}
                href="#"
                className="transition-all duration-300"
              >
                <Card className={`bg-white border ${colorSet.border} shadow-lg hover:shadow-2xl hover:-translate-y-3 rounded-2xl overflow-hidden p-0 h-full`}>
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colorSet.gradient}`}
                  />
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${colorSet.gradient}`}
                      />
                      <div>
                        <p className="font-bold text-black text-sm">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-gray-600">
                          {testimonial.school}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
