'use client'
import React, { ReactNode } from 'react'
import { AdminAuthProvider } from '@/share-component/context/AdminAuthContext'
import { AdminProtectedLayout } from '@/share-component/admin/AdminProtectedLayout'

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <AdminAuthProvider>
      <AdminProtectedLayout>{children}</AdminProtectedLayout>
    </AdminAuthProvider>
  )
}
