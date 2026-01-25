import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 py-16 sm:py-24 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
              Privacy Policy
            </h1>
            <p className="mt-4 text-xl text-red-100">
              Last updated: January 2026
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-black mb-4">1. Introduction</h2>
                <p className="mb-6">
                  EYII Africa ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains 
                  how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>

                <h2 className="text-2xl font-bold text-black mb-4 mt-8">2. Information We Collect</h2>
                <p className="mb-4">We may collect information about you in a variety of ways:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, and other details you voluntarily provide</li>
                  <li><strong>Form Data:</strong> Information submitted through contact forms, registration forms, or applications</li>
                  <li><strong>Automatic Information:</strong> Device information, browser type, IP address, and usage patterns</li>
                  <li><strong>Cookies:</strong> Information stored on your device to enhance your experience</li>
                </ul>

                <h2 className="text-2xl font-bold text-black mb-4 mt-8">3. How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Process and respond to your inquiries</li>
                  <li>Send you program updates and relevant communications</li>
                  <li>Personalize your experience on our website</li>
                  <li>Improve and optimize our services</li>
                  <li>Comply with legal obligations</li>
                  <li>Prevent fraud and ensure security</li>
                </ul>

                <h2 className="text-2xl font-bold text-black mb-4 mt-8">4. Information Sharing</h2>
                <p className="mb-6">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information 
                  only with trusted partners who assist us in operating our website and conducting our business, under strict 
                  confidentiality agreements.
                </p>

                <h2 className="text-2xl font-bold text-black mb-4 mt-8">5. Data Security</h2>
                <p className="mb-6">
                  We implement appropriate technical and organizational measures to protect your personal information from 
                  unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the 
                  Internet is 100% secure.
                </p>

                <h2 className="text-2xl font-bold text-black mb-4 mt-8">6. Your Rights</h2>
                <p className="mb-4">Depending on your location, you may have the right to:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request restriction of processing</li>
                </ul>

                <h2 className="text-2xl font-bold text-black mb-4 mt-8">7. Cookies and Tracking</h2>
                <p className="mb-6">
                  Our website uses cookies to enhance user experience and track website usage. You can control cookie preferences 
                  through your browser settings. Note that disabling cookies may affect the functionality of certain features.
                </p>

                <h2 className="text-2xl font-bold text-black mb-4 mt-8">8. Third-Party Links</h2>
                <p className="mb-6">
                  Our website may contain links to external websites. We are not responsible for the privacy practices of these 
                  third-party sites. We encourage you to review their privacy policies before providing any personal information.
                </p>

                <h2 className="text-2xl font-bold text-black mb-4 mt-8">9. Children's Privacy</h2>
                <p className="mb-6">
                  Our services are not directed to individuals under the age of 13. We do not knowingly collect personal 
                  information from children under 13. If we become aware of such collection, we will take immediate steps to 
                  delete such information.
                </p>

                <h2 className="text-2xl font-bold text-black mb-4 mt-8">10. Changes to Privacy Policy</h2>
                <p className="mb-6">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
                  Privacy Policy on this page and updating the "Last Updated" date above.
                </p>

                <h2 className="text-2xl font-bold text-black mb-4 mt-8">11. Contact Us</h2>
                <p className="mb-6">
                  If you have questions about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="font-bold text-black mb-2">EYII Africa</p>
                  <p className="text-gray-600">Email: info@eyii.africa</p>
                  <p className="text-gray-600">Location: Lagos, Nigeria</p>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
