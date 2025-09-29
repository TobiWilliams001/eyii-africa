import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background-light">
      <Header />

      <main className="flex-1">
        {/* About Section */}
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                  About Eyii Africa
                </h2>
                <p className="max-w-[600px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Eyii Africa is dedicated to empowering African youth through innovation, entrepreneurship, and career
                  development. Our mission is to create opportunities and foster growth for the next generation of
                  leaders.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-[#93d411]/10 px-3 py-1 text-sm font-medium text-[#93d411]">
                  Our Mission & Vision
                </div>
                <p className="text-slate-600">
                  <strong className="font-semibold text-slate-800">Mission:</strong> To empower African youth by
                  providing access to innovative programs, entrepreneurial resources, and career development
                  opportunities, fostering a generation of leaders and change-makers.
                </p>
                <p className="text-slate-600">
                  <strong className="font-semibold text-slate-800">Vision:</strong> To be the leading catalyst for youth
                  empowerment in Africa, driving sustainable development and creating a vibrant ecosystem where young
                  people can thrive and contribute to the continent's growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="w-full bg-slate-50 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                  Our Core Values
                </h2>
                <p className="mx-auto max-w-[700px] text-slate-600 md:text-xl/relaxed">
                  The principles that guide our work and define our culture.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="border border-[#93d411]/20 shadow-sm hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="rounded-full bg-[#93d411]/10 p-3">
                        <svg className="h-6 w-6 text-[#93d411]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Collaboration</h3>
                    </div>
                    <p className="text-slate-600">
                      We believe in the power of working together to achieve common goals.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-[#93d411]/20 shadow-sm hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="rounded-full bg-[#93d411]/10 p-3">
                        <svg className="h-6 w-6 text-[#93d411]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Innovation</h3>
                    </div>
                    <p className="text-slate-600">We embrace new ideas and creative approaches to solve challenges.</p>
                  </CardContent>
                </Card>

                <Card className="border border-[#93d411]/20 shadow-sm hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="rounded-full bg-[#93d411]/10 p-3">
                        <svg className="h-6 w-6 text-[#93d411]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Integrity</h3>
                    </div>
                    <p className="text-slate-600">
                      We uphold the highest standards of ethics and transparency in all we do.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                  Meet Our Team
                </h2>
                <p className="mx-auto max-w-[700px] text-slate-600 md:text-xl/relaxed">
                  The passionate individuals driving our mission forward.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="flex flex-col items-center gap-4 text-center">
                  <img
                    alt="Aisha Diallo"
                    className="h-32 w-32 rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLFb4Rsz3URF4dUwGGa5uiDLTrLOUiKLConYmibaKPMeNjnLbquw-bNm9YwaEafUPySADUE3xeQtcI_IUj7CtTxj67WhzVlUdxz6MOC141QGYVbr1mAfph2NjLINY7-Guk7yNBT5RQHGhEXBvoFQpDD-gBStjFhZQNafrLMyiM_0MkVo6d4OXAD62ks6jFwgWAKFmlO2EmYQai-Ax6tPQbQr6U77ci1NMBv3n2jPcgH_zonM7MjamB8uo2wopL8XaOXTyn9-6aEdFS"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Aisha Diallo</h4>
                    <p className="text-sm text-slate-600">Executive Director</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4 text-center">
                  <img
                    alt="Kwame Mensah"
                    className="h-32 w-32 rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcAmtv3er_dA8drQUpESk9HPbeDOEJNaq9LCpPmhtGrt3IPaKD0A08avRAq7zrIPIzUFeYk-U9t_3-EPuu5kSGaUA-7FKo1zAdNCDymplN7kVT5W3NmphQhbnuGuewvHtwAzH6f07eEv0Xljy3VR-JghNCX-sCgOjRW1WV1CYUyJDEctOsYvDxPVO52LNUktuICrG8dY45O-sfEj6gVV3vozjjWHKeiUgClickErBvZny-qZ982-i-JdtAtyI-a6ZSuMiqDIsqA8nx"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Kwame Mensah</h4>
                    <p className="text-sm text-slate-600">Program Manager</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4 text-center">
                  <img
                    alt="Fatima Hassan"
                    className="h-32 w-32 rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIIxRR7U6nruGE9TFdzVhZqQxf1ryzdTFAgoVfMdRWJ_3lRUUKZ92E0OaUw6N3gpRAKweN8LP-frGXgfCuLznDc7F28CsCxQrhZbS4v46N7xJ1HBSxB6psyDgrjqEF42fyHgUY2gNalJZe8BkD3n1l61CdmIhrZftrltPNX7LcgsZRkWlSolE-hICNBYpYdIZFdZV63FkgLh6GnrfoggZhpcZ9UGWLodQyoewgh0-TazSxZ4Ur8oiegNL0-BkEyriYcd0vk2861ifo"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Fatima Hassan</h4>
                    <p className="text-sm text-slate-600">Community Outreach</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4 text-center">
                  <img
                    alt="Chidi Okoro"
                    className="h-32 w-32 rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVJqMlFYN02FTci3QcqAFR80U3oDqLYW86MwW_890rE8mZMg8ROzOEN7mCY9PjJq65n42lGuDuR-w0tX1zlIDPIvL1QxCUdzO5i7S450pvf9u8wjXNg3mre2Kzu7EuYPq6RhjrVkhmh9Bj1dxe8EPpUH5uQIpX9919yLJQO2J1CphgF9xtozQ7gdJik6xyMFv_I_kZu5zU4SUoIrHivJIPNQW5U_VqL-PPioJ3sTvY03Ku35xittoo7-gQ4mlTSjExQ_d82qiD9IWI"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Chidi Okoro</h4>
                    <p className="text-sm text-slate-600">Partnerships Lead</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="w-full bg-slate-50 py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                  Our Partners & Supporters
                </h2>
                <p className="mx-auto max-w-[700px] text-slate-600 md:text-xl/relaxed">
                  We are grateful for the support of our partners who make our work possible.
                </p>
              </div>
              <div className="grid grid-cols-2 place-items-center gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square w-32 bg-slate-200 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all"
                  >
                    <span className="text-slate-400 text-xs">Partner Logo</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
