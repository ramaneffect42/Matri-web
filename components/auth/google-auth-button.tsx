'use client'

import { useState } from 'react'
import { signInWithPopup, signInWithRedirect } from 'firebase/auth'
import { auth, googleProvider, isMobileDevice } from '@/lib/firebase'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'

interface GoogleAuthButtonProps {
  variant?: 'default' | 'outline'
  size?: 'sm' | 'lg' | 'default'
  className?: string
  onSuccess?: () => void
  onError?: (error: Error) => void
  disabled?: boolean
}

export function GoogleAuthButton({
  variant = 'default',
  size = 'default',
  className = '',
  onSuccess,
  onError,
  disabled = false,
}: GoogleAuthButtonProps) {
  const [loading, setLoading] = useState(false)

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true)
      
      // Try popup first (best UX for all devices)
      try {
        await signInWithPopup(auth, googleProvider)
        console.log('[Popup sign-in successful')
        onSuccess?.()
      } catch (popupError: any) {
        // If popup is blocked or closed, fall back to redirect
        if (
          popupError.code === 'auth/popup-closed-by-user' ||
          popupError.code === 'auth/cancelled-popup-request'
        ) {
          console.log('Popup blocked/closed. Falling back to redirect...')
          await signInWithRedirect(auth, googleProvider)
          // Note: After redirect, user will return and be handled by getRedirectResult in auth-context
        } else {
          throw popupError
        }
      }
    } catch (error) {
      const err = error instanceof Error ? error : new Error('Failed to sign in')
      console.error('Google sign in error:', err.message)
      onError?.(err)
      setLoading(false)
    }
  }

  return (
    <Button
      onClick={handleGoogleSignIn}
      disabled={loading || disabled}
      variant={variant}
      size={size}
      className={`rounded-full transition-all ${className}`}
    >
      {loading ? (
        <>
          <Spinner size="sm" className="mr-2" />
          Signing in...
        </>
      ) : (
        <>
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23000000'%3E%3Cpath d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'/%3E%3Cpath d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/%3E%3Cpath d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'/%3E%3Cpath d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'/%3E%3C/svg%3E"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Continue with Google
        </>
      )}
    </Button>
  )
}
