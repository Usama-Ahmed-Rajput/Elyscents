'use client'
import React, { useState, useEffect } from 'react'
import styles from './orders.module.css'

interface Order {
  id: string
  customerName: string
  customerEmail: string
  items: any[]
  total: number
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled'
  date: string
}

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [filterStatus, setFilterStatus] = useState<string>('All')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('adminOrders') || '[]')
    setOrders(storedOrders)
  }, [])

  const statuses = ['All', 'Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled']

  const filteredOrders = orders.filter((order) => {
    const matchesStatus = filterStatus === 'All' || order.status === filterStatus
    const matchesSearch =
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesStatus && matchesSearch
  })

  const handleStatusChange = (orderId: string, newStatus: string) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId
        ? { ...order, status: newStatus as any }
        : order
    )
    setOrders(updatedOrders)
    localStorage.setItem('adminOrders', JSON.stringify(updatedOrders))
    if (selectedOrder?.id === orderId) {
      setSelectedOrder({
        ...selectedOrder,
        status: newStatus as any,
      })
    }
  }

  const handleDeleteOrder = (orderId: string) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      const updatedOrders = orders.filter((order) => order.id !== orderId)
      setOrders(updatedOrders)
      localStorage.setItem('adminOrders', JSON.stringify(updatedOrders))
      setSelectedOrder(null)
    }
  }

  return (
    <div className={styles.orders_container}>
      <div className={styles.header}>
        <h1>Orders Management</h1>
      </div>

      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Search by customer name or order ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.search_input}
        />

        <div className={styles.status_filter}>
          {statuses.map((status) => (
            <button
              key={status}
              className={`${styles.filter_btn} ${filterStatus === status ? styles.active : ''}`}
              onClick={() => setFilterStatus(status)}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.orders_list}>
          {filteredOrders.length > 0 ? (
            <div className={styles.orders_table}>
              <table>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order) => (
                    <tr key={order.id}>
                      <td>#{order.id}</td>
                      <td>{order.customerName}</td>
                      <td>Rs. {order.total.toLocaleString()}</td>
                      <td>
                        <span className={`${styles.status} ${styles[order.status.toLowerCase()]}`}>
                          {order.status}
                        </span>
                      </td>
                      <td>{new Date(order.date).toLocaleDateString()}</td>
                      <td>
                        <button
                          className={styles.view_btn}
                          onClick={() => setSelectedOrder(order)}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className={styles.no_data}>No orders found</p>
          )}
        </div>

        {selectedOrder && (
          <div className={styles.order_details}>
            <div className={styles.details_header}>
              <h2>Order Details</h2>
              <button
                className={styles.close_btn}
                onClick={() => setSelectedOrder(null)}
              >
                ×
              </button>
            </div>

            <div className={styles.detail_section}>
              <h3>Order Information</h3>
              <p>
                <strong>Order ID:</strong> #{selectedOrder.id}
              </p>
              <p>
                <strong>Date:</strong> {new Date(selectedOrder.date).toLocaleDateString()}
              </p>
              <p>
                <strong>Total:</strong> Rs. {selectedOrder.total.toLocaleString()}
              </p>
            </div>

            <div className={styles.detail_section}>
              <h3>Customer Information</h3>
              <p>
                <strong>Name:</strong> {selectedOrder.customerName}
              </p>
              <p>
                <strong>Email:</strong> {selectedOrder.customerEmail}
              </p>
            </div>

            <div className={styles.detail_section}>
              <h3>Items</h3>
              <div className={styles.items_list}>
                {selectedOrder.items.map((item, index) => (
                  <div key={index} className={styles.item}>
                    <span>{item.name}</span>
                    <span>x{item.quantity}</span>
                    <span>Rs. {(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.detail_section}>
              <h3>Order Status</h3>
              <select
                value={selectedOrder.status}
                onChange={(e) =>
                  handleStatusChange(selectedOrder.id, e.target.value)
                }
                className={styles.status_select}
              >
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>

            <div className={styles.actions}>
              <button
                className={styles.delete_btn}
                onClick={() => {
                  handleDeleteOrder(selectedOrder.id)
                }}
              >
                Delete Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
