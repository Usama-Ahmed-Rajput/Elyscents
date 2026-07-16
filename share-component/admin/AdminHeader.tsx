'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useAdminAuth } from '@/share-component/context/AdminAuthContext'
import styles from './AdminLayout.module.css'

const AdminHeader = () => {
  const { admin, logout } = useAdminAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push('/admin/login')
  }

  return (
    <header className={styles.admin_header}>
      <div className={styles.header_left}>
        <h1>Al Abrar Fragrances Admin</h1>
      </div>
      <div className={styles.header_right}>
        <div className={styles.user_info}>
          <span className={styles.username}>{admin?.username}</span>
          <button className={styles.logout_btn} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}

export default AdminHeader
