'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { FAQSection } from '@/components/faq-section'
import { FadeInUp, StaggerContainer, AnimatedGradientBar, FloatingElement } from '@/components/animations'
import { Users, MessageCircle, Award, ArrowRight, Zap, Heart, Globe, Calendar } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

// AnimatedCounter Component (inline to avoid import issues)
interface AnimatedCounterProps {
  end: number
  suffix?: string
  duration?: number
}

function AnimatedCounter({ end, suffix = '', duration = 2 }: AnimatedCounterProps) {
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
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration, isInView])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function CommunityPage() {
  const communityFaqs = [
    {
      question: 'Is the community free to join?',
      answer: 'Yes! EYII community membership is completely free. We believe in removing barriers to opportunity and connection.',
    },
    {
      question: 'Do I need to be enrolled in a program to join?',
      answer: 'No, but program participants automatically become community members and get access to exclusive events.',
    },
    {
      question: 'How active is the community?',
      answer: 'Very active! We host monthly meetups, masterclasses, pitch nights, and mentorship mixers.',
    },
    {
      question: 'Can I join if I am not currently a student?',
      answer: 'Our primary focus is current students, but recent graduates and young professionals are welcome.',
    },
    {
      question: 'How can I find mentors in the community?',
      answer: 'We host monthly Mentorship Mixer events where you can meet potential mentors.',
    },
    {
      question: 'Can I find co-founders or collaborators?',
      answer: 'Absolutely! Our Collaboration Hub is designed for exactly this.',
    },
  ]

  const benefits = [
    { title: 'Connect with Peers', description: 'Join a community of ambitious African students from across the continent.', icon: Users },
    { title: 'Access Opportunities', description: 'Get first access to programs, internships, competitions, and events.', icon: Zap },
    { title: 'Learn from Mentors', description: 'Connect with industry professionals and successful alumni.', icon: Award },
    { title: 'Collaborate on Projects', description: 'Find teammates and collaborators for your ventures and ideas.', icon: Heart },
  ]

  const channels = [
    { title: 'Career Development', description: 'Resume reviews, interview prep, job postings', members: '500+' },
    { title: 'Entrepreneurship', description: 'Startup advice, funding opportunities, co-founder matching', members: '350+' },
    { title: 'Innovation', description: 'Hackathon teams, project showcases, tech discussions', members: '400+' },
    { title: 'Leadership', description: 'Leadership resources, mentorship connections, events', members: '300+' },
  ]

  const stats = [
    { value: 1200, suffix: '+', label: 'Community Members' },
    { value: 4, suffix: '', label: 'Countries' },
    { value: 50, suffix: '+', label: 'Partner Universities' },
    { value: 100, suffix: '+', label: 'Mentors' },
  ]

  const events = [
    { title: 'Weekly Career Workshops', description: 'Every Tuesday at 6 PM WAT', icon: Calendar },
    { title: 'Monthly Founder Talks', description: 'Last Friday of every month', icon: Users },
    { title: 'Quarterly Hackathons', description: 'Build and compete with peers', icon: Zap },
    { title: 'Annual Summit', description: 'Flagship in-person event', icon: Globe },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-24 md:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-soft-gradient" />
          <FloatingElement className="absolute top-20 right-10 w-72 h-72 bg-red-200/30 dark:bg-red-900/20 rounded-full blur-3xl" duration={10}>
            <div />
          </FloatingElement>
          <FloatingElement className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl" duration={12} delay={2}>
            <div />
          </FloatingElement>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-medium mb-6">
                  <Users className="h-4 w-4" />
                  Join Our Community
                </div>
              </FadeInUp>
              
              <FadeInUp delay={0.1}>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                  Join the <span className="gradient-text">Movement</span>
                </h1>
              </FadeInUp>
              
              <AnimatedGradientBar />
              
              <FadeInUp delay={0.2}>
                <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed max-w-2xl mt-8">
                  Connect with ambitious African students building their futures
                </p>
              </FadeInUp>
              
              <FadeInUp delay={0.3}>
                <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl">
                  Our community brings together students from across Africa who are passionate about career development, entrepreneurship, innovation, and leadership.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.4}>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                  <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-red-500/20 text-lg">
                    Join Community
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-20 bg-gray-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 gradient-mesh opacity-20" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <FadeInUp key={idx} delay={idx * 0.1}>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                Why Join <span className="gradient-text">EYII?</span>
              </h2>
            </FadeInUp>
            <AnimatedGradientBar />

            <StaggerContainer staggerDelay={0.1} className="grid gap-8 md:grid-cols-2 mt-12">
              {benefits.map((benefit, idx) => (
                <motion.div key={idx} whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                  <Card className="glass-card border-0 shadow-xl rounded-2xl p-8 h-full group">
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <benefit.icon className="h-7 w-7 text-red-600 dark:text-red-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </Card>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Channels Section */}
        <section className="py-20 md:py-28 bg-soft-gradient">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                Community <span className="gradient-text">Channels</span>
              </h2>
            </FadeInUp>
            <AnimatedGradientBar />
            <FadeInUp delay={0.1}>
              <p className="mt-6 text-lg text-muted-foreground">Join channels based on your interests</p>
            </FadeInUp>

            <StaggerContainer staggerDelay={0.1} className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
              {channels.map((channel, idx) => (
                <motion.div key={idx} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                  <Card className="glass-card border-0 shadow-xl rounded-2xl overflow-hidden h-full">
                    <div className="h-1.5 bg-gradient-to-r from-red-600 to-orange-500" />
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <MessageCircle className="h-5 w-5 text-primary" />
                        <span className="text-sm text-muted-foreground">{channel.members} members</span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{channel.title}</h3>
                      <p className="text-sm text-muted-foreground">{channel.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                Community <span className="gradient-text">Events</span>
              </h2>
            </FadeInUp>
            <AnimatedGradientBar />

            <StaggerContainer staggerDelay={0.1} className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
              {events.map((event, idx) => (
                <motion.div key={idx} whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                  <Card className="glass-card border-0 shadow-lg rounded-2xl p-6 h-full text-center">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 flex items-center justify-center mb-4 mx-auto">
                      <event.icon className="h-6 w-6 text-red-600 dark:text-red-400" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </Card>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gray-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 gradient-mesh opacity-20" />
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <FadeInUp>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join?</h2>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <p className="text-lg text-gray-300 mb-8">
                Be part of Africa's largest youth empowerment community. Connect, learn, and grow together.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg text-lg">
                    Join Community Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.3}>
              <p className="text-gray-500 mt-6">Free to join. No credit card required.</p>
            </FadeInUp>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection faqs={communityFaqs} title="Community FAQs" subtitle="Common questions about joining our community" />
      </main>

      <Footer />
    </div>
  )
}