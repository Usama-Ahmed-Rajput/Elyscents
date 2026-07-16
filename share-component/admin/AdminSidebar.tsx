'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './AdminLayout.module.css'

const AdminSidebar = () => {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const menuItems = [
    { label: 'Dashboard', path: '/admin/dashboard', icon: '📊' },
    { label: 'Products', path: '/admin/products', icon: '📦' },
    { label: 'Orders', path: '/admin/orders', icon: '🛒' },
    { label: 'Customers', path: '/admin/customers', icon: '👥' },
    { label: 'SEO Settings', path: '/admin/seo', icon: '🔍' },
    { label: 'Notifications', path: '/admin/notifications', icon: '🔔' },
    { label: 'Settings', path: '/admin/settings', icon: '⚙️' },
  ]

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar_header}>
        <div className={styles.logo_admin}>
          <img src="/al-abrar-logo.png" alt="Al Abrar" />
          <h2>Admin</h2>
        </div>
      </div>

      <nav className={styles.sidebar_nav}>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`${styles.nav_item} ${isActive(item.path) ? styles.active : ''}`}
          >
            <span className={styles.icon}>{item.icon}</span>
            <span className={styles.label}>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default AdminSidebar
