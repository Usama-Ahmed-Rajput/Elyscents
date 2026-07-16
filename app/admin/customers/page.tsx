'use client'
import React from 'react'
import styles from './customers.module.css'

export default function AdminCustomersPage() {
  const customers = [
    { id: 1, name: 'Ahmed Khan', email: 'ahmed@example.com', orders: 5, totalSpent: 15000 },
    { id: 2, name: 'Fatima Ali', email: 'fatima@example.com', orders: 3, totalSpent: 8500 },
    { id: 3, name: 'Hassan Malik', email: 'hassan@example.com', orders: 7, totalSpent: 22000 },
  ]

  return (
    <div className={styles.customers_container}>
      <h1>Customer Management</h1>
      <p>View and manage your customers</p>

      <div className={styles.customers_table}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Total Orders</th>
              <th>Total Spent</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.orders}</td>
                <td>Rs. {customer.totalSpent.toLocaleString()}</td>
                <td>
                  <button className={styles.view_btn}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
