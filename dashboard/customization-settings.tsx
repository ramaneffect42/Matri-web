'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Palette, Globe } from 'lucide-react'

export function CustomizationSettings() {
  const [theme, setTheme] = useState('light')
  const [language, setLanguage] = useState('english')

  return (
    <div className="w-full">
      <div className="space-y-6">
        <h1 className="text-2xl font-light text-foreground">Look & Feel</h1>

        <div className="bg-card rounded-2xl border border-border/50 p-6 space-y-6 shadow-md">
          {/* Theme Selection */}
          <div className="space-y-3 pb-4 border-b border-border/30">
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-primary" />
              <h3 className="text-base font-semibold text-foreground">Theme Selector</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {[
                { value: 'light', label: 'Light' },
                { value: 'dark', label: 'Dark' },
                { value: 'system', label: 'System' }
              ].map((option) => (
                <label key={option.value} className="flex items-center gap-3 cursor-pointer p-3 rounded-lg border-2 transition-all" style={{
                  borderColor: theme === option.value ? 'var(--primary)' : 'var(--border)'
                }}>
                  <input 
                    type="radio" 
                    name="theme" 
                    value={option.value}
                    checked={theme === option.value}
                    onChange={(e) => setTheme(e.target.value)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-foreground/70 font-medium">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Language Selection */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary" />
              <h3 className="text-base font-semibold text-foreground">Language</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                { value: 'english', label: 'English' },
                { value: 'tamil', label: 'Tamil' },
                { value: 'hindi', label: 'Hindi' },
                { value: 'malayalam', label: 'Malayalam' }
              ].map((option) => (
                <label key={option.value} className="flex items-center gap-3 cursor-pointer p-3 rounded-lg border-2 transition-all" style={{
                  borderColor: language === option.value ? 'var(--primary)' : 'var(--border)'
                }}>
                  <input 
                    type="radio" 
                    name="language" 
                    value={option.value}
                    checked={language === option.value}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-foreground/70 font-medium">{option.label}</span>
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
