'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { FAQSection } from '@/components/faq-section'
import { FadeInUp, StaggerContainer, AnimatedGradientBar, FloatingElement } from '@/components/animations'
import { BookOpen, Download, Mail, FileText, Lightbulb, Users, Target, Briefcase, Crown, ExternalLink, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ResourcesPage() {
  const resourceFaqs = [
    {
      question: 'Are all resources free?',
      answer: 'Yes, all resources in our library are completely free for EYII community members. We believe knowledge and tools should not be behind paywalls.',
    },
    {
      question: 'Can I download resources for offline use?',
      answer: 'Most resources can be downloaded as PDF or other formats. Once you download them, they are yours to keep and use offline.',
    },
    {
      question: 'How often are new resources added?',
      answer: 'We add new resources weekly based on community feedback and emerging needs. Subscribe to our newsletter to get notified.',
    },
    {
      question: 'Can I contribute resources?',
      answer: 'Absolutely! We welcome community members to contribute templates, guides, and other resources. Contact us to learn how to submit.',
    },
    {
      question: 'Who creates these resources?',
      answer: 'Resources are created by EYII team members, mentors, industry experts, and community members. We ensure all resources are high-quality and contextual to African opportunities.',
    },
    {
      question: 'Are resources specific to African context?',
      answer: 'Yes! Most of our resources are specifically written or adapted for African students and founders with Africa-specific opportunities and strategies.',
    },
  ]

  const resourceCategories = [
    {
      title: 'Career Development Guides',
      description: 'Resume templates, interview prep guides, networking scripts, LinkedIn optimization playbooks.',
      status: 'Coming Soon',
      icon: Briefcase,
    },
    {
      title: 'Entrepreneurship Toolkit',
      description: 'Business model canvas templates, pitch deck examples, fundraising guides, startup checklists.',
      status: 'Coming Soon',
      icon: Target,
    },
    {
      title: 'Innovation Resources',
      description: 'Design thinking frameworks, problem-solving toolkits, case study libraries.',
      status: 'Coming Soon',
      icon: Lightbulb,
    },
    {
      title: 'Leadership Library',
      description: 'Leadership frameworks, team management guides, communication templates.',
      status: 'Coming Soon',
      icon: Crown,
    },
    {
      title: 'Opportunity Database',
      description: 'Curated list of internships, scholarships, competitions, grants for African students.',
      status: 'Coming Soon',
      icon: BookOpen,
    },
  ]

  const currentResources = [
    {
      title: 'ASN Resource Hub',
      description: 'Access the African Students Network resource library with career guides, templates, and recorded workshops.',
      cta: 'Visit ASN Resources →',
      link: 'https://asnafrica.org',
    },
    {
      title: 'EYII Newsletter',
      description: 'Weekly insights, opportunities, and stories delivered to your inbox. Stay updated on programs and community news.',
      cta: 'Subscribe on Substack →',
      link: '#',
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-soft-gradient" />
          <FloatingElement className="absolute top-20 right-10 w-72 h-72 bg-red-200/30 dark:bg-red-900/20 rounded-full blur-3xl" duration={10}>
            <div />
          </FloatingElement>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-medium mb-6">
                  <BookOpen className="h-4 w-4" />
                  Resource Library
                </div>
              </FadeInUp>
              
              <FadeInUp delay={0.1}>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                  Free <span className="gradient-text">Resources</span>
                </h1>
              </FadeInUp>
              
              <AnimatedGradientBar />
              
              <FadeInUp delay={0.2}>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mt-8">
                  Templates, guides, and tools to accelerate your growth
                </p>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* Coming Soon Resources */}
        <section className="py-20 md:py-28 bg-soft-gradient">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                What is <span className="gradient-text">Coming</span>
              </h2>
            </FadeInUp>
            <AnimatedGradientBar />

            <StaggerContainer staggerDelay={0.1} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {resourceCategories.map((category, idx) => (
                <motion.div key={idx} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                  <Card className="glass-card border-0 shadow-xl rounded-2xl overflow-hidden h-full">
                    <div className="h-1.5 bg-gradient-to-r from-red-600 to-orange-500" />
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 flex items-center justify-center">
                          <category.icon className="h-6 w-6 text-red-600 dark:text-red-400" />
                        </div>
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 rounded-full">
                          {category.status}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-3">{category.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{category.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Available Now */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                Available <span className="gradient-text">Now</span>
              </h2>
            </FadeInUp>
            <AnimatedGradientBar />

            <div className="grid gap-8 md:grid-cols-2 mt-12">
              {currentResources.map((resource, idx) => (
                <FadeInUp key={idx} delay={idx * 0.1}>
                  <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                    <Card className="glass-card border-0 shadow-xl rounded-2xl p-8 h-full">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 flex items-center justify-center mb-6">
                        <Download className="h-6 w-6 text-red-600 dark:text-red-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">{resource.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{resource.description}</p>
                      <a href={resource.link}>
                        <Button className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold rounded-xl shadow-lg">
                          {resource.cta}
                        </Button>
                      </a>
                    </Card>
                  </motion.div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* Why Section */}
        <section className="py-20 md:py-28 bg-soft-gradient">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                Why We are <span className="gradient-text">Building This</span>
              </h2>
            </FadeInUp>
            <AnimatedGradientBar />

            <StaggerContainer staggerDelay={0.1} className="grid gap-8 md:grid-cols-3 mt-12">
              {[
                { title: "Access Shouldn't Be a Barrier", description: 'High-quality resources are often behind paywalls. We are centralizing them for free.' },
                { title: 'Africa-Specific Context Matters', description: 'We are creating guides that understand African realities, markets, and opportunities.' },
                { title: 'Save Time, Focus on Growth', description: 'Find everything you need in one place and focus on execution.' },
              ].map((reason, idx) => (
                <motion.div key={idx} whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                  <Card className="glass-card border-0 shadow-lg rounded-2xl p-8 h-full">
                    <h3 className="text-lg font-bold text-foreground mb-4">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                  </Card>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 md:py-24 bg-gray-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 gradient-mesh opacity-20" />
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <FadeInUp>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <Mail className="w-4 h-4 text-red-400" />
                <span className="text-sm font-medium text-gray-300">Stay Updated</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Resources Delivered</h2>
              <p className="text-lg text-gray-300 mb-8">
                Subscribe to our newsletter for curated opportunities and updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold px-8 py-3 rounded-xl shadow-lg">
                  Subscribe
                </Button>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <FadeInUp>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Want More Resources?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join our community to get access to exclusive resources, workshops, and mentorship.
              </p>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <a href="/community">
                  <Button className="bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold px-8 py-3 rounded-xl shadow-lg">
                    Join Community
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </motion.div>
            </FadeInUp>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection faqs={resourceFaqs} title="Resource FAQs" subtitle="Common questions about our resources" />
      </main>

      <Footer />
    </div>
  )
}