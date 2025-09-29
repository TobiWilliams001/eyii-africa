import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background-light">
      <Header />

      <main className="flex-grow">
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
              <div className="flex flex-col justify-center">
                <h1 className="text-4xl font-bold tracking-tighter text-slate-900 sm:text-5xl">Get in Touch</h1>
                <p className="mt-4 max-w-2xl text-lg text-slate-600">
                  We're here to help and answer any questions you might have. We look forward to hearing from you.
                </p>

                <div className="mt-12">
                  <h3 className="text-lg font-bold text-slate-900">Connect with Us</h3>
                  <div className="mt-4 flex space-x-4">
                    <a
                      href="#"
                      className="rounded-full bg-slate-200/50 p-3 text-slate-600 hover:bg-[#93d411]/20 hover:text-[#93d411] transition-colors"
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46,6.52a.5.5,0,0,0-.47-.32H19.9a3,3,0,0,0-2.6-1.57,2.94,2.94,0,0,0-2.11.86,3,3,0,0,0-1.25.3V7.5C10,7.15,7.93,5.69,7.9,5.67a.5.5,0,0,0-.85.31c-.27,3,1.19,5,2.12,6.14a6.93,6.93,0,0,0,1.37,1.51c-.95,1.1-2.45,1.67-2.47,1.68a.5.5,0,0,0-.24.74c.05.07.24.32.7.54,1.15.56,2.23.69,3.75.69,4.42,0,8.11-3.4,8.48-7.78l1.87-1.87A.5.5,0,0,0,22.46,6.52Z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="rounded-full bg-slate-200/50 p-3 text-slate-600 hover:bg-[#93d411]/20 hover:text-[#93d411] transition-colors"
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="rounded-full bg-slate-200/50 p-3 text-slate-600 hover:bg-[#93d411]/20 hover:text-[#93d411] transition-colors"
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"></path>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-8 shadow-lg">
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="block text-sm font-medium text-slate-700">
                      Your Name
                    </Label>
                    <div className="mt-1">
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        className="bg-slate-50 border-slate-300 focus:border-[#93d411] focus:ring-[#93d411]"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium text-slate-700">
                      Your Email
                    </Label>
                    <div className="mt-1">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="bg-slate-50 border-slate-300 focus:border-[#93d411] focus:ring-[#93d411]"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="block text-sm font-medium text-slate-700">
                      Your Message
                    </Label>
                    <div className="mt-1">
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Enter your message"
                        className="bg-slate-50 border-slate-300 focus:border-[#93d411] focus:ring-[#93d411]"
                      />
                    </div>
                  </div>

                  <div>
                    <Button
                      type="submit"
                      className="w-full bg-[#93d411] hover:bg-[#93d411]/90 text-slate-900 font-bold transition-transform hover:scale-[1.02]"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Location</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                Visit us at our headquarters in the heart of Africa's innovation hub.
              </p>
            </div>
            <div className="mt-12">
              <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-slate-200 flex items-center justify-center">
                <span className="text-slate-500">Map Placeholder</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
