'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronRight, Rocket, Lightbulb, Users, TrendingUp, ArrowRight } from 'lucide-react'
import { FAQSection } from '@/components/faq-section'
import { FadeInUp, StaggerContainer, StaggerItem, ScaleIn, AnimatedGradientBar, FloatingElement } from '@/components/animations'

export default function EntrepreneurshipPage() {
  const programs = [
    {
      title: 'Digital Startup School',
      tagline: 'From Idea to Launch in 10 Weeks',
      description: 'Transform your startup idea into a launched venture through our intensive program combining workshops, mentorship, and hands-on building.',
      format: 'Virtual, cohort-based intensive',
      status: 'Launching Q2 2026',
      curriculum: ['Idea Validation & Customer Discovery', 'Business Model Design', 'MVP Development', 'Fundraising & Pitching', 'Growth & Scaling'],
      benefits: ['1-on-1 mentorship from successful founders', 'Access to founder network and investor connections', 'Pitch opportunity to real investors', 'Certificate upon completion'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Socialpreneur Program',
      tagline: 'Build Ventures That Profit and Create Impact',
      description: 'Support for young Africans passionate about solving social and environmental challenges through sustainable, profitable ventures.',
      format: 'Hybrid (virtual + in-person Impact Weekend)',
      status: 'Launching Q3 2026',
      curriculum: ['Social Impact Fundamentals', 'Impact Venture Design', 'Impact Measurement', 'Funding Strategies', '2-day In-Person Impact Weekend'],
      benefits: ['Mentorship from social entrepreneurs', 'Microgrant opportunities ($500-$2,000)', 'Impact investor network', 'Community of changemakers'],
      gradient: 'from-red-500 to-pink-500',
    },
  ]

  const benefits = [
    { title: 'Learn from Real Founders', description: "Our mentors have raised funding, built profitable companies, and navigated the entrepreneurship journey in Africa. Learn from those who've actually done it.", icon: Users },
    { title: "Build, Don't Just Learn", description: 'No death by PowerPoint. Every week you build, test, and iterate on real projects. Graduate with an actual launched venture or validated concept.', icon: Rocket },
    { title: 'Africa-Focused Curriculum', description: "We teach entrepreneurship contextualized for African markets—fundraising realities, infrastructure challenges, creative solutions. Not just Silicon Valley theory.", icon: TrendingUp },
    { title: 'Accessible & Inclusive', description: "Scholarships ensure financial barriers don't stop great founders. We believe in investing in potential, not just privilege.", icon: Lightbulb },
  ]

  const faqs = [
    { question: 'Do I need a business idea to join?', answer: 'Not necessarily! Our programs help you validate ideas or find the right problem to solve. Come with curiosity and willingness to learn.' },
    { question: 'Are there any costs?', answer: 'Most programs are free or heavily subsidized. Scholarships are available for those who need financial support.' },
    { question: 'What stage founders are these for?', answer: 'Our programs are designed for early-stage founders—from idea stage to early traction. If you have a mature business, reach out for mentorship opportunities.' },
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
              <span className="text-foreground font-medium">Entrepreneurship</span>
            </motion.div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-24 md:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-soft-gradient" />
          <FloatingElement className="absolute top-20 right-10 w-72 h-72 bg-orange-200/30 dark:bg-orange-900/20 rounded-full blur-3xl" duration={10} />
          <FloatingElement className="absolute bottom-20 left-10 w-96 h-96 bg-red-200/20 dark:bg-red-900/10 rounded-full blur-3xl" duration={12} delay={2} />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-medium mb-6">
                  <Rocket className="h-4 w-4" />
                  Entrepreneurship Pillar
                </div>
              </FadeInUp>
              
              <FadeInUp delay={0.1}>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                  Turn Ideas Into <span className="gradient-text">Impact</span>
                </h1>
              </FadeInUp>
              
              <AnimatedGradientBar />
              
              <FadeInUp delay={0.2}>
                <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed max-w-2xl mt-8">
                  Turn Ideas Into Profitable, Impactful Ventures
                </p>
              </FadeInUp>
              
              <FadeInUp delay={0.3}>
                <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl">
                  Whether you want to build the next unicorn startup or launch a social enterprise solving local problems, our entrepreneurship programs give you the skills, mentorship, and network to succeed.
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
                Our <span className="gradient-text">Programs</span>
              </h2>
            </FadeInUp>
            <AnimatedGradientBar />
            <FadeInUp delay={0.1}>
              <p className="mt-6 text-lg text-muted-foreground">From idea to launch, we've got you covered</p>
            </FadeInUp>

            <StaggerContainer staggerDelay={0.15} className="grid gap-8 md:grid-cols-2 mt-12">
              {programs.map((program, idx) => (
                <StaggerItem key={idx}>
                  <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                    <Card className="glass-card border-0 shadow-xl rounded-2xl overflow-hidden h-full">
                      <div className={`h-1.5 bg-gradient-to-r ${program.gradient}`} />
                      <CardContent className="p-8">
                        <div className="inline-block rounded-xl bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1 text-sm font-semibold text-yellow-600 dark:text-yellow-400 mb-4">
                          {program.status}
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{program.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{program.format}</p>
                        <p className="text-lg font-semibold text-primary mb-4">{program.tagline}</p>
                        <p className="text-muted-foreground mb-6">{program.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="font-bold text-foreground mb-3">Curriculum Highlights:</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {program.curriculum.map((item, i) => (
                              <li key={i}>• {item}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-bold text-foreground mb-3">What You'll Get:</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {program.benefits.map((benefit, i) => (
                              <li key={i} className="flex gap-2">
                                <span className="text-green-500">✓</span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link href="/community">
                          <Button className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-xl">
                            Join Community
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

        {/* Why Choose Section */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                Why Choose <span className="gradient-text">EYII?</span>
              </h2>
            </FadeInUp>
            <AnimatedGradientBar />

            <StaggerContainer staggerDelay={0.1} className="grid gap-8 md:grid-cols-2 mt-12">
              {benefits.map((benefit, idx) => (
                <StaggerItem key={idx}>
                  <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                    <Card className="glass-card border-0 shadow-xl rounded-2xl overflow-hidden h-full group">
                      <CardContent className="p-8">
                        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          <benefit.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{benefit.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Venture?</h2>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <p className="text-lg text-gray-300 mb-8">Join the waitlist to be notified when programs launch</p>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/community">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold px-8 py-3 rounded-xl shadow-lg">
                      Join Community
                    </Button>
                  </motion.div>
                </Link>
                <Link href="/pillars/innovation">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-xl">
                    Explore Innovation Pillar
                  </Button>
                </Link>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection title="Frequently Asked Questions" faqs={faqs} />
      </main>

      <Footer />
    </div>
  )
}