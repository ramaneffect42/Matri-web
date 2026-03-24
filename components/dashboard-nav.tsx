'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { 
  ChevronDown, 
  Menu, 
  Calendar, 
  CalendarHeart,
  Lightbulb, 
  Sparkles, 
  Sun,
  Moon,
  Monitor
} from 'lucide-react'

export function DashboardNav() {
  const [sheetOpen, setSheetOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const router = useRouter()

  const wellnessTools = [
    { icon: CalendarHeart, label: 'Due Date Calculator', href: '/tools/due-date-calculator' },
    { icon: Calendar, label: 'Cycle & Ovulation Tracker', href: '/tools/cycle-ovulation-tracker' },
    { icon: Sparkles, label: 'Baby Name Discovery', href: '/tools/baby-name-generator' },
    { icon: Lightbulb, label: 'Cycle Insights & FAQs', href: '#' },
  ]

  const handleToolClick = (href: string) => {
    if (href.startsWith('#') && href.length > 1) {
      const el = document.getElementById(href.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    } else if (href && href !== '#') {
      router.push(href)
    }
  }

  return (
    <nav className="sticky top-0 z-40 bg-primary/5 dark:bg-primary/5 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between relative">

        {/* 1. LEFT SIDE: Logo */}
        <div className="flex-1 flex justify-start">
          <Link
            href="/"
            className="text-xl md:text-2xl font-semibold text-primary hover:opacity-80 transition-opacity"
          >
            MatriLux
          </Link>
        </div>

        {/* 2. CENTER: Wellness Tools Dropdown */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="rounded-full px-4 py-2 text-base gap-2 text-foreground/70 hover:text-foreground hover:bg-primary/5 transition-colors"
              >
                Tools
                <ChevronDown className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-64 p-3 space-y-1 rounded-2xl shadow-xl border-border/50 bg-background/95 backdrop-blur-md">
              {wellnessTools.map((tool) => {
                const Icon = tool.icon
                return (
                  <DropdownMenuItem 
                    key={tool.label} 
                    className="gap-4 cursor-pointer p-3 rounded-xl hover:bg-primary/5 transition-colors"
                    onClick={() => handleToolClick(tool.href)}
                  >
                    <Icon className="w-6 h-6 text-primary" />
                    <span className="text-base font-medium">{tool.label}</span>
                  </DropdownMenuItem>
                )
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* 3. RIGHT SIDE: Theme Toggle */}
        <div className="hidden md:flex flex-1 items-center justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full hover:bg-primary/5 transition-colors relative">
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground/70 hover:text-foreground" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-foreground/70 hover:text-foreground" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40 p-2 rounded-2xl shadow-xl border-border/50 bg-background/95 backdrop-blur-md">
              <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer rounded-xl hover:bg-primary/5 p-2.5">
                <Sun className="mr-3 h-4 w-4 text-primary" />
                <span className="font-medium">Light</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer rounded-xl hover:bg-primary/5 p-2.5">
                <Moon className="mr-3 h-4 w-4 text-primary" />
                <span className="font-medium">Dark</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")} className="cursor-pointer rounded-xl hover:bg-primary/5 p-2.5">
                <Monitor className="mr-3 h-4 w-4 text-primary" />
                <span className="font-medium">System</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* 4. MOBILE MENU */}
        <div className="md:hidden flex items-center">
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="p-2 -mr-2">
                <Menu className="w-7 h-7 text-foreground/70" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-3/4 sm:w-[350px] flex flex-col p-6 bg-background/95 backdrop-blur-md border-l border-border/50">
              <SheetHeader className="sr-only">
                <SheetTitle>Navigation Menu</SheetTitle>
              </SheetHeader>

              <div className="flex-1 py-6 space-y-6">
                <h4 className="text-sm font-semibold text-foreground/50 uppercase tracking-wider mb-4">Wellness Tools</h4>
                {wellnessTools.map((tool) => (
                  <button 
                    key={tool.label} 
                    className="flex items-center gap-4 py-2 w-full text-left" 
                    onClick={() => {
                      setSheetOpen(false)
                      setTimeout(() => handleToolClick(tool.href), 300)
                    }}
                  >
                    <tool.icon className="w-6 h-6 text-primary" />
                    <span className="text-base">{tool.label}</span>
                  </button>
                ))}
              </div>

              <div className="border-t border-border/50 pt-6">
                <div className="flex flex-col space-y-3 py-2">
                  <span className="text-sm font-semibold text-foreground/50 uppercase tracking-wider">Theme</span>
                  <div className="flex items-center gap-2 bg-secondary/30 p-1 rounded-xl w-full">
                    <Button
                      variant={theme === 'light' ? 'default' : 'ghost'}
                      size="sm"
                      className={`flex-1 rounded-lg ${theme === 'light' ? 'bg-background shadow-sm text-primary' : 'text-foreground/70'}`}
                      onClick={() => setTheme('light')}
                    >
                      <Sun className="w-4 h-4 mr-2" /> Light
                    </Button>
                    <Button
                      variant={theme === 'dark' ? 'default' : 'ghost'}
                      size="sm"
                      className={`flex-1 rounded-lg ${theme === 'dark' ? 'bg-background shadow-sm text-primary' : 'text-foreground/70'}`}
                      onClick={() => setTheme('dark')}
                    >
                      <Moon className="w-4 h-4 mr-2" /> Dark
                    </Button>
                    <Button
                      variant={theme === 'system' ? 'default' : 'ghost'}
                      size="sm"
                      className={`flex-1 rounded-lg ${theme === 'system' ? 'bg-background shadow-sm text-primary' : 'text-foreground/70'}`}
                      onClick={() => setTheme('system')}
                    >
                      <Monitor className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}