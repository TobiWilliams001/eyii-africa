import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { FAQSection } from '@/components/faq-section'

export default function CommunityPage() {
  const communityFaqs = [
    {
      question: 'Is the community free to join?',
      answer:
        'Yes! EYII community membership is completely free. We believe in removing barriers to opportunity and connection. All members have equal access to community events, resources, and networking opportunities.',
    },
    {
      question: 'Do I need to be enrolled in a program to join?',
      answer:
        'No, but program participants automatically become community members and get access to exclusive events and opportunities. You can join the community independently and participate in all shared spaces and events.',
    },
    {
      question: 'How active is the community?',
      answer:
        'We are very active and growing daily! We host regular events including monthly meetups, masterclasses, pitch nights, and mentorship mixers. Members also engage in peer learning circles and the collaboration hub where they share opportunities and support each other.',
    },
    {
      question: 'Can I join if I am not currently a student?',
      answer:
        'Our primary focus is current university students, but recent graduates (within 2 years) and young professionals passionate about our mission are welcome to join. We believe in supporting African youth across different life stages.',
    },
    {
      question: 'How can I find mentors in the community?',
      answer:
        'We host monthly Mentorship Mixer events where you can meet potential mentors. You can also indicate your interests and we will help match you with experienced professionals. Many community members are also willing to mentor—just reach out!',
    },
    {
      question: 'Can I find co-founders or collaborators?',
      answer:
        'Absolutely! Our Collaboration Hub is designed for exactly this. Post your project, idea, or what you are looking for, and connect with community members who have complementary skills and interests.',
    },
  ]

  const communityBenefits = [
    {
      title: 'Connect with Peers Across Africa',
      description:
        'Meet students from top universities across the continent who share your ambitions. Build friendships, find study partners, and expand your network beyond borders.',
    },
    {
      title: 'Learn from Those Ahead of You',
      description:
        'Access mentors and alumni who have secured internships at Goldman Sachs, Meta, Microsoft, and leading African companies. Get real advice from people who have walked the path.',
    },
    {
      title: 'Collaborate on Projects & Opportunities',
      description:
        'Find co-founders for your startup idea, teammates for hackathons, or partners for research projects. The best opportunities often come from connections.',
    },
    {
      title: 'Stay Updated on Programs & Events',
      description:
        'Be the first to know about new programs, workshops, networking events, and opportunities. Our community gets early access to everything EYII offers.',
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
                Join the EYII Community
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-red-400 rounded-full mb-8" />
              <p className="text-lg md:text-xl text-gray-700 mb-6 text-pretty leading-relaxed max-w-2xl">
                Connect with 1,200+ ambitious African students building their futures
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-12 text-pretty leading-relaxed max-w-3xl">
                Our community spans Nigeria, Ghana, Kenya, and South Africa—students supporting students on the journey to opportunity. Network, collaborate, and grow together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 py-4 text-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 rounded-lg">
                  Join Community →
                </Button>
                <Button className="bg-white hover:bg-red-600 text-red-600 hover:text-white border-2 border-red-600 font-bold px-8 py-4 text-lg transition-all duration-300 rounded-lg shadow-md hover:shadow-xl">
                  Explore Programs
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Community Benefits */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Why Join Our Community?
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-red-400 rounded-full" />
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {communityBenefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="bg-white border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-xl overflow-hidden p-0"
                >
                  <div className="h-1 bg-gradient-to-r from-red-600 to-red-400" />
                  <CardContent className="p-8">
                    <h3 className="text-lg font-bold text-black mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="bg-black text-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Our Growing Community
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-red-500">
                  1,200+
                </div>
                <div className="mt-2 text-gray-300">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-red-500">
                  4
                </div>
                <div className="mt-2 text-gray-300">Countries Represented</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-red-500">
                  50+
                </div>
                <div className="mt-2 text-gray-300">Universities</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-red-500">
                  100+
                </div>
                <div className="mt-2 text-gray-300">
                  Companies Where Members Work/Intern
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Join */}
        <section className="py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Become Part of the Community
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-red-400 rounded-full" />
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  step: '1',
                  title: 'Join the Waitlist',
                  description:
                    'Sign up to be notified when we open community registration and event announcements. Get early access to exclusive opportunities.',
                },
                {
                  step: '2',
                  title: 'Subscribe to Updates',
                  description:
                    'Get our newsletter with opportunities, stories, and community highlights delivered to your inbox weekly.',
                },
                {
                  step: '3',
                  title: 'Engage with EYII Programs',
                  description:
                    'The best way to join the community is through our programs. Explore ASN, DSS, School of Innovation, and other offerings.',
                },
              ].map((item) => (
                <Card key={item.step} className="bg-gradient-to-br from-red-50 to-white border border-red-200 p-8 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-red-600 to-red-400 flex items-center justify-center text-white font-bold text-lg">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-black">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-black to-gray-900 text-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Connect?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of ambitious African students building their futures together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 text-base transition-all hover:scale-105">
                Join Community Waitlist
              </Button>
              <Button className="bg-white hover:bg-gray-100 text-black font-bold px-8 py-3 text-base transition-all hover:scale-105">
                Explore Programs
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          title="Community FAQs"
          faqs={communityFaqs}
        />
      </main>

      <Footer />
    </div>
  )
}
