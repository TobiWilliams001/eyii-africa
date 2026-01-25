'use client';

import React from "react"

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronRight, ChevronDown } from 'lucide-react'
import { FAQSection } from '@/components/faq-section'

export default function CareerDevelopmentPage() {
  const careerFaqs = [
    {
      question: 'Is ASN only for Nigerian students?',
      answer:
        'No! While we started in Nigeria, ASN now serves students across Ghana, Kenya, South Africa, and other African countries. All programs are virtual and accessible continent-wide.',
    },
    {
      question: 'Do I need to pay for ASN programs?',
      answer:
        'Most ASN programs are free or heavily subsidized. We believe financial barriers shouldn\'t stop talented students from accessing opportunities.',
    },
    {
      question: 'How is ASN different from EYII?',
      answer:
        'ASN is our flagship career development program that\'s been running for 2 years. EYII is the parent organization expanding into three additional pillars: Entrepreneurship, Innovation, and Leadership.',
    },
  ]

  const faqs = [
    {
      q: 'Is ASN only for Nigerian students?',
      a: 'No! While we started in Nigeria, ASN now serves students across Ghana, Kenya, South Africa, and other African countries. All programs are virtual and accessible continent-wide.',
    },
    {
      q: 'Do I need to pay for ASN programs?',
      a: 'Most ASN programs are free or heavily subsidized. We believe financial barriers shouldn\'t stop talented students from accessing opportunities.',
    },
    {
      q: 'How is ASN different from EYII?',
      a: 'ASN is our flagship career development program that\'s been running for 2 years. EYII is the parent organization expanding into three additional pillars: Entrepreneurship, Innovation, and Leadership.',
    },
  ]

  const [openFaqIndex, setOpenFaqIndex] = React.useState(-1);

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
              <span className="text-black font-medium">Career Development</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-24 md:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-blue-50/30 pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/40 rounded-full blur-3xl -z-10" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-black mb-6 text-balance leading-tight">
                Career Development
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-red-400 rounded-full mb-8" />
              <p className="text-xl md:text-2xl text-gray-700 mb-6 text-pretty leading-relaxed max-w-2xl">
                Build skills and land opportunities at top companies
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-12 text-pretty leading-relaxed max-w-3xl">
                Access internships, develop in-demand skills, and connect with mentors through programs run by African Students Network (ASN).
              </p>
            </div>
          </div>
        </section>

        {/* ASN Introduction */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">Programs Delivered Through ASN</h2>
              <div className="h-1 w-32 bg-gradient-to-r from-red-600 to-red-400 rounded-full" />
            </div>

            <div className="rounded-2xl border border-red-100 bg-white shadow-lg p-8 md:p-12">
              <p className="text-gray-800 text-lg leading-relaxed mb-8">
                Our Career Development pillar is powered by <span className="font-semibold text-red-600">ASN, our flagship program with a proven track record</span> of transforming student careers. ASN has supported <span className="font-semibold text-red-600">1,200+ students across Nigeria, Ghana, Kenya, and South Africa,</span> helping them secure internships and full-time roles at companies like <span className="font-semibold text-red-600">Goldman Sachs, Meta, Bank of America, Microsoft,</span> and leading African tech startups.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://asnafrica.org" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 py-3 rounded-lg shadow-lg transition-all hover:shadow-xl">
                    Learn More on ASN
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ASN Programs */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">ASN Programs</h2>
              <div className="h-1 w-32 bg-gradient-to-r from-red-600 to-red-400 rounded-full" />
              <p className="mt-6 text-lg text-gray-600">Comprehensive career transformation programs</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* ASAP */}
              <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl bg-white border border-red-100 group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-red-400" />
                <CardContent className="p-8">
                  <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm font-semibold text-red-600 mb-4">
                    Active Program
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    ASAP
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    African Students Accelerator Program
                  </p>
                  <p className="text-lg font-semibold text-red-600 mb-4">
                    12-Week Career Transformation Intensive
                  </p>
                  <p className="text-gray-700 mb-6">
                    Comprehensive program covering technical skills, interview preparation, resume building, networking strategies, and career planning.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-black mb-3">Key Features:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span>Weekly live sessions with industry professionals</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span>1-on-1 career coaching and mentorship</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span>Resume and LinkedIn optimization</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span>Mock interviews and feedback</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span>Job search strategies for African students</span>
                      </li>
                    </ul>
                  </div>

                  <Link href="https://asnafrica.org" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* MIIS */}
              <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl bg-white border border-red-100 group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-orange-500" />
                <CardContent className="p-8">
                  <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm font-semibold text-red-600 mb-4">
                    Active Program
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    MIIS
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Mega Internship Interview Series
                  </p>
                  <p className="text-lg font-semibold text-red-600 mb-4">
                    Master the Interview, Land the Offer
                  </p>
                  <p className="text-gray-700 mb-6">
                    Weekly mock interviews, case study practice, behavioral coaching, and technical interview preparation.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-black mb-3">Key Features:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span>Live mock interviews with feedback</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span>Case study frameworks (consulting, finance)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span>Behavioral interview coaching (STAR method)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span>Technical interview prep (coding, system design)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span>Peer practice groups</span>
                      </li>
                    </ul>
                  </div>

                  <Link href="https://asnafrica.org" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* MWS */}
              <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm font-semibold text-red-600 mb-4">
                    Active Program
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    MWS
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Mega Workshop Series
                  </p>
                  <p className="text-lg font-semibold text-red-600 mb-4">
                    Build Skills That Set You Apart
                  </p>
                  <p className="text-gray-700 mb-6">
                    Monthly workshops on LinkedIn optimization, cold emailing, salary negotiation, personal branding, and portfolio building.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-black mb-3">Topics Covered:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span>LinkedIn Profile Masterclass</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span>Cold Email That Gets Responses</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span>Salary Negotiation Strategies</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span>Personal Branding for Students</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span>Networking Like a Pro</span>
                      </li>
                    </ul>
                  </div>

                  <Link href="https://asnafrica.org" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Resources Hub */}
              <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm font-semibold text-green-600 mb-4">
                    Free Access
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Career Resources Hub
                  </h3>
                  <p className="text-lg font-semibold text-red-600 mb-4">
                    Everything You Need in One Place
                  </p>
                  <p className="text-gray-700 mb-6">
                    Library of guides, templates, and recordings covering every aspect of the job search and career development.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-black mb-3">Resources Available:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span>Resume templates (ATS-friendly)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span>Cover letter guides</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span>Interview question banks</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span>Webinar recordings</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span>Career guides by industry</span>
                      </li>
                    </ul>
                  </div>

                  <Link href="https://asnafrica.org" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold">
                      Access Resources
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">Where ASN Members Are Now</h2>
              <div className="h-1 w-32 bg-gradient-to-r from-red-600 to-red-400 rounded-full" />
              <p className="mt-6 text-lg text-gray-600">Real outcomes from real students</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="bg-white border border-red-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 rounded-2xl overflow-hidden group p-0">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-red-400" />
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-400" />
                    <div>
                      <p className="font-bold text-black">Tunde A.</p>
                      <p className="text-sm text-gray-600">University of Lagos</p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-red-600 mb-4">
                    Goldman Sachs Summer Analyst
                  </p>
                  <p className="text-gray-700 leading-relaxed italic">
                    "Secured Goldman Sachs Summer Analyst role after 3 months in ASAP. The mock interviews and resume feedback were game-changers."
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-red-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 rounded-2xl overflow-hidden group p-0">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 to-red-500" />
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-red-500" />
                    <div>
                      <p className="font-bold text-black">Zainab M.</p>
                      <p className="text-sm text-gray-600">Kwame Nkrumah University</p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-red-600 mb-4">
                    Meta SWE Intern
                  </p>
                  <p className="text-gray-700 leading-relaxed italic">
                    "Landed Software Engineering Internship at Meta through the ASN network and interview prep sessions. Best decision I ever made."
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-red-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 rounded-2xl overflow-hidden group p-0">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-orange-600" />
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600" />
                    <div>
                      <p className="font-bold text-black">David O.</p>
                      <p className="text-sm text-gray-600">University of Nairobi</p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-red-600 mb-4">
                    Multiple Offers
                  </p>
                  <p className="text-gray-700 leading-relaxed italic">
                    "Transitioned from 'no interviews' to 5 offers in 2 months with ASN coaching. The community support was incredible."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions"
          faqs={careerFaqs}
        />

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-black mb-4">
              Start Your Career Journey with ASN
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              All ASN programs run independently on the ASN platform. Visit the ASN website to explore programs, upcoming events, and join our thriving community of 1,200+ students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://asnafrica.org" target="_blank" rel="noopener noreferrer">
                <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3">
                  Visit ASN Website
                </Button>
              </Link>
              <Link href="/pillars/entrepreneurship">
                <Button className="border border-red-200 bg-red-50 text-red-600 font-bold px-8 py-3 hover:bg-red-100">
                  Explore Other Pillars
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-red-600 to-red-700 text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Start Your Career Journey with ASN</h2>
            <p className="text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
              All ASN programs run independently on the ASN platform. Visit the ASN website to explore programs, upcoming events, and join our thriving community of 1,200+ students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://asnafrica.org" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white hover:bg-gray-100 text-red-600 font-bold px-8 py-4 text-lg">
                  Visit ASN Website →
                </Button>
              </Link>
              <Link href="/pillars/entrepreneurship">
                <Button className="border-2 border-white hover:bg-white/10 text-white font-bold px-8 py-4 text-lg">
                  Explore Other Pillars
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}
