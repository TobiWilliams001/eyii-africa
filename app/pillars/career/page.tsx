'use client';

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronRight, Briefcase, Users, Award, Target, ArrowRight } from 'lucide-react'
import { FAQSection } from '@/components/faq-section'
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, ScaleIn, AnimatedGradientBar, FloatingElement } from '@/components/animations'

export default function CareerDevelopmentPage() {
  const careerFaqs = [
    {
      question: 'Is ASN only for Nigerian students?',
      answer: 'No! While we started in Nigeria, ASN now serves students across Ghana, Kenya, South Africa, and other African countries. All programs are virtual and accessible continent-wide.',
    },
    {
      question: 'Do I need to pay for ASN programs?',
      answer: "Most ASN programs are free or heavily subsidized. We believe financial barriers shouldn't stop talented students from accessing opportunities.",
    },
    {
      question: 'How is ASN different from EYII?',
      answer: "ASN is our flagship career development program that's been running for 2 years. EYII is the parent organization expanding into three additional pillars: Entrepreneurship, Innovation, and Leadership.",
    },
  ]

  const programs = [
    {
      acronym: 'ASAP',
      name: 'African Students Accelerator Program',
      tagline: '12-Week Career Transformation Intensive',
      description: 'Comprehensive program covering technical skills, interview preparation, resume building, networking strategies, and career planning.',
      features: [
        'Weekly live sessions with industry professionals',
        '1-on-1 career coaching and mentorship',
        'Resume and LinkedIn optimization',
        'Mock interviews and feedback',
        'Job search strategies for African students',
      ],
      status: 'Active Program',
      gradient: 'from-red-600 to-red-500',
    },
    {
      acronym: 'MIIS',
      name: 'Mega Internship Interview Series',
      tagline: 'Master the Interview, Land the Offer',
      description: 'Weekly mock interviews, case study practice, behavioral coaching, and technical interview preparation.',
      features: [
        'Live mock interviews with feedback',
        'Case study frameworks (consulting, finance)',
        'Behavioral interview coaching (STAR method)',
        'Technical interview prep (coding, system design)',
        'Peer practice groups',
      ],
      status: 'Active Program',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      acronym: 'MWS',
      name: 'Mega Workshop Series',
      tagline: 'Build Skills That Set You Apart',
      description: 'Intensive skill-building workshops on high-demand topics like Excel, SQL, financial modeling, and more.',
      features: [
        'Hands-on skill workshops',
        'Industry expert instructors',
        'Practical projects and assignments',
        'Certificates upon completion',
        'Recorded sessions for review',
      ],
      status: 'Active Program',
      gradient: 'from-orange-500 to-yellow-500',
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-grow pt-20">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/programs" className="hover:text-primary transition-colors">Pillars</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground font-medium">Career Development</span>
            </motion.div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-24 md:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-soft-gradient" />
          <FloatingElement className="absolute top-20 right-10 w-72 h-72 bg-red-200/30 dark:bg-red-900/20 rounded-full blur-3xl" duration={10} />
          <FloatingElement className="absolute bottom-20 left-10 w-96 h-96 bg-orange-200/20 dark:bg-orange-900/10 rounded-full blur-3xl" duration={12} delay={2} />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-medium mb-6">
                  <Briefcase className="h-4 w-4" />
                  Career Development Pillar
                </div>
              </FadeInUp>
              
              <FadeInUp delay={0.1}>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                  Build Your <span className="gradient-text">Career</span>
                </h1>
              </FadeInUp>
              
              <AnimatedGradientBar />
              
              <FadeInUp delay={0.2}>
                <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed max-w-2xl mt-8">
                  Build skills and land opportunities at top companies
                </p>
              </FadeInUp>
              
              <FadeInUp delay={0.3}>
                <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl">
                  Access internships, develop in-demand skills, and connect with mentors through programs run by African Students Network (ASN).
                </p>
              </FadeInUp>

              <FadeInUp delay={0.4}>
                <div className="flex flex-wrap gap-4">
                  <Link href="https://asnafrica.org" target="_blank">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg shadow-red-500/20">
                        Explore ASN Programs
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </Link>
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* ASN Introduction */}
        <section className="py-20 md:py-28 bg-soft-gradient">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                Programs Delivered Through <span className="gradient-text">ASN</span>
              </h2>
            </FadeInUp>
            <AnimatedGradientBar />

            <ScaleIn delay={0.2} className="mt-12">
              <Card className="glass-card border-0 shadow-xl p-8 md:p-12 rounded-2xl">
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Our Career Development pillar is powered by <span className="font-semibold text-primary">ASN, our flagship program with a proven track record</span> of transforming student careers. ASN has supported <span className="font-semibold text-primary">1,200+ students across Nigeria, Ghana, Kenya, and South Africa,</span> helping them secure internships and full-time roles at companies like <span className="font-semibold text-primary">Goldman Sachs, Meta, Bank of America, Google, and more.</span>
                </p>
                <Link href="https://asnafrica.org" target="_blank">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                    <Button className="bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold px-8 py-3 rounded-xl shadow-lg">
                      Learn More on ASN
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </Link>
              </Card>
            </ScaleIn>
          </div>
        </section>

        {/* ASN Programs */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                ASN <span className="gradient-text">Programs</span>
              </h2>
            </FadeInUp>
            <AnimatedGradientBar />
            <FadeInUp delay={0.1}>
              <p className="mt-6 text-lg text-muted-foreground">Comprehensive career transformation programs</p>
            </FadeInUp>

            <StaggerContainer staggerDelay={0.15} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {programs.map((program, idx) => (
                <StaggerItem key={idx}>
                  <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                    <Card className="glass-card border-0 shadow-xl rounded-2xl overflow-hidden h-full">
                      <div className={`h-1.5 bg-gradient-to-r ${program.gradient}`} />
                      <CardContent className="p-8">
                        <div className="inline-block rounded-xl bg-green-100 dark:bg-green-900/30 px-3 py-1 text-sm font-semibold text-green-600 dark:text-green-400 mb-4">
                          {program.status}
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{program.acronym}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{program.name}</p>
                        <p className="text-lg font-semibold text-primary mb-4">{program.tagline}</p>
                        <p className="text-muted-foreground mb-6">{program.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="font-bold text-foreground mb-3">Key Features:</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {program.features.map((feature, i) => (
                              <li key={i} className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link href="https://asnafrica.org" target="_blank">
                          <Button className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-xl">
                            Learn More
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection 
          title="Frequently Asked Questions" 
          description="Common questions about our career development programs"
          faqs={careerFaqs} 
        />
      </main>

      <Footer />
    </div>
  )
}