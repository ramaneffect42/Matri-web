'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { 
  User, 
  onAuthStateChanged, 
  signOut, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  AuthError
} from 'firebase/auth'
import { auth } from './firebase'
import { FullscreenLoader } from '@/components/ui/full-screen-loader'

interface AuthContextType {
  user: User | null
  loading: boolean
  logout: () => Promise<void>
  signup: (email: string, password: string, name: string) => Promise<void>
  login: (email: string, password: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const signup = async (email: string, password: string, name: string) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(result.user, { displayName: name })
      setUser({ ...result.user, displayName: name })
    } catch (error) {
      const authError = error as AuthError
      throw new Error(authError.message)
    }
  }

  const login = async (email: string, password: string) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password)
      setUser(result.user)
    } catch (error) {
      const authError = error as AuthError
      throw new Error(authError.message)
    }
  }

  const logout = async () => {
    await signOut(auth)
    setUser(null)
  }

  return (
    <>
      <FullscreenLoader isOpen={loading} message="Preparing your experience..." />
      <AuthContext.Provider value={{ user, loading, logout, signup, login }}>
        {children}
      </AuthContext.Provider>
    </>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
