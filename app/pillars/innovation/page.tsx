'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronRight, Lightbulb, Zap, Trophy, Users, ArrowRight } from 'lucide-react'
import { FadeInUp, StaggerContainer, StaggerItem, AnimatedGradientBar, FloatingElement } from '@/components/animations'

export default function InnovationPage() {
  const programs = [
    {
      title: 'School of Innovation',
      tagline: 'Building Future-Ready Innovators',
      description: 'A flagship capacity-building program designed to equip young Africans with the skills, mindset, and practical experience needed to become effective innovators and problem-solvers.',
      format: '6-week program | Hybrid (virtual + in-person)',
      status: 'Flagship Program',
      statusColor: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
      curriculum: ['Innovation & Design Thinking', 'Problem Identification & Research', 'Creativity & Ideation', 'Entrepreneurship Fundamentals', 'Leadership & Collaboration'],
      benefits: ['Interactive workshops and masterclasses', 'Hands-on group projects', 'Mentorship from industry experts', 'Demo pitch presentations'],
      gradient: 'from-blue-600 to-purple-600',
    },
    {
      title: 'Innovation Challenges',
      tagline: 'Compete, Create, Win',
      description: 'Quarterly innovation challenges where students compete to develop solutions to real-world problems, with mentorship, prizes, and investor exposure.',
      format: '48-72 hour format | Virtual hackathon-style',
      status: 'Launching Q2 2026',
      statusColor: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
      curriculum: ['Real problem statements', '48-72 hour build sprints', 'Live mentorship during challenge', 'Cash prizes (₦200K for 1st place)', 'Investor pitch opportunities'],
      benefits: ['Team-based competition (2-5 members)', 'Expert judging panel', 'Media coverage for winners', 'Quarterly challenges throughout 2026'],
      gradient: 'from-purple-600 to-pink-600',
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-grow pt-20">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/programs" className="hover:text-primary transition-colors">Pillars</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground font-medium">Innovation</span>
            </motion.div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-24 md:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-soft-gradient" />
          <FloatingElement className="absolute top-20 right-10 w-72 h-72 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl" duration={10} />
          <FloatingElement className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-3xl" duration={12} delay={2} />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
                  <Lightbulb className="h-4 w-4" />
                  Innovation Pillar
                </div>
              </FadeInUp>
              
              <FadeInUp delay={0.1}>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                  Solve Real <span className="gradient-text">Problems</span>
                </h1>
              </FadeInUp>
              
              <AnimatedGradientBar />
              
              <FadeInUp delay={0.2}>
                <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed max-w-2xl mt-8">
                  Solve Real Problems, Create Meaningful Impact
                </p>
              </FadeInUp>
              
              <FadeInUp delay={0.3}>
                <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl">
                  Develop the mindset, skills, and frameworks to identify problems in your community and design innovative solutions that create lasting change.
                </p>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-20 md:py-28 bg-soft-gradient">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                Our Innovation <span className="gradient-text">Programs</span>
              </h2>
            </FadeInUp>
            <AnimatedGradientBar />

            <StaggerContainer staggerDelay={0.15} className="grid gap-8 md:grid-cols-2 mt-12">
              {programs.map((program, idx) => (
                <StaggerItem key={idx}>
                  <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                    <Card className="glass-card border-0 shadow-xl rounded-2xl overflow-hidden h-full">
                      <div className={`h-1.5 bg-gradient-to-r ${program.gradient}`} />
                      <CardContent className="p-8">
                        <div className={`inline-block rounded-xl px-3 py-1 text-sm font-semibold ${program.statusColor} mb-4`}>
                          {program.status}
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{program.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{program.format}</p>
                        <p className="text-lg font-semibold text-primary mb-4">{program.tagline}</p>
                        <p className="text-muted-foreground mb-6">{program.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="font-bold text-foreground mb-3">What You'll Learn:</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {program.curriculum.map((item, i) => (
                              <li key={i}>• {item}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-bold text-foreground mb-3">What to Expect:</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {program.benefits.map((benefit, i) => (
                              <li key={i} className="flex gap-2">
                                <span className="text-green-500">✓</span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl">
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gray-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 gradient-mesh opacity-20" />
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <FadeInUp>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Innovate?</h2>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <p className="text-lg text-gray-300 mb-8">
                Join our innovation programs and develop the creative problem-solving skills needed to create real change.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg">
                    Explore Programs
                  </Button>
                </motion.div>
                <Link href="/pillars/leadership">
                  <Button variant="outline-light" className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-xl">
                    Explore Leadership Pillar
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