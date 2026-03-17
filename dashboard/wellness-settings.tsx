'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Heart, Zap, Target } from 'lucide-react'

export function WellnessSettings() {
  const [pregnancyPhase, setPregnancyPhase] = useState('tracking')
  const [trackingGoals, setTrackingGoals] = useState(['mood', 'energy', 'sleep'])
  const [reminderFrequency, setReminderFrequency] = useState('daily')

  const toggleTrackingGoal = (goal: string) => {
    if (trackingGoals.includes(goal)) {
      setTrackingGoals(trackingGoals.filter(g => g !== goal))
    } else {
      setTrackingGoals([...trackingGoals, goal])
    }
  }

  return (
    <div className="w-full">
      <div className="space-y-6">
        <h1 className="text-2xl font-light text-foreground">Wellness Preferences</h1>

        <div className="bg-card rounded-2xl border border-border/50 p-6 space-y-6 shadow-md">
          {/* Pregnancy Phase */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-primary" />
              <h3 className="text-base font-semibold text-foreground">Current Phase</h3>
            </div>
            <div className="space-y-2">
              {['planning', 'pregnant', 'tracking', 'postpartum'].map((phase) => (
                <label key={phase} className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-foreground/5 transition">
                  <input 
                    type="radio" 
                    name="phase" 
                    value={phase}
                    checked={pregnancyPhase === phase}
                    onChange={(e) => setPregnancyPhase(e.target.value)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-foreground/70 capitalize">{phase.replace(/([A-Z])/g, ' $1')}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Tracking Goals */}
          <div className="space-y-3 pb-4 border-b border-border/30">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-primary" />
              <h3 className="text-base font-semibold text-foreground">What would you like to track?</h3>
            </div>
            <div className="space-y-2">
              {['mood', 'energy', 'sleep', 'nutrition', 'exercise', 'symptoms'].map((goal) => (
                <label key={goal} className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-foreground/5 transition">
                  <input 
                    type="checkbox" 
                    checked={trackingGoals.includes(goal)}
                    onChange={() => toggleTrackingGoal(goal)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-foreground/70 capitalize">{goal}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Reminder Frequency */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              <h3 className="text-base font-semibold text-foreground">Reminder Frequency</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {['daily', 'weekly', 'monthly', 'never'].map((freq) => (
                <label key={freq} className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-foreground/5 transition border border-border/30">
                  <input 
                    type="radio" 
                    name="frequency" 
                    value={freq}
                    checked={reminderFrequency === freq}
                    onChange={(e) => setReminderFrequency(e.target.value)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-foreground/70 capitalize">{freq}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end gap-3 pt-4 border-t border-border/30">
            <Button variant="outline" className="rounded-full text-sm px-6 py-2 cursor-pointer">
              Cancel
            </Button>
            <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm px-6 py-2 cursor-pointer">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
