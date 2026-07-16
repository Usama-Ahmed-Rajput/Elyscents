'use client'
import React, { useState, useEffect } from 'react'
import styles from './dashboard.module.css'

interface DashboardStats {
  totalOrders: number
  totalRevenue: number
  totalCustomers: number
  newOrdersToday: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalOrders: 0,
    totalRevenue: 0,
    totalCustomers: 0,
    newOrdersToday: 0,
  })
  const [recentOrders, setRecentOrders] = useState<any[]>([])

  useEffect(() => {
    // Fetch data from localStorage (in production, use API)
    const orders = JSON.parse(localStorage.getItem('adminOrders') || '[]')
    const totalRevenue = orders.reduce((sum: number, order: any) => sum + (order.total || 0), 0)
    
    setStats({
      totalOrders: orders.length,
      totalRevenue,
      totalCustomers: 15, // Sample data
      newOrdersToday: 3, // Sample data
    })

    setRecentOrders(orders.slice(-5).reverse())
  }, [])

  const StatCard = ({ title, value, icon }: any) => (
    <div className={styles.stat_card}>
      <div className={styles.stat_icon}>{icon}</div>
      <div className={styles.stat_content}>
        <p className={styles.stat_title}>{title}</p>
        <p className={styles.stat_value}>{value}</p>
      </div>
    </div>
  )

  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>

      <div className={styles.stats_grid}>
        <StatCard
          title="Total Orders"
          value={stats.totalOrders}
          icon="🛒"
        />
        <StatCard
          title="Total Revenue"
          value={`Rs. ${stats.totalRevenue.toLocaleString()}`}
          icon="💰"
        />
        <StatCard
          title="Total Customers"
          value={stats.totalCustomers}
          icon="👥"
        />
        <StatCard
          title="New Orders Today"
          value={stats.newOrdersToday}
          icon="📦"
        />
      </div>

      <div className={styles.recent_section}>
        <h2>Recent Orders</h2>
        {recentOrders.length > 0 ? (
          <div className={styles.orders_table}>
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, index) => (
                  <tr key={index}>
                    <td>#{order.id || index + 1}</td>
                    <td>{order.customerName || 'N/A'}</td>
                    <td>Rs. {(order.total || 0).toLocaleString()}</td>
                    <td>
                      <span className={`${styles.status} ${styles[order.status?.toLowerCase() || 'pending']}`}>
                        {order.status || 'Pending'}
                      </span>
                    </td>
                    <td>{new Date().toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className={styles.no_data}>No orders yet</p>
        )}
      </div>
    </div>
  )
}
