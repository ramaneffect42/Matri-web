'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart, CheckCircle2, Calendar, Pill, FileText, Baby, Lightbulb, Lock, Shield, Menu, X, LogOut } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useAuth } from '@/lib/auth-context'
import { useRouter } from 'next/navigation'
import Image from "next/image";
import { GoogleAuthButton } from '@/components/auth/google-auth-button'
import { GoogleOneTap } from '@/components/auth/google-one-tap'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { user, loading, logout } = useAuth()
  const router = useRouter()

  // Redirect authenticated users to waitlist
  useEffect(() => {
    if (user && !loading) {
      router.push('/waitlist')
    }
  }, [user, loading, router])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/10">
      {/* Google One Tap - shows only to unauthenticated users */}
      {!user && <GoogleOneTap />}
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-semibold text-primary">Matrilux</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {!user && (
              <>
                <Link href="#features" className="text-sm text-foreground/70 hover:text-foreground transition">
                  Features
                </Link>
                <Link href="#how-it-works" className="text-sm text-foreground/70 hover:text-foreground transition">
                  How it Works
                </Link>
                <Link href="#privacy" className="text-sm text-foreground/70 hover:text-foreground transition">
                  Privacy
                </Link>
              </>
            )}
            {user ? (
              <div className="flex items-center gap-4">
                <div className="text-sm text-foreground">Welcome, {user.displayName || user.email}!</div>
                <Button 
                  onClick={logout}
                  variant="outline" 
                  size="sm" 
                  className="rounded-full flex items-center gap-2"
                >
                  <LogOut size={16} />
                  Sign Out
                </Button>
              </div>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="outline" size="sm" className="rounded-full">Sign In</Button>
                </Link>
                <Link href="/signup">
                  <Button size="sm" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-4 py-4 space-y-3">
              {!user && (
                <>
                  <Link href="#features" className="block text-sm text-foreground/70 hover:text-foreground">
                    Features
                  </Link>
                  <Link href="#how-it-works" className="block text-sm text-foreground/70 hover:text-foreground">
                    How it Works
                  </Link>
                  <Link href="#privacy" className="block text-sm text-foreground/70 hover:text-foreground">
                    Privacy
                  </Link>
                </>
              )}
              {user ? (
                <div className="space-y-3">
                  <div className="text-sm text-foreground px-4 py-2">Welcome, {user.displayName || user.email}!</div>
                  <Button 
                    onClick={logout}
                    variant="outline" 
                    size="sm" 
                    className="w-full rounded-full flex items-center gap-2"
                  >
                    <LogOut size={16} />
                    Sign Out
                  </Button>
                </div>
              ) : (
                <>
                  <Link href="/login" className="w-full">
                    <Button variant="outline" size="sm" className="w-full rounded-full">Sign In</Button>
                  </Link>
                  <Link href="/signup" className="w-full">
                    <Button size="sm" className="w-full rounded-full bg-primary text-primary-foreground">Get Started</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        {user ? (
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-light text-foreground leading-tight text-balance">
                Welcome back, {user.displayName || user.email}!
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto">
                You're logged in and ready to continue your maternal wellness journey. Access your personalized dashboard and health tracking tools.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
                Go to Dashboard
              </Button>
              <Button variant="outline" size="lg" className="rounded-full">
                View Your Data
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="w-fit rounded-full text-accent border-accent/30">
                  Supporting maternal wellness
                </Badge>
                <h1 className="text-5xl md:text-6xl font-light text-foreground leading-tight text-balance">
                  Supporting you through every stage of motherhood
                </h1>
              </div>
              
              <p className="text-lg text-foreground/70 leading-relaxed max-w-xl text-balance">
                From planning pregnancy to postpartum care, Matrilux is your trusted companion. Track your wellness, understand your health, and feel supported every step of the way.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <GoogleAuthButton 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
                  onSuccess={() => router.push('/waitlist')}
                  onError={(error) => console.error('[v0] Auth error:', error.message)}
                />
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full"
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn more
                </Button>
              </div>
            </div>

            {/* Phone Mockup Placeholder */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-full max-w-sm">
                <div
                  className="relative w-full max-w-sm aspect-square rounded-3xl bg-gradient-to-br from-secondary to-accent/20 shadow-2xl shadow-primary/10">
                  <Image src="/mother-wellness.png" alt="Mother and child" fill className="object-contain p-8 scale-150 -translate-x-[12%] -translate-y-[5%]"
                    priority />
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Features Section */}
      {!user && (
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light text-foreground">
            Everything you need to thrive
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Comprehensive tools designed with care for every aspect of your journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Calendar, title: 'Pregnancy Timeline', description: 'Track milestones and important dates with gentle reminders' },
            { icon: Heart, title: 'Health Tracking', description: 'Monitor your wellness with compassionate insights' },
            { icon: Pill, title: 'Medications & Supplements', description: 'Keep track of what you\'re taking safely' },
            { icon: FileText, title: 'Appointments & Records', description: 'Organize your medical information in one place' },
            { icon: Baby, title: 'Baby & Postpartum Care', description: 'Support for you and your little one after birth' },
            { icon: Lightbulb, title: 'Insights & Guidance', description: 'Evidence-based information at every stage' },
          ].map((feature, i) => (
            <Card key={i} className="border border-border/50 bg-card hover:bg-card/90 transition rounded-2xl shadow-sm hover:shadow-lg hover:shadow-primary/5">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/60">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      )}

      {/* How It Works Section */}
      {!user && (
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-secondary/30 via-transparent to-accent/10 rounded-3xl my-20">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light text-foreground">
            Three simple steps to get started
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Your journey to maternal wellness begins here
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: '01', title: 'Track', description: 'Log your health data, appointments, and wellness activities in one calm space' },
            { step: '02', title: 'Understand', description: 'Gain insights into your health patterns with supportive, evidence-based guidance' },
            { step: '03', title: 'Feel Supported', description: 'Access resources, community, and expert information whenever you need it' },
          ].map((item, i) => (
            <div key={i} className="space-y-4">
              <div className="text-5xl font-light text-primary/40">{item.step}</div>
              <h3 className="text-2xl font-light text-foreground">{item.title}</h3>
              <p className="text-foreground/60 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      )}

      {/* Privacy Section */}
      {!user && (
      <section id="privacy" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-light text-foreground">
              Privacy-first by design
            </h2>
            
            <div className="space-y-6">
              {[
                { icon: Lock, title: 'Your Data, Your Control', description: 'You own your data. We never sell or share it without your explicit consent.' },
                { icon: Shield, title: 'Secure & Encrypted', description: 'Industry-leading encryption protects your sensitive health information.' },
                { icon: CheckCircle2, title: 'Transparent Privacy', description: 'Clear, straightforward policies you can understand and trust.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-foreground/60">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="w-full max-w-sm aspect-square bg-gradient-to-br from-accent/20 to-secondary rounded-3xl shadow-xl shadow-primary/5 flex items-center justify-center">
              <div className="text-center text-foreground/30">
                <Shield className="w-20 h-20 mx-auto opacity-40" />
                <p className="text-sm mt-4">Your privacy matters</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Final CTA Section */}
      {!user && (
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-light text-foreground leading-tight text-balance">
          Start your journey with Matrilux
        </h2>
        <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
          Join us to take control of your maternal health with confidence and care
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <GoogleAuthButton 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
          />
          <Button variant="outline" size="lg" className="rounded-full">
            Learn More
          </Button>
        </div>
      </section>
      )}


      {/* Footer */}
      {!user && (
      <footer className="border-t border-border/50 bg-secondary/20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-lg font-semibold text-primary mb-4">Matrilux</div>
              <p className="text-sm text-foreground/60">Supporting maternal wellness with care and compassion</p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
              <li><Link href="#" className="hover:text-foreground transition">Features</Link></li>
              <li><Link href="#" className="hover:text-foreground transition">Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><Link href="#" className="hover:text-foreground transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><Link href="/privacy-policy" className="hover:text-foreground transition">Privacy</Link></li>
                <li><Link href="/terms-and-conditions" className="hover:text-foreground transition">Terms</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/50">
            <p>&copy; 2026 Matrilux. All rights reserved.</p>
            <p>Made with care for every mother.</p>
          </div>
        </div>
      </footer>
      )}
    </div>
  )
  }
