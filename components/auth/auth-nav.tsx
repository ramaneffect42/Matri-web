'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export function AuthNav() {
  const router = useRouter()

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <div className="text-2xl font-semibold text-primary">Matrilux</div>
        </Link>

        {/* Back Button */}
        <Button
          onClick={() => router.back()}
          variant="outline"
          size="sm"
          className="rounded-full flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Back
        </Button>
      </div>
    </nav>
  )
}
