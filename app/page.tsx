"use client";

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { TestimonialCarousel } from '@/components/testimonials-carousel'
import { testimonials } from '@/lib/data/testimonials'
import { FadeInUp, FadeInLeft, FadeInRight, ScaleIn, StaggerContainer, StaggerItem, FloatingElement, AnimatedGradientBar, HoverScale } from '@/components/animations'
import { ArrowRight, Target, TrendingUp, Globe, Briefcase, Lightbulb, Users, Award } from 'lucide-react'
import { StatCard, siteStats } from '@/components/animated-counter';

const pillars = [
  {
    title: 'Career Development',
    desc: 'Build skills and access opportunities through our flagship ASN program. Connect with mentors, secure internships, and land your dream job at top global companies.',
    href: '/pillars/career',
    color: 'from-red-500 to-red-600',
    iconColor: 'from-red-100 to-red-200',
    darkIconColor: 'dark:from-red-900/50 dark:to-red-800/50',
    icon: Briefcase,
  },
  {
    title: 'Entrepreneurship',
    desc: 'Launch ventures through intensive programs. Turn ideas into sustainable businesses that create impact and generate profit.',
    href: '/pillars/entrepreneurship',
    color: 'from-orange-500 to-red-500',
    iconColor: 'from-orange-100 to-orange-200',
    darkIconColor: 'dark:from-orange-900/50 dark:to-red-900/50',
    icon: TrendingUp,
  },
  {
    title: 'Innovation',
    desc: 'Solve real problems through challenges and labs. Develop creative solutions that address community needs and create meaningful impact.',
    href: '/pillars/innovation',
    color: 'from-blue-500 to-purple-600',
    iconColor: 'from-blue-100 to-purple-200',
    darkIconColor: 'dark:from-blue-900/50 dark:to-purple-900/50',
    icon: Lightbulb,
  },
  {
    title: 'Leadership',
    desc: 'Develop through Founders Series and training programs. Build skills to lead teams, inspire others, and drive organizational success.',
    href: '/pillars/leadership',
    color: 'from-purple-500 to-pink-600',
    iconColor: 'from-purple-100 to-pink-200',
    darkIconColor: 'dark:from-purple-900/50 dark:to-pink-900/50',
    icon: Users,
  },
];

const features = [
  {
    icon: Target,
    title: 'Structured Pathways',
    description: 'No more guessing. Our programs provide clear step-by-step pathways from where you are to where you want to be.',
  },
  {
    icon: Award,
    title: 'Proven Impact',
    description: '1,200+ students across Nigeria, Ghana, Kenya, and South Africa have secured internships at top companies like Meta, Goldman Sachs, and Microsoft.',
  },
  {
    icon: Globe,
    title: 'Pan-African Community',
    description: 'Connect with ambitious peers across the continent. Build relationships and networks that last far beyond the programs.',
  },
];

