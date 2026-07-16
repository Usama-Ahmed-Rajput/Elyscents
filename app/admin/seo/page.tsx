'use client'
import React, { useState, useEffect } from 'react'
import styles from './seo.module.css'

interface SEOPage {
  route: string
  title: string
  description: string
  keywords: string
  h1: string
  ogTitle: string
  ogDescription: string
  imageAltText: string
  schemaType: string
}

export default function AdminSEOPage() {
  const [pages, setPages] = useState<SEOPage[]>([])
  const [selectedPage, setSelectedPage] = useState<SEOPage | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState<Partial<SEOPage>>({})

  useEffect(() => {
    const defaultPages: SEOPage[] = [
      {
        route: '/',
        title: 'Al Abrar Fragrances - Premium Perfumes',
        description: 'Discover premium fragrances at Al Abrar. Shop authentic perfumes with exclusive collections.',
        keywords: 'fragrances, perfumes, Al Abrar, luxury scents, oud',
        h1: 'Al Abrar Fragrances - Premium Perfumes and Scents Online',
        ogTitle: 'Al Abrar Fragrances',
        ogDescription: 'Shop premium fragrances at Al Abrar',
        imageAltText: 'Al Abrar Fragrances Logo',
        schemaType: 'OnlineStore',
      },
      {
        route: '/products',
        title: 'Products | Al Abrar Fragrances',
        description: 'Browse our collection of premium perfumes and fragrances. Find your perfect scent today.',
        keywords: 'perfumes, fragrances, shop, buy online, scents',
        h1: 'Our Premium Perfume Collection',
        ogTitle: 'Shop Perfumes',
        ogDescription: 'Browse our premium fragrances collection',
        imageAltText: 'Perfume Collection',
        schemaType: 'CollectionPage',
      },
      {
        route: '/orders',
        title: 'Your Orders | Al Abrar Fragrances',
        description: 'Track and manage your orders at Al Abrar Fragrances.',
        keywords: 'orders, tracking, purchases, account',
        h1: 'Order Management',
        ogTitle: 'Your Orders',
        ogDescription: 'Manage your perfume orders',
        imageAltText: 'Orders Page',
        schemaType: 'WebPage',
      },
    ]

    const storedPages = localStorage.getItem('seoPages')
    if (storedPages) {
      setPages(JSON.parse(storedPages))
    } else {
      setPages(defaultPages)
      localStorage.setItem('seoPages', JSON.stringify(defaultPages))
    }
  }, [])

  const handleSelectPage = (page: SEOPage) => {
    setSelectedPage(page)
    setFormData(page)
    setShowForm(true)
  }

  const handleSave = () => {
    if (selectedPage && formData.route) {
      const updatedPages = pages.map((p) =>
        p.route === selectedPage.route ? { ...formData as SEOPage } : p
      )
      setPages(updatedPages)
      localStorage.setItem('seoPages', JSON.stringify(updatedPages))
      setShowForm(false)
      alert('SEO settings updated successfully!')
    }
  }

  return (
    <div className={styles.seo_container}>
      <div className={styles.header}>
        <h1>SEO Management</h1>
        <p>Manage SEO settings for each page of your website</p>
      </div>

      <div className={styles.pages_list}>
        {pages.map((page) => (
          <div key={page.route} className={styles.page_card}>
            <div className={styles.card_content}>
              <h3>{page.title}</h3>
              <p className={styles.route}>{page.route}</p>
              <p className={styles.description}>{page.description.substring(0, 80)}...</p>
            </div>
            <button
              className={styles.edit_btn}
              onClick={() => handleSelectPage(page)}
            >
              Edit SEO
            </button>
          </div>
        ))}
      </div>

      {showForm && selectedPage && (
        <div className={styles.modal_overlay}>
          <div className={styles.modal}>
            <div className={styles.modal_header}>
              <h2>Edit SEO - {selectedPage.route}</h2>
              <button
                className={styles.close_btn}
                onClick={() => setShowForm(false)}
              >
                ×
              </button>
            </div>

            <div className={styles.form_section}>
              <h3>Basic Settings</h3>

              <div className={styles.form_group}>
                <label>Meta Title (50-60 characters)</label>
                <input
                  type="text"
                  value={formData.title || ''}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Enter meta title"
                  maxLength={60}
                />
                <span className={styles.char_count}>
                  {(formData.title || '').length}/60
                </span>
              </div>

              <div className={styles.form_group}>
                <label>Meta Description (150-160 characters)</label>
                <textarea
                  value={formData.description || ''}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Enter meta description"
                  maxLength={160}
                  rows={3}
                />
                <span className={styles.char_count}>
                  {(formData.description || '').length}/160
                </span>
              </div>

              <div className={styles.form_group}>
                <label>Keywords (comma-separated)</label>
                <input
                  type="text"
                  value={formData.keywords || ''}
                  onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                  placeholder="Enter keywords"
                />
              </div>

              <div className={styles.form_group}>
                <label>H1 Tag</label>
                <input
                  type="text"
                  value={formData.h1 || ''}
                  onChange={(e) => setFormData({ ...formData, h1: e.target.value })}
                  placeholder="Enter H1 tag"
                />
              </div>
            </div>

            <div className={styles.form_section}>
              <h3>Open Graph (Social Media)</h3>

              <div className={styles.form_group}>
                <label>OG Title</label>
                <input
                  type="text"
                  value={formData.ogTitle || ''}
                  onChange={(e) => setFormData({ ...formData, ogTitle: e.target.value })}
                  placeholder="Enter OG title"
                />
              </div>

              <div className={styles.form_group}>
                <label>OG Description</label>
                <textarea
                  value={formData.ogDescription || ''}
                  onChange={(e) => setFormData({ ...formData, ogDescription: e.target.value })}
                  placeholder="Enter OG description"
                  rows={2}
                />
              </div>

              <div className={styles.form_group}>
                <label>Image Alt Text</label>
                <input
                  type="text"
                  value={formData.imageAltText || ''}
                  onChange={(e) => setFormData({ ...formData, imageAltText: e.target.value })}
                  placeholder="Enter alt text for images"
                />
              </div>
            </div>

            <div className={styles.form_section}>
              <h3>Structured Data</h3>

              <div className={styles.form_group}>
                <label>Schema Type</label>
                <select
                  value={formData.schemaType || ''}
                  onChange={(e) => setFormData({ ...formData, schemaType: e.target.value })}
                >
                  <option value="OnlineStore">Online Store</option>
                  <option value="CollectionPage">Collection Page</option>
                  <option value="ProductPage">Product Page</option>
                  <option value="WebPage">Web Page</option>
                  <option value="FAQPage">FAQ Page</option>
                </select>
              </div>
            </div>

            <div className={styles.modal_footer}>
              <button
                className={styles.cancel_btn}
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
              <button className={styles.save_btn} onClick={handleSave}>
                Save SEO Settings
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
