'use client'

import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart, Lock, Baby, Brain, Share2, ArrowRight, CheckCircle2, X, Mail } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function WaitlistPage() {
  const { user, logout, resendVerificationEmail } = useAuth()
  const router = useRouter()
  const [shareOpen, setShareOpen] = useState(false)
  const [verificationDismissed, setVerificationDismissed] = useState(false)
  const [resendLoading, setResendLoading] = useState(false)
  const [resendMessage, setResendMessage] = useState('')
  const [progressWidth, setProgressWidth] = useState(0)

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user, router])

  // Animate progress bar on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgressWidth(81)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const handleCopyLink = () => {
    const url = `${typeof window !== 'undefined' ? window.location.origin : ''}/signup`
    navigator.clipboard.writeText(url)
    alert('Referral link copied!')
  }

  const handleResendVerification = async () => {
    setResendLoading(true)
    setResendMessage('')
    try {
      await resendVerificationEmail()
      setResendMessage('Verification email sent! Check your inbox.')
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Failed to send verification email'
      setResendMessage(errorMsg)
    } finally {
      setResendLoading(false)
    }
  }

  if (!user) {
    return null
  }

  const isVerified = user.emailVerified

  const pillars = [
    {
      icon: Lock,
      title: 'Privacy-First Wellness Tracking',
      description: 'Your maternal health data is sacred. Matri uses end-to-end encryption and gives you complete control over your medical records. We never sell your data—only you decide what information is shared with healthcare providers.'
    },
    {
      icon: Baby,
      title: 'Stage-Based Support',
      description: 'Whether you\'re planning pregnancy, experiencing pregnancy changes, or navigating postpartum recovery, Matri adapts to your stage. Personalized insights, symptom tracking, and wellness tips evolve with your journey.'
    },
    {
      icon: Brain,
      title: 'Expert-Backed Insights',
      description: 'Every recommendation comes from maternal health specialists. Our curated content library features evidence-based articles, expert interviews, and wellness guidance to support your physical and emotional health.'
    }
  ]

  return (
    <>
      {/* Email Verification Banner */}
      {!isVerified && !verificationDismissed && (
        <div className="sticky top-0 z-50 bg-accent/10 border-b border-accent/30 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-accent flex-shrink-0" />
              <p className="text-sm text-foreground/80">
                Hi {user.displayName?.split(' ')[0] || 'there'}, please verify your email to get full access to Matri features.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                onClick={handleResendVerification}
                disabled={resendLoading}
                variant="outline"
                size="sm"
                className="rounded-full whitespace-nowrap text-xs md:text-sm"
              >
                {resendLoading ? 'Sending...' : 'Resend Link'}
              </Button>
              <button
                onClick={() => setVerificationDismissed(true)}
                className="text-foreground/50 hover:text-foreground transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          {resendMessage && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 text-xs text-foreground/70 text-center">
              {resendMessage}
            </div>
          )}
        </div>
      )}

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-semibold text-primary hover:opacity-80 transition">
            Matri
          </Link>
          <Button
            onClick={logout}
            variant="outline"
            size="sm"
            className="rounded-full"
          >
            Sign Out
          </Button>
        </div>
      </nav>

      <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/10">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center space-y-6 md:space-y-8">
            {/* Welcome Badge */}
            <div className="flex justify-center">
              <Badge className="rounded-full px-4 py-2 bg-primary/10 text-primary border-primary/20">
                You're on the Matri Waitlist
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-tight text-balance">
                You're on the list, {user.displayName?.split(' ')[0] || 'you'}!
              </h1>
              <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed text-balance">
                We're preparing something beautiful for you. As an early member, you'll be among the first to experience maternal wellness reimagined.
              </p>
            </div>

            {/* Progress Section */}
            <div className="bg-card rounded-3xl border border-border/50 p-8 md:p-12 space-y-6 mt-8 md:mt-12">
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-foreground/60">Launch Status</p>
                  <p className="text-lg md:text-xl font-semibold text-foreground">Preparing for Launch</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="w-full bg-secondary/30 rounded-full h-5 overflow-hidden relative">
                  <div
                    className={`h-full rounded-full transition-all duration-500 bg-primary relative ${progressWidth === 81 ? 'progress-shimmer' : ''}`}
                    style={{ width: `${progressWidth}%` }}
                  >
                    {/* Visible shimmer overlay */}
                    {progressWidth === 81 && (
                      <div
                        className="absolute top-0 bottom-0 w-1/2 progress-shimmer-overlay"
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)',
                          left: '-100%'
                        }}
                      ></div>
                    )}
                  </div>
                </div>
                <p className="text-sm text-foreground/60 text-center">81% complete • Check back soon for updates</p>
              </div>

              {/* Email Notification */}
              <p className="text-center text-foreground/70">
                We'll send you an exclusive early-access invite at <span className="font-semibold text-primary">{user.email}</span>
              </p>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-light text-foreground">What's Coming</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Matri is designed with maternal wellness at its core. Here's what you can expect:
              </p>
            </div>

            {/* Pillars Grid */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon
                return (
                  <Card key={idx} className="border border-border/50 bg-card rounded-3xl overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-shadow duration-300">
                    <CardHeader className="space-y-4 pb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground text-left">
                        {pillar.title}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                        {pillar.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>


        {/* Visual Placeholder Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Wellness Visuals with overflow for floating arrows */}
            <div className="space-y-6 relative">
              <div className="overflow-visible">
                <div
                  className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl aspect-square flex items-center justify-center border border-primary/20 relative"
                  style={{
                    overflow: 'visible',
                    paddingLeft: '40px',
                    paddingTop: '40px'
                  }}
                >
                  <div
                    className="w-full aspect-square">
                    <Image src="/mother-wellness.png" alt="Mother and child" fill className="object-contain p-8 scale-150 -translate-x-[12%] -translate-y-[5%]"
                      priority />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Copy */}
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="w-fit rounded-full px-4 py-2 bg-accent/10 text-accent border-accent/20">
                  Maternal Health Reimagined
                </Badge>
                <h3 className="text-4xl font-light text-foreground leading-tight">
                  Designed for every stage of motherhood
                </h3>
              </div>

              <p className="text-lg text-foreground/70 leading-relaxed">
                From preconception planning through postpartum recovery, Matri grows with you. Our intelligent system learns your needs and delivers insights exactly when you need them most.
              </p>

              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80">Real-time health tracking tailored to your journey</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80">Secure integration with healthcare providers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80">Community support from maternal health experts</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Share & CTA Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Card className="bg-card rounded-3xl border border-border/50 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <h3 className="text-3xl md:text-4xl font-light text-foreground">
                    Share Matri with someone you care about
                  </h3>
                  <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                    Help more mothers feel supported. Share your referral link and both of you'll get priority access when we launch.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button
                    onClick={handleCopyLink}
                    size="lg"
                    className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 flex items-center gap-2"
                  >
                    <Share2 className="w-5 h-5" />
                    Copy Referral Link
                  </Button>
                  <Link href="/">
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-full w-full sm:w-auto"
                    >
                      Back to Home
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer Message */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
          <div className="space-y-4">
            <p className="text-lg text-foreground/70">
              ✨ Thank you for joining us on this journey
            </p>
            <p className="text-sm text-foreground/50">
              Check back soon for launch updates. In the meantime, explore what's coming on our <Link href="/" className="text-primary hover:underline">homepage</Link>.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
