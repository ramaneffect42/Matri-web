'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { addDays, format, isValid, parseISO } from 'date-fns'
import { CalendarHeart, RefreshCw, Droplets, Sparkles, Activity } from 'lucide-react'

export function CycleOvulationTracker() {
  const [date, setDate] = useState<string>('')
  const [cycleLength, setCycleLength] = useState<string>('28')
  const [results, setResults] = useState<{
    nextPeriod: Date
    ovulation: Date
    fertileStart: Date
    fertileEnd: Date
  } | null>(null)

  const calculateCycle = () => {
    if (!date) return
    const parsedDate = parseISO(date)
    const length = parseInt(cycleLength, 10)
    
    if (isValid(parsedDate) && length >= 21 && length <= 35) {
      // Luteal phase is generally 14 days long, regardless of cycle length
      const lutealPhaseLength = 14
      const nextPeriodDate = addDays(parsedDate, length)
      const ovulationDate = addDays(parsedDate, length - lutealPhaseLength)
      const fertileStartDate = addDays(ovulationDate, -5)
      const fertileEndDate = addDays(ovulationDate, 1)

      setResults({
        nextPeriod: nextPeriodDate,
        ovulation: ovulationDate,
        fertileStart: fertileStartDate,
        fertileEnd: fertileEndDate,
      })
    }
  }

  const reset = () => {
    setDate('')
    setCycleLength('28')
    setResults(null)
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <Card className="w-full bg-card border-border/50 shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-all overflow-hidden rounded-3xl">
      <CardHeader className="bg-primary/5 border-b border-primary/10 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Activity className="w-5 h-5 text-primary" />
          </div>
          <div>
            <CardTitle className="text-xl font-medium">Cycle & Ovulation Tracker</CardTitle>
            <CardDescription className="text-foreground/70">
              Predict your next period and identify your fertile window based on your unique cycle.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6 md:p-8 space-y-6">
        {!results ? (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="space-y-6">
              
              <div className="space-y-2">
                <Label htmlFor="last-period" className="text-base font-medium text-foreground/80">
                  First day of your last period
                </Label>
                <p className="text-sm text-foreground/60">Select the date your last period began.</p>
                <Input
                  id="last-period"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="h-12 px-4 text-base rounded-xl border-border/50 focus:border-primary/50 w-full bg-background"
                  max={today}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cycle-length" className="text-base font-medium text-foreground/80">
                  Average cycle length (days)
                </Label>
                <p className="text-sm text-foreground/60">Usually between 21 and 35 days.</p>
                <div className="relative">
                  <Input
                    id="cycle-length"
                    type="number"
                    min="21"
                    max="35"
                    value={cycleLength}
                    onChange={(e) => setCycleLength(e.target.value)}
                    className="h-12 px-4 text-base rounded-xl border-border/50 focus:border-primary/50 w-full bg-background"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/40 text-sm">Days</div>
                </div>
              </div>

            </div>
            
            <Button 
              onClick={calculateCycle} 
              disabled={!date || !cycleLength || parseInt(cycleLength) < 21 || parseInt(cycleLength) > 35}
              className="w-full h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 text-base font-medium shadow-md shadow-primary/20 mt-4"
            >
              Calculate Cycle
            </Button>
          </div>
        ) : (
          <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
            
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Next Period Box */}
              <div className="text-center space-y-3 p-6 bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-2xl border border-red-500/20">
                <Droplets className="w-8 h-8 text-red-500 mx-auto opacity-80" />
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-foreground/70 uppercase tracking-widest">Next Period</h3>
                  <p className="text-2xl font-light text-red-600 dark:text-red-400">
                    {format(results.nextPeriod, 'MMM do')}
                  </p>
                </div>
              </div>

              {/* Ovulation Box */}
              <div className="text-center space-y-3 p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
                <Sparkles className="w-8 h-8 text-primary mx-auto opacity-80" />
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-foreground/70 uppercase tracking-widest">Ovulation</h3>
                  <p className="text-2xl font-light text-primary">
                    {format(results.ovulation, 'MMM do')}
                  </p>
                </div>
              </div>
            </div>

            {/* Fertile Window Banner */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-secondary/20 border border-border/50">
              <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center shrink-0 shadow-sm border border-border/50">
                <CalendarHeart className="w-6 h-6 text-foreground/70" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-foreground">Fertile Window</h4>
                <p className="text-sm text-foreground/60 mt-0.5">
                  Your highest chance of conception is between <strong className="text-foreground">{format(results.fertileStart, 'MMM do')}</strong> and <strong className="text-foreground">{format(results.fertileEnd, 'MMM do')}</strong>.
                </p>
              </div>
            </div>

            <p className="text-xs text-center text-foreground/50 pt-2">
              *Predictions are estimates based on standard averages. Cycle variations may occur.
            </p>
            
            <Button 
               variant="outline"
               onClick={reset}
               className="w-full h-12 rounded-xl flex items-center gap-2 font-medium"
            >
              <RefreshCw className="w-4 h-4" />
              Recalculate
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
