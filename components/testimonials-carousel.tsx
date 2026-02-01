'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Pause, Play, Quote } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { FadeInUp, AnimatedGradientBar } from '@/components/animations'

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
  const [direction, setDirection] = useState(0)

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return prev === testimonials.length - 1 ? 0 : prev + 1
      }
      return prev === 0 ? testimonials.length - 1 : prev - 1
    })
  }, [testimonials.length])

  useEffect(() => {
    if (!isAutoplaying) return
    const timer = setInterval(() => paginate(1), autoplayInterval)
    return () => clearInterval(timer)
  }, [isAutoplaying, autoplayInterval, paginate])

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
    setIsAutoplaying(false)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
  }

  return (
    <section className="py-20 md:py-32 bg-soft-gradient relative overflow-hidden">
      <div className="absolute top-20 left-10 w-64 h-64 bg-red-100/30 dark:bg-red-900/10 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {title && (
          <div className="mb-12 md:mb-16">
            <FadeInUp>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                {title.split(' ').slice(0, -1).join(' ')}{' '}
                <span className="gradient-text">{title.split(' ').slice(-1)}</span>
              </h2>
            </FadeInUp>
            <AnimatedGradientBar />
          </div>
        )}

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl min-h-[400px] md:min-h-[350px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                className="px-2 md:px-8"
              >
                <Card className="p-8 md:p-12 glass-card border-0 shadow-xl rounded-2xl relative overflow-hidden">
                  {/* Gradient accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-orange-500" />
                  
                  <div className="flex flex-col gap-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 flex items-center justify-center">
                        <Quote className="h-6 w-6 text-red-600 dark:text-red-400" />
                      </div>
                    </div>

                    <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
                      "{testimonials[currentIndex].quote}"
                    </blockquote>

                    <div className="pt-6 border-t border-border">
                      <div className="font-bold text-lg text-foreground mb-1">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-sm text-muted-foreground mb-3">
                        {testimonials[currentIndex].school}
                      </div>
                      <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/50 dark:to-orange-950/50 text-red-600 dark:text-red-400 rounded-full text-sm font-semibold border border-red-100 dark:border-red-900/50">
                        {testimonials[currentIndex].achievement}
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => { paginate(-1); setIsAutoplaying(false); }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => { paginate(1); setIsAutoplaying(false); }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </motion.button>
        </div>

        {/* Dots + Controls */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'bg-gradient-to-r from-red-600 to-orange-500 w-8'
                    : 'bg-gray-300 dark:bg-gray-600 w-2.5 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={() => setIsAutoplaying(!isAutoplaying)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-red-100 dark:hover:bg-red-900/30 hover:text-red-600 transition-colors"
            aria-label={isAutoplaying ? 'Pause' : 'Play'}
          >
            {isAutoplaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </section>
  )
}