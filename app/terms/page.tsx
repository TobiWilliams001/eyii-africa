'use client'

import { motion } from 'framer-motion'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { FileText } from 'lucide-react'
import { FadeInUp, FloatingElement } from '@/components/animations'

export default function TermsPage() {
  const sections = [
    {
      title: '1. Agreement to Terms',
      content: 'By accessing and using the EYII Africa website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.',
    },
    {
      title: '2. Use License',
      content: "Permission is granted to temporarily download one copy of the materials (information or software) on EYII Africa's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:",
      list: [
        'Modify or copy the materials',
        'Use the materials for any commercial purpose or for any public display',
        'Attempt to decompile or reverse engineer any software contained on the website',
        'Remove any copyright or other proprietary notations from the materials',
        'Transfer the materials to another person or "mirror" the materials on any other server',
      ],
    },
    {
      title: '3. Disclaimer',
      content: "The materials on EYII Africa's website are provided on an 'as is' basis. EYII Africa makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
    },
    {
      title: '4. Limitations',
      content: "In no event shall EYII Africa or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on EYII Africa's website, even if EYII Africa or an authorized representative has been notified orally or in writing of the possibility of such damage.",
    },
    {
      title: '5. Accuracy of Materials',
      content: "The materials appearing on EYII Africa's website could include technical, typographical, or photographic errors. EYII Africa does not warrant that any of the materials on its website are accurate, complete, or current. EYII Africa may make changes to the materials contained on its website at any time without notice.",
    },
    {
      title: '6. Links',
      content: "EYII Africa has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by EYII Africa of the site. Use of any such linked website is at the user's own risk.",
    },
    {
      title: '7. Modifications',
      content: 'EYII Africa may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.',
    },
    {
      title: '8. Governing Law',
      content: 'These terms and conditions are governed by and construed in accordance with the laws of Nigeria, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.',
    },
    {
      title: '9. User Responsibilities',
      content: 'As a user of our website and services, you agree to:',
      list: [
        'Provide accurate and complete information',
        'Maintain the confidentiality of your account credentials',
        'Not engage in unauthorized access or use of the website',
        'Not violate any applicable laws or regulations',
        'Not transmit malware or harmful code',
        'Respect the intellectual property rights of others',
      ],
    },
    {
      title: '10. Intellectual Property',
      content: "All content on the EYII Africa website, including text, graphics, logos, images, and software, is the property of EYII Africa or its content suppliers and is protected by international copyright laws. Unauthorized use is prohibited.",
    },
    {
      title: '11. Limitation of Liability',
      content: 'To the maximum extent permitted by law, EYII Africa shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the website or services.',
    },
    {
      title: '12. Termination',
      content: 'EYII Africa reserves the right to terminate or suspend your access to the website and services, in whole or in part, for any reason without notice or liability if we believe you have violated these Terms of Service.',
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
                <FileText className="h-4 w-4" />
                Legal
              </div>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
                Terms of Service
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
                    <h2 className="text-2xl font-bold text-foreground mb-4">13. Contact Us</h2>
                    <p className="mb-4">If you have questions about these Terms of Service, please contact us at:</p>
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