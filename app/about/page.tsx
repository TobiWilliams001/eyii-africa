import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin } from "lucide-react"
import { coreLeadership, teamLeads, partners } from "@/lib/data/team"

export default function AboutPage() {

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-blue-50/30 pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/40 rounded-full blur-3xl -z-10" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-black mb-6 text-balance leading-tight">
                About EYII
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-red-400 rounded-full mb-8" />
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Empowering African Youth Through Innovation and Opportunity. EYII is building the largest youth empowerment ecosystem in Africa.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="w-full py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="bg-white rounded-2xl p-8 border border-red-100 shadow-lg">
                <div className="inline-block rounded-lg bg-red-600/10 px-4 py-2 mb-6 border border-red-200">
                  <span className="text-sm font-semibold text-red-600">Our Mission</span>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  EYII provides structured pathways to opportunity for African students through four pillars: <span className="font-semibold">Career Development, Entrepreneurship, Innovation, and Leadership.</span> We exist to remove barriers and create access to world-class programs, mentorship, and networks that transform futures.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-lg">
                <div className="inline-block rounded-lg bg-blue-600/10 px-4 py-2 mb-6 border border-blue-200">
                  <span className="text-sm font-semibold text-blue-600">Our Vision</span>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be the platform every African student uses to access opportunities and build their future. <span className="font-semibold">By 2027, we envision EYII on every ambitious student's phone across the continent.</span> We're committed to creating systemic change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="w-full py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">Leadership Team</h2>
              <div className="h-1 w-32 bg-gradient-to-r from-red-600 to-red-400 rounded-full" />
              <p className="mt-6 text-lg text-gray-600">Meet the leaders driving EYII's mission</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {coreLeadership.map((leader, index) => (
                <Card key={index} className="bg-white border border-red-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative w-full aspect-square bg-gradient-to-br from-red-50 to-gray-100">
                      <img 
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-black mb-2">{leader.name}</h3>
                      <p className="text-red-600 font-semibold mb-6">{leader.role}</p>
                      <div className="flex gap-3">
                        <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Leads Section */}
        <section className="w-full py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">Team Leads</h2>
              <div className="h-1 w-32 bg-gradient-to-r from-red-600 to-red-400 rounded-full" />
              <p className="mt-6 text-lg text-gray-600">Passionate individuals driving our programs</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {teamLeads.map((member, index) => (
                <Card key={index} className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden group h-full flex flex-col">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="relative w-full aspect-square bg-gradient-to-br from-gray-50 to-gray-100">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-between flex-1">
                      <div>
                        <h3 className="font-bold text-black mb-2 text-lg group-hover:text-red-600 transition-colors">{member.name}</h3>
                        <p className="text-gray-600 text-sm mb-6 leading-relaxed">{member.role}</p>
                      </div>
                      <div className="flex gap-2">
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="w-full bg-gray-50 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
                  Our Core Values
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed">
                  The principles that guide our work and define our culture.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="border border-red-600/20 shadow-sm hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="rounded-full bg-red-600/10 p-3">
                        <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-black">Collaboration</h3>
                    </div>
                    <p className="text-gray-600">
                      We believe in the power of working together to achieve common goals.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-red-600/20 shadow-sm hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="rounded-full bg-red-600/10 p-3">
                        <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-black">Innovation</h3>
                    </div>
                    <p className="text-gray-600">We embrace new ideas and creative approaches to solve challenges.</p>
                  </CardContent>
                </Card>

                <Card className="border border-red-600/20 shadow-sm hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="rounded-full bg-red-600/10 p-3">
                        <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-black">Integrity</h3>
                    </div>
                    <p className="text-gray-600">
                      We uphold the highest standards of ethics and transparency.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="w-full py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">Our Partners & Supporters</h2>
              <div className="h-1 w-32 bg-gradient-to-r from-red-600 to-red-400 rounded-full" />
              <p className="mt-6 text-lg text-gray-600">Organizations supporting our mission to empower African youth</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {partners.map((partner, index) => (
                <Card key={index} className="bg-gradient-to-br from-white to-gray-50 border border-red-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-red-400" />
                    <div className="relative w-full h-48 bg-white flex items-center justify-center p-8">
                      <img 
                        src={partner.image}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="p-8 text-center border-t border-gray-100">
                      <h3 className="text-xl font-bold text-black group-hover:text-red-600 transition-colors">{partner.name}</h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-20 md:py-28 bg-gradient-to-br from-red-50 to-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Ready to Join Us?</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">Be part of the movement empowering African youth</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/programs">
                <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 py-4 text-lg shadow-lg transition-all hover:shadow-xl rounded-lg">
                  Explore Programs
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="border-2 border-red-600 text-red-600 bg-white hover:bg-red-50 font-bold px-8 py-4 text-lg transition-all rounded-lg">
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