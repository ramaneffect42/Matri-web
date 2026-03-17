'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/auth-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Camera, Calendar } from 'lucide-react'

export function GeneralSettings() {
  const { user } = useAuth()
  const [fullName, setFullName] = useState('Vidya Lakshmi')
  const [displayName, setDisplayName] = useState('Vidya')
  const [email, setEmail] = useState('vidya @example.com')
  const [dateOfBirth, setDateOfBirth] = useState('1990-05-15')
  const [profileImage, setProfileImage] = useState<string | null>(null)

  return (
    <div className="w-full">
      <div className="space-y-6">
        {/* Page Title */}
        <h1 className="text-2xl font-light text-foreground">General Information</h1>

        {/* Profile Picture Section with Welcome Message */}
        <div className="bg-card rounded-2xl border border-border/50 p-6 shadow-md">
          <h2 className="text-base font-semibold text-foreground mb-5">Profile Picture</h2>
          
          <div className="flex items-start gap-8">
            {/* Left: Avatar and Button */}
            <div className="flex flex-col items-center gap-3">
              {/* Avatar Placeholder */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/20 flex items-center justify-center flex-shrink-0 overflow-hidden">
                {profileImage ? (
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center">
                    <Camera className="w-6 h-6 text-primary/40 mx-auto mb-1" />
                    <p className="text-xs text-foreground/40 font-medium">pfp</p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2 w-full">
                <Button 
                  className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer w-full text-sm py-2"
                  onClick={() => {
                    const input = document.createElement('input')
                    input.type = 'file'
                    input.accept = 'image/*'
                    input.onchange = (e) => {
                      const file = (e.target as HTMLInputElement).files?.[0]
                      if (file) {
                        const reader = new FileReader()
                        reader.onload = (event) => {
                          setProfileImage(event.target?.result as string)
                        }
                        reader.readAsDataURL(file)
                      }
                    }
                    input.click()
                  }}
                >
                  Change Photo
                </Button>
                {profileImage && (
                  <Button 
                    variant="outline" 
                    className="rounded-full cursor-pointer w-full text-sm py-2"
                    onClick={() => setProfileImage(null)}
                  >
                    Remove Photo
                  </Button>
                )}
              </div>
            </div>

            {/* Right: Welcome Message */}
            <div className="flex-1">
              <div className="space-y-2">
                <p className="text-lg font-light text-foreground">
                  Welcome back, <span className="font-semibold">{user?.displayName?.split(' ')[0] || 'Sarah'}</span>!
                </p>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Your profile helps us personalize your maternal wellness experience. Update your photo and personal information to keep your account current and secure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Fields Section */}
        <div className="bg-card rounded-2xl border border-border/50 p-6 space-y-5 shadow-md">
          <h2 className="text-base font-semibold text-foreground">Account Details</h2>
          {/* Single Column Layout */}
          <div className="space-y-5">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm text-foreground/70 font-medium">
                Full Name
              </Label>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="rounded-lg border-border/50 h-9 text-sm px-3"
              />
            </div>

            {/* Display Name */}
            <div className="space-y-2">
              <Label htmlFor="displayName" className="text-sm text-foreground/70 font-medium">
                Display Name
              </Label>
              <Input
                id="displayName"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="rounded-lg border-border/50 h-9 text-sm px-3"
              />
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm text-foreground/70 font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled
                className="rounded-lg border-border/50 h-9 text-sm px-3"
              />
            </div>

            {/* Date of Birth */}
            <div className="space-y-2">
              <Label htmlFor="dateOfBirth" className="text-sm text-foreground/70 font-medium flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Date of Birth
              </Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className="rounded-lg border-border/50 h-9 text-sm px-3"
              />
            </div>
          </div>

          {/* Save Button - Right Aligned */}
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
