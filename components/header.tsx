"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, X } from "lucide-react"

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPillarsOpen, setIsPillarsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    setIsPillarsOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  const pillars = [
    { name: 'Career Development', href: '/pillars/career' },
    { name: 'Entrepreneurship', href: '/pillars/entrepreneurship' },
    { name: 'Innovation', href: '/pillars/innovation' },
    { name: 'Leadership', href: '/pillars/leadership' },
  ]

  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs', hasDropdown: true },
    { name: 'Community', href: '/community' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 dark:bg-black/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative h-12 w-12 sm:h-14 sm:w-14"
            >
              <img 
                src="/eyii-logo.png" 
                alt="EYII Logo" 
                className="h-full w-full object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div 
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      className={`text-sm font-medium transition-all flex items-center gap-1 px-4 py-2 rounded-xl ${
                        pathname?.startsWith('/pillars')
                          ? 'text-red-600 bg-red-50 dark:bg-red-950/30'
                          : 'text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </motion.button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl overflow-hidden"
                        >
                          {pillars.map((pillar, idx) => (
                            <Link
                              key={pillar.href}
                              href={pillar.href}
                              className={`block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-950/30 hover:text-red-600 dark:hover:text-red-400 transition-colors ${
                                idx !== pillars.length - 1 ? 'border-b border-gray-100 dark:border-gray-800' : ''
                              }`}
                            >
                              {pillar.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }
              return (
                <Link key={item.name} href={item.href}>
                  <motion.span
                    whileHover={{ scale: 1.02 }}
                    className={`text-sm font-medium transition-all px-4 py-2 rounded-xl inline-block ${
                      pathname === item.href
                        ? 'text-red-600 bg-red-50 dark:bg-red-950/30'
                        : 'text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                    }`}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              )
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <Link href="/programs" className="hidden sm:block">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold px-6 py-2.5 shadow-lg shadow-red-500/20 hover:shadow-red-500/30 transition-all rounded-xl text-sm">
                  Join Waitlist
                </Button>
              </motion.div>
            </Link>
            
            <button
              className="lg:hidden text-gray-700 dark:text-gray-300 hover:text-red-600 transition-colors p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden"
            >
              <nav className="flex flex-col gap-1 py-4">
                {navigation.map((item) => {
                  if (item.hasDropdown) {
                    return (
                      <div key={item.name} className="flex flex-col">
                        <button
                          onClick={() => setIsPillarsOpen(!isPillarsOpen)}
                          className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-red-600 transition-colors py-3 px-4 flex items-center justify-between rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                          {item.name}
                          <ChevronDown className={`h-4 w-4 transition-transform ${isPillarsOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {isPillarsOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="flex flex-col gap-1 pl-4 ml-4 border-l-2 border-gray-200 dark:border-gray-700"
                            >
                              {pillars.map((pillar) => (
                                <Link
                                  key={pillar.href}
                                  href={pillar.href}
                                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-red-600 py-2 px-3 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {pillar.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  }
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-sm font-medium transition-colors py-3 px-4 rounded-xl ${
                        pathname === item.href
                          ? 'text-red-600 bg-red-50 dark:bg-red-950/30'
                          : 'text-gray-700 dark:text-gray-300 hover:text-red-600 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                })}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 px-4">
                  <Link href="/programs" className="block w-full" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold py-3 rounded-xl transition-all">
                      Join Waitlist
                    </Button>
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}