// app/contact/page.tsx
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, MessageSquare, Send, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({ email: "", message: "" })
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log("Contact form submitted:", formData)
    setIsSuccess(true)
    setIsLoading(false)
  }

  const InputField = ({ icon: Icon, label, value, onChange, disabled }: {
    icon: any
    label: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    disabled?: boolean
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground/50 group-focus-within:text-primary transition-colors" />
      {label === "Message" ? (
        <textarea
          rows={5}
          placeholder="Tell us about your inquiry..."
          value={value}
          onChange={onChange}
          disabled={disabled}
          className="w-full h-32 pt-3 pb-6 pl-12 pr-4 bg-white/20 backdrop-blur-xl border border-white/20 hover:border-white/30 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 rounded-2xl text-foreground placeholder-foreground/50 transition-all duration-300 resize-none focus:outline-none focus:backdrop-blur-2xl shadow-[0_8px_32px_rgba(31,38,135,0.15)] hover:shadow-[0_12px_40px_rgba(31,38,135,0.2)]"
        />
      ) : (
        <input
          type="email"
          placeholder="your.email@example.com"
          value={value}
          onChange={onChange}
          disabled={disabled}
          className="w-full h-14 pl-12 pr-4 bg-white/20 backdrop-blur-xl border border-white/20 hover:border-white/30 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 rounded-2xl text-foreground placeholder-foreground/50 transition-all duration-300 focus:outline-none focus:backdrop-blur-2xl shadow-[0_8px_32px_rgba(31,38,135,0.15)] hover:shadow-[0_12px_40px_rgba(31,38,135,0.2)]"
          required
        />
      )}
    </motion.div>
  )

  return (
    <main className="min-h-screen flex items-center justify-center p-4 md:p-8 lg:p-12 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.2),transparent_50%)]" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10"
      >
        {/* Left Text Block */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl shadow-2xl">
            <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg" />
            <h1 className="text-2xl font-light tracking-tight text-foreground">
              Get in Touch
            </h1>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-light bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
              Early Access & Partnerships
            </h2>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-md">
              For waitlist inquiries, partnership proposals, or support questions. 
              We'll respond within 24 hours.
            </p>
          </div>
          
          <div className="pt-4">
            <Link
              href="/waitlist"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-xl hover:bg-white/30 border border-white/30 hover:border-white/40 rounded-2xl text-foreground hover:text-primary font-medium shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              Join Waitlist
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Right Form Container */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-md mx-auto"
        >
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit}
                className="bg-white/20 backdrop-blur-2xl border border-white/30 shadow-2xl rounded-3xl p-8 space-y-6 hover:shadow-3xl hover:shadow-primary/20 transition-all duration-500"
              >
                <div className="space-y-1">
                  <h3 className="text-2xl font-light text-foreground">Send us a message</h3>
                  <p className="text-sm text-foreground/60">We'll get back to you soon</p>
                </div>

                <InputField
                  icon={Mail}
                  label="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={isLoading}
                />

                <InputField
                  icon={MessageSquare}
                  label="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  disabled={isLoading}
                />

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group w-full h-14 flex items-center justify-center gap-3 bg-gradient-to-r from-primary via-primary/90 to-secondary rounded-2xl text-primary-foreground font-medium shadow-xl hover:shadow-2xl hover:shadow-primary/30 focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  )}
                  {isLoading ? "Sending..." : "Send Message"}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95, rotateX: -10 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                className="bg-white/30 backdrop-blur-2xl border border-white/40 shadow-2xl rounded-3xl p-12 text-center space-y-6 flex flex-col items-center justify-center h-[380px]"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                  className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-2xl"
                >
                  <Send className="h-10 w-10 text-white shadow-lg" />
                </motion.div>
                <div className="space-y-3">
                  <h3 className="text-3xl font-light text-foreground">Message Sent!</h3>
                  <p className="text-lg text-foreground/70">
                    Thanks for reaching out. We'll respond within 24 hours.
                  </p>
                </div>
                <motion.button
                  onClick={() => {
                    setIsSuccess(false)
                    setFormData({ email: "", message: "" })
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white/50 backdrop-blur-xl hover:bg-white/70 border border-white/40 hover:border-white/60 rounded-2xl text-foreground font-medium shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Send Another
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </main>
  )
}
