import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BookOpen, Video, FileText, Download, Search } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-red-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-black text-balance">
                Resources for Your Journey
              </h1>
              <p className="mt-6 text-lg text-gray-600 text-pretty">
                Access a wealth of learning materials, tools, and guides to support your innovation and entrepreneurship
                journey.
              </p>

              <div className="mt-8 flex gap-2 max-w-xl mx-auto">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search resources..."
                    className="pl-10 bg-white border-gray-200 focus:border-red-600 focus:ring-red-600"
                  />
                </div>
                <Button className="bg-red-600 hover:bg-red-700 text-white font-bold">Search</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black">Browse by Category</h2>
              <p className="mt-4 text-lg text-gray-600">Find the resources you need to succeed.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border border-red-600/20 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600/10 mb-4">
                    <BookOpen className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Learning Guides</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Comprehensive guides on innovation, entrepreneurship, and technology.
                  </p>
                  <p className="text-red-600 font-semibold text-sm">45 Resources</p>
                </CardContent>
              </Card>

              <Card className="border border-red-600/20 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600/10 mb-4">
                    <Video className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Video Tutorials</h3>
                  <p className="text-gray-600 text-sm mb-4">Step-by-step video lessons from industry experts.</p>
                  <p className="text-red-600 font-semibold text-sm">32 Videos</p>
                </CardContent>
              </Card>

              <Card className="border border-red-600/20 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600/10 mb-4">
                    <FileText className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Templates</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Ready-to-use templates for business plans, pitches, and more.
                  </p>
                  <p className="text-red-600 font-semibold text-sm">28 Templates</p>
                </CardContent>
              </Card>

              <Card className="border border-red-600/20 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600/10 mb-4">
                    <Download className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Toolkits</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Complete toolkits for launching and growing your venture.
                  </p>
                  <p className="text-red-600 font-semibold text-sm">15 Toolkits</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black">Featured Resources</h2>
              <p className="mt-4 text-lg text-gray-600">Our most popular and highly-rated resources.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="aspect-video w-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-white" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold px-2 py-1 bg-red-600/10 text-red-600 rounded">Guide</span>
                    <span className="text-xs text-gray-500">45 min read</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">The Complete Startup Guide</h3>
                  <p className="text-gray-600 mb-4">
                    Everything you need to know about starting and scaling a successful startup in Africa.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-red-600/20 text-red-600 hover:bg-red-600/10 bg-transparent"
                  >
                    Download Free
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="aspect-video w-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                  <Video className="h-16 w-16 text-white" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold px-2 py-1 bg-red-600/10 text-red-600 rounded">Video</span>
                    <span className="text-xs text-gray-500">2 hours</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Pitch Perfect Masterclass</h3>
                  <p className="text-gray-600 mb-4">
                    Learn how to craft and deliver a compelling pitch that wins investors.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-red-600/20 text-red-600 hover:bg-red-600/10 bg-transparent"
                  >
                    Watch Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="aspect-video w-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                  <FileText className="h-16 w-16 text-white" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold px-2 py-1 bg-red-600/10 text-red-600 rounded">Template</span>
                    <span className="text-xs text-gray-500">Instant download</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Business Plan Template</h3>
                  <p className="text-gray-600 mb-4">
                    A professional business plan template used by successful African startups.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-red-600/20 text-red-600 hover:bg-red-600/10 bg-transparent"
                  >
                    Download Free
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Learning Paths */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black">Curated Learning Paths</h2>
              <p className="mt-4 text-lg text-gray-600">Follow structured learning paths designed for your goals.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border border-red-600/20 p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Aspiring Entrepreneur Path</h3>
                <p className="text-gray-600 mb-6">
                  A comprehensive learning journey from idea validation to launching your first venture.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <span className="text-gray-700">Idea Generation & Validation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <span className="text-gray-700">Business Model Design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <span className="text-gray-700">Fundraising Essentials</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <span className="text-gray-700">Launch & Growth Strategies</span>
                  </div>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold">Start Learning Path</Button>
              </Card>

              <Card className="border border-red-600/20 p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Tech Innovator Path</h3>
                <p className="text-gray-600 mb-6">
                  Master the skills needed to build innovative tech solutions for African challenges.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <span className="text-gray-700">Problem Identification</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <span className="text-gray-700">Product Development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <span className="text-gray-700">User Testing & Iteration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <span className="text-gray-700">Scaling Your Solution</span>
                  </div>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold">Start Learning Path</Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 md:py-24 bg-black text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get New Resources Delivered</h2>
              <p className="text-gray-300 mb-8">
                Subscribe to receive the latest resources, guides, and learning materials directly in your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-red-500 focus:ring-red-500"
                />
                <Button className="bg-red-600 hover:bg-red-700 text-white font-bold">Subscribe</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
