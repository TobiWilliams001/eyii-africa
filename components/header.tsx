"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Community", href: "/community" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/50 bg-white/80 backdrop-blur-sm px-4 py-3 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10">
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
                <h2 className="text-xl font-bold text-black">Emerge Youth</h2>
                <p className="text-xs text-gray-600">Innovation Initiative</p>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href ? "text-red-600" : "text-gray-600 hover:text-red-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button className="bg-red-600 hover:bg-red-700 text-white font-bold transition-transform hover:scale-105">
              Donate
            </Button>
            <Button
              variant="outline"
              className="hidden sm:flex border-red-600/20 bg-red-600/10 text-red-600 font-bold hover:bg-red-600/20 transition-transform hover:scale-105"
            >
              Join Us
            </Button>
            <button className="md:hidden text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === item.href ? "text-red-600" : "text-gray-600 hover:text-red-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
