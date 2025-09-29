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
              <div className="text-red-600">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 10 C30 10, 15 25, 15 45 C15 65, 30 80, 50 80 C70 80, 85 65, 85 45 C85 25, 70 10, 50 10 Z M50 20 C65 20, 75 30, 75 45 C75 60, 65 70, 50 70 C35 70, 25 60, 25 45 C25 30, 35 20, 50 20 Z" />
                  <path d="M40 35 L45 40 L55 30 L60 35 L50 45 L40 35 Z" fill="white" />
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
