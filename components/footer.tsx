import Link from "next/link"
import { Twitter, Linkedin, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-start">
          <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12">
                <svg viewBox="0 0 100 140" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M50 10 C55 10 60 12 63 15 L70 20 C75 25 78 30 80 35 L82 45 C83 50 83 55 82 60 L80 70 C78 80 75 90 70 98 L65 105 C60 112 55 118 50 122 L45 125 C40 128 35 130 30 130 L25 128 C20 125 15 120 12 115 L8 105 C5 95 3 85 3 75 L3 65 C3 55 5 45 8 38 L12 28 C15 20 20 15 25 12 L35 8 C40 8 45 9 50 10 Z"
                    fill="#DC2626"
                    stroke="#7F1D1D"
                    strokeWidth="1"
                  />
                  <path
                    d="M30 25 L70 25 M30 35 L70 35 M30 45 L70 45 M30 55 L70 55 M30 65 L70 65 M30 75 L70 75 M30 85 L70 85 M30 95 L70 95"
                    stroke="#450A0A"
                    strokeWidth="2"
                    opacity="0.6"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xl font-bold text-white">Emerge Youth</p>
                <p className="text-sm text-gray-400">Innovation Initiative</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">Empowering African Youth Through Innovation</p>
            <p className="text-sm text-gray-500">© 2025 Emerge Youth. All rights reserved.</p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 sm:justify-start">
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
