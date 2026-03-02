import { Spinner } from './spinner'

interface FullscreenLoaderProps {
  isOpen: boolean
  message?: string
}

export function FullscreenLoader({ isOpen, message = 'Loading...' }: FullscreenLoaderProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <Spinner size="lg" />
        {message && (
          <p className="text-sm text-foreground/70 font-medium">{message}</p>
        )}
      </div>
    </div>
  )
}
