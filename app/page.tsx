import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative flex min-h-[75vh] items-end bg-cover bg-center p-4 py-16 text-white sm:p-6 lg:p-10"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url("/african-youth-working-with-technology-and-innovati.jpg")`,
          }}
        >
          <div className="mx-auto flex max-w-5xl flex-col items-start gap-6">
            <h1 className="text-4xl font-extrabold md:text-5xl lg:text-6xl text-balance">
              Empowering African Youth Through Innovation
            </h1>
            <p className="max-w-3xl text-base text-white/90 md:text-lg">
              Emerge Youth is dedicated to fostering the next generation of African leaders by providing access to
              cutting-edge technology, entrepreneurial training, and career development resources.
            </p>
            <Link href="/programs">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 text-base shadow-lg transition-transform hover:scale-105">
                Explore Programs
              </Button>
            </Link>
          </div>
        </section>

        {/* Flagship Programs Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">Our Flagship Programs</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Discover the initiatives that are changing lives across the continent.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div
                  className="aspect-video w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url("/african-students-in-tech-workshop.jpg")`,
                  }}
                />
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-black">Tech Innovators Academy</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    A comprehensive program designed to equip young Africans with the technical skills needed to thrive
                    in the digital age.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div
                  className="aspect-video w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url("/african-entrepreneurs-in-business-meeting.jpg")`,
                  }}
                />
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-black">Entrepreneurship Bootcamp</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    An intensive bootcamp focused on nurturing entrepreneurial talent and providing the tools to launch
                    successful ventures.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div
                  className="aspect-video w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url("/african-professionals-networking-event.jpg")`,
                  }}
                />
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-black">Career Accelerator Program</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    A program dedicated to preparing young professionals for the job market through mentorship,
                    workshops, and networking opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="bg-red-50 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">Success Stories</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Hear from the talented individuals who have benefited from our programs.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <img
                    alt="Aisha Diallo"
                    className="h-12 w-12 rounded-full object-cover"
                    src="/african-woman-professional-headshot.png"
                  />
                  <div>
                    <p className="font-bold text-black">Aisha Diallo</p>
                    <p className="text-sm text-gray-600">Alumna, 2023</p>
                  </div>
                </div>
                <div className="my-4 flex text-red-600">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700">
                  "Emerge Youth's Tech Innovators Academy transformed my career path. The hands-on training and
                  mentorship were invaluable."
                </p>
              </Card>

              <Card className="p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <img
                    alt="Kwame Mensah"
                    className="h-12 w-12 rounded-full object-cover"
                    src="/african-man-professional-headshot.png"
                  />
                  <div>
                    <p className="font-bold text-black">Kwame Mensah</p>
                    <p className="text-sm text-gray-600">Alumnus, 2023</p>
                  </div>
                </div>
                <div className="my-4 flex text-red-600">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700">
                  "The Entrepreneurship Bootcamp gave me the confidence and skills to launch my own startup. I'm
                  incredibly grateful for this opportunity."
                </p>
              </Card>

              <Card className="p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <img
                    alt="Fatima Hassan"
                    className="h-12 w-12 rounded-full object-cover"
                    src="/african-woman-entrepreneur-headshot.jpg"
                  />
                  <div>
                    <p className="font-bold text-black">Fatima Hassan</p>
                    <p className="text-sm text-gray-600">Alumna, 2023</p>
                  </div>
                </div>
                <div className="my-4 flex text-red-600">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700">
                  "The Career Accelerator Program helped me land my dream job. The workshops and networking events were
                  instrumental in my success."
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">Stay Updated</h2>
            <p className="mt-4 text-lg text-gray-600">
              Sign up for our newsletter to receive the latest news, program updates, and opportunities from Emerge
              Youth.
            </p>
            <form className="mt-8 flex w-full max-w-md mx-auto flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-auto bg-gray-50 border-gray-200 focus:border-red-600 focus:ring-red-600"
              />
              <Button
                type="submit"
                className="flex-none bg-red-600 hover:bg-red-700 text-white font-bold shadow-sm transition-transform hover:scale-105"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
