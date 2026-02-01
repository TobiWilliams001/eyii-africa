'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { programs } from '@/lib/data/programs'
import { FadeInUp, StaggerContainer, AnimatedGradientBar, FloatingElement } from '@/components/animations'
import { ArrowRight, CheckCircle, Briefcase, Rocket, Lightbulb, Crown } from 'lucide-react'
import { motion } from 'framer-motion'

const pillarIcons: Record<string, any> = {
  'Career Development': Briefcase,
  'Entrepreneurship': Rocket,
  'Innovation': Lightbulb,
  'Leadership': Crown,
}

const pillarColors: Record<string, { gradient: string, bg: string }> = {
  'Career Development': { gradient: 'from-blue-600 to-blue-700', bg: 'from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30' },
  'Entrepreneurship': { gradient: 'from-orange-600 to-orange-700', bg: 'from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30' },
  'Innovation': { gradient: 'from-green-600 to-green-700', bg: 'from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30' },
  'Leadership': { gradient: 'from-purple-600 to-purple-700', bg: 'from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30' },
}

export default function ProgramsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-700" />
          <div className="absolute inset-0 gradient-mesh opacity-30" />
          <FloatingElement className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" duration={10}>
            <div />
          </FloatingElement>
          <FloatingElement className="absolute bottom-10 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" duration={12} delay={2}>
            <div />
          </FloatingElement>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeInUp>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
                Our Programs
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <div className="h-1 w-24 bg-white/50 rounded-full mb-6" />
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="text-xl md:text-2xl text-red-100 mb-4 max-w-2xl">
                Comprehensive programs across four pillars designed to empower African students
              </p>
            </FadeInUp>
            <FadeInUp delay={0.3}>
              <p className="text-lg text-red-50 max-w-3xl">
                From career development to entrepreneurship, innovation to leadership—we provide structured pathways to opportunity.
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* Programs by Pillar */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {programs.map((pillarGroup, pillarIdx) => {
              const IconComponent = pillarIcons[pillarGroup.pillar] || Briefcase
              const colors = pillarColors[pillarGroup.pillar] || pillarColors['Career Development']
              
              return (
                <div key={pillarIdx} className="mb-20">
                  <FadeInUp>
                    <div className="mb-12">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center`}>
                          <IconComponent className="h-7 w-7 text-foreground" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">{pillarGroup.pillar}</h2>
                      </div>
                      <AnimatedGradientBar />
                      <div className="mt-6">
                        <Link href={`/pillars/${pillarGroup.pillar.toLowerCase().replace(' ', '-')}`}>
                          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                            <Button className={`bg-gradient-to-r ${colors.gradient} hover:opacity-90 text-white font-semibold px-6 py-3 rounded-xl shadow-lg`}>
                              Explore {pillarGroup.pillar}
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </motion.div>
                        </Link>
                      </div>
                    </div>
                  </FadeInUp>

                  <StaggerContainer staggerDelay={0.1} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {pillarGroup.programs.map((program, idx) => (
                      <motion.div key={idx} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                        <Card className="glass-card border-0 shadow-xl rounded-2xl overflow-hidden h-full flex flex-col group">
                          <div className={`h-1.5 bg-gradient-to-r ${colors.gradient}`} />
                          <CardContent className="p-6 flex flex-col h-full">
                            <div className="mb-4">
                              <div className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${program.statusColor} mb-3`}>
                                {program.status}
                              </div>
                              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{program.title}</h3>
                              {program.subtitle && (
                                <p className="text-sm text-muted-foreground mt-1">{program.subtitle}</p>
                              )}
                            </div>

                            <p className="text-lg font-semibold text-primary mb-3">
                              {program.description}
                            </p>

                            <p className="text-muted-foreground mb-4 leading-relaxed">
                              {program.details}
                            </p>

                            <div className="mb-6 flex-grow">
                              <h4 className="font-bold text-foreground mb-3 text-sm">Key Highlights:</h4>
                              <ul className="space-y-2 text-sm text-muted-foreground">
                                {program.highlights.map((highlight, i) => (
                                  <li key={i} className="flex gap-2 items-start">
                                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                    <span>{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <Link href={program.link} className="block mt-auto">
                              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold rounded-xl shadow-lg">
                                  {program.cta}
                                </Button>
                              </motion.div>
                            </Link>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </StaggerContainer>

                  {pillarIdx < programs.length - 1 && (
                    <div className="mt-16 border-t border-gray-200 dark:border-gray-800" />
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-gray-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 gradient-mesh opacity-20" />
          <FloatingElement className="absolute top-10 right-10 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" duration={8}>
            <div />
          </FloatingElement>
          
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <FadeInUp>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Journey?
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <p className="text-lg text-gray-300 mb-8">
                Join thousands of students building their future across Africa
              </p>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/community">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg shadow-red-500/20">
                      Join Community
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-xl backdrop-blur-sm">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </FadeInUp>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}