'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/auth-context'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Lock, LogOut, Trash2 } from 'lucide-react'

export function PrivacySettings() {
  const { logout } = useAuth()
  const router = useRouter()

  const handleSignOut = async () => {
    await logout()
    router.push('/')
  }

  const handleDeleteAccount = () => {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      // TODO: Implement account deletion
      console.log('Delete account')
    }
  }

  return (
    <div className="w-full">
      <div className="space-y-6">
        <h1 className="text-2xl font-light text-foreground">Privacy & Security</h1>

        <div className="bg-card rounded-2xl border border-border/80 p-6 space-y-4 shadow-md">
          {/* Change Password */}
          <div className="flex items-center justify-between pb-4 border-b border-border/90">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-primary" />
              <h3 className="text-base font-semibold text-foreground">Change Password</h3>
            </div>
            <Button 
              variant="outline" 
              className="rounded-full text-sm px-4 py-1 cursor-pointer"
              onClick={() => {
                // TODO: Implement change password modal
                console.log('Change password')
              }}
            >
              Update
            </Button>
          </div>

          {/* Change Email */}
          <div className="flex items-center justify-between pb-4 border-b border-border/90">
            <div className="space-y-1">
              <h3 className="text-base font-semibold text-foreground">Change Email</h3>
              <p className="text-xs text-foreground/60">Update your email address</p>
            </div>
            <Button 
              variant="outline" 
              className="rounded-full text-sm px-4 py-1 cursor-pointer"
              onClick={() => {
                // TODO: Implement change email modal
                console.log('Change email')
              }}
            >
              Change
            </Button>
          </div>

          {/* Delete Account */}
          <div className="flex items-center justify-between pb-4 border-b border-border/90">
            <div className="space-y-1">
              <h3 className="text-base font-semibold text-foreground">Delete Account</h3>
              <p className="text-xs text-foreground/60">Permanently delete your account and data</p>
            </div>
            <Button 
              variant="destructive" 
              className="rounded-full text-sm px-4 py-1 cursor-pointer"
              onClick={handleDeleteAccount}
            >
              <Trash2 className="w-4 h-4 mr-1" />
              Delete
            </Button>
          </div>

          {/* Sign Out */}
          <div className="flex items-center justify-between pt-2">
            <div className="space-y-1">
              <h3 className="text-base font-semibold text-foreground">Sign Out</h3>
              <p className="text-xs text-foreground/60">End your current session</p>
            </div>
            <Button 
              variant="outline" 
              className="rounded-full text-sm px-4 py-1 cursor-pointer"
              onClick={handleSignOut}
            >
              <LogOut className="w-4 h-4 mr-1" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
