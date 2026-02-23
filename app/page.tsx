'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart, CheckCircle2, Calendar, Pill, FileText, Baby, Lightbulb, Lock, Shield, Menu, X } from 'lucide-react'
import { useState } from 'react'
import Image from "next/image";


export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/10">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-semibold text-primary">Matri</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="#features" className="text-sm text-foreground/70 hover:text-foreground transition">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm text-foreground/70 hover:text-foreground transition">
              How it Works
            </Link>
            <Link href="#privacy" className="text-sm text-foreground/70 hover:text-foreground transition">
              Privacy
            </Link>
            <Button variant="outline" size="sm" className="rounded-full">Sign In</Button>
            <Button size="sm" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started
            </Button>
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
              <Link href="#features" className="block text-sm text-foreground/70 hover:text-foreground">
                Features
              </Link>
              <Link href="#how-it-works" className="block text-sm text-foreground/70 hover:text-foreground">
                How it Works
              </Link>
              <Link href="#privacy" className="block text-sm text-foreground/70 hover:text-foreground">
                Privacy
              </Link>
              <Button variant="outline" size="sm" className="w-full rounded-full">Sign In</Button>
              <Button size="sm" className="w-full rounded-full bg-primary text-primary-foreground">Get Started</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
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
              From planning pregnancy to postpartum care, Matri is your trusted companion. Track your wellness, understand your health, and feel supported every step of the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'/%3E%3Cpath d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/%3E%3Cpath d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'/%3E%3Cpath d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'/%3E%3C/svg%3E" alt="Google" className="w-5 h-5 mr-2" />
                Continue with Google
              </Button>
              <Button variant="outline" size="lg" className="rounded-full">
                Learn more
              </Button>
            </div>
          </div>

          {/* Phone Mockup Placeholder */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-full max-w-sm aspect-square bg-gradient-to-br from-secondary to-accent/20 rounded-3xl shadow-2xl shadow-primary/10 flex items-center justify-center">
              <div className="relative w-full max-w-sm aspect-square rounded-3xl bg-gradient-to-br from-secondary to-accent/20 shadow-2xl shadow-primary/10 overflow-hidden">
                <Image
                  src="/mother-image.png"
                  alt="Mother and child"
                  fill
                  className="object-contain p-6 scale-180"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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

      {/* How It Works Section */}
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

      {/* Privacy Section */}
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

      {/* Final CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-light text-foreground leading-tight text-balance">
          Start your journey with Matri
        </h2>
        <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
          Join thousands of mothers who are taking control of their maternal health with confidence and care
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'/%3E%3Cpath d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/%3E%3Cpath d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'/%3E%3Cpath d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'/%3E%3C/svg%3E" alt="Google" className="w-5 h-5 mr-2" />
            Continue with Google
          </Button>
          <Button variant="outline" size="lg" className="rounded-full">
            Learn More
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-secondary/20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-lg font-semibold text-primary mb-4">Matri</div>
              <p className="text-sm text-foreground/60">Supporting maternal wellness with care and compassion</p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><Link href="#" className="hover:text-foreground transition">Features</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">Pricing</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><Link href="#" className="hover:text-foreground transition">About</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">Blog</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><Link href="#" className="hover:text-foreground transition">Privacy</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">Terms</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/50">
            <p>&copy; 2026 Matri. All rights reserved.</p>
            <p>Made with care for every mother.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

