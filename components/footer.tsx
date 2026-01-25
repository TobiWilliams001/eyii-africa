import Link from "next/link"
import { Twitter, Linkedin, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-start">
          <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-16 w-16">
                <img 
                  src="/eyii-logo.png" 
                  alt="EYII Logo" 
                  className="h-full w-full object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-gray-400">Building the largest youth empowerment ecosystem in Africa</p>
            <p className="text-sm text-gray-500">© 2025 EYII. All rights reserved.</p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-400 sm:grid-cols-4 sm:justify-start">
              <Link href="/about" className="hover:text-red-500 transition-colors">
                About
              </Link>
              <Link href="/programs" className="hover:text-red-500 transition-colors">
                Programs
              </Link>
              <Link href="/community" className="hover:text-red-500 transition-colors">
                Community
              </Link>
              <Link href="/resources" className="hover:text-red-500 transition-colors">
                Resources
              </Link>
              <Link href="/contact" className="hover:text-red-500 transition-colors">
                Contact
              </Link>
              <Link href="/privacy" className="hover:text-red-500 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-red-500 transition-colors">
                Terms
              </Link>
            </div>

            <div className="flex items-center justify-center gap-4 sm:justify-start">
              <a
                href="https://twitter.com/Eyii_africa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/eyii-africa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/Eyii_africa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/@Eyii_africa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}