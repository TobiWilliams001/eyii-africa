import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, MessageCircle, Calendar, Award } from "lucide-react"

export default function CommunityPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-red-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-black text-balance">
                Join Our Thriving Community
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 text-pretty">
                Connect with thousands of young African innovators, entrepreneurs, and change-makers who are shaping the
                future of the continent.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-6 text-lg transition-transform hover:scale-105">
                  Join the Community
                </Button>
                <Button
                  variant="outline"
                  className="border-red-600/20 bg-red-600/10 text-red-600 font-bold px-8 py-6 text-lg hover:bg-red-600/20 transition-transform hover:scale-105"
                >
                  Explore Events
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Community Features */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black">Why Join Our Community?</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Be part of a vibrant ecosystem that supports your growth and amplifies your impact.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border border-red-600/20 shadow-sm hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600/10 mb-4">
                    <Users className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Networking</h3>
                  <p className="text-gray-600">
                    Connect with like-minded peers, mentors, and industry leaders across Africa.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-red-600/20 shadow-sm hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600/10 mb-4">
                    <MessageCircle className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Collaboration</h3>
                  <p className="text-gray-600">
                    Find collaborators for your projects and join forces to create greater impact.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-red-600/20 shadow-sm hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600/10 mb-4">
                    <Calendar className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Events</h3>
                  <p className="text-gray-600">
                    Access exclusive workshops, webinars, and networking events throughout the year.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-red-600/20 shadow-sm hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600/10 mb-4">
                    <Award className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Recognition</h3>
                  <p className="text-gray-600">Showcase your achievements and get recognized for your contributions.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="py-16 md:py-24 bg-black text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-4 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-red-500">5,000+</div>
                <div className="mt-2 text-gray-300">Active Members</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-red-500">200+</div>
                <div className="mt-2 text-gray-300">Events Hosted</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-red-500">30+</div>
                <div className="mt-2 text-gray-300">Countries Represented</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-red-500">100+</div>
                <div className="mt-2 text-gray-300">Startups Launched</div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black">Upcoming Events</h2>
              <p className="mt-4 text-lg text-gray-600">
                Join us for these exciting community events and opportunities.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="aspect-video w-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                  <Calendar className="h-16 w-16 text-white" />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-red-600 font-semibold mb-2">March 15, 2025</div>
                  <h3 className="text-xl font-bold text-black mb-2">Innovation Summit 2025</h3>
                  <p className="text-gray-600 mb-4">
                    Join Africa's leading innovators for a day of inspiration, learning, and networking.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-red-600/20 text-red-600 hover:bg-red-600/10 bg-transparent"
                  >
                    Register Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="aspect-video w-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                  <MessageCircle className="h-16 w-16 text-white" />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-red-600 font-semibold mb-2">March 22, 2025</div>
                  <h3 className="text-xl font-bold text-black mb-2">Startup Pitch Night</h3>
                  <p className="text-gray-600 mb-4">
                    Watch emerging startups pitch their ideas to investors and industry experts.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-red-600/20 text-red-600 hover:bg-red-600/10 bg-transparent"
                  >
                    Register Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="aspect-video w-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                  <Users className="h-16 w-16 text-white" />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-red-600 font-semibold mb-2">April 5, 2025</div>
                  <h3 className="text-xl font-bold text-black mb-2">Mentorship Mixer</h3>
                  <p className="text-gray-600 mb-4">
                    Connect with experienced mentors who can guide your entrepreneurial journey.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-red-600/20 text-red-600 hover:bg-red-600/10 bg-transparent"
                  >
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Member Testimonials */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black">What Our Members Say</h2>
              <p className="mt-4 text-lg text-gray-600">Hear from community members about their experiences.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    alt="Sarah Okonkwo"
                    className="h-12 w-12 rounded-full object-cover"
                    src="/african-woman-professional.jpg"
                  />
                  <div>
                    <p className="font-bold text-black">Sarah Okonkwo</p>
                    <p className="text-sm text-gray-600">Tech Entrepreneur</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Being part of this community has opened doors I never imagined. The connections and support have been
                  invaluable to my startup's growth."
                </p>
              </Card>

              <Card className="p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    alt="David Mwangi"
                    className="h-12 w-12 rounded-full object-cover"
                    src="/african-man-professional.png"
                  />
                  <div>
                    <p className="font-bold text-black">David Mwangi</p>
                    <p className="text-sm text-gray-600">Social Entrepreneur</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "The mentorship and resources available through this community have accelerated my journey as a social
                  entrepreneur. Truly transformative!"
                </p>
              </Card>

              <Card className="p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    alt="Amina Diop"
                    className="h-12 w-12 rounded-full object-cover"
                    src="/african-woman-entrepreneur.jpg"
                  />
                  <div>
                    <p className="font-bold text-black">Amina Diop</p>
                    <p className="text-sm text-gray-600">Innovation Lead</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "I've found my tribe here. The collaborative spirit and shared passion for innovation make this
                  community truly special."
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-red-50 to-white border border-red-600/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Ready to Join the Movement?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Become part of Africa's most dynamic community of young innovators and entrepreneurs.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-6 text-lg transition-transform hover:scale-105">
                Join Now - It's Free
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
