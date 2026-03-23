'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { addDays, format, isValid, parseISO } from 'date-fns'
import { Baby, CalendarHeart, RefreshCw } from 'lucide-react'

export function DueDateCalculator() {
  const [date, setDate] = useState<string>('')
  const [dueDate, setDueDate] = useState<Date | null>(null)

  const calculateDueDate = () => {
    if (!date) return
    const parsedDate = parseISO(date)
    if (isValid(parsedDate)) {
      // Adding 266 days (approx 9 months/38 weeks) from conception to calculate due date
      const calculated = addDays(parsedDate, 266)
      setDueDate(calculated)
    }
  }

  const reset = () => {
    setDate('')
    setDueDate(null)
  }

  // Get today's date in YYYY-MM-DD format for the max attribute
  const today = new Date().toISOString().split('T')[0]

  return (
    <Card className="w-full bg-card border-border/50 shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-all overflow-hidden rounded-3xl">
      <CardHeader className="bg-primary/5 border-b border-primary/10 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <CalendarHeart className="w-5 h-5 text-primary" />
          </div>
          <div>
            <CardTitle className="text-xl font-medium">Due Date Calculator</CardTitle>
            <CardDescription className="text-foreground/70">
              Find out when your little one is expected to arrive
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6 md:p-8 space-y-6">
        {!dueDate ? (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="conception-date" className="text-base font-medium text-foreground/80">When did you get pregnant?</Label>
                <p className="text-sm text-foreground/60">Select your estimated conception date below.</p>
                <Input
                  id="conception-date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="h-12 px-4 text-base rounded-xl border-border/50 focus:border-primary/50 w-full bg-background"
                  max={today}
                />
              </div>
            </div>
            <Button 
              onClick={calculateDueDate} 
              disabled={!date}
              className="w-full h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 text-base font-medium shadow-md shadow-primary/20"
            >
              Calculate Due Date
            </Button>
          </div>
        ) : (
          <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
            <div className="text-center space-y-4 p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 rounded-2xl border border-primary/20">
              <Baby className="w-12 h-12 text-primary mx-auto opacity-80" />
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-foreground/80">Your estimated due date is</h3>
                <p className="text-3xl md:text-4xl lg:text-5xl font-light text-primary tracking-tight">
                  {format(dueDate, 'MMMM do, yyyy')}
                </p>
              </div>
              <p className="text-sm text-foreground/60 pt-2">
                *This is an estimate based on adding 266 days to your conception date. Every pregnancy is unique!
              </p>
            </div>
            
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
