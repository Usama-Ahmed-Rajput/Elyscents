'use client'
import React, { ReactNode } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useAdminAuth } from '@/share-component/context/AdminAuthContext'
import AdminSidebar from './AdminSidebar'
import AdminHeader from './AdminHeader'
import styles from './AdminLayout.module.css'

export const AdminProtectedLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAdminAuth()
  const router = useRouter()
  const pathname = usePathname()

  React.useEffect(() => {
    if (!isLoading && !isAuthenticated && !pathname.includes('/login')) {
      router.push('/admin/login')
    }
  }, [isAuthenticated, isLoading, pathname, router])

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Loading...</p>
      </div>
    )
  }

  if (pathname.includes('/login')) {
    return <>{children}</>
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className={styles.admin_layout}>
      <AdminSidebar />
      <div className={styles.main_content}>
        <AdminHeader />
        <div className={styles.content_area}>{children}</div>
      </div>
    </div>
  )
}
