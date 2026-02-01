'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronRight, Crown, Users, Target, Heart, Compass, Shield, ArrowRight } from 'lucide-react'
import { FadeInUp, StaggerContainer, StaggerItem, AnimatedGradientBar, FloatingElement } from '@/components/animations'
export default function LeadershipPage() {
  const competencies = [
    { title: 'Communication', desc: 'Articulate vision, inspire action, and build alignment through effective communication.', icon: Users },
    { title: 'Team Building', desc: 'Assemble, motivate, and lead diverse teams toward common goals.', icon: Heart },
    { title: 'Strategic Thinking', desc: 'See the big picture, anticipate challenges, and make sound long-term decisions.', icon: Target },
    { title: 'Emotional Intelligence', desc: 'Understand yourself and others, manage emotions, and build strong relationships.', icon: Heart },
    { title: 'Execution', desc: 'Turn vision into action, deliver results, and maintain accountability.', icon: Compass },
    { title: 'Integrity', desc: 'Lead with ethics, build trust, and make principled decisions.', icon: Shield },
  ]
  const programs = [
    {
      title: 'Founders Series',
      tagline: "Learn from Africa's Leading Founders",
      description: 'Monthly sessions featuring successful African founders and leaders sharing their journeys, lessons, and insights. Interactive format with Q&A and small group discussions.',
      status: 'Launching Q3 2026',
      features: ['60-minute founder fireside chat', 'Journey from idea to scale', 'Failures, pivots, and lessons learned', 'Live Q&A session', 'Networking breakout rooms'],
      access: 'Free for all EYII community members',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Leadership Training Program',
      tagline: 'From Participant to Leader',
      description: 'Comprehensive leadership development program covering essential skills: communication, team management, strategic thinking, and emotional intelligence.',
      status: 'Launching Q4 2026',
      features: ['Week 1: Leadership Foundations', 'Week 2: Communication & Influence', 'Week 3-4: Team Dynamics & EQ', 'Week 5-6: Strategic Thinking', 'Week 7-8: Capstone Project'],
      access: '6-8 hours/week commitment | Cohort size: 25-30',
      gradient: 'from-pink-600 to-red-600',
    },
    {
      title: 'Student Leadership Incubator',
      tagline: 'Lead Real Projects, Create Real Impact',
      description: '6-month project-based leadership development. Selected student leaders work on real community or organizational projects while receiving intensive mentorship and training.',
      status: 'Coming 2027',
      features: ['Submit project proposal', 'Leadership bootcamp', 'Lead your project (6 months)', 'Present outcomes'],
      benefits: ['$500-$1,000 project grant', 'Dedicated leadership mentor', 'Real leadership experience', 'Strong reference letters'],
      gradient: 'from-blue-600 to-purple-600',
      fullWidth: true,
    },
  ]
  const whyLeadership = [
    { title: 'Africa Needs Visionary Leaders', description: "The continent's transformation requires leaders who can navigate complexity, drive change, and inspire collective action. Be that leader." },
    { title: 'Leadership Is a Skill, Not a Title', description: "You don't need a formal position to lead. Develop the skills now, and opportunities will follow. Leadership is learned, not born." },
    { title: 'Your Career Will Demand It', description: "Every profession values leadership. Whether you're an engineer, entrepreneur, or consultant, leadership skills multiply your impact and opportunities." },
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
              <span className="text-foreground font-medium">Leadership</span>
            </motion.div>
          </div>
        </div>
        {/* Hero Section */}
        <section className="relative py-24 md:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-soft-gradient" />
          <FloatingElement className="absolute top-20 right-10 w-72 h-72 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl" duration={10} />
          <FloatingElement className="absolute bottom-20 left-10 w-96 h-96 bg-pink-200/20 dark:bg-pink-900/10 rounded-full blur-3xl" duration={12} delay={2} />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium mb-6">
                  <Crown className="h-4 w-4" />
                  Leadership Pillar
                </div>
              </FadeInUp>
              
              <FadeInUp delay={0.1}>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                  Lead With <span className="gradient-text">Impact</span>
                </h1>
              </FadeInUp>
              
              <AnimatedGradientBar />
              
              <FadeInUp delay={0.2}>
                <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed max-w-2xl mt-8">
                  Develop the Skills to Lead and Inspire
                </p>
              </FadeInUp>
              
              <FadeInUp delay={0.3}>
                <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl">
                  Build leadership capacity through structured training, real-world practice, and mentorship from experienced leaders. Learn to lead teams, drive change, and create impact.
                </p>
              </FadeInUp>
            </div>
          </div>
        </section>
        {/* Leadership Competencies */}
        <section className="py-20 md:py-28 bg-soft-gradient">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                What You'll <span className="gradient-text">Develop</span>
              </h2>
            </FadeInUp>
            <AnimatedGradientBar />
            <FadeInUp delay={0.1}>
              <p className="mt-6 text-lg text-muted-foreground">Core competencies across all leadership programs</p>
            </FadeInUp>
            <StaggerContainer staggerDelay={0.1} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {competencies.map((comp, idx) => (
                <StaggerItem key={idx}>
                  <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                    <Card className="glass-card border-0 shadow-lg rounded-2xl p-6 h-full">
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 flex items-center justify-center mb-4">
                        <comp.icon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <h3 className="text-lg font-bold text-primary mb-3">{comp.title}</h3>
                      <p className="text-muted-foreground">{comp.desc}</p>
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
        {/* Programs */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                Our Leadership <span className="gradient-text">Programs</span>
              </h2>
            </FadeInUp>
            <AnimatedGradientBar />
            <StaggerContainer staggerDelay={0.15} className="grid gap-8 md:grid-cols-2 mt-12">
              {programs.slice(0, 2).map((program, idx) => (
                <StaggerItem key={idx}>
                  <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                    <Card className="glass-card border-0 shadow-xl rounded-2xl overflow-hidden h-full">
                      <div className={`h-1.5 bg-gradient-to-r ${program.gradient}`} />
                      <CardContent className="p-8">
                        <div className="inline-block rounded-xl bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1 text-sm font-semibold text-yellow-600 dark:text-yellow-400 mb-4">
                          {program.status}
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{program.title}</h3>
                        <p className="text-lg font-semibold text-primary mb-4">{program.tagline}</p>
                        <p className="text-muted-foreground mb-6">{program.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="font-bold text-foreground mb-3">Program Includes:</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {program.features.map((item, i) => (
                              <li key={i}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                        <p className="text-sm text-muted-foreground mb-6">{program.access}</p>
                        <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl">
                          Join Program
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
              {/* Full-width Student Leadership Incubator */}
              <StaggerItem className="md:col-span-2">
                <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                  <Card className="glass-card border-0 shadow-xl rounded-2xl overflow-hidden">
                    <div className={`h-1.5 bg-gradient-to-r ${programs[2].gradient}`} />
                    <CardContent className="p-8">
                      <div className="inline-block rounded-xl bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4">
                        {programs[2].status}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{programs[2].title}</h3>
                      <p className="text-lg font-semibold text-primary mb-4">{programs[2].tagline}</p>
                      <p className="text-muted-foreground mb-6">{programs[2].description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-bold text-foreground mb-3">How It Works:</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {programs[2].features.map((item, i) => (
                              <li key={i}>{i + 1}. {item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground mb-3">What You'll Get:</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {programs[2].benefits?.map((benefit, i) => (
                              <li key={i} className="flex gap-2">
                                <span className="text-green-500">✓</span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <Button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl">
                        Express Interest
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>
        {/* Why Leadership */}
        <section className="py-20 md:py-28 bg-soft-gradient">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                Why Leadership <span className="gradient-text">Development?</span>
              </h2>
            </FadeInUp>
            <AnimatedGradientBar />
            <StaggerContainer staggerDelay={0.1} className="grid gap-8 md:grid-cols-3 mt-12">
              {whyLeadership.map((reason, idx) => (
                <StaggerItem key={idx}>
                  <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                    <Card className="glass-card border-0 shadow-lg rounded-2xl p-8 h-full">
                      <h3 className="text-xl font-bold text-foreground mb-3">{reason.title}</h3>
                      <p className="text-muted-foreground">{reason.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Lead?</h2>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <p className="text-lg text-gray-300 mb-8">Join our leadership programs and develop the skills that will set you apart.</p>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/community">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg">
                      Join Community
                    </Button>
                  </motion.div>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-xl">
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