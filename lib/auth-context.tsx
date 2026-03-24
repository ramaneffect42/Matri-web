'use client'

import React, { createContext, useContext, useState } from 'react'

type User = {
  uid: string
  email: string | null
  displayName: string | null
  emailVerified: boolean
}

type AuthContextType = {
  user: User | null
  logout: () => Promise<void>
  resendVerificationEmail: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: {
    uid: 'mock-user-123',
    email: 'test@example.com',
    displayName: 'Guest',
    emailVerified: true,
  },
  logout: async () => {},
  resendVerificationEmail: async () => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // Provide a mock user so the waitlist page renders without redirecting
  const [user] = useState<User | null>({
    uid: 'mock-user-123',
    email: 'test@example.com',
    displayName: 'Test User',
    emailVerified: false,
  })

  const logout = async () => {
    console.log('logout called')
  }

  const resendVerificationEmail = async () => {
    console.log('resend verification email called')
  }

  return (
    <AuthContext.Provider value={{ user, logout, resendVerificationEmail }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