const stats = [
  { value: 1200, label: 'Students Empowered', suffix: '+' },
  { value: 4, label: 'Countries Reached', suffix: '' },
  { value: 50, label: 'University Partners', suffix: '+' },
  { value: 2, label: 'Years of Impact', suffix: '' },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-50/80 via-background to-blue-50/50 dark:from-red-950/20 dark:via-background dark:to-blue-950/20 pointer-events-none" />
          
          {/* Floating decorative elements */}
          <FloatingElement className="absolute top-20 right-[10%] w-72 h-72 md:w-96 md:h-96 opacity-60" duration={10}>
            <div className="w-full h-full bg-gradient-to-br from-red-200/50 to-orange-200/30 dark:from-red-800/20 dark:to-orange-800/10 rounded-full blur-3xl" />
          </FloatingElement>
          
          <FloatingElement className="absolute bottom-10 left-[5%] w-64 h-64 md:w-80 md:h-80 opacity-50" duration={12} delay={2}>
            <div className="w-full h-full bg-gradient-to-br from-blue-200/40 to-purple-200/30 dark:from-blue-800/15 dark:to-purple-800/10 rounded-full blur-3xl" />
          </FloatingElement>
          
          {/* Subtle pattern */}
          <div className="absolute inset-0 bg-subtle-pattern opacity-40 pointer-events-none" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <FadeInUp>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
                  Empowering{' '}
                  <span className="gradient-text">African</span>{' '}
                  Youth
                </h1>
              </FadeInUp>
              
              <AnimatedGradientBar className="mb-8" />
              
              <FadeInUp delay={0.2}>
                <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
                  Access world-class programs in Career Development, Entrepreneurship, Innovation, and Leadership. Build your future with structured pathways to opportunity, mentorship, and community.
                </p>
              </FadeInUp>
              
              <FadeInUp delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/programs">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className="group w-full sm:w-auto relative overflow-hidden bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold px-8 py-6 text-lg shadow-xl shadow-red-500/20 hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-500 rounded-xl">
                        <span className="relative z-10 flex items-center gap-2">
                          Explore Programs
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute inset-0 animate-shimmer" />
                        </div>
                      </Button>
                    </motion.div>
                  </Link>
                  <Link href="/community">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button variant="outline" className="group w-full sm:w-auto border-2 border-red-500/30 hover:border-red-500 hover:bg-red-500 text-foreground hover:text-white font-semibold px-8 py-6 text-lg transition-all duration-500 rounded-xl">
                        Join Our Community
                      </Button>
                    </motion.div>
                  </Link>
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* Four Pillars Section */}
        <section className="py-20 md:py-32 bg-soft-gradient relative overflow-hidden">
          <FloatingElement className="absolute top-20 right-10 w-72 h-72 opacity-40" duration={14}>
            <div className="w-full h-full bg-red-100/30 dark:bg-red-800/10 rounded-full blur-3xl" />
          </FloatingElement>
          
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-16 md:mb-20">
              <FadeInUp>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                  Our Four <span className="gradient-text">Pillars</span>
                </h2>
              </FadeInUp>
              <AnimatedGradientBar />
              <FadeInUp delay={0.2}>
                <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                  Structured pathways to opportunity across Career, Entrepreneurship, Innovation, and Leadership
                </p>
              </FadeInUp>
            </div>

            <StaggerContainer staggerDelay={0.1} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map((pillar, index) => (
                <StaggerItem key={index}>
                  <Link href={pillar.href}>
                    <HoverScale>
                      <Card className="group h-full glass-card border-0 hover:shadow-glow transition-all duration-500 cursor-pointer overflow-hidden rounded-2xl">
                        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.color} group-hover:h-1.5 transition-all duration-300`} />
                        <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                        
                        <CardContent className="p-6 md:p-8 relative z-10">
                          <motion.div 
                            className={`mb-6 h-14 w-14 md:h-16 md:w-16 rounded-2xl bg-gradient-to-br ${pillar.iconColor} ${pillar.darkIconColor} flex items-center justify-center shadow-md`}
                            whileHover={{ scale: 1.1, rotate: 6 }}
                            transition={{ duration: 0.3 }}
                          >
                            <pillar.icon className={`w-7 h-7 md:w-8 md:h-8 bg-gradient-to-r ${pillar.color} bg-clip-text`} style={{ color: 'transparent', backgroundClip: 'text', WebkitBackgroundClip: 'text' }} />
                          </motion.div>
                          
                          <h3 className={`text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${pillar.color} transition-all duration-300`}>
                            {pillar.title}
                          </h3>
                          
                          <p className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base">
                            {pillar.desc}
                          </p>
                          
                          <Button className={`w-full bg-gradient-to-r ${pillar.color} text-white font-semibold rounded-xl transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                            <span className="flex items-center justify-center gap-2">
                              Explore Pillar
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                          </Button>
                        </CardContent>
                      </Card>
                    </HoverScale>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Why Choose EYII Section */}
        <section className="py-20 md:py-32 bg-background relative overflow-hidden">
          <FloatingElement className="absolute bottom-0 left-0 w-96 h-96 opacity-30" duration={15} delay={3}>
            <div className="w-full h-full bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl" />
          </FloatingElement>
          
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-16">
              <FadeInUp>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                  Why Choose <span className="gradient-text">EYII?</span>
                </h2>
              </FadeInUp>
              <AnimatedGradientBar />
              <FadeInUp delay={0.2}>
                <p className="mt-6 max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
                  We are building Africa's largest youth empowerment ecosystem, providing structured pathways, proven mentorship, and a thriving community of ambitious peers across the continent.
                </p>
              </FadeInUp>
            </div>

            <StaggerContainer staggerDelay={0.15} className="grid gap-6 md:gap-8 md:grid-cols-3">
              {features.map((item, index) => (
                <StaggerItem key={index}>
                  <HoverScale>
                    <Card className="group h-full glass-card border-0 hover:shadow-glow transition-all duration-500 rounded-2xl overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <CardContent className="p-6 md:p-8 relative z-10">
                        <motion.div 
                          className="mb-6 h-16 w-16 rounded-2xl bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 flex items-center justify-center shadow-md"
                          whileHover={{ scale: 1.15, rotate: 8 }}
                          transition={{ duration: 0.3 }}
                        >
                          <item.icon className="w-8 h-8 text-red-600 dark:text-red-400" />
                        </motion.div>
                        
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                          {item.title}
                        </h3>
                        
                        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </HoverScale>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <TestimonialCarousel
          title="Student Success Stories"
          testimonials={testimonials}
          autoplay={true}
          autoplayInterval={5000}
        />

        {/* Stats Section  */}
        <section className="py-20 md:py-28 bg-gray-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-subtle-pattern opacity-5" />
          <div className="absolute inset-0 gradient-mesh opacity-20" />
          
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeInUp className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Our Impact in <span className="text-red-400">Numbers</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-orange-400 rounded-full mx-auto" />
            </FadeInUp>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {siteStats.map((stat, index) => (
                <StatCard
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  suffix={stat.suffix}
                  delay={index * 0.1}
                  variant="dark"
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-soft-gradient relative overflow-hidden">
          <FloatingElement className="absolute top-10 left-10 w-64 h-64 opacity-40" duration={12}>
            <div className="w-full h-full bg-red-100/40 dark:bg-red-800/10 rounded-full blur-3xl" />
          </FloatingElement>
          
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <ScaleIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Ready to Start Your <span className="gradient-text">Journey?</span>
              </h2>
            </ScaleIn>
            
            <FadeInUp delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Join thousands of African students building their future through structured programs, mentorship, and community.
              </p>
            </FadeInUp>
            
            <FadeInUp delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/programs">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold px-10 py-6 text-lg shadow-xl shadow-red-500/20 rounded-xl">
                      <span className="flex items-center gap-2">
                        Explore Our Programs
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    </Button>
                  </motion.div>
                </Link>
                <Link href="/about">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="outline" className="w-full sm:w-auto border-2 border-muted-foreground/30 hover:border-red-500 hover:bg-red-500 hover:text-white font-semibold px-10 py-6 text-lg rounded-xl transition-all duration-300">
                      Learn More About EYII
                    </Button>
                  </motion.div>
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