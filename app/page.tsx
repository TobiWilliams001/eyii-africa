'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FadeInUp, StaggerContainer, AnimatedGradientBar, FloatingElement } from '@/components/animations'
import { TestimonialsCarousel } from '@/components/testimonials-carousel'
import { motion, useInView } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { 
  Briefcase, 
  Rocket, 
  Lightbulb, 
  Crown, 
  ArrowRight, 
  Users, 
  GraduationCap, 
  Building2, 
  Globe,
  CheckCircle,
  MapPin,
  Award,
  Handshake
} from 'lucide-react'

// AnimatedCounter Component
function AnimatedCounter({ end, suffix = '', duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [end, duration, isInView])

  return <span ref={ref}>{count}{suffix}</span>
}

const pillars = [
  {
    title: "Career Development",
    description: "Build job-ready skills and land opportunities at top companies across Africa and globally.",
    icon: Briefcase,
    href: "/pillars/career",
    gradient: "from-blue-600 to-blue-700",
    iconBg: "from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Entrepreneurship",
    description: "Launch and scale your startup with mentorship, resources, and funding opportunities.",
    icon: Rocket,
    href: "/pillars/entrepreneurship",
    gradient: "from-orange-600 to-orange-700",
    iconBg: "from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30",
    iconColor: "text-orange-600 dark:text-orange-400",
  },
  {
    title: "Innovation",
    description: "Solve real problems through hackathons, tech projects, and creative solutions.",
    icon: Lightbulb,
    href: "/pillars/innovation",
    gradient: "from-green-600 to-green-700",
    iconBg: "from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    title: "Leadership",
    description: "Develop leadership skills to drive meaningful change in your community and beyond.",
    icon: Crown,
    href: "/pillars/leadership",
    gradient: "from-purple-600 to-purple-700",
    iconBg: "from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
]

const stats = [
  { 
    value: 1200, 
    suffix: '+', 
    label: 'Students Impacted',
    icon: Users,
    gradient: "from-blue-500 to-blue-600",
  },
  { 
    value: 4, 
    suffix: '', 
    label: 'African Countries',
    icon: MapPin,
    gradient: "from-green-500 to-green-600",
  },
  { 
    value: 50, 
    suffix: '+', 
    label: 'Partner Universities',
    icon: GraduationCap,
    gradient: "from-orange-500 to-orange-600",
  },
  { 
    value: 100, 
    suffix: '+', 
    label: 'Industry Mentors',
    icon: Handshake,
    gradient: "from-purple-500 to-purple-600",
  },
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-grow pt-20">
        {/* 1. Hero Section */}
        <section className="relative py-24 md:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-soft-gradient" />
          <FloatingElement className="absolute top-20 right-10 w-72 h-72 bg-red-200/30 dark:bg-red-900/20 rounded-full blur-3xl" duration={10}>
            <div />
          </FloatingElement>
          <FloatingElement className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl" duration={12} delay={2}>
            <div />
          </FloatingElement>
          <FloatingElement className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-200/10 dark:bg-orange-900/10 rounded-full blur-3xl" duration={15} delay={1}>
            <div />
          </FloatingElement>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-medium mb-6">
                  <Globe className="h-4 w-4" />
                  Empowering African Youth
                </div>
              </FadeInUp>
              
              <FadeInUp delay={0.1}>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                  Empowering Youth for{' '}
                  <span className="gradient-text">Impact & Innovation</span>
                </h1>
              </FadeInUp>
              
              <AnimatedGradientBar />
              
              <FadeInUp delay={0.2}>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mt-8 mb-8">
                  Building Africa's next generation of leaders, entrepreneurs, and innovators through world-class programs and community.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/programs">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button variant="gradient" size="lg" className="w-full sm:w-auto">
                        Explore Programs
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  </Link>
                  <Link href="/community">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      Join Community
                    </Button>
                  </Link>
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* 2. Four Pillars Section */}
        <section className="py-20 md:py-28 bg-soft-gradient">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                  Our Four <span className="gradient-text">Pillars</span>
                </h2>
                <AnimatedGradientBar className="mx-auto" />
                <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive programs designed to empower African youth across key areas
                </p>
              </div>
            </FadeInUp>

            <StaggerContainer staggerDelay={0.1} className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {pillars.map((pillar, idx) => (
                <motion.div key={idx} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                  <Link href={pillar.href}>
                    <Card className="glass-card border-0 shadow-xl rounded-2xl overflow-hidden h-full group cursor-pointer">
                      <div className={`h-2 bg-gradient-to-r ${pillar.gradient}`} />
                      <div className="p-6">
                        <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${pillar.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                          <pillar.icon className={`h-7 w-7 ${pillar.iconColor}`} />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {pillar.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {pillar.description}
                        </p>
                        <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                          Learn More
                          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* 3. Why EYII Section */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FadeInUp>
                <div>
                  <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                    Why Choose <span className="gradient-text">EYII?</span>
                  </h2>
                  <AnimatedGradientBar />
                  <p className="mt-6 text-lg text-muted-foreground mb-8">
                    We provide more than just programs—we build a supportive ecosystem for African youth to thrive.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Access to industry mentors and professionals',
                      'Hands-on, practical skill development',
                      'Networking with peers across Africa',
                      'Direct pathways to opportunities',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.2}>
                <Card className="glass-card border-0 shadow-xl rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4">
                      <Users className="h-10 w-10 text-blue-500 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-foreground">Community</div>
                      <div className="text-sm text-muted-foreground">Connect & Grow</div>
                    </div>
                    <div className="text-center p-4">
                      <GraduationCap className="h-10 w-10 text-green-500 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-foreground">Learning</div>
                      <div className="text-sm text-muted-foreground">Skill Building</div>
                    </div>
                    <div className="text-center p-4">
                      <Building2 className="h-10 w-10 text-orange-500 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-foreground">Opportunities</div>
                      <div className="text-sm text-muted-foreground">Career & Business</div>
                    </div>
                    <div className="text-center p-4">
                      <Globe className="h-10 w-10 text-purple-500 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-foreground">Impact</div>
                      <div className="text-sm text-muted-foreground">Africa & Beyond</div>
                    </div>
                  </div>
                </Card>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* 4. Testimonials Section */}
        <section className="py-20 md:py-28 bg-soft-gradient">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                  What Students <span className="gradient-text">Say</span>
                </h2>
                <AnimatedGradientBar className="mx-auto" />
              </div>
            </FadeInUp>
            <TestimonialsCarousel />
          </div>
        </section>

        {/* 5. Stats Section - Our Impact in Numbers (IMPROVED) */}
        <section className="py-20 md:py-28 bg-gray-950 text-white relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 gradient-mesh opacity-10" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeInUp>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6 backdrop-blur-sm border border-white/10">
                  <Award className="h-4 w-4" />
                  Growing Every Day
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                  Our Impact in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Numbers</span>
                </h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  Join a movement that's transforming youth across Africa
                </p>
              </div>
            </FadeInUp>
            
            <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ y: -5, scale: 1.02 }} 
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative group">
                    {/* Glass Card */}
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all h-full">
                      {/* Gradient Top Border */}
                      <div className={`absolute top-0 left-4 right-4 h-1 bg-gradient-to-r ${stat.gradient} rounded-full opacity-60 group-hover:opacity-100 transition-opacity`} />
                      
                      {/* Icon */}
                      <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                        <stat.icon className="h-7 w-7 text-white" />
                      </div>
                      
                      {/* Number */}
                      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                      </div>
                      
                      {/* Label */}
                      <div className="text-gray-400 font-medium">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* 6. CTA Section - Ready to Start Your Journey */}
        <section className="py-16 md:py-24 bg-soft-gradient relative overflow-hidden">
          <FloatingElement className="absolute top-10 right-10 w-64 h-64 bg-red-200/20 dark:bg-red-900/10 rounded-full blur-3xl" duration={8}>
            <div />
          </FloatingElement>
          
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <FadeInUp>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Ready to Start Your <span className="gradient-text">Journey?</span>
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of ambitious African students building their futures. Your next opportunity awaits.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/programs">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="gradient" size="lg">
                      Browse Programs
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg">
                    Learn About EYII
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