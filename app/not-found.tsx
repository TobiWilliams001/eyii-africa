import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AlertCircle } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-grow flex items-center justify-center">
        <section className="py-16 sm:py-24 w-full">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="h-12 w-12 text-red-600" />
                </div>
              </div>

              <h1 className="text-6xl sm:text-7xl font-bold text-black mb-4">404</h1>

              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
                Page Not Found
              </h2>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you may have 
                typed the URL incorrectly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-6 text-lg">
                    Go to Home
                  </Button>
                </Link>

                <Link href="/programs">
                  <Button
                    variant="outline"
                    className="border-red-600/20 bg-red-600/10 text-red-600 font-bold px-8 py-6 text-lg hover:bg-red-600/20 bg-transparent"
                  >
                    Browse Programs
                  </Button>
                </Link>
              </div>

              <div className="mt-16 pt-16 border-t border-gray-200">
                <h3 className="text-lg font-bold text-black mb-8">Popular Pages</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  <Link href="/about" className="text-red-600 hover:text-red-700 font-medium">
                    About Us
                  </Link>
                  <Link href="/programs" className="text-red-600 hover:text-red-700 font-medium">
                    Programs
                  </Link>
                  <Link href="/community" className="text-red-600 hover:text-red-700 font-medium">
                    Community
                  </Link>
                  <Link href="/resources" className="text-red-600 hover:text-red-700 font-medium">
                    Resources
                  </Link>
                  <Link href="/contact" className="text-red-600 hover:text-red-700 font-medium">
                    Contact
                  </Link>
                  <Link href="/privacy" className="text-red-600 hover:text-red-700 font-medium">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="text-red-600 hover:text-red-700 font-medium">
                    Terms of Service
                  </Link>
                  <a href="mailto:info@eyii.africa" className="text-red-600 hover:text-red-700 font-medium">
                    Support
                  </a>
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
