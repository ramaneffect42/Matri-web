"use client"

import { Heart, HeartPulse, CalendarDays, Thermometer, Droplets, Moon, Leaf, Lightbulb, Baby, Sparkles } from "lucide-react"

const symptomRows = [
  { label: "Cramping", level: "Low", icon: HeartPulse, color: "text-primary" },
  { label: "Body Temp", level: "98.4F", icon: Thermometer, color: "text-accent" },
  { label: "Hydration", level: "Good", icon: Droplets, color: "text-primary" },
  { label: "Sleep", level: "6h 40m", icon: Moon, color: "text-accent" },
]

type MockupVariant = "stages" | "dashboard" | "therapy"

interface IPhoneMockupProps {
  variant: MockupVariant
  className?: string
}

function StageScreen() {
  const stages = [
    { label: "Planning", detail: "Trying to conceive", icon: Sparkles },
    { label: "Pregnant", detail: "Track weekly progress", icon: Baby },
    { label: "Postpartum", detail: "Recovery and newborn care", icon: HeartPulse },
  ]

  return (
    <div className="flex h-full w-full flex-1 flex-col space-y-2 pb-0">
      <div className="w-full rounded-2xl border border-primary/25 bg-primary/10 p-3 shadow-sm">
        <p className="text-xs text-foreground/70">Choose Your Stage</p>
        <h3 className="text-sm font-semibold text-foreground">Personalize your MatriLux journey</h3>
      </div>

      <div className="flex w-full flex-1 flex-col space-y-2">
        {stages.map((item, index) => {
          const Icon = item.icon
          const active = index === 1
          return (
            <div
              key={item.label}
              className={`w-full rounded-xl border px-3 py-2.5 ${active ? "border-primary/40 bg-primary/10" : "border-border/60 bg-secondary/40"}`}
            >
              <div className="flex items-start gap-2">
                <Icon className={`h-4 w-4 mt-0.5 ${active ? "text-primary" : "text-foreground/70"}`} />
                <div>
                  <p className="text-xs font-semibold text-foreground">{item.label}</p>
                  <p className="text-[10px] text-foreground/70">{item.detail}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function DashboardScreen() {
  return (
    <div className="flex h-full w-full flex-1 flex-col space-y-2">
      <div className="w-full bg-transparent p-3 shadow-sm text-left">
        <p className="text-base leading-tight font-serif text-foreground">Welcome back,</p>
        <h3 className="text-[22px] leading-none font-serif text-foreground">John Doe!</h3>
      </div>

      <div className="w-full rounded-2xl border border-border/70 bg-card p-3 shadow-sm">
        <div className="flex items-start gap-2">
          <div className="mt-1 rounded-full bg-primary/10 p-1.5">
            <Heart className="h-3.5 w-3.5 text-primary" />
          </div>
          <div>
            <p className="text-[10px] text-foreground/70">Current Phase</p>
            {/* Progress Ring Graphic */}
            <div className="my-5 relative flex items-center justify-center">
              {/* Background Ring */}
              <svg className="w-16 h-16 transform -rotate-90">
                <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-primary/20" />
                {/* Foreground Ring (Progress) */}
                <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray="175" strokeDashoffset="60" className="text-primary" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <Heart className="h-5 w-5 text-primary" />
              </div>
            </div>
            <p className="text-[10px] text-foreground/70">Trimester 2 - Pregnancy</p>
          </div>
        </div>
      </div>

      <div className="grid w-full flex-1 grid-cols-2 gap-2 mb-4">
        <div className="rounded-xl border border-border/60 bg-card py-2 px-2.5 flex flex-col justify-center">
          <div className="flex items-center gap-1.5">
            <p className="text-[10px] font-medium text-foreground">Symptom Tracker</p>
          </div>
          <p className="mt-1 text-[10px] text-foreground/70">Last log: Oct 11</p>
          <button className="mt-2 w-full rounded-full bg-primary/20 px-2 py-1 text-[10px] text-primary">Log Today</button>
        </div>
        <div className="rounded-xl border border-border/60 bg-card py-2 px-2.5 flex flex-col justify-center">
          <div className="flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5 text-foreground/70" />
            <p className="text-[10px] font-medium text-foreground">Appointment</p>
          </div>
          <p className="mt-1 text-[10px] text-foreground/70">Dr. Arya Sharma</p>
          <button className="mt-2 w-full rounded-full bg-primary/20 px-2 py-1 text-[10px] text-primary">Details</button>
        </div>
      </div>

    </div>
  )
}

function TherapyScreen() {
  return (
    <div className="flex h-full w-full flex-1 flex-col space-y-2">
      <div className="w-full rounded-2xl border border-primary/25 bg-primary/10 p-3 shadow-sm">
        <p className="text-xs text-foreground/70">Home Therapy</p>
        <h3 className="text-sm font-semibold text-primary">Ginger Tea</h3>
        <p className="mt-1 text-[11px] text-foreground/70">Nausea support for early mornings</p>
      </div>

      <div className="w-full rounded-xl border border-border/60 bg-secondary/50 p-3">
        <div className="flex items-center gap-2 text-[11px]">
          <Leaf className="h-4 w-4 text-primary" />
          <span className="text-foreground/75">Category: Nutrition</span>
        </div>
        <div className="mt-2 flex items-center gap-2 text-[11px]">
          <Lightbulb className="h-4 w-4 text-accent" />
          <span className="text-foreground/75">Tip: Small sips</span>
        </div>
      </div>

      <div className="w-full flex-1 rounded-xl border border-border/60 bg-card p-3 mb-4">
        <p className="text-[11px] text-foreground/70">Quick actions</p>
        <div className="mt-2 space-y-2 text-[11px]">
          <div className="rounded-lg bg-primary/5 p-2 text-foreground">Warm compress - 10 mins</div>
          <div className="rounded-lg bg-primary/5 p-2 text-foreground">Hydration check-in reminder</div>
        </div>
      </div>
    </div>
  )
}

export function IPhoneMockup({ variant, className = "" }: IPhoneMockupProps) {
  return (
    <div className={`mx-auto h-[546px] w-[255px] ${className}`}>
      <div className="relative h-full w-full rounded-[3rem] bg-gradient-to-b from-zinc-300 to-zinc-500 p-[8px] shadow-2xl dark:from-zinc-700 dark:to-zinc-900">
        <div className="h-full w-full rounded-[2.65rem] bg-zinc-900 p-[4px]">
          <div className="relative flex h-full w-full overflow-hidden rounded-[2.35rem] border border-white/10 bg-background">
            <div className="absolute left-1/2 top-2.5 z-20 h-7 w-32 -translate-x-1/2 rounded-full bg-black/85" />

            <div className="flex h-full w-full flex-col px-3 pb-8 pt-12">
              <div className="mb-2 w-full rounded-xl border border-border/60 bg-card px-3 py-2">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-semibold text-foreground">Matrilux</p>
                  <p className="text-[10px] text-foreground/60">09:41</p>
                </div>
              </div>
              <div className="flex h-full w-full flex-1 flex-col space-y-2">
                {variant === "stages" && <StageScreen />}
                {variant === "dashboard" && <DashboardScreen />}
                {variant === "therapy" && <TherapyScreen />}
              </div>

              <div className="w-full rounded-xl border border-primary/20 bg-primary/10 px-3 py-2">
                <p className="text-[11px] text-foreground/80">Matrilux gently supports your daily rhythm.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
