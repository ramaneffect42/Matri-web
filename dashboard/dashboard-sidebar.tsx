'use client'

import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Settings, Lock, Heart, Bell, Palette } from 'lucide-react'

interface SidebarItem {
  id: string
  label: string
  icon: React.ReactNode
}

const menuItems: SidebarItem[] = [
  { id: 'general', label: 'General', icon: <Settings className="w-5 h-5" /> },
  { id: 'privacy', label: 'Privacy & Security', icon: <Lock className="w-5 h-5" /> },
  { id: 'wellness', label: 'Preferences', icon: <Heart className="w-5 h-5" /> },
  { id: 'notifications', label: 'Notifications', icon: <Bell className="w-5 h-5" /> },
  { id: 'customization', label: 'App Customization', icon: <Palette className="w-5 h-5" /> },
]

interface DashboardSidebarProps {
  activeTab: string
  onTabChange: (tab: string) => void
  collapsed: boolean
  onToggleCollapse: () => void
}

export function DashboardSidebar({ activeTab, onTabChange, collapsed, onToggleCollapse }: DashboardSidebarProps) {
  return (
    <>
      {/* Mobile Horizontal Navigation */}
      <div className="md:hidden sticky top-16 z-40 bg-background border-b border-border/50">
        {/* FIX: Removed the pt-5 pb-3, changed to py-0 so items center perfectly */}
        <nav className="flex items-center overflow-x-auto overflow-y-hidden px-4 py-0 gap-2 scrollbar-hide">
          {menuItems.map((item) => {
            const isActive = activeTab === item.id
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`flex items-center justify-center gap-2 px-4 py-4 border-b-2 transition-all whitespace-nowrap text-sm font-medium cursor-pointer ${isActive
                    ? 'border-primary text-primary'
                    : 'border-transparent text-foreground/70 hover:text-foreground'
                  }`}
              >
                <span className={`flex-shrink-0 ${isActive ? 'text-primary' : 'text-foreground/50 group-hover:text-foreground/70'}`}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>
      </div>

      {/* Desktop Vertical Sidebar */}
      <aside className={`hidden md:flex md:flex-col sticky md:top-16 left-0 h-[calc(100vh-4rem)] bg-background border-r border-border/50 transition-all duration-300 ${collapsed ? 'md:w-20' : 'md:w-64'
        }`}>
        <div className="p-6 space-y-6 h-full flex flex-col">
          {/* Header with Collapse Button */}
          <div className="flex items-center justify-between">
            {!collapsed && (
              <h2 className="text-lg font-semibold text-foreground">Account Settings</h2>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleCollapse}
              className="p-1 h-8 w-8 hover:bg-primary/10 cursor-pointer"
              title={collapsed ? 'Expand' : 'Collapse'}
            >
              <ChevronLeft className={`w-4 h-4 transition-transform ${collapsed ? 'rotate-180' : ''}`} />
            </Button>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-1 flex-1">
            {menuItems.map((item) => {
              const isActive = activeTab === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all relative group cursor-pointer ${isActive
                    ? 'text-primary font-medium'
                    : 'text-foreground/70 hover:text-foreground'
                    }`}
                >
                  {/* Highlight bar for active state */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full"></div>
                  )}
                  <span className={isActive ? 'text-primary' : 'text-foreground/50 group-hover:text-foreground/70 transition-colors'}>{item.icon}</span>
                  {!collapsed && <span className="text-sm">{item.label}</span>}
                </button>
              )
            })}
          </nav>
        </div>
      </aside>
    </>
  )
}
