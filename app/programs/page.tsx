'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { programs } from '@/lib/data/programs'

export default function ProgramsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-red-600 to-red-700 py-16 sm:py-24 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
              Our Programs
            </h1>
            <p className="mt-4 text-xl text-red-100">
              Comprehensive programs across four pillars designed to empower African students
            </p>
            <p className="mt-4 max-w-3xl text-lg text-red-50">
              From career development to entrepreneurship, innovation to leadership—we provide structured pathways to opportunity.
            </p>
          </div>
        </section>

        {/* Programs by Pillar */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {programs.map((pillarGroup, pillarIdx) => (
              <div key={pillarIdx} className="mb-16">
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{pillarGroup.icon}</span>
                    <h2 className="text-3xl font-bold text-black">{pillarGroup.pillar}</h2>
                  </div>
                  <Link href={`/pillars/${pillarGroup.pillar.toLowerCase().replace(' ', '-')}`}>
                    <Button className="bg-red-600 hover:bg-red-700 text-white font-bold">
                      Explore {pillarGroup.pillar}
                    </Button>
                  </Link>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {pillarGroup.programs.map((program, idx) => (
                    <Card key={idx} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="mb-4">
                          <div className={`inline-block rounded-lg px-3 py-1 text-xs font-semibold ${program.statusColor} mb-3`}>
                            {program.status}
                          </div>
                          <h3 className="text-xl font-bold text-black">{program.title}</h3>
                          {program.subtitle && (
                            <p className="text-sm text-gray-600">{program.subtitle}</p>
                          )}
                        </div>

                        <p className="text-lg font-semibold text-red-600 mb-3">
                          {program.description}
                        </p>

                        <p className="text-gray-700 mb-4">
                          {program.details}
                        </p>

                        <div className="mb-6 flex-grow">
                          <h4 className="font-bold text-black mb-2 text-sm">Key Highlights:</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            {program.highlights.map((highlight, i) => (
                              <li key={i} className="flex gap-2">
                                <span className="text-red-600">•</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link href={program.link} className="block">
                          <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold">
                            {program.cta}
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {pillarIdx < programs.length - 1 && (
                  <div className="mt-16 border-t border-gray-200" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-black mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of students building their future across Africa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3">
                  Go Back Home
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="border border-red-200 bg-red-50 text-red-600 font-bold px-8 py-3 hover:bg-red-100">
                  Contact Us
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
