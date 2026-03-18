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
    <div className="min-h-screen bg-background flex flex-col">
      <DashboardNav hideUserMenu={true} />

      {/* Both Sidebar and Main Content are now sharing this Flex row */}
      <div className="flex flex-1 md:flex-row flex-col">
        <DashboardSidebar
          activeTab={activeTab}
          onTabChange={(tab) => setActiveTab(tab as TabType)}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        />

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {/* FIX: Increased mobile top padding to pt-12 to push the headings down safely */}
          <div className="px-4 pt-12 pb-12 md:p-8 lg:p-12 max-w-4xl mx-auto w-full">
            {activeTab === 'general' && <GeneralSettings />}
            {activeTab === 'privacy' && <PrivacySettings />}
            {activeTab === 'wellness' && <WellnessSettings />}
            {activeTab === 'notifications' && <NotificationsSettings />}
            {activeTab === 'customization' && <CustomizationSettings />}
          </div>
        </main>
      </div>
    </div>
  )
}
