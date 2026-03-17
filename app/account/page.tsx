'use client'

import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { useEffect, useState } from 'react'
import { DashboardNav } from '@/dashboard/dashboard-nav'
import { DashboardSidebar } from '@/dashboard/dashboard-sidebar'
import { GeneralSettings } from '@/dashboard/general-settings'
import { PrivacySettings } from '@/dashboard/privacy-settings'
import { WellnessSettings } from '@/dashboard/wellness-settings'
import { NotificationsSettings } from '@/dashboard/notifications-settings'
import { CustomizationSettings } from '@/dashboard/customization-settings'

type TabType = 'general' | 'privacy' | 'wellness' | 'notifications' | 'customization'

export default function AccountPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<TabType>('general')
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  if (loading) {
    return null
  }

  if (!user) {
    return null
  }

  return (
    <>
      <DashboardNav hideUserMenu={true} />
      <div className="flex min-h-screen bg-background">
        {/* Sidebar */}
        <DashboardSidebar 
          activeTab={activeTab} 
          onTabChange={(tab) => setActiveTab(tab as TabType)}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
        
        {/* Main Content */}
        <main className="flex-1">
          <div className="p-8 md:p-12 max-w-4xl mx-auto w-full">
            {activeTab === 'general' && <GeneralSettings />}
            {activeTab === 'privacy' && <PrivacySettings />}
            {activeTab === 'wellness' && <WellnessSettings />}
            {activeTab === 'notifications' && <NotificationsSettings />}
            {activeTab === 'customization' && <CustomizationSettings />}
          </div>
        </main>
      </div>
    </>
  )
}
