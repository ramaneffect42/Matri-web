"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, MessageSquare, Send, ArrowLeft, HeartPulse, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DashboardNav } from "@/components/dashboard-nav"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API Delay
    setTimeout(() => {
      setLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/15 flex flex-col">
      <DashboardNav />

      <main className="flex-1 flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
        {/* Animated Background Blobs for "Liquid" feel */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-700" />

        <div className="max-w-5xl w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left Side: Context Text */}
          <div className="text-center lg:text-left space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
            >
              <HeartPulse className="w-4 h-4" />
              <span>We're here for you</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-foreground leading-tight"
            >
              Let’s talk about your <span className="text-primary italic">journey.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-foreground/60 max-w-md mx-auto lg:mx-0 leading-relaxed"
            >
              Whether you're an early adopter with feedback, a medical professional looking to partner, or a mother needing support—our ears are open.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </Link>
            </motion.div>
          </div>

          {/* Right Side: The Glass Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/5 blur-2xl rounded-[3rem] -z-10" />
            
            <div className="bg-background/40 backdrop-blur-xl border border-white/20 dark:border-primary/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-primary/5">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <label className="text-sm font-medium ml-1 text-foreground/70">Email Address</label>
                      <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30 group-focus-within:text-primary transition-colors" />
                        <input 
                          required
                          type="email" 
                          placeholder="name@example.com"
                          className="w-full h-14 pl-12 pr-4 rounded-2xl border border-border/50 bg-background/50 focus:bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium ml-1 text-foreground/70">Your Message</label>
                      <div className="relative group">
                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-foreground/30 group-focus-within:text-primary transition-colors" />
                        <textarea 
                          required
                          placeholder="How can we help you?"
                          rows={4}
                          className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border/50 bg-background/50 focus:bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all resize-none"
                        />
                      </div>
                    </div>

                    <Button 
                      disabled={loading}
                      type="submit" 
                      className="w-full h-14 rounded-2xl bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 text-lg font-medium transition-all active:scale-[0.98]"
                    >
                      {loading ? "Sending..." : (
                        <span className="flex items-center gap-2">
                          Send Message <Send className="w-5 h-5" />
                        </span>
                      )}
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center text-center space-y-4"
                  >
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                      <CheckCircle2 className="w-10 h-10 text-primary" />
                    </div>
                    <h2 className="text-2xl font-serif text-foreground">Message Received!</h2>
                    <p className="text-foreground/60 max-w-[280px]">
                      Thank you for reaching out. A member of the MatriLux team will be in touch shortly.
                    </p>
                    <Button 
                      variant="ghost" 
                      onClick={() => setIsSubmitted(false)}
                      className="text-primary hover:bg-primary/5 mt-4"
                    >
                      Send another message
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}