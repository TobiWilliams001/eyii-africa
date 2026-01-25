'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronRight, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function InnovationPage() {
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
              <span className="text-black font-medium">Innovation</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-24 md:py-36 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-white pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl -z-10" />
          
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-black mb-6 text-balance leading-tight">
                Solve Real Problems
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8" />
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Solve Real Problems, Create Meaningful Impact
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
                Develop the mindset, skills, and frameworks to identify problems in your community and design innovative solutions that create lasting change.
              </p>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-black mb-12">Our Innovation Programs</h2>

            <div className="grid gap-8 md:grid-cols-2">
              {/* School of Innovation */}
              <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-600 mb-4">
                    Flagship Program
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    School of Innovation
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    6-week program | Hybrid (virtual + in-person)
                  </p>
                  <p className="text-lg font-semibold text-red-600 mb-4">
                    Building Future-Ready Innovators
                  </p>
                  <p className="text-gray-700 mb-6">
                    A flagship capacity-building program designed to equip young Africans with the skills, mindset, and practical experience needed to become effective innovators and problem-solvers.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-black mb-3">What You'll Learn:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Innovation & Design Thinking</li>
                      <li>• Problem Identification & Research</li>
                      <li>• Creativity & Ideation</li>
                      <li>• Entrepreneurship Fundamentals</li>
                      <li>• Leadership & Collaboration</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-black mb-3">What to Expect:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>✓ Interactive workshops and masterclasses</li>
                      <li>✓ Hands-on group projects</li>
                      <li>✓ Mentorship from industry experts</li>
                      <li>✓ Demo pitch presentations</li>
                    </ul>
                  </div>

                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              {/* Innovation Challenges */}
              <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="inline-block rounded-lg bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-600 mb-4">
                    Launching Q2 2026
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Innovation Challenges
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    48-72 hour format | Virtual hackathon-style
                  </p>
                  <p className="text-lg font-semibold text-red-600 mb-4">
                    Compete, Create, Win
                  </p>
                  <p className="text-gray-700 mb-6">
                    Quarterly innovation challenges where students compete to develop solutions to real-world problems, with mentorship, prizes, and investor exposure.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-black mb-3">Challenge Highlights:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Real problem statements</li>
                      <li>• 48-72 hour build sprints</li>
                      <li>• Live mentorship during challenge</li>
                      <li>• Cash prizes (₦200K for 1st place)</li>
                      <li>• Investor pitch opportunities</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-black mb-3">Format:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>✓ Team-based competition (2-5 members)</li>
                      <li>✓ Expert judging panel</li>
                      <li>✓ Media coverage for winners</li>
                      <li>✓ Quarterly challenges throughout 2026</li>
                    </ul>
                  </div>

                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold">
                    Join Challenge Waitlist
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-black mb-4">
              Ready to Innovate?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our innovation programs and develop the creative problem-solving skills needed to create real change. Compete, learn, and win recognition for your ideas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3">
                Explore Programs
              </Button>
              <Link href="/pillars/leadership">
                <Button className="border border-red-200 bg-red-50 text-red-600 font-bold px-8 py-3 hover:bg-red-100">
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
