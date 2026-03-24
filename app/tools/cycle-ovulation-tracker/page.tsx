'use client'

import { DashboardNav } from '@/components/dashboard-nav'
import { CycleOvulationTracker } from '@/components/tools/cycle-ovulation-tracker'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function CycleOvulationTrackerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/10 flex flex-col">
      <DashboardNav />
      <main className="flex-1 flex flex-col pt-8 pb-24 h-full relative">
        <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2 text-foreground/70 hover:text-foreground hover:bg-primary/5 rounded-full pl-3 pr-5">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <CycleOvulationTracker />
          </div>
        </div>
      </main>
    </div>
  )
}
