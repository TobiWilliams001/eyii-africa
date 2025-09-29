import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ProgramsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-black">Our Programs</h1>
              <p className="mt-4 text-lg text-gray-600">
                Emerge Youth offers a range of programs designed to empower African youth through innovation,
                entrepreneurship, and career development. Explore our current offerings and upcoming initiatives.
              </p>
            </div>

            <div className="grid gap-12 md:gap-16">
              {/* School of Innovation */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h2 className="text-3xl font-bold tracking-tight text-black">School of Innovation</h2>
                  <p className="mt-4 text-gray-600">
                    The School of Innovation is a flagship program that equips young Africans with the skills and
                    mindset to become innovators and problem-solvers. Through a blend of theoretical learning and
                    hands-on projects, participants develop critical thinking, creativity, and collaboration abilities.
                  </p>
                  <Card className="mt-6 p-6 border border-gray-200">
                    <h3 className="text-xl font-bold text-black">Benefits & Success Stories</h3>
                    <p className="mt-2 text-gray-600">
                      Participants gain access to mentorship from industry experts, networking opportunities, and
                      resources to launch their innovative ideas. Alumni have gone on to create successful startups, win
                      innovation challenges, and contribute to impactful projects in their communities.
                    </p>
                  </Card>
                  <div className="mt-6">
                    <Button className="bg-red-600 hover:bg-red-700 text-white font-bold transition-transform hover:scale-105">
                      Apply Now
                    </Button>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="bg-red-50 rounded-xl p-2">
                    <img
                      alt="Students in a workshop"
                      className="rounded-lg aspect-square object-cover w-full"
                      src="/african-students-in-innovation-workshop.jpg"
                    />
                  </div>
                </div>
              </div>

              {/* Experience Labs */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-1">
                  <div className="bg-red-50 rounded-xl p-2">
                    <img
                      alt="Young professional working on a laptop"
                      className="rounded-lg aspect-square object-cover w-full"
                      src="/african-professional-working-on-laptop.jpg"
                    />
                  </div>
                </div>
                <div className="order-2">
                  <h2 className="text-3xl font-bold tracking-tight text-black">Experience Labs</h2>
                  <p className="mt-4 text-gray-600">
                    Experience Labs provide practical, real-world experience in various fields, allowing young people to
                    explore career paths and gain valuable skills. These labs offer internships, apprenticeships, and
                    project-based learning opportunities in collaboration with leading organizations.
                  </p>
                  <Card className="mt-6 p-6 border border-gray-200">
                    <h3 className="text-xl font-bold text-black">Benefits & Success Stories</h3>
                    <p className="mt-2 text-gray-600">
                      Participants gain hands-on experience, build their professional networks, and enhance their
                      employability. Many have secured full-time positions with partner organizations or launched their
                      own ventures based on their lab experiences.
                    </p>
                  </Card>
                  <div className="mt-6">
                    <Button className="bg-red-600 hover:bg-red-700 text-white font-bold transition-transform hover:scale-105">
                      Explore Labs
                    </Button>
                  </div>
                </div>
              </div>

              {/* Socialpreneurs Program */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h2 className="text-3xl font-bold tracking-tight text-black">Socialpreneurs Program</h2>
                  <p className="mt-4 text-gray-600">
                    The Socialpreneurs Program supports young Africans who are passionate about creating social impact
                    through entrepreneurship. This program provides training, mentorship, and seed funding to help
                    participants develop and launch their social ventures.
                  </p>
                  <Card className="mt-6 p-6 border border-gray-200">
                    <h3 className="text-xl font-bold text-black">Benefits & Success Stories</h3>
                    <p className="mt-2 text-gray-600">
                      Participants receive guidance on business planning, fundraising, and impact measurement. Alumni
                      have launched successful social enterprises addressing critical issues in their communities, from
                      education and healthcare to environmental sustainability.
                    </p>
                  </Card>
                  <div className="mt-6">
                    <Button className="bg-red-600 hover:bg-red-700 text-white font-bold transition-transform hover:scale-105">
                      Learn More
                    </Button>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="bg-red-50 rounded-xl p-2">
                    <img
                      alt="Group of entrepreneurs collaborating"
                      className="rounded-lg aspect-square object-cover w-full"
                      src="/african-entrepreneurs-collaborating.jpg"
                    />
                  </div>
                </div>
              </div>

              {/* Future Programs */}
              <div className="text-center bg-gray-50 border border-gray-200 p-8 md:p-12 rounded-xl">
                <h2 className="text-3xl font-bold tracking-tight text-black">Future Programs</h2>
                <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                  We are constantly developing new programs to meet the evolving needs of African youth. Stay tuned for
                  upcoming initiatives focused on digital literacy, green innovation, and creative industries. Sign up
                  for our newsletter to receive updates and be the first to know when new programs launch.
                </p>
                <div className="mt-8 flex justify-center">
                  <Button
                    variant="outline"
                    className="border-red-600/20 bg-red-600/10 text-red-600 font-bold hover:bg-red-600/20 transition-transform hover:scale-105"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
