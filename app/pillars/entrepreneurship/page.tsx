'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronRight, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function EntrepreneurshipPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0)
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-red-600">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/programs" className="hover:text-red-600">Pillars</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-black font-medium">Entrepreneurship</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-24 md:py-36 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-white pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100/30 rounded-full blur-3xl -z-10" />
          
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-black mb-6 text-balance leading-tight">
                Turn Ideas Into Impact
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mb-8" />
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Turn Ideas Into Profitable, Impactful Ventures
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
                Whether you want to build the next unicorn startup or launch a social enterprise solving local problems, our entrepreneurship programs give you the skills, mentorship, and network to succeed.
              </p>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">Our Programs</h2>
              <div className="h-1 w-32 bg-gradient-to-r from-orange-600 to-red-600 rounded-full" />
              <p className="mt-6 text-lg text-gray-600">From idea to launch, we've got you covered</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* DSS */}
              <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="inline-block rounded-lg bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-600 mb-4">
                    Launching Q2 2026
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Digital Startup School
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Format: Virtual, cohort-based intensive
                  </p>
                  <p className="text-lg font-semibold text-red-600 mb-4">
                    From Idea to Launch in 10 Weeks
                  </p>
                  <p className="text-gray-700 mb-6">
                    Transform your startup idea into a launched venture through our intensive program combining workshops, mentorship, and hands-on building.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-black mb-3">Curriculum Highlights:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Idea Validation & Customer Discovery</li>
                      <li>• Business Model Design</li>
                      <li>• MVP Development</li>
                      <li>• Fundraising & Pitching</li>
                      <li>• Growth & Scaling</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-black mb-3">What You'll Get:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>✓ 1-on-1 mentorship from successful founders</li>
                      <li>✓ Access to founder network and investor connections</li>
                      <li>✓ Pitch opportunity to real investors</li>
                      <li>✓ Certificate upon completion</li>
                    </ul>
                  </div>

                  <Link href="/community">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold">
                      Join Community
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Socialpreneur */}
              <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="inline-block rounded-lg bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-600 mb-4">
                    Launching Q3 2026
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Socialpreneur Program
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Format: Hybrid (virtual + in-person Impact Weekend)
                  </p>
                  <p className="text-lg font-semibold text-red-600 mb-4">
                    Build Ventures That Profit and Create Impact
                  </p>
                  <p className="text-gray-700 mb-6">
                    Support for young Africans passionate about solving social and environmental challenges through sustainable, profitable ventures.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-black mb-3">Program Includes:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Social Impact Fundamentals</li>
                      <li>• Impact Venture Design</li>
                      <li>• Impact Measurement</li>
                      <li>• Funding Strategies</li>
                      <li>• 2-day In-Person Impact Weekend</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-black mb-3">Opportunities:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>✓ Mentorship from social entrepreneurs</li>
                      <li>✓ Microgrant opportunities ($500-$2,000)</li>
                      <li>✓ Impact investor network</li>
                      <li>✓ Community of changemakers</li>
                    </ul>
                  </div>

                  <Link href="/community">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold">
                      Join Community
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">Why Choose EYII?</h2>
              <div className="h-1 w-32 bg-gradient-to-r from-orange-600 to-red-600 rounded-full" />
              <p className="mt-6 text-lg text-gray-600">What sets our entrepreneurship programs apart</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  title: 'Learn from Real Founders',
                  description: 'Our mentors have raised funding, built profitable companies, and navigated the entrepreneurship journey in Africa. Learn from those who\'ve actually done it.',
                  gradient: 'from-red-500 to-red-600'
                },
                {
                  title: 'Build, Don\'t Just Learn',
                  description: 'No death by PowerPoint. Every week you build, test, and iterate on real projects. Graduate with an actual launched venture or validated concept.',
                  gradient: 'from-orange-500 to-red-500'
                },
                {
                  title: 'Africa-Focused Curriculum',
                  description: 'We teach entrepreneurship contextualized for African markets—fundraising realities, infrastructure challenges, creative solutions. Not just Silicon Valley theory.',
                  gradient: 'from-yellow-500 to-orange-500'
                },
                {
                  title: 'Accessible & Inclusive',
                  description: 'Scholarships ensure financial barriers don\'t stop great founders. We believe in investing in potential, not just privilege.',
                  gradient: 'from-red-600 to-pink-600'
                },
              ].map((benefit, index) => (
                <Card key={index} className="bg-white border border-red-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden group p-0">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.gradient}`} />
                  <CardContent className="p-8">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${benefit.gradient} mb-6 group-hover:scale-110 transition-transform`} />
                    <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-red-600 transition-colors">{benefit.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Ready to Build Your Venture?</h2>
            <p className="text-lg text-gray-600 mb-2">Join the waitlist to be notified when programs launch</p>
            <p className="text-gray-600 mb-8">Limited cohort sizes ensure personalized mentorship and community support.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/community">
                <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 py-3 shadow-lg transition-all hover:shadow-xl rounded-lg">
                  Join Community
                </Button>
              </Link>
              <Link href="/pillars/innovation">
                <Button className="border-2 border-red-600 text-red-600 hover:bg-red-50 font-bold px-8 py-3 bg-white transition-all rounded-lg">
                  Explore Innovation Pillar
                </Button>
              </Link>
            </div>
            <p className="text-gray-600 mt-8">Questions? Email <span className="font-semibold">programs@eyii.africa</span></p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
                Frequently Asked Questions
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mx-auto" />
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Who should apply for these programs?",
                  a: "Any student or early-stage founder passionate about starting a business or social enterprise. No experience necessary—we welcome complete beginners as well as founders with existing traction."
                },
                {
                  q: "Do I need to have a business idea already?",
                  a: "Not required. Our programs help you validate, refine, and develop your ideas. Many participants join without a fully formed idea and find their co-founder or business concept within the program."
                },
                {
                  q: "What is the cost of these programs?",
                  a: "Program pricing is to be confirmed. We offer scholarships and subsidized spots for founders from underrepresented backgrounds. Financial barriers should never stop talented entrepreneurs from joining."
                }
              ].map((faq, index) => (
                <button
                  key={index}
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
                  className="w-full text-left"
                >
                  <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg font-bold text-black">{faq.q}</h3>
                        <ChevronDown
                          className={`h-5 w-5 text-orange-600 flex-shrink-0 transition-transform duration-300 ${
                            openFaqIndex === index ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                      {openFaqIndex === index && (
                        <p className="text-gray-700 mt-4 leading-relaxed">
                          {faq.a}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-orange-600 to-red-700 text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Ready to Build Your Venture?</h2>
            <p className="text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
              Join the waitlist to be notified when programs launch. Questions? Email programs@eyii.africa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white hover:bg-gray-100 text-orange-600 font-bold px-8 py-4 text-lg">
                Join Waitlist
              </Button>
              <Link href="/pillars/innovation">
                <Button className="border-2 border-white hover:bg-white/10 text-white font-bold px-8 py-4 text-lg">
                  Explore Other Pillars
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
