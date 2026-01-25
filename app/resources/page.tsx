import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { FAQSection } from '@/components/faq-section'

export default function ResourcesPage() {
  const resourceFaqs = [
    {
      question: 'Are all resources free?',
      answer:
        'Yes, all resources in our library are completely free for EYII community members. We believe knowledge and tools should not be behind paywalls. Some resources like video courses may require email signup for tracking purposes.',
    },
    {
      question: 'Can I download resources for offline use?',
      answer:
        'Most resources can be downloaded as PDF or other formats. Once you download them, they are yours to keep and use. You can access them offline anytime, anywhere.',
    },
    {
      question: 'How often are new resources added?',
      answer:
        'We add new resources weekly based on community feedback and emerging needs. You can subscribe to our newsletter to get notified when new resources are added to your areas of interest.',
    },
    {
      question: 'Can I contribute resources?',
      answer:
        'Absolutely! We welcome community members to contribute templates, guides, case studies, and other resources they have created. Contact us to learn how to submit your resource for community benefit.',
    },
    {
      question: 'Who creates these resources?',
      answer:
        'Resources are created by EYII team members, mentors, industry experts, and community members. We ensure all resources are high-quality, practical, and contextual to African opportunities and challenges.',
    },
    {
      question: 'Are resources specific to African context?',
      answer:
        'Yes! Most of our resources are specifically written or adapted for African students and founders. We highlight Africa-specific opportunities, challenges, strategies, and success stories.',
    },
  ]

  const resourceCategories = [
    {
      title: 'Career Development Guides',
      description:
        'Resume templates, interview prep guides, networking scripts, LinkedIn optimization playbooks, and salary negotiation frameworks.',
      status: 'Coming Soon',
    },
    {
      title: 'Entrepreneurship Toolkit',
      description:
        'Business model canvas templates, pitch deck examples, fundraising guides, startup checklists, and founder stories.',
      status: 'Coming Soon',
    },
    {
      title: 'Innovation Resources',
      description:
        'Design thinking frameworks, problem-solving toolkits, case study libraries, and innovation methodologies.',
      status: 'Coming Soon',
    },
    {
      title: 'Leadership Library',
      description:
        'Leadership frameworks, team management guides, communication templates, and personal development resources.',
      status: 'Coming Soon',
    },
    {
      title: 'Opportunity Database',
      description:
        'Curated list of internships, scholarships, competitions, grants, and programs for African students.',
      status: 'Coming Soon',
    },
  ]

  const currentResources = [
    {
      title: 'ASN Resource Hub',
      description:
        'Access the African Students Network resource library with career guides, templates, and recorded workshops.',
      cta: 'Visit ASN Resources →',
      link: 'https://asnafrica.org',
    },
    {
      title: 'EYII Newsletter',
      description:
        'Weekly insights, opportunities, and stories delivered to your inbox. Stay updated on programs, events, and community news.',
      cta: 'Subscribe on Substack →',
      link: '#',
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-blue-50/30 pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/40 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black mb-6 text-balance leading-tight">
                Resources Hub
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-red-400 rounded-full mb-8" />
              <p className="text-lg md:text-xl text-gray-700 mb-6 text-pretty leading-relaxed max-w-2xl">
                Guides, tools, and content to support your journey
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-12 text-pretty leading-relaxed max-w-3xl">
                We are building a comprehensive library of resources to help you succeed in your career, entrepreneurship, and leadership journey. Check back soon for exciting additions!
              </p>
            </div>
          </div>
        </section>

        {/* Coming Soon Resources */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                What is Coming to the Resources Hub
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-red-400 rounded-full" />
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {resourceCategories.map((category, index) => (
                <Card
                  key={index}
                  className="bg-white border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-xl overflow-hidden p-0"
                >
                  <div className="h-1 bg-gradient-to-r from-red-600 to-red-400" />
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-bold text-black flex-1">
                        {category.title}
                      </h3>
                      <span className="ml-2 inline-block px-3 py-1 text-xs font-semibold text-white bg-red-600 rounded-full whitespace-nowrap">
                        {category.status}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Available Now */}
        <section className="py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Available Now
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-red-400 rounded-full" />
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {currentResources.map((resource, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-red-50 to-white border border-red-200 hover:shadow-2xl transition-all duration-300 rounded-xl p-8"
                >
                  <h3 className="text-2xl font-bold text-black mb-4">
                    {resource.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {resource.description}
                  </p>
                  <a href={resource.link}>
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg">
                      {resource.cta}
                    </Button>
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Resources Matter */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Why We are Building This
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-red-400 rounded-full" />
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: 'Access Shouldn\'t Be a Barrier',
                  description:
                    'High-quality career and entrepreneurship resources are often behind paywalls or scattered across the internet. We are centralizing them for free.',
                },
                {
                  title: 'Africa-Specific Context Matters',
                  description:
                    'Most resources are written for Western audiences. We are creating guides that understand African realities, markets, and opportunities.',
                },
                {
                  title: 'Save Time, Focus on Growth',
                  description:
                    'Instead of spending hours searching for templates and guides, find everything you need in one place and focus on execution.',
                },
              ].map((reason, index) => (
                <Card
                  key={index}
                  className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all rounded-xl p-8"
                >
                  <h3 className="text-lg font-bold text-black mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {reason.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 md:py-24 bg-black text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Updated
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Get resources delivered to your inbox
              </p>
              <p className="text-gray-400 mb-8">
                Subscribe to our newsletter for curated opportunities, insights, and updates on new resources as we launch them.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-black placeholder-gray-400"
                />
                <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-lg transition-all hover:scale-105">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                We publish weekly. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Building Something Special
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We are working hard to launch our full resource library
            </p>
            <p className="text-base text-gray-600 mb-8">
              In the meantime, subscribe to our newsletter to get curated resources, opportunities, and updates delivered weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/programs">
                <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 py-3 rounded-lg transition-all hover:scale-105">
                  Explore Programs
                </Button>
              </a>
              <Button className="border-2 border-red-600 text-red-600 bg-white hover:bg-red-50 font-bold px-8 py-3 rounded-lg transition-all hover:scale-105">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          title="Resources FAQs"
          faqs={resourceFaqs}
        />
      </main>

      <Footer />
    </div>
  )
}
