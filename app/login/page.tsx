'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { GoogleAuthButton } from '@/components/auth/google-auth-button'
import { AuthNav } from '@/components/auth/auth-nav'
import { useAuth } from '@/lib/auth-context'
import { Spinner } from '@/components/ui/spinner'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    if (!email || !password) {
      setError('Please fill in all fields')
      setIsLoading(false)
      return
    }

    try {
      await login(email, password)
      router.push('/waitlist')
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to sign in'
      setError(errorMessage)
      setIsLoading(false)
    }
  }

  return (
    <>
      <AuthNav />
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/10 flex items-center justify-center px-4 py-12 pt-24">
      <Card className="w-full max-w-md border border-border/50 bg-card rounded-3xl shadow-lg">
        <CardHeader className="space-y-2 text-center">
          <div className="text-center mb-4">
            <h1 className="text-3xl font-semibold text-primary">Matrilux</h1>
          </div>
          <CardTitle className="text-2xl font-light text-foreground">Welcome back</CardTitle>
          <CardDescription className="text-foreground/60">
            Sign in to your account to continue your maternal wellness journey
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                className="rounded-xl bg-input border-border/50 text-foreground placeholder:text-foreground/40"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                className="rounded-xl bg-input border-border/50 text-foreground placeholder:text-foreground/40"
              />
            </div>

            {error && (
              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-3 text-sm text-destructive">
                {error}
              </div>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 disabled:opacity-70"
            >
              {isLoading ? (
                <>
                  <Spinner size="sm" className="mr-2" />
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/30"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-card text-foreground/50">or</span>
            </div>
          </div>

          <GoogleAuthButton 
            size="lg" 
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
            disabled={isLoading}
          />

          <p className="text-center text-sm text-foreground/60">
            Don't have an account?{' '}
            <Link href="/signup" className="text-primary hover:text-primary/90 font-medium transition">
              Create one
            </Link>
          </p>
        </CardContent>
      </Card>
      </div>
    </>
  )
}
