import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { TestimonialCarousel } from '@/components/testimonials-carousel'
import { testimonials } from '@/lib/data/testimonials'

export default function HomePage() {

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 md:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-blue-50/30 pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/40 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-black mb-6 text-balance leading-tight">
                Empowering African Youth
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-red-400 rounded-full mb-8" />
              <p className="text-xl md:text-2xl text-gray-700 mb-12 text-pretty leading-relaxed max-w-2xl">
                Access world-class programs in Career Development, Entrepreneurship, Innovation, and Leadership. Build your future with structured pathways to opportunity, mentorship, and community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/programs">
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 py-4 text-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 rounded-lg">
                    Explore Programs →
                  </Button>
                </Link>
                <Link href="/community">
                  <Button className="w-full sm:w-auto bg-white hover:bg-red-600 text-red-600 hover:text-white border-2 border-red-600 font-bold px-8 py-4 text-lg transition-all duration-300 rounded-lg shadow-md hover:shadow-xl">
                    Join Our Community
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Four Pillars Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-20">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-black mb-6">
                Our Four Pillars
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-red-600 to-red-400 rounded-full" />
              <p className="mt-6 max-w-2xl text-lg text-gray-600 leading-relaxed">
                Structured pathways to opportunity across Career, Entrepreneurship, Innovation, and Leadership
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: 'Career Development',
                  desc: 'Build skills and access opportunities through our flagship ASN program. Connect with mentors, secure internships, and land your dream job at top global companies.',
                  href: '/pillars/career',
                  color: 'from-red-500 to-red-600',
                  iconColor: 'from-red-100 to-red-200',
                },
                {
                  title: 'Entrepreneurship',
                  desc: 'Launch ventures through intensive programs. Turn ideas into sustainable businesses that create impact and generate profit.',
                  href: '/pillars/entrepreneurship',
                  color: 'from-orange-500 to-red-500',
                  iconColor: 'from-orange-100 to-orange-200',
                },
                {
                  title: 'Innovation',
                  desc: 'Solve real problems through challenges and labs. Develop creative solutions that address community needs and create meaningful impact.',
                  href: '/pillars/innovation',
                  color: 'from-blue-500 to-purple-600',
                  iconColor: 'from-blue-100 to-purple-200',
                },
                {
                  title: 'Leadership',
                  desc: 'Develop through Founders Series and training programs. Build skills to lead teams, inspire others, and drive organizational success.',
                  href: '/pillars/leadership',
                  color: 'from-purple-500 to-pink-600',
                  iconColor: 'from-purple-100 to-pink-200',
                },
              ].map((pillar, index) => (
                <Link key={index} href={pillar.href}>
                  <Card className="h-full bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group overflow-hidden rounded-2xl">
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.color}`}
                    />
                    <CardContent className="p-8">
                      <div
                        className={`mb-6 h-14 w-14 rounded-xl bg-gradient-to-br ${pillar.iconColor} group-hover:scale-125 transition-transform duration-300`}
                      />
                      <h3 className={`text-2xl font-bold text-black mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${pillar.color} transition-all`}>
                        {pillar.title}
                      </h3>
                      <p className="text-gray-700 mb-8 leading-relaxed">
                        {pillar.desc}
                      </p>
                      <Button
                        className={`w-full bg-gradient-to-r ${pillar.color} hover:shadow-lg text-white font-semibold rounded-lg transition-all duration-300`}
                      >
                        Explore Pillar →
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose EYII Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 text-balance">
                Why Choose EYII?
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-red-600 to-red-400 rounded-full mb-8" />
              <p className="max-w-3xl text-xl text-gray-700 leading-relaxed">
                We are building Africa's largest youth empowerment ecosystem, providing structured pathways, proven mentorship, and a thriving community of ambitious peers across the continent.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: '🎯',
                  title: 'Structured Pathways',
                  description:
                    'No more guessing. Our programs provide clear step-by-step pathways from where you are to where you want to be.',
                },
                {
                  icon: '📈',
                  title: 'Proven Impact',
                  description:
                    '1,200+ students across Nigeria, Ghana, Kenya, and South Africa have secured internships at top companies like Meta, Goldman Sachs, and Microsoft.',
                },
                {
                  icon: '🌍',
                  title: 'Pan-African Community',
                  description:
                    'Connect with ambitious peers across the continent. Build relationships and networks that last far beyond the programs.',
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="p-8 border border-red-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-2xl overflow-hidden group bg-white"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-red-400" />
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <TestimonialCarousel
          title="Student Success Stories"
          testimonials={testimonials}
          autoplay={true}
          autoplayInterval={5000}
        />

        {/* Impact Stats Section */}
        <section className="bg-black text-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Our Impact in Numbers
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-red-500">
                  1,200+
                </div>
                <div className="mt-2 text-gray-300">Students Empowered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-red-500">
                  4
                </div>
                <div className="mt-2 text-gray-300">Countries Reached</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-red-500">
                  50+
                </div>
                <div className="mt-2 text-gray-300">University Partners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-red-500">
                  2
                </div>
                <div className="mt-2 text-gray-300">Years of Impact</div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of African students building their future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/programs">
                <Button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 text-base transition-all hover:scale-105">
                  Explore Our Pillars
                </Button>
              </Link>
              <Link href="/about">
                <Button className="w-full sm:w-auto border border-red-600/20 bg-red-600/10 text-red-600 font-bold px-8 py-3 text-base hover:bg-red-600/20 transition-all hover:scale-105">
                  Learn more about EYII
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
