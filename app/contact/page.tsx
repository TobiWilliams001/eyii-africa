'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, MapPin, MessageCircle, Linkedin, Instagram } from 'lucide-react'
import { FAQSection } from '@/components/faq-section'
import { FadeInUp, StaggerContainer, AnimatedGradientBar, FloatingElement } from '@/components/animations'
import { motion } from 'framer-motion'

// Simple X icon component (Twitter/X)
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export default function ContactPage() {
  const contactEmails = [
    {
      title: 'General Inquiries',
      description: 'For general questions about EYII',
      email: 'info@eyii.africa',
    },
    {
      title: 'Program Inquiries',
      description: 'Questions about specific programs',
      email: 'programs@eyii.africa',
    },
    {
      title: 'Partnership Inquiries',
      description: 'For organizations interested in partnering',
      email: 'partnerships@eyii.africa',
    },
  ]

  const contactFaqs = [
    {
      question: 'How do I join EYII programs?',
      answer:
        'Click the "Join Waitlist" button on any program page, fill out the form, and we\'ll notify you when applications open.',
    },
    {
      question: 'Are EYII programs free?',
      answer:
        'Most programs are free or heavily subsidized. Scholarships are available for certain programs.',
    },
    {
      question: 'Can students from any African country join?',
      answer:
        'Yes! All our programs are open to students across Africa. Most are virtual and accessible continent-wide.',
    },
    {
      question: "What's the difference between EYII and ASN?",
      answer:
        'ASN is our flagship career development program. EYII is the parent organization expanding into Entrepreneurship, Innovation, and Leadership.',
    },
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
                  <MessageCircle className="h-4 w-4" />
                  Get in Touch
                </div>
              </FadeInUp>
              
              <FadeInUp delay={0.1}>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                  Contact <span className="gradient-text">Us</span>
                </h1>
              </FadeInUp>
              
              <AnimatedGradientBar />
              
              <FadeInUp delay={0.2}>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mt-8">
                  Have questions about our programs or want to collaborate? We'd love to hear from you. Reach out by email or connect with us on social media.
                </p>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 md:py-28 bg-soft-gradient">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                Ways to <span className="gradient-text">Reach Us</span>
              </h2>
            </FadeInUp>
            <AnimatedGradientBar />

            <StaggerContainer staggerDelay={0.1} className="grid gap-8 md:grid-cols-3 mt-12">
              {contactEmails.map((contact, idx) => (
                <motion.div key={idx} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                  <Card className="glass-card border-0 shadow-xl rounded-2xl overflow-hidden h-full group">
                    <div className="h-1.5 bg-gradient-to-r from-red-600 to-orange-500" />
                    <div className="p-8">
                      <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Mail className="h-7 w-7 text-red-600 dark:text-red-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {contact.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{contact.description}</p>
                      <a href={`mailto:${contact.email}`}>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold rounded-xl shadow-lg">
                            <Mail className="h-4 w-4 mr-2" />
                            Send Email
                          </Button>
                        </motion.div>
                      </a>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Location & Social */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <StaggerContainer staggerDelay={0.15} className="grid gap-8 md:grid-cols-2">
              {/* Location Card */}
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                <Card className="glass-card border-0 shadow-xl rounded-2xl p-8 md:p-12 h-full">
                  <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 flex items-center justify-center mb-6">
                    <MapPin className="h-8 w-8 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Our Location
                  </h3>
                  <p className="text-muted-foreground text-lg mb-2">
                    Headquarters
                  </p>
                  <p className="text-xl font-semibold text-foreground">
                    Lagos, Nigeria
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-muted-foreground">
                      Operating across Africa with a virtual-first approach
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Social Media Card */}
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                <Card className="glass-card border-0 shadow-xl rounded-2xl p-8 md:p-12 h-full">
                  <h3 className="text-2xl font-bold text-foreground mb-8">
                    Connect With Us
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    Follow us on social media to stay updated on programs, events, and opportunities.
                  </p>
                  <div className="flex gap-4 flex-wrap">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 rounded-xl bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-800/40 transition-colors shadow-md hover:shadow-lg"
                      title="LinkedIn"
                    >
                      <Linkedin className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-md hover:shadow-lg"
                      title="X"
                    >
                      <XIcon className="h-8 w-8 text-gray-800 dark:text-gray-200" />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 rounded-xl bg-pink-100 dark:bg-pink-900/30 hover:bg-pink-200 dark:hover:bg-pink-800/40 transition-colors shadow-md hover:shadow-lg"
                      title="Instagram"
                    >
                      <Instagram className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                    </motion.a>
                  </div>
                </Card>
              </motion.div>
            </StaggerContainer>
          </div>
        </section>

        {/* Office Hours Card */}
        <section className="py-16 md:py-20 bg-soft-gradient">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <Card className="glass-card border-0 shadow-xl rounded-2xl p-8 md:p-12 max-w-2xl mx-auto text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Response Time</h3>
                <p className="text-muted-foreground mb-6">
                  We typically respond to inquiries within 24-48 business hours. For urgent matters, please indicate so in your email subject line.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  Available Monday - Friday, 9 AM - 5 PM WAT
                </div>
              </Card>
            </FadeInUp>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection title="Frequently Asked Questions" faqs={contactFaqs} />
      </main>

      <Footer />
    </div>
  )
}