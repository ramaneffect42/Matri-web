'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mail, Bell } from 'lucide-react'

export function NotificationsSettings() {
  const [marketingEmails, setMarketingEmails] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)

  return (
    <div className="w-full">
      <div className="space-y-6">
        <h1 className="text-2xl font-light text-foreground">Notifications</h1>

        <div className="bg-card rounded-2xl border border-border/50 p-6 space-y-4 shadow-md">
          {/* Marketing Emails */}
          <div className="flex items-center justify-between pb-4 border-b border-border/30">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <h3 className="text-base font-semibold text-foreground">Marketing Emails</h3>
              </div>
              <p className="text-xs text-foreground/60">Opt-in/out for newsletters and Matri updates</p>
            </div>
            <button 
              onClick={() => setMarketingEmails(!marketingEmails)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-all duration-500 ease-in-out cursor-pointer ${
                marketingEmails ? 'bg-primary' : 'bg-foreground/20'
              }`}
            >
              <span className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                marketingEmails ? 'translate-x-7' : 'translate-x-1'
              }`} />
            </button>
          </div>

          {/* Push Notifications */}
          <div className="flex items-center justify-between pt-2">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4 text-primary" />
                <h3 className="text-base font-semibold text-foreground">Push Notifications</h3>
              </div>
              <p className="text-xs text-foreground/60">Master toggle for the entire app</p>
            </div>
            <button 
              onClick={() => setPushNotifications(!pushNotifications)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-all duration-500 ease-in-out cursor-pointer ${
                pushNotifications ? 'bg-primary' : 'bg-foreground/20'
              }`}
            >
              <span className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                pushNotifications ? 'translate-x-7' : 'translate-x-1'
              }`} />
            </button>
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
