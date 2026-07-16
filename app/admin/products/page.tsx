'use client'
import React, { useState, useEffect } from 'react'
import all_products_data from '@/share-component/api/all_products.json'
import styles from './products.module.css'

interface Product {
  id: string
  slug: string
  name: string
  description: string
  real_price: number
  sale_price: number
  discount_percentage: number
  src: string
  src1?: string
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [formData, setFormData] = useState<Partial<Product>>({})

  useEffect(() => {
    const productsArray = (all_products_data as any).all_products || all_products_data
    setProducts(productsArray)
  }, [])

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddProduct = () => {
    setEditingId(null)
    setFormData({})
    setShowForm(true)
  }

  const handleEditProduct = (product: Product) => {
    setEditingId(product.id)
    setFormData(product)
    setShowForm(true)
  }

  const handleDeleteProduct = (id: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter((p) => p.id !== id))
    }
  }

  const handleSaveProduct = () => {
    if (editingId) {
      setProducts(
        products.map((p) => (p.id === editingId ? { ...formData as Product } : p))
      )
    } else {
      const newProduct: Product = {
        id: String(Date.now()),
        slug: formData.name?.toLowerCase().replace(/\s+/g, '-') || '',
        ...formData,
      } as Product
      setProducts([...products, newProduct])
    }
    setShowForm(false)
  }

  return (
    <div className={styles.products_container}>
      <div className={styles.header}>
        <h1>Products Management</h1>
        <button className={styles.add_btn} onClick={handleAddProduct}>
          ✚ Add New Product
        </button>
      </div>

      <div className={styles.search_bar}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {showForm && (
        <div className={styles.modal_overlay}>
          <div className={styles.modal}>
            <div className={styles.modal_header}>
              <h2>{editingId ? 'Edit Product' : 'Add New Product'}</h2>
              <button
                className={styles.close_btn}
                onClick={() => setShowForm(false)}
              >
                ×
              </button>
            </div>

            <div className={styles.form_group}>
              <label>Product Name</label>
              <input
                type="text"
                value={formData.name || ''}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Enter product name"
              />
            </div>

            <div className={styles.form_group}>
              <label>Description</label>
              <textarea
                value={formData.description || ''}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Enter product description"
                rows={3}
              />
            </div>

            <div className={styles.form_row}>
              <div className={styles.form_group}>
                <label>Original Price (Rs.)</label>
                <input
                  type="number"
                  value={formData.real_price || ''}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      real_price: Number(e.target.value),
                    })
                  }
                  placeholder="Enter original price"
                />
              </div>

              <div className={styles.form_group}>
                <label>Sale Price (Rs.)</label>
                <input
                  type="number"
                  value={formData.sale_price || ''}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sale_price: Number(e.target.value),
                    })
                  }
                  placeholder="Enter sale price"
                />
              </div>

              <div className={styles.form_group}>
                <label>Discount %</label>
                <input
                  type="number"
                  value={formData.discount_percentage || ''}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      discount_percentage: Number(e.target.value),
                    })
                  }
                  placeholder="Enter discount percentage"
                />
              </div>
            </div>

            <div className={styles.form_row}>
              <div className={styles.form_group}>
                <label>Product Image URL</label>
                <input
                  type="text"
                  value={formData.src || ''}
                  onChange={(e) =>
                    setFormData({ ...formData, src: e.target.value })
                  }
                  placeholder="Enter image URL"
                />
              </div>
            </div>

            <div className={styles.modal_footer}>
              <button
                className={styles.cancel_btn}
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
              <button className={styles.save_btn} onClick={handleSaveProduct}>
                {editingId ? 'Update Product' : 'Add Product'}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className={styles.products_table}>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Original Price</th>
              <th>Sale Price</th>
              <th>Discount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>
                  <div className={styles.product_cell}>
                    <img src={product.src} alt={product.name} />
                    <div>
                      <p className={styles.product_name}>{product.name}</p>
                      <p className={styles.product_desc}>
                        {product.description.substring(0, 50)}...
                      </p>
                    </div>
                  </div>
                </td>
                <td>Rs. {product.real_price.toLocaleString()}</td>
                <td>Rs. {product.sale_price.toLocaleString()}</td>
                <td>{product.discount_percentage}%</td>
                <td>
                  <div className={styles.actions}>
                    <button
                      className={styles.edit_btn}
                      onClick={() => handleEditProduct(product)}
                    >
                      Edit
                    </button>
                    <button
                      className={styles.delete_btn}
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredProducts.length === 0 && (
        <p className={styles.no_data}>No products found</p>
      )}
    </div>
  )
}
