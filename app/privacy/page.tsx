'use client'

import { motion } from 'framer-motion'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Shield } from 'lucide-react'
import { FadeInUp, AnimatedGradientBar, FloatingElement } from '@/components/animations'

export default function PrivacyPage() {
  const sections = [
    {
      title: '1. Introduction',
      content: 'EYII Africa ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.',
    },
    {
      title: '2. Information We Collect',
      content: 'We may collect information about you in a variety of ways:',
      list: [
        'Personal Information: Name, email address, phone number, and other details you voluntarily provide',
        'Form Data: Information submitted through contact forms, registration forms, or applications',
        'Automatic Information: Device information, browser type, IP address, and usage patterns',
        'Cookies: Information stored on your device to enhance your experience',
      ],
    },
    {
      title: '3. How We Use Your Information',
      content: 'We use the information we collect to:',
      list: [
        'Process and respond to your inquiries',
        'Send you program updates and relevant communications',
        'Personalize your experience on our website',
        'Improve and optimize our services',
        'Comply with legal obligations',
        'Prevent fraud and ensure security',
      ],
    },
    {
      title: '4. Information Sharing',
      content: 'We do not sell, trade, or rent your personal information to third parties. We may share your information only with trusted partners who assist us in operating our website and conducting our business, under strict confidentiality agreements.',
    },
    {
      title: '5. Data Security',
      content: 'We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.',
    },
    {
      title: '6. Your Rights',
      content: 'Depending on your location, you may have the right to:',
      list: [
        'Access the personal information we hold about you',
        'Request correction of inaccurate information',
        'Request deletion of your information',
        'Opt-out of marketing communications',
        'Request restriction of processing',
      ],
    },
    {
      title: '7. Cookies and Tracking',
      content: 'Our website uses cookies to enhance user experience and track website usage. You can control cookie preferences through your browser settings. Note that disabling cookies may affect the functionality of certain features.',
    },
    {
      title: '8. Third-Party Links',
      content: 'Our website may contain links to external websites. We are not responsible for the privacy practices of these third-party sites. We encourage you to review their privacy policies before providing any personal information.',
    },
    {
      title: '9. Children\'s Privacy',
      content: 'Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will take immediate steps to delete such information.',
    },
    {
      title: '10. Changes to Privacy Policy',
      content: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date above.',
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-700" />
          <div className="absolute inset-0 gradient-mesh opacity-30" />
          <FloatingElement className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" duration={10} />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeInUp>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
                <Shield className="h-4 w-4" />
                Legal
              </div>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
                Privacy Policy
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="text-xl text-red-100">Last updated: January 2026</p>
            </FadeInUp>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <Card className="glass-card border-0 shadow-xl rounded-2xl p-8 md:p-12">
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  {sections.map((section, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      className="mb-8"
                    >
                      <h2 className="text-2xl font-bold text-foreground mb-4">{section.title}</h2>
                      <p className="mb-4">{section.content}</p>
                      {section.list && (
                        <ul className="list-disc pl-6 space-y-2">
                          {section.list.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-8"
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Us</h2>
                    <p className="mb-4">If you have questions about this Privacy Policy or our privacy practices, please contact us at:</p>
                    <div className="bg-muted/50 p-6 rounded-xl border border-border">
                      <p className="font-bold text-foreground mb-2">EYII Africa</p>
                      <p>Email: info@eyii.africa</p>
                      <p>Location: Lagos, Nigeria</p>
                    </div>
                  </motion.div>
                </div>
              </Card>
            </FadeInUp>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}