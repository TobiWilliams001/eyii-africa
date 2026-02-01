'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Linkedin, Users, Lightbulb, Shield, ArrowRight, Heart, Target } from 'lucide-react'
import { coreLeadership, teamLeads, partners } from '@/lib/data/team'
import { FadeInUp, StaggerContainer, AnimatedGradientBar, FloatingElement } from '@/components/animations'
import { motion } from 'framer-motion'

export default function AboutPage() {
  const coreValues = [
    {
      title: 'Collaboration',
      description: 'We believe in the power of working together to achieve common goals.',
      icon: Users,
    },
    {
      title: 'Innovation',
      description: 'We embrace new ideas and creative approaches to solve challenges.',
      icon: Lightbulb,
    },
    {
      title: 'Integrity',
      description: 'We uphold the highest standards of ethics and transparency.',
      icon: Shield,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-24 md:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-soft-gradient" />
          <FloatingElement className="absolute top-20 right-10 w-72 h-72 bg-red-200/30 dark:bg-red-900/20 rounded-full blur-3xl" duration={10}>
            <div />
          </FloatingElement>
          <FloatingElement className="absolute bottom-20 left-10 w-96 h-96 bg-slate-200/20 dark:bg-slate-900/10 rounded-full blur-3xl" duration={12} delay={2}>
            <div />
          </FloatingElement>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <FadeInUp>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                  About <span className="gradient-text">EYII</span>
                </h1>
              </FadeInUp>
              
              <AnimatedGradientBar />
              
              <FadeInUp delay={0.1}>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mt-8">
                  Empowering African Youth Through Innovation and Opportunity. EYII is building the largest youth empowerment ecosystem in Africa.
                </p>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 md:py-28 bg-soft-gradient">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <StaggerContainer staggerDelay={0.15} className="grid gap-8 lg:grid-cols-2">
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                <Card className="glass-card border-0 shadow-xl rounded-2xl overflow-hidden h-full">
                  <div className="h-1.5 bg-gradient-to-r from-red-600 to-red-500" />
                  <div className="p-8">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30 flex items-center justify-center mb-6">
                      <Target className="h-6 w-6 text-red-600 dark:text-red-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      EYII provides structured pathways to opportunity for African students through four pillars: <span className="font-semibold text-foreground">Career Development, Entrepreneurship, Innovation, and Leadership.</span> We exist to remove barriers and create access to world-class programs, mentorship, and networks that transform futures.
                    </p>
                  </div>
                </Card>
              </motion.div>
              
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                <Card className="glass-card border-0 shadow-xl rounded-2xl overflow-hidden h-full">
                  <div className="h-1.5 bg-gradient-to-r from-slate-700 to-slate-600" />
                  <div className="p-8">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800/50 dark:to-slate-700/50 flex items-center justify-center mb-6">
                      <Heart className="h-6 w-6 text-slate-700 dark:text-slate-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      To be the platform every African student uses to access opportunities and build their future. <span className="font-semibold text-foreground">By 2027, we envision EYII on every ambitious student's phone across the continent.</span> We're committed to creating systemic change.
                    </p>
                  </div>
                </Card>
              </motion.div>
            </StaggerContainer>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                Leadership <span className="gradient-text">Team</span>
              </h2>
            </FadeInUp>
            <AnimatedGradientBar />
            <FadeInUp delay={0.1}>
              <p className="mt-6 text-lg text-muted-foreground">Meet the leaders driving EYII's mission</p>
            </FadeInUp>

            <StaggerContainer staggerDelay={0.1} className="grid gap-8 md:grid-cols-3 mt-12">
              {coreLeadership.map((leader, index) => (
                <motion.div key={leader.id} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                  <Card className="glass-card border-0 shadow-xl rounded-2xl overflow-hidden h-full group">
                    <div className="h-1.5 bg-gradient-to-r from-red-600 to-slate-700" />
                    <CardContent className="p-0">
                      <div className="relative w-full aspect-square bg-gradient-to-br from-red-50 to-gray-100 dark:from-red-900/20 dark:to-gray-800">
                        {leader.image ? (
                          <img 
                            src={leader.image}
                            alt={leader.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-red-500 to-slate-700 flex items-center justify-center text-white text-3xl font-bold">
                              {leader.name.split(' ').map(n => n[0]).join('')}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{leader.name}</h3>
                        <p className="text-primary font-semibold mb-6">{leader.role}</p>
                        <div className="flex gap-3">
                          <motion.a 
                            href={leader.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            title="LinkedIn"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/40 transition-colors"
                          >
                            <Linkedin className="h-5 w-5" />
                          </motion.a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Team Leads Section */}
        <section className="py-20 md:py-28 bg-soft-gradient">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                Team <span className="gradient-text">Leads</span>
              </h2>
            </FadeInUp>
            <AnimatedGradientBar />
            <FadeInUp delay={0.1}>
              <p className="mt-6 text-lg text-muted-foreground">Passionate individuals driving our programs</p>
            </FadeInUp>

            <StaggerContainer staggerDelay={0.08} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-12">
              {teamLeads.map((member) => (
                <motion.div key={member.id} whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                  <Card className="glass-card border-0 shadow-lg rounded-2xl overflow-hidden h-full group">
                    <CardContent className="p-0 flex flex-col h-full">
                      <div className="relative w-full aspect-square bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                        {member.image ? (
                          <img 
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-red-500 to-slate-700 flex items-center justify-center text-white text-2xl font-bold">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="p-6 flex flex-col justify-between flex-1">
                        <div>
                          <h3 className="font-bold text-foreground mb-2 text-lg group-hover:text-primary transition-colors">{member.name}</h3>
                          <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{member.role}</p>
                        </div>
                        <div className="flex gap-2">
                          <motion.a 
                            href={member.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            title="LinkedIn"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/40 transition-colors"
                          >
                            <Linkedin className="h-4 w-4" />
                          </motion.a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <FadeInUp>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                  Our Core <span className="gradient-text">Values</span>
                </h2>
              </FadeInUp>
              <div className="flex justify-center">
                <AnimatedGradientBar />
              </div>
              <FadeInUp delay={0.1}>
                <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                  The principles that guide our work and define our culture.
                </p>
              </FadeInUp>
            </div>

            <StaggerContainer staggerDelay={0.1} className="grid gap-8 md:grid-cols-3">
              {coreValues.map((value, index) => (
                <motion.div key={index} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                  <Card className="glass-card border-0 shadow-xl rounded-2xl p-8 h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-red-100 to-slate-100 dark:from-red-900/30 dark:to-slate-800/30 flex items-center justify-center">
                        <value.icon className="h-7 w-7 text-red-600 dark:text-red-400" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </Card>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 md:py-28 bg-soft-gradient">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <FadeInUp>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                  Our <span className="gradient-text">Partners</span>
                </h2>
              </FadeInUp>
              <div className="flex justify-center">
                <AnimatedGradientBar />
              </div>
              <FadeInUp delay={0.1}>
                <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                  Organizations we collaborate with to expand opportunities for African youth.
                </p>
              </FadeInUp>
            </div>

            <StaggerContainer staggerDelay={0.1} className="grid gap-8 md:grid-cols-3">
              {partners.map((partner) => (
                <motion.div key={partner.id} whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <Card className="glass-card border-0 shadow-xl rounded-2xl overflow-hidden h-full group">
                    <div className="h-1 bg-gradient-to-r from-red-600 to-slate-700" />
                    <CardContent className="p-8 flex flex-col items-center text-center">
                      <div className="w-32 h-32 mb-6 rounded-2xl bg-white dark:bg-gray-800 p-4 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                        {partner.image ? (
                          <img 
                            src={partner.image}
                            alt={partner.name}
                            className="max-w-full max-h-full object-contain"
                          />
                        ) : (
                          <div className="h-20 w-20 rounded-full bg-gradient-to-br from-red-500 to-slate-700 flex items-center justify-center text-white text-xl font-bold">
                            {partner.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                          </div>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {partner.name}
                      </h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gray-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 gradient-mesh opacity-20" />
          <FloatingElement className="absolute top-10 right-10 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" duration={8}>
            <div />
          </FloatingElement>
          
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <FadeInUp>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-slate-300">Mission</span>
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Whether you're a student seeking opportunities, a mentor wanting to give back, or an organization looking to partner, there's a place for you at EYII.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/programs">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="gradient" size="lg">
                      Explore Programs
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </Link>
                <Link href="/contact">
                  <Button variant="outline-light" size="lg">
                    Get in Touch
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