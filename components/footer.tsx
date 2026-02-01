"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Twitter, Linkedin, Instagram, Youtube, Mail, MapPin, ArrowUpRight } from "lucide-react"
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/animations"

const footerLinks = {
  programs: [
    { label: 'Career Development', href: '/pillars/career' },
    { label: 'Entrepreneurship', href: '/pillars/entrepreneurship' },
    { label: 'Innovation', href: '/pillars/innovation' },
    { label: 'Leadership', href: '/pillars/leadership' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Community', href: '/community' },
    { label: 'Resources', href: '/resources' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/Eyii_africa', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/eyii-africa', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/Eyii_africa', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com/@Eyii_africa', label: 'YouTube' },
]

export function Footer() {
  return (
    <footer className="bg-gray-950 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-subtle-pattern opacity-5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16 lg:py-20">
          <StaggerContainer staggerDelay={0.1} className="grid gap-12 lg:grid-cols-5">
            {/* Brand Column */}
            <StaggerItem className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative h-14 w-14"
                >
                  <img 
                    src="/eyii-logo.png" 
                    alt="EYII Logo" 
                    className="h-full w-full object-contain"
                  />
                </motion.div>
              </Link>
              
              <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
                Building Africa's largest youth empowerment ecosystem. Structured pathways in career development, entrepreneurship, innovation, and leadership.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-5 w-5 text-red-500" />
                  <span>hello@eyii.africa</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="h-5 w-5 text-red-500" />
                  <span>Lagos, Nigeria</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="h-10 w-10 rounded-xl bg-white/5 hover:bg-red-600 flex items-center justify-center transition-colors duration-300 border border-white/10 hover:border-red-500"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </StaggerItem>

            {/* Programs */}
            <StaggerItem>
              <h4 className="font-semibold text-lg mb-6 text-white">Programs</h4>
              <ul className="space-y-3">
                {footerLinks.programs.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-red-400 transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </StaggerItem>

            {/* Company */}
            <StaggerItem>
              <h4 className="font-semibold text-lg mb-6 text-white">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-red-400 transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </StaggerItem>

            {/* Newsletter */}
            <StaggerItem>
              <h4 className="font-semibold text-lg mb-6 text-white">Stay Updated</h4>
              <p className="text-gray-400 text-sm mb-4">Get the latest updates on programs and opportunities.</p>
              <form className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="px-4 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold hover:from-red-700 hover:to-red-600 transition-all"
                >
                  Subscribe
                </motion.button>
              </form>
            </StaggerItem>
          </StaggerContainer>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} EYII Africa. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            {footerLinks.legal.map((link) => (
              <Link 
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}