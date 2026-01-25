import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Mail, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react'
import { FAQSection } from '@/components/faq-section'

export default function ContactPage() {
  const contactEmails = [
    {
      title: 'General Inquiries',
      description: 'For general questions about EYII',
      email: 'info@eyii.africa',
    },
    {
      title: 'Program Inquiries',
      description: 'Questions about specific programs',
      email: 'programs@eyii.africa',
    },
    {
      title: 'Partnership Inquiries',
      description: 'For organizations interested in partnering',
      email: 'partnerships@eyii.africa',
    },
  ]

  const contactFaqs = [
    {
      question: 'How do I join EYII programs?',
      answer:
        'Click the "Join Waitlist" button on any program page, fill out the form, and we\'ll notify you when applications open.',
    },
    {
      question: 'Are EYII programs free?',
      answer:
        'Most programs are free or heavily subsidized. Scholarships are available for certain programs.',
    },
    {
      question: 'Can students from any African country join?',
      answer:
        'Yes! All our programs are open to students across Africa. Most are virtual and accessible continent-wide.',
    },
    {
      question:
        "What's the difference between EYII and ASN?",
      answer:
        'ASN is our flagship career development program. EYII is the parent organization expanding into Entrepreneurship, Innovation, and Leadership.',
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 md:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-blue-50/30 pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/40 rounded-full blur-3xl -z-10" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-black mb-6 text-balance leading-tight">
                Get in Touch
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-red-400 rounded-full mb-8" />
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Have questions about our programs or want to collaborate? We'd love to hear from you. Reach out by email or connect with us on social media.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
                Ways to Reach Us
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-red-600 to-red-400 rounded-full" />
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {contactEmails.map((contact, idx) => (
                <Card
                  key={idx}
                  className="p-8 border border-red-100 shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="p-3 bg-red-100 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-3">
                    {contact.title}
                  </h3>
                  <p className="text-gray-700 mb-6">{contact.description}</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-lg transition-all hover:shadow-lg"
                  >
                    <Mail className="h-4 w-4" />
                    Send Email
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Location & Social */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Location Card */}
              <Card className="p-8 md:p-12 border border-red-100 shadow-lg rounded-2xl">
                <div className="p-4 bg-red-100 rounded-lg w-fit mb-6">
                  <MapPin className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Our Location
                </h3>
                <p className="text-gray-700 text-lg mb-2">
                  Headquarters
                </p>
                <p className="text-xl font-semibold text-black">
                  Lagos, Nigeria
                </p>
              </Card>

              {/* Social Media Card */}
              <Card className="p-8 md:p-12 border border-red-100 shadow-lg rounded-2xl">
                <h3 className="text-2xl font-bold text-black mb-8">
                  Connect With Us
                </h3>
                <div className="flex gap-4 flex-wrap">
                  <a
                    href="#"
                    className="p-4 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors hover:scale-110 transform duration-300"
                    title="LinkedIn"
                  >
                    <Linkedin className="h-8 w-8 text-blue-600" />
                  </a>
                  <a
                    href="#"
                    className="p-4 bg-sky-100 rounded-lg hover:bg-sky-200 transition-colors hover:scale-110 transform duration-300"
                    title="Twitter"
                  >
                    <Twitter className="h-8 w-8 text-sky-600" />
                  </a>
                  <a
                    href="#"
                    className="p-4 bg-pink-100 rounded-lg hover:bg-pink-200 transition-colors hover:scale-110 transform duration-300"
                    title="Instagram"
                  >
                    <Instagram className="h-8 w-8 text-pink-600" />
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection title="Frequently Asked Questions" faqs={contactFaqs} />
      </main>

      <Footer />
    </div>
  )
}
