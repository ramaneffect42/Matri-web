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
    <aside className={`fixed md:sticky md:top-0 left-0 h-screen bg-background border-r border-border transition-all duration-300 ${collapsed ? 'w-20 md:w-20' : 'w-64 md:w-64'
      }`}>
      <div className="p-6 space-y-6 h-full flex flex-col">
        {/* Header with Collapse Button */}
        <div className={`flex items-center ${collapsed ? 'justify-center' : 'justify-between'}`}>{!collapsed && (
          <h2 className="text-lg font-semibold text-foreground">Account Settings</h2>
        )}
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleCollapse}
            className="p-1 h-8 w-8 hover:bg-primary/10 cursor-pointer transition-all"
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
  )
}
