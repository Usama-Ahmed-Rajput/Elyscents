'use client'
import React, { useState } from 'react'
import { useAdminAuth } from '@/share-component/context/AdminAuthContext'
import styles from './settings.module.css'

export default function AdminSettingsPage() {
  const { admin } = useAdminAuth()
  const [settings, setSettings] = useState({
    storeName: 'Al Abrar Fragrances',
    storeEmail: 'support@alabrar.com',
    storePhone: '+92-300-1234567',
    currency: 'PKR',
    timezone: 'Asia/Karachi',
  })

  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    localStorage.setItem('storeSettings', JSON.stringify(settings))
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className={styles.settings_container}>
      <h1>Settings</h1>

      <div className={styles.settings_card}>
        <h2>Admin Profile</h2>
        <div className={styles.info_group}>
          <label>Username</label>
          <p>{admin?.username}</p>
        </div>
        <div className={styles.info_group}>
          <label>Email</label>
          <p>{admin?.email}</p>
        </div>
      </div>

      <div className={styles.settings_card}>
        <h2>Store Settings</h2>

        <div className={styles.form_group}>
          <label>Store Name</label>
          <input
            type="text"
            value={settings.storeName}
            onChange={(e) =>
              setSettings({ ...settings, storeName: e.target.value })
            }
          />
        </div>

        <div className={styles.form_group}>
          <label>Store Email</label>
          <input
            type="email"
            value={settings.storeEmail}
            onChange={(e) =>
              setSettings({ ...settings, storeEmail: e.target.value })
            }
          />
        </div>

        <div className={styles.form_group}>
          <label>Store Phone</label>
          <input
            type="tel"
            value={settings.storePhone}
            onChange={(e) =>
              setSettings({ ...settings, storePhone: e.target.value })
            }
          />
        </div>

        <div className={styles.form_row}>
          <div className={styles.form_group}>
            <label>Currency</label>
            <select
              value={settings.currency}
              onChange={(e) =>
                setSettings({ ...settings, currency: e.target.value })
              }
            >
              <option value="PKR">Pakistani Rupee (PKR)</option>
              <option value="USD">US Dollar (USD)</option>
              <option value="EUR">Euro (EUR)</option>
            </select>
          </div>

          <div className={styles.form_group}>
            <label>Timezone</label>
            <select
              value={settings.timezone}
              onChange={(e) =>
                setSettings({ ...settings, timezone: e.target.value })
              }
            >
              <option value="Asia/Karachi">Asia/Karachi (PKT)</option>
              <option value="Asia/Dubai">Asia/Dubai (GST)</option>
              <option value="UTC">UTC</option>
            </select>
          </div>
        </div>

        <button className={styles.save_btn} onClick={handleSave}>
          Save Settings
        </button>

        {saved && <div className={styles.success_msg}>Settings saved successfully!</div>}
      </div>

      <div className={styles.settings_card}>
        <h2>About</h2>
        <p>Al Abrar Fragrances Admin Panel v1.0</p>
        <p>Complete admin solution for managing products, orders, and SEO settings.</p>
      </div>
    </div>
  )
}
