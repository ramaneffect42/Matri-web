'use client'

import Link from 'next/link'
import { HeartPulse } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-secondary/20 border-t border-border/50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12 text-center">
          <div className="flex flex-col items-center">
            <Link href="/" className="text-2xl font-semibold text-primary mb-4 block">MatriLux</Link>
            <p className="text-foreground/60 leading-relaxed max-w-xs mx-auto text-center">
              Bridging the gap in maternal healthcare with intelligent tracking and compassionate support.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-foreground/60">
             <li><Link href="/about-us" className="hover:text-primary transition-colors">About Us</Link></li>
             <li><Link href="#" className="hover:text-primary transition-colors">Medical Board</Link></li>
             <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/legal-compliance" className="hover:text-primary transition-colors">Legal Compliance</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col justify-center items-center text-center gap-2">
          <div className="flex items-center gap-2 text-primary/60">
            <HeartPulse className="w-4 h-4" />
          </div>
          <p className="text-xs text-foreground/50 max-w-2xl mx-auto">
            © {new Date().getFullYear()} MatriLux. All rights reserved. Not intended to replace professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  )
}