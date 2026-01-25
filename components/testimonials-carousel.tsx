'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface Testimonial {
  quote: string
  name: string
  school: string
  achievement: string
  icon?: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  title?: string
  autoplay?: boolean
  autoplayInterval?: number
}

export function TestimonialCarousel({
  testimonials,
  title = 'Student Success Stories',
  autoplay = true,
  autoplayInterval = 5000,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoplaying, setIsAutoplaying] = useState(autoplay)

  useEffect(() => {
    if (!isAutoplaying) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, autoplayInterval)

    return () => clearInterval(timer)
  }, [isAutoplaying, testimonials.length, autoplayInterval])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoplaying(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
    setIsAutoplaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoplaying(false)
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 text-balance">
              {title}
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-red-600 to-red-400 rounded-full" />
          </div>
        )}

        {/* Carousel */}
        <div className="relative group">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="min-w-full px-4 md:px-8">
                  <Card className="p-8 md:p-12 border border-red-100 shadow-xl rounded-2xl bg-white">
                    <div className="flex flex-col gap-6">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl">
                          {testimonial.icon || '✨'}
                        </div>
                      </div>

                      <blockquote className="text-xl md:text-2xl font-medium text-gray-900 leading-relaxed text-balance">
                        "{testimonial.quote}"
                      </blockquote>

                      <div className="pt-6 border-t border-gray-200">
                        <div className="font-bold text-lg text-black mb-1">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-600 mb-2">
                          {testimonial.school}
                        </div>
                        <div className="inline-block px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm font-semibold">
                          {testimonial.achievement}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-12 p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-all opacity-0 group-hover:opacity-100 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-12 p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-all opacity-0 group-hover:opacity-100 z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'bg-red-600 w-8'
                  : 'bg-gray-300 w-2 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Autoplay Toggle */}
        <div className="text-center mt-6">
          <button
            onClick={() => setIsAutoplaying(!isAutoplaying)}
            className="text-sm text-gray-600 hover:text-red-600 transition-colors"
          >
            {isAutoplaying ? 'Pause' : 'Play'}
          </button>
        </div>
      </div>
    </section>
  )
}
