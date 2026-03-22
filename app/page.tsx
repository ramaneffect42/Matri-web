"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Activity,
  Baby,
  CalendarDays,
  Stethoscope,
  FileText,
  Apple,
  Brain,
  Leaf,
  Sparkles,
  ArrowRight,
  ArrowDown,
  HeartPulse,
  Mail,
  Users,
  MapPin,
  Languages,
  WifiOff
} from "lucide-react"
import { DashboardNav } from "@/components/dashboard-nav"
import { DeviceCarousel } from "@/components/device-carousel"

// FeatureGrid Component - Mobile Marquee & Desktop Honeycomb
function FeatureGrid() {
  const [flippedId, setFlippedId] = useState<string | null>(null)

  const features = [
    { icon: Baby, title: "Weekly tracking", backHighlight: "Fetal Growth", backDesc: "Track size & sensory milestones" },
    { icon: Activity, title: "Health monitoring", backHighlight: "Vitals Sync", backDesc: "Real-time alerts for blood pressure" },
    { icon: CalendarDays, title: "Appt reminders", backHighlight: "Auto-Sync", backDesc: "Integrates with OBGYN calendars" },
    { icon: Stethoscope, title: "Symptom Tracker", backHighlight: "AI Analysis", backDesc: "Early flagging of complications" },
    { icon: FileText, title: "Test Results", backHighlight: "Lab Vault", backDesc: "Encrypted, instant PDF storage" },
    { icon: Apple, title: "Nutrition planning", backHighlight: "Trimester Diets", backDesc: "Iron & Folate rich meal plans" },
    { icon: Brain, title: "Mental health", backHighlight: "Mood Logs", backDesc: "Therapist-vetted daily check-ins" },
    { icon: Leaf, title: "Home Therapy", backHighlight: "Natural Relief", backDesc: "Remedies for nausea & cramps" },
    { icon: Sparkles, title: "Fertility tracking", backHighlight: "BBT Graphs", backDesc: "Ovulation prediction algorithms" },
    { icon: HeartPulse, title: "24/7 expert", backHighlight: "Telehealth", backDesc: "Direct chat with maternal nurses" },
    { icon: Users, title: "Community", backHighlight: "Peer Groups", backDesc: "Connect with mothers due the same month" },
    { icon: MapPin, title: "Nearby Doctors", backHighlight: "Smart Map", backDesc: "Filter by specialty & insurance" },
    { icon: Languages, title: "Multi-lingual", backHighlight: "12+ Dialects", backDesc: "Native language voice support" },
    { icon: WifiOff, title: "Offline access", backHighlight: "Local Save", backDesc: "Logs work without internet" },
  ]

  const handleFlip = (id: string) => {
    setFlippedId(flippedId === id ? null : id)
  }

  const renderCard = (feature: typeof features[0], uniqueId: string) => {
    const Icon = feature.icon
    const isFlipped = flippedId === uniqueId

    return (
      <div
        key={uniqueId}
        className="relative shrink-0 h-20 w-28 sm:h-24 sm:w-32 lg:h-24 lg:w-20 xl:h-28 xl:w-24 cursor-pointer"
        style={{ perspective: '1000px' }}
        onClick={() => handleFlip(uniqueId)}
        onMouseLeave={() => setFlippedId(null)}
      >
        <div
          className="absolute h-full w-full transition-transform duration-500"
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
          }}
        >
          <div
            className="absolute inset-0 flex flex-col items-center justify-center space-y-1.5 rounded-2xl border border-border/50 bg-card/80 p-1.5 shadow-sm transition-colors hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-1"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <Icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-5 lg:w-5 xl:h-6 xl:w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
            <p className="text-center text-[9px] sm:text-[10px] xl:text-[11px] font-medium leading-tight text-foreground/90 px-0.5">
              {feature.title}
            </p>
          </div>

          <div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 p-2 text-center shadow-inner"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <p className="text-[9px] xl:text-[11px] font-bold text-primary mb-0.5">{feature.backHighlight}</p>
            <p className="text-[8px] sm:text-[9px] xl:text-[10px] font-medium leading-tight text-foreground/80">
              {feature.backDesc}
            </p>
          </div>
        </div>
      </div>
    )
  }

  const row1 = features.slice(0, 5)
  const row2 = features.slice(5, 9)
  const row3 = features.slice(9, 14)

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-fast { animation: scroll 20s linear infinite; }
        .animate-scroll-medium { animation: scroll 25s linear infinite; }
        .animate-scroll-slow { animation: scroll 30s linear infinite; }
        .pause-on-hover:hover, .pause-on-hover:active { animation-play-state: paused; }
        .fade-edges {
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
      `}} />

      <div className="flex flex-col items-start gap-3 w-screen max-w-[100vw] relative left-1/2 -translate-x-1/2 lg:hidden overflow-hidden fade-edges py-4">
        <div className="flex flex-nowrap items-start w-max gap-3 pr-3 animate-scroll-medium pause-on-hover">
          {[...row1, ...row1].map((feature, i) => renderCard(feature, `mob-r1-${i}`))}
        </div>
        <div className="flex flex-nowrap items-start w-max gap-3 pr-3 animate-scroll-fast pause-on-hover pl-8">
          {[...row2, ...row2, ...row2].map((feature, i) => renderCard(feature, `mob-r2-${i}`))}
        </div>
        <div className="flex flex-nowrap items-start w-max gap-3 pr-3 animate-scroll-slow pause-on-hover">
          {[...row3, ...row3].map((feature, i) => renderCard(feature, `mob-r3-${i}`))}
        </div>
      </div>

      <div className="hidden lg:flex flex-col items-start justify-center gap-2 xl:gap-3 w-full max-w-[600px]">
        <div className="flex flex-wrap justify-start gap-2 xl:gap-3 w-full">
          {row1.map((feature, i) => renderCard(feature, `desk-r1-${i}`))}
        </div>
        <div className="flex flex-wrap justify-start gap-2 xl:gap-3 w-full lg:ml-[44px] xl:ml-[54px]">
          {row2.map((feature, i) => renderCard(feature, `desk-r2-${i}`))}
        </div>
        <div className="flex flex-wrap justify-start gap-2 xl:gap-3 w-full">
          {row3.map((feature, i) => renderCard(feature, `desk-r3-${i}`))}
        </div>
      </div>
    </>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/15 flex flex-col">
      <DashboardNav />

      <main className="flex-1 overflow-x-hidden">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pt-12 md:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 lg:items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-balance max-w-2xl mx-auto lg:mx-0">
                Expert maternal wellness guidance, from bump to baby
              </h1>
              <p className="text-lg md:text-xl text-foreground/75 max-w-xl mx-auto lg:mx-0 mt-6 leading-relaxed">
                MatriLux helps reduce maternal care gaps with timely tracking, trusted education, and supportive follow-through between visits.
              </p>

              <div className="hidden sm:flex items-center justify-center lg:justify-start gap-3 mt-10">
                <Link href="/" aria-label="Open homepage from Google Play badge">
                  <Image src="/google-play.png" alt="Get it on Google Play" width={180} height={54} className="h-[54px] w-auto" />
                </Link>
                <Link href="/" aria-label="Open homepage from App Store badge">
                  <Image src="/apple-light.svg" alt="Download on the App Store" width={180} height={54} className="h-[54px] w-auto" />
                </Link>
              </div>

              <div className="sm:hidden space-y-3 mt-10">
                <div className="flex items-center justify-center gap-3">
                  <Link href="/"><Image src="/google-play.png" alt="Google Play" width={153} height={46} className="h-[46px] w-auto" /></Link>
                  <Link href="/"><Image src="/apple-light.svg" alt="App Store" width={153} height={46} className="h-[46px] w-auto" /></Link>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center relative">
              <div className="w-full max-w-sm">
                <div className="relative w-full max-w-sm aspect-square rounded-3xl bg-gradient-to-br from-secondary to-accent/20 shadow-2xl shadow-primary/10">
                  <Image src="/mother-wellness.png" alt="Mother and child" fill className="object-contain p-8 scale-150 -translate-x-[12%] -translate-y-[5%]" priority />
                </div>
              </div>
            </div>
          </div>

          {/* JOURNEY BLOCK */}
          <div className="mt-16 md:mt-24 pt-10 border-t border-border/50">
            <p className="text-center text-sm font-semibold text-foreground/50 uppercase tracking-widest mb-10">
              Supporting Your Entire Journey
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-4xl mx-auto">
              <div className="w-full md:w-1/3 bg-background/50 rounded-[2rem] p-6 border border-border/60 shadow-sm flex flex-col items-center text-center group hover:border-primary/30 hover:bg-card hover:-translate-y-1 transition-all duration-300">
                <div className="p-4 bg-primary/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-7 h-7 text-primary" />
                </div>
                <span className="font-serif text-xl font-medium text-foreground">Preconception</span>
                <p className="text-sm text-foreground/60 mt-1.5 leading-relaxed">Cycle tracking & fertility insights to help you plan.</p>
              </div>

              <div className="text-primary/30 shrink-0 p-2">
                <ArrowRight className="w-8 h-8 hidden md:block" />
                <ArrowDown className="w-8 h-8 block md:hidden" />
              </div>

              <div className="w-full md:w-1/3 bg-background/50 rounded-[2rem] p-6 border border-border/60 shadow-sm flex flex-col items-center text-center group hover:border-primary/30 hover:bg-card hover:-translate-y-1 transition-all duration-300">
                <div className="p-4 bg-primary/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  <Baby className="w-7 h-7 text-primary" />
                </div>
                <span className="font-serif text-xl font-medium text-foreground">Pregnancy</span>
                <p className="text-sm text-foreground/60 mt-1.5 leading-relaxed">Weekly fetal growth & real-time vitals monitoring.</p>
              </div>

              <div className="text-primary/30 shrink-0 p-2">
                <ArrowRight className="w-8 h-8 hidden md:block" />
                <ArrowDown className="w-8 h-8 block md:hidden" />
              </div>

              <div className="w-full md:w-1/3 bg-background/50 rounded-[2rem] p-6 border border-border/60 shadow-sm flex flex-col items-center text-center group hover:border-primary/30 hover:bg-card hover:-translate-y-1 transition-all duration-300">
                <div className="p-4 bg-primary/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  <HeartPulse className="w-7 h-7 text-primary" />
                </div>
                <span className="font-serif text-xl font-medium text-foreground">Postpartum</span>
                <p className="text-sm text-foreground/60 mt-1.5 leading-relaxed">Maternal recovery support & newborn care basics.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        {/* Features & Devices Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:bg-secondary/10 lg:rounded-[3rem] mb-16 md:mb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-start">

            {/* Left/Top Column: Features */}
            <div className="flex flex-col w-full -ml-2 lg:-ml-4 xl:-ml-6"> {/* Added negative left margin */}
              {/* TEXT BOX */}
              <div className="flex flex-col items-center lg:items-start lg:pl-4 xl:pl-8 w-full text-center lg:text-left mb-8"> {/* Reduced padding */}
    
                <h2 className="text-3xl md:text-4xl font-light mb-1 tracking-tight">
                  Why mothers trust
                </h2>
                <h2 className="text-3xl md:text-4xl font-light mb-3 tracking-tight">
                  MatriLux
                </h2>
                <p className="text-foreground/70 max-w-md leading-relaxed">
                  Designed with clinical clarity and emotional reassurance for every stage of the journey.
                </p>
              </div>

              <div className="w-full lg:pl-6">
                <FeatureGrid />
              </div>

            </div>

            {/* Right/Bottom Column: Device Carousel */}
            <div className="w-full flex justify-center items-center mt-12 lg:mt-0">
              <DeviceCarousel />
            </div>

          </div>
        </section>

        {/* CTA SECTION */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="relative overflow-hidden rounded-[3rem] bg-primary/5 border border-primary/10 p-8 md:p-16 text-center shadow-sm">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-48 h-48 bg-secondary/30 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="p-4 bg-background rounded-full mb-6 shadow-sm border border-border/50">
                <HeartPulse className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">Your journey deserves MatriLux</h2>
              <p className="text-lg text-foreground/70 max-w-xl mx-auto mb-8">
                We are currently inviting early adopters to experience the future of maternal care. Join our private waitlist to secure your spot.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-12 pl-10 pr-4 rounded-xl border border-border/50 bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <Button className="h-12 px-8 rounded-xl bg-primary text-white hover:bg-primary/90 shadow-sm whitespace-nowrap">
                  Request Access
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-secondary/20 border-t border-border/50 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12 text-center">
            <div className="flex flex-col items-center">
              <Link href="/" className="text-2xl font-semibold text-primary mb-4 block">MatriLux</Link>
              <p className="text-left text-foreground/60 leading-relaxed max-w-xs mx-auto text-center">
                Bridging the gap in maternal healthcare with intelligent tracking and compassionate support.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-foreground/60">
                <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Medical Board</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div className="flex flex-col items-center">
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-3 text-sm text-foreground/60">
                <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Legal Compliance</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border/50 flex flex-col justify-center items-center text-center">
            <p className="text-xs text-foreground/50 max-w-2xl mx-auto">
              © {new Date().getFullYear()} MatriLux. All rights reserved. Not intended to replace professional medical advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
