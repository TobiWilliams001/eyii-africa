'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'

export default function LeadershipPage() {
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
              <span className="text-black font-medium">Leadership</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-24 md:py-36 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-white pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-100/30 rounded-full blur-3xl -z-10" />
          
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-black mb-6 text-balance leading-tight">
                Lead With Impact
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-8" />
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Develop the Skills to Lead and Inspire
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
                Build leadership capacity through structured training, real-world practice, and mentorship from experienced leaders. Learn to lead teams, drive change, and create impact.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Competencies */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-black mb-12">What You'll Develop</h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Core competencies across all leadership programs
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                { title: 'Communication', desc: 'Articulate vision, inspire action, and build alignment through effective communication.' },
                { title: 'Team Building', desc: 'Assemble, motivate, and lead diverse teams toward common goals.' },
                { title: 'Strategic Thinking', desc: 'See the big picture, anticipate challenges, and make sound long-term decisions.' },
                { title: 'Emotional Intelligence', desc: 'Understand yourself and others, manage emotions, and build strong relationships.' },
                { title: 'Execution', desc: 'Turn vision into action, deliver results, and maintain accountability.' },
                { title: 'Integrity', desc: 'Lead with ethics, build trust, and make principled decisions.' },
              ].map((competency, idx) => (
                <Card key={idx} className="p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-red-600 mb-3">{competency.title}</h3>
                  <p className="text-gray-700">{competency.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-black mb-12">Our Leadership Programs</h2>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Founders Series */}
              <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="inline-block rounded-lg bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-600 mb-4">
                    Launching Q3 2026
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Founders Series
                  </h3>
                  <p className="text-lg font-semibold text-red-600 mb-4">
                    Learn from Africa's Leading Founders
                  </p>
                  <p className="text-gray-700 mb-6">
                    Monthly sessions featuring successful African founders and leaders sharing their journeys, lessons, and insights. Interactive format with Q&A and small group discussions.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-black mb-3">Each Session Includes:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• 60-minute founder fireside chat</li>
                      <li>• Journey from idea to scale</li>
                      <li>• Failures, pivots, and lessons learned</li>
                      <li>• Live Q&A session</li>
                      <li>• Networking breakout rooms</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-black mb-3">Access Level:</h4>
                    <p className="text-sm text-gray-700 mb-2">Free for all EYII community members</p>
                    <p className="text-sm text-gray-700">Premium: Priority seating + small group sessions</p>
                  </div>

                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold">
                    Join Founders Series
                  </Button>
                </CardContent>
              </Card>

              {/* Leadership Training */}
              <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="inline-block rounded-lg bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-600 mb-4">
                    Launching Q4 2026
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Leadership Training Program
                  </h3>
                  <p className="text-lg font-semibold text-red-600 mb-4">
                    From Participant to Leader
                  </p>
                  <p className="text-gray-700 mb-6">
                    Comprehensive leadership development program covering essential skills: communication, team management, strategic thinking, and emotional intelligence.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-black mb-3">8-Week Curriculum:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>Week 1: Leadership Foundations</li>
                      <li>Week 2: Communication & Influence</li>
                      <li>Week 3: Team Dynamics</li>
                      <li>Week 4: Emotional Intelligence</li>
                      <li>Week 5: Strategic Thinking</li>
                      <li>Week 6: Change Management</li>
                      <li>Week 7: Ethics & Servant Leadership</li>
                      <li>Week 8: Capstone Project</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-black mb-3">Program Details:</h4>
                    <p className="text-sm text-gray-700">6-8 hours/week commitment | Cohort size: 25-30</p>
                  </div>

                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>

              {/* Student Leadership Incubator */}
              <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow md:col-span-2">
                <CardContent className="p-8">
                  <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600 mb-4">
                    Coming 2027
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Student Leadership Incubator
                  </h3>
                  <p className="text-lg font-semibold text-red-600 mb-4">
                    Lead Real Projects, Create Real Impact
                  </p>
                  <p className="text-gray-700 mb-6">
                    6-month project-based leadership development. Selected student leaders work on real community or organizational projects while receiving intensive mentorship and training.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-black mb-3">How It Works:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>1. Selection - Submit project proposal</li>
                        <li>2. Kickoff - Leadership bootcamp</li>
                        <li>3. Execution - Lead your project (6 months)</li>
                        <li>4. Showcase - Present outcomes</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-3">What You'll Get:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>✓ $500-$1,000 project grant</li>
                        <li>✓ Dedicated leadership mentor</li>
                        <li>✓ Real leadership experience</li>
                        <li>✓ Strong reference letters</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-sm text-gray-600">
                      Project examples: Campus sustainability initiatives, mentorship programs, health awareness campaigns, youth employment platforms
                    </p>
                  </div>

                  <Button className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-bold">
                    Express Interest
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Leadership */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-black mb-12">Why Leadership Development?</h2>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="p-8 shadow-sm">
                <h3 className="text-xl font-bold text-black mb-3">Africa Needs Visionary Leaders</h3>
                <p className="text-gray-700">
                  The continent's transformation requires leaders who can navigate complexity, drive change, and inspire collective action. Be that leader.
                </p>
              </Card>

              <Card className="p-8 shadow-sm">
                <h3 className="text-xl font-bold text-black mb-3">Leadership Is a Skill, Not a Title</h3>
                <p className="text-gray-700">
                  You don't need a formal position to lead. Develop the skills now, and opportunities will follow. Leadership is learned, not born.
                </p>
              </Card>

              <Card className="p-8 shadow-sm">
                <h3 className="text-xl font-bold text-black mb-3">Your Career Will Demand It</h3>
                <p className="text-gray-700">
                  Every profession values leadership. Whether you're an engineer, entrepreneur, or consultant, leadership skills multiply your impact and opportunities.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-black mb-4">
              Ready to Lead?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our leadership programs and start your development journey. Build the skills to lead, inspire, and create impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3">
                Join Leadership Programs
              </Button>
              <Link href="/programs">
                <Button className="border border-red-200 bg-red-50 text-red-600 font-bold px-8 py-3 hover:bg-red-100">
                  Back to All Pillars
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
