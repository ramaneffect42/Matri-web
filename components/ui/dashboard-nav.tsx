'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/lib/auth-context'
import { Button } from '@/components/ui/button'
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
import { ChevronDown, User, Menu, Calendar, Lightbulb, Sparkles, Settings, LogOut } from 'lucide-react'
import "@theme-toggles/react/css/Within.css"
import { Within } from "@theme-toggles/react"



export function DashboardNav() {
  const { logout } = useAuth()
  const [sheetOpen, setSheetOpen] = useState(false)

  const wellnessTools = [
    { icon: Calendar, label: 'Cycle & Ovulation Tracker' },
    { icon: Sparkles, label: 'Baby Name Discovery' },
    { icon: Lightbulb, label: 'Cycle Insights & FAQs' },
  ]

  const handleLogout = async () => {
    await logout()
  }

  return (
    <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between relative">

        {/* 1. LEFT SIDE: Logo */}
        <div className="flex-1 flex justify-start">
          <Link
            href="/waitlist"
            className="text-xl md:text-2xl font-semibold text-primary hover:opacity-80 transition-opacity"
          >
            Matri
          </Link>
        </div>

        {/* 2. CENTER: Wellness Tools */}
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
                  <DropdownMenuItem key={tool.label} className="gap-4 cursor-pointer p-3 rounded-xl hover:bg-primary/5 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                    <span className="text-base font-medium">{tool.label}</span>
                  </DropdownMenuItem>
                )
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* 3. RIGHT SIDE: Theme Toggle + Profile */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-2">

          <Button
            variant="ghost"
            className="w-10 h-10 p-0 flex items-center justify-center rounded-full hover:bg-primary/0 transition-colors relative"
          >
            {/* The wrapper handles the size boost */}
            <div className="transform scale-150 flex items-center justify-center">
              <Within
                className="text-foreground/70 hover:text-foreground"
                duration={750}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
            </div>
            <span className="sr-only">Toggle theme</span>
          </Button>


          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='ghost'
                className="p-2 flex items-center justify-center rounded-full hover:bg-transparent active:bg-transparent transition-colors"
              >
                <User className="w-8 h-8 text-foreground/70 hover:text-foreground transform scale-160" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 p-3 space-y-1 rounded-2xl shadow-xl border-border/50 bg-background/95 backdrop-blur-md">
              <DropdownMenuItem asChild className="cursor-pointer p-0 rounded-xl hover:bg-primary/5 transition-colors">
                <Link href="/account" className="flex items-center gap-4 w-full p-3">
                  <Settings className="w-6 h-6 text-primary" />
                  <span className="text-base font-medium">Account Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={handleLogout}
                className="gap-4 cursor-pointer p-3 rounded-xl text-destructive focus:text-destructive focus:bg-destructive/80 transition-colors mt-2"
              >
                <LogOut className="w-6 h-6" />
                <span className="text-base font-medium">Sign Out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* 4. MOBILE HAMBURGER MENU */}
        <div className="md:hidden flex items-center">
          <Sheet>
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
                <h4 className="text-sm font-semibold text-foreground/50 uppercase tracking-wider mb-4">
                  Wellness Tools
                </h4>
                <div className="space-y-4">
                  {wellnessTools.map((tool) => {
                    const Icon = tool.icon
                    return (
                      <Link key={tool.label} href="#" className="flex items-center gap-4 py-2 hover:opacity-80 transition-opacity">
                        <Icon className="w-6 h-6 text-primary" />
                        <span className="text-base font-medium">{tool.label}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>

              <div className="border-t border-border/50 pt-6 space-y-4">

                <div className="flex items-center justify-between py-2">
                  <span className="text-base font-medium text-foreground/80">Theme</span>
                  <Button
                    variant="ghost"
                    className="p-2 rounded-full hover:bg-primary/5 transition-colors"
                  >
                    <Within
                      className="text-foreground/70 hover:text-foreground text-3xl"
                      duration={750}
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    />
                  </Button>
                </div>

                <Link href="/account" className="flex items-center gap-4 py-2 hover:opacity-80 transition-opacity">
                  <Settings className="w-6 h-6 text-primary" />
                  <span className="text-base font-medium">Account Settings</span>
                </Link>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-4 w-full py-2 text-destructive hover:opacity-80 transition-opacity text-left"
                >
                  <LogOut className="w-6 h-6" />
                  <span className="text-base font-medium">Sign Out</span>
                </button>

              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  )
}
