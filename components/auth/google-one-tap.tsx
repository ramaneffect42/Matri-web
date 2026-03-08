'use client'

import { useEffect, useRef } from 'react'
import { signInWithCredential, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { useRouter } from 'next/navigation'

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (options: any) => void
          renderButton: (element: Element, options: any) => void
          prompt: (onSuccess?: (notification: any) => void) => void
        }
      }
    }
  }
}

export function GoogleOneTap() {
  const router = useRouter()
  const oneTapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.google) {
      console.log('[v0] Google One Tap not loaded yet')
      return
    }

    const googleClientId = process.env.NEXT_PUBLIC_FIREBASE_API_KEY
      ? `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.apps.googleusercontent.com`
      : undefined

    if (!googleClientId) {
      console.error('[v0] Google Client ID not configured')
      return
    }

    try {
      window.google.accounts.id.initialize({
        client_id: googleClientId,
        callback: async (response: any) => {
          try {
            console.log('[v0] One Tap response received')
            
            // Create credential from JWT
            const credential = GoogleAuthProvider.credential(response.credential)
            
            // Sign in with the credential
            const result = await signInWithCredential(auth, credential)
            console.log('[v0] One Tap sign-in successful:', result.user.email)
            
            // Redirect to waitlist
            router.push('/waitlist')
          } catch (error) {
            console.error('[v0] One Tap sign-in error:', error)
          }
        },
        auto_select: false,
        itp_support: true,
      })

      // Display the One Tap prompt
      window.google.accounts.id.prompt((notification: any) => {
        if (notification.isNotDisplayed()) {
          console.log('[v0] One Tap not displayed:', notification.getNotDisplayedReason())
        } else if (notification.isSkippedMoment()) {
          console.log('[v0] One Tap skipped')
        }
      })
    } catch (error) {
      console.error('[v0] One Tap initialization error:', error)
    }
  }, [router])

  return null
}
