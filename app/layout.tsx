import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "EYII - Empowering Young African Innovators & Leaders",
  description:
    "Access world-class programs in Career Development, Entrepreneurship, Innovation, and Leadership. Join 1,200+ African students building their futures across Nigeria, Ghana, Kenya, and South Africa.",
  keywords:
    "African youth, career development, entrepreneurship, innovation, leadership, internships, scholarships, African students",
  authors: [{ name: "EYII" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eyii.africa",
    siteName: "EYII",
    title: "EYII - Empowering Young African Innovators & Leaders",
    description:
      "Access world-class programs in Career Development, Entrepreneurship, Innovation, and Leadership.",
  },
  robots: "index, follow",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  )
}
