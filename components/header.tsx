"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPillarsOpen, setIsPillarsOpen] = useState(false)

  const pillars = [
    { name: 'Career Development', href: '/pillars/career' },
    { name: 'Entrepreneurship', href: '/pillars/entrepreneurship' },
    { name: 'Innovation', href: '/pillars/innovation' },
    { name: 'Leadership', href: '/pillars/leadership' },
  ]

  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Community', href: '/community' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/98 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="relative h-12 w-12 sm:h-14 sm:w-14">
                <img 
                  src="/eyii-logo.png" 
                  alt="EYII Logo" 
                  className="h-full w-full object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) => {
              if (item.name === 'Programs') {
                return (
                  <div key="pillars" className="relative group">
                    <button className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-50">
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                      {pillars.map((pillar, idx) => (
                        <Link
                          key={pillar.href}
                          href={pillar.href}
                          className={`block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors ${
                            idx !== pillars.length - 1
                              ? 'border-b border-gray-100'
                              : ''
                          }`}
                        >
                          {pillar.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              }
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors px-3 py-2 rounded-lg ${
                    pathname === item.href
                      ? 'text-red-600 bg-red-50'
                      : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link href="/programs" className="hidden sm:block">
              <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-6 py-2 shadow-md transition-all hover:shadow-lg rounded-lg text-sm">
                Join Waitlist
              </Button>
            </Link>
            <button
              className="md:hidden text-gray-700 hover:text-red-600 transition-colors p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 6h16M4 12h16m-7 6h7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white py-4">
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => {
                if (item.name === 'Programs') {
                  return (
                    <div key="pillars-mobile" className="flex flex-col">
                      <button
                        onClick={() => setIsPillarsOpen(!isPillarsOpen)}
                        className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors py-2 px-3 flex items-center justify-between rounded-lg hover:bg-gray-50"
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            isPillarsOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isPillarsOpen && (
                        <div className="flex flex-col gap-1 pl-4 pt-2 border-l-2 border-gray-200">
                          {pillars.map((pillar) => (
                            <Link
                              key={pillar.href}
                              href={pillar.href}
                              className="text-sm text-gray-600 hover:text-red-600 py-2 px-2 rounded-lg hover:bg-red-50 transition-colors"
                              onClick={() => {
                                setIsMenuOpen(false)
                                setIsPillarsOpen(false)
                              }}
                            >
                              {pillar.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                }
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-medium transition-colors py-2 px-3 rounded-lg ${
                      pathname === item.href
                        ? 'text-red-600 bg-red-50'
                        : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link href="/programs" className="block w-full">
                  <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-2 rounded-lg transition-all text-sm">
                    Join Waitlist
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}