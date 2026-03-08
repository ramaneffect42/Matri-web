'use client'

import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart, Lock, Baby, Brain, Share2, ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function WaitlistPage() {
  const { user, logout } = useAuth()
  const router = useRouter()
  const [shareOpen, setShareOpen] = useState(false)

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user, router])

  const handleCopyLink = () => {
    const url = `${typeof window !== 'undefined' ? window.location.origin : ''}/signup`
    navigator.clipboard.writeText(url)
    alert('Referral link copied!')
  }

  if (!user) {
    return null
  }

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
                <div className="w-full bg-secondary/30 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-accent h-full rounded-full" style={{ width: '75%' }}></div>
                </div>
                <p className="text-sm text-foreground/60 text-center">75% complete • Check back soon for updates</p>
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
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Wellness Visuals */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl aspect-square flex items-center justify-center border border-primary/20">
                <div className="text-center space-y-4">
                  <Heart className="w-24 h-24 text-primary/40 mx-auto" />
                  <p className="text-foreground/40 font-medium">Wellness Imagery</p>
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
