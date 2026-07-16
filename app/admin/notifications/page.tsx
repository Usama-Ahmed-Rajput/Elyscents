'use client'
import React, { useState, useEffect } from 'react'
import styles from './notifications.module.css'

interface Notification {
  id: string
  type: 'order' | 'stock' | 'alert'
  message: string
  timestamp: string
  read: boolean
}

export default function AdminNotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([])

  useEffect(() => {
    const sampleNotifications: Notification[] = [
      {
        id: '1',
        type: 'order',
        message: 'New order received from Ahmed Khan',
        timestamp: new Date().toISOString(),
        read: false,
      },
      {
        id: '2',
        type: 'stock',
        message: 'Royal Oud stock is running low (5 items left)',
        timestamp: new Date(Date.now() - 60000).toISOString(),
        read: false,
      },
      {
        id: '3',
        type: 'alert',
        message: 'Daily sales report is ready',
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        read: true,
      },
    ]
    setNotifications(sampleNotifications)
  }, [])

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    )
  }

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id))
  }

  const getIcon = (type: string) => {
    switch (type) {
      case 'order':
        return '🛒'
      case 'stock':
        return '📦'
      case 'alert':
        return '⚠️'
      default:
        return '🔔'
    }
  }

  return (
    <div className={styles.notifications_container}>
      <h1>Notifications</h1>
      <p>Stay updated with important alerts and notifications</p>

      <div className={styles.notifications_list}>
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`${styles.notification_item} ${
                !notification.read ? styles.unread : ''
              }`}
            >
              <div className={styles.notification_icon}>
                {getIcon(notification.type)}
              </div>
              <div className={styles.notification_content}>
                <p className={styles.message}>{notification.message}</p>
                <span className={styles.timestamp}>
                  {new Date(notification.timestamp).toLocaleString()}
                </span>
              </div>
              <div className={styles.notification_actions}>
                {!notification.read && (
                  <button
                    className={styles.mark_read_btn}
                    onClick={() => markAsRead(notification.id)}
                  >
                    Mark as read
                  </button>
                )}
                <button
                  className={styles.delete_btn}
                  onClick={() => deleteNotification(notification.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className={styles.no_notifications}>No notifications</p>
        )}
      </div>
    </div>
  )
}
