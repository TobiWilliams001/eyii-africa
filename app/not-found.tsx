'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft } from 'lucide-react'
import { FadeInUp, FloatingElement } from '@/components/animations'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-soft-gradient" />
      <FloatingElement className="absolute top-20 right-20 w-72 h-72 bg-red-200/30 dark:bg-red-900/20 rounded-full blur-3xl" duration={10}>
        <div />
      </FloatingElement>
      <FloatingElement className="absolute bottom-20 left-20 w-96 h-96 bg-orange-200/20 dark:bg-orange-900/10 rounded-full blur-3xl" duration={12} delay={2}>
        <div />
      </FloatingElement>

      <div className="relative z-10 text-center px-4">
        <FadeInUp>
          <div className="text-9xl font-bold gradient-text mb-4">404</div>
        </FadeInUp>
        
        <FadeInUp delay={0.1}>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Page Not Found</h1>
        </FadeInUp>
        
        <FadeInUp delay={0.2}>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </FadeInUp>
        
        <FadeInUp delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg">
                  <Home className="mr-2 h-4 w-4" />
                  Go Home
                </Button>
              </motion.div>
            </Link>
            <Button variant="outline" onClick={() => window.history.back()} className="rounded-xl">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </FadeInUp>
      </div>
    </div>
  )
}