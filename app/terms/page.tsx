import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 py-16 sm:py-24 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
              Terms of Service
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
                <h2 className="text-2xl font-bold text-black mb-4">1. Agreement to Terms</h2>
                <p className="mb-6">
                  By accessing and using the EYII Africa website and services, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>

                <h2 className="text-2xl font-bold text-black mb-4 mt-8">2. Use License</h2>
                <p className="mb-6">
                  Permission is granted to temporarily download one copy of the materials (information or software) on EYII 
                  Africa's website for personal, non-commercial transitory viewing only. This is the grant of a license, not 
                  a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>

                <h2 className="text-2xl font-bold text-black mb-4 mt-8">3. Disclaimer</h2>
                <p className="mb-6">
                  The materials on EYII Africa's website are provided on an 'as is' basis. EYII Africa makes no warranties, 
                  expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, 
                  implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement 
                  of intellectual property or other violation of rights.
                </p>

                <h2 className="text-2xl font-bold text-black mb-4 mt-8">4. Limitations</h2>
                <p className="mb-6">
                  In no event shall EYII Africa or its suppliers be liable for any damages (including, without limitation, 
                  damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
                  to use the materials on EYII Africa's website, even if EYII Africa or an authorized representative has 
                  been notified orally or in writing of the possibility of such damage.
                </p>

                <h2 className="text-2xl font-bold text-black mb-4 mt-8">5. Accuracy of Materials</h2>
                <p className="mb-6">
                  The materials appearing on EYII Africa's website could include technical, typographical, or photographic errors. 
                  EYII Africa does not warrant that any of the materials on its website are accurate, complete, or current. 
                  EYII Africa may make changes to the materials contained on its website at any time without notice.
                </p>

                <h2 className="text-2xl font-bold text-black mb-4 mt-8">6. Links</h2>
                <p className="mb-6">
                  EYII Africa has not reviewed all of the sites linked to its website and is not responsible for the contents 
                  of any such linked site. The inclusion of any link does not imply endorsement by EYII Africa of the site. Use 
                  of any such linked website is at the user's own risk.
                </p>

                <h2 className="text-2xl font-bold text-black mb-4 mt-8">7. Modifications</h2>
                <p className="mb-6">
                  EYII Africa may revise these terms of service for its website at any time without notice. By using this website, 
                  you are agreeing to be bound by the then current version of these terms of service.
                </p>

                <h2 className="text-2xl font-bold text-black mb-4 mt-8">8. Governing Law</h2>
                <p className="mb-6">
                  These terms and conditions are governed by and construed in accordance with the laws of Nigeria, and you 
                  irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>

                <h2 className="text-2xl font-bold text-black mb-4 mt-8">9. User Responsibilities</h2>
                <p className="mb-4">As a user of our website and services, you agree to:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Not engage in unauthorized access or use of the website</li>
                  <li>Not violate any applicable laws or regulations</li>
                  <li>Not transmit malware or harmful code</li>
                  <li>Respect the intellectual property rights of others</li>
                </ul>

                <h2 className="text-2xl font-bold text-black mb-4 mt-8">10. Intellectual Property</h2>
                <p className="mb-6">
                  All content on the EYII Africa website, including text, graphics, logos, images, and software, is the property 
                  of EYII Africa or its content suppliers and is protected by international copyright laws. Unauthorized use is 
                  prohibited.
                </p>

                <h2 className="text-2xl font-bold text-black mb-4 mt-8">11. Limitation of Liability</h2>
                <p className="mb-6">
                  To the maximum extent permitted by law, EYII Africa shall not be liable for any indirect, incidental, special, 
                  consequential, or punitive damages resulting from your use or inability to use the website or services.
                </p>

                <h2 className="text-2xl font-bold text-black mb-4 mt-8">12. Termination</h2>
                <p className="mb-6">
                  EYII Africa reserves the right to terminate or suspend your access to the website and services, in whole or 
                  in part, for any reason without notice or liability if we believe you have violated these Terms of Service.
                </p>

                <h2 className="text-2xl font-bold text-black mb-4 mt-8">13. Contact Us</h2>
                <p className="mb-6">
                  If you have questions about these Terms of Service, please contact us at:
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
