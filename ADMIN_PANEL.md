# Al Abrar Fragrances - Admin Panel Documentation

## Overview
The Al Abrar Fragrances admin panel is a comprehensive management system for handling products, orders, customers, and SEO settings. It provides administrators with a professional interface to manage all aspects of the e-commerce store.

## Access & Authentication

### Login Page
- **URL**: `/admin/login`
- **Demo Credentials**: 
  - Username: `admin`
  - Password: `admin123`

### Authentication Features
- Session-based authentication using localStorage
- Automatic redirect to login for unauthorized access
- Protected routes that prevent direct access without authentication
- Logout functionality with session clearing

## Admin Panel Features

### 1. Dashboard (`/admin/dashboard`)
**Overview Statistics**
- Total Orders: Count of all orders in the system
- Total Revenue: Sum of all order amounts
- Total Customers: Count of registered customers
- New Orders Today: Orders received on current date

**Recent Orders Table**
- Displays last 5 orders with details
- Shows order ID, customer name, amount, status, and date
- Real-time updates from localStorage

### 2. Product Management (`/admin/products`)

**Features**
- **Add New Product**: Create new products with complete details
- **Edit Product**: Update existing product information
- **Delete Product**: Remove products from catalog
- **Search & Filter**: Find products by name or description
- **Product Information**:
  - Product name and slug
  - Description
  - Original price (real_price)
  - Sale price (sale_price)
  - Discount percentage
  - Product images (primary and secondary)

**Modal Form**
- Clean, user-friendly form with validation
- Auto-generated slug from product name
- Price calculation fields
- Image URL input
- Save/Cancel buttons

### 3. Order Management (`/admin/orders`)

**Features**
- **View All Orders**: List view with sorting and filtering
- **Filter by Status**: Quick filter buttons (All, Pending, Processing, Shipped, Delivered, Cancelled)
- **Search Orders**: Search by customer name or order ID
- **Order Details Panel**:
  - Order ID and date
  - Customer information (name, email)
  - Items list with quantities and prices
  - Order total
  - Status selection dropdown

**Status Management**
Order workflow: Pending → Processing → Shipped → Delivered (or Cancelled)
- Visual status badges with color coding
- Status can be changed directly from the details panel
- Real-time updates stored in localStorage

**Actions**
- View full order details
- Change order status
- Delete orders
- Export-ready structure

### 4. SEO Management (`/admin/seo`)

**Pages Available**
- Homepage (`/`)
- Products Page (`/products`)
- Orders Page (`/orders`)

**SEO Fields**

**Basic Settings**
- **Meta Title**: Page title (50-60 character limit with live counter)
- **Meta Description**: Page description (150-160 character limit with live counter)
- **Keywords**: Comma-separated keywords
- **H1 Tag**: Primary heading for the page

**Open Graph (Social Media)**
- **OG Title**: Title for social sharing
- **OG Description**: Description for social sharing
- **Image Alt Text**: Alt text for images

**Structured Data**
- **Schema Type**: Select from (OnlineStore, CollectionPage, ProductPage, WebPage, FAQPage)

**Persistence**
- All SEO settings are stored in localStorage
- Settings persist across browser sessions
- Auto-save functionality

### 5. Customer Management (`/admin/customers`)

**Features**
- View all customers with contact information
- Display customer statistics:
  - Total orders count
  - Total amount spent
  - Customer email
- Quick customer view buttons
- Ready for expansion with customer profiles

### 6. Notifications (`/admin/notifications`)

**Notification Types**
- **Order Notifications**: New orders, order updates
- **Stock Alerts**: Low stock warnings
- **System Alerts**: General system notifications

**Features**
- Real-time notification display
- Mark notifications as read
- Delete notifications
- Visual indicators for unread notifications
- Timestamp for each notification
- Color-coded icons by type

### 7. Settings (`/admin/settings`)

**Admin Profile Section**
- Display username
- Display email address

**Store Settings**
- Store Name
- Store Email
- Store Phone
- Currency Selection (PKR, USD, EUR)
- Timezone Selection (Asia/Karachi, Asia/Dubai, UTC)

**About Section**
- Application version and description

## Technical Architecture

### File Structure
```
/app/admin/
├── login/
│   ├── page.tsx (Login page)
│   └── login.module.css
├── dashboard/
│   ├── page.tsx (Dashboard)
│   └── dashboard.module.css
├── products/
│   ├── page.tsx (Product management)
│   └── products.module.css
├── orders/
│   ├── page.tsx (Order management)
│   └── orders.module.css
├── seo/
│   ├── page.tsx (SEO management)
│   └── seo.module.css
├── customers/
│   ├── page.tsx (Customer management)
│   └── customers.module.css
├── notifications/
│   ├── page.tsx (Notifications)
│   └── notifications.module.css
├── settings/
│   ├── page.tsx (Settings)
│   └── settings.module.css
└── layout.tsx (Admin layout wrapper)

/share-component/admin/
├── AdminAuthContext.tsx (Authentication context)
├── AdminProtectedLayout.tsx (Route protection)
├── AdminSidebar.tsx (Navigation sidebar)
├── AdminHeader.tsx (Top header)
└── AdminLayout.module.css (Global admin styles)
```

### Key Components

**AdminAuthContext**
- Manages authentication state
- Provides login/logout functions
- Stores admin info in localStorage
- Validates credentials

**AdminProtectedLayout**
- Wraps protected routes
- Redirects unauthenticated users to login
- Manages loading state

**AdminSidebar**
- Navigation menu with 7 main sections
- Active route highlighting
- Responsive design

**AdminHeader**
- Displays admin username
- Logout button
- Store name branding

## Data Storage

All data is currently stored in browser's localStorage:
- **adminUser**: Currently logged-in admin user
- **adminOrders**: Order data
- **seoPages**: SEO settings for each page
- **storeSettings**: Store configuration

### Future Database Integration
Replace localStorage with database API calls:
- PostgreSQL with Neon
- MongoDB
- Firebase Firestore

## Security Features

**Current Implementation**
- Session-based authentication
- Protected routes with role checking
- Logout clears session
- Automatic redirect for unauthorized access

**Recommended Improvements**
- Add password hashing (bcrypt)
- Implement JWT tokens
- Add CSRF protection
- Rate limiting on login attempts
- Two-factor authentication
- Activity logging

## Usage Guide

### Adding a New Product
1. Click "Add New Product" button
2. Fill in product details (name, description, prices)
3. Upload product image URL
4. Click "Add Product"
5. Product appears in product list

### Managing Orders
1. View orders in the orders page
2. Filter by status using quick filter buttons
3. Search for specific orders
4. Click "View" to see full details
5. Change status using dropdown
6. Delete order if needed

### Updating SEO Settings
1. Navigate to SEO Settings
2. Click "Edit SEO" on any page card
3. Update meta tags and descriptions
4. Fill in keywords and H1 tag
5. Add Open Graph information
6. Select Schema type
7. Click "Save SEO Settings"

### Viewing Notifications
1. Go to Notifications page
2. View all active notifications
3. Click "Mark as read" for important notifications
4. Delete notifications as needed

## Performance Optimization

- Lazy loading for components
- Optimized re-renders with React hooks
- CSS modules for scoped styling
- Responsive design for all devices
- Touch-friendly interface for mobile

## Responsive Design

The admin panel is fully responsive:
- **Desktop** (1024px+): Full sidebar, multi-column layouts
- **Tablet** (768px - 1024px): Adjusted spacing, stacked columns
- **Mobile** (< 768px): Mobile-optimized layout, collapsible sections

## Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

1. **Analytics Dashboard**
   - Sales charts and graphs
   - Customer acquisition trends
   - Revenue reports

2. **Bulk Operations**
   - Bulk product upload/export
   - Bulk order status updates
   - CSV export functionality

3. **Email Notifications**
   - Customer notifications
   - Order confirmations
   - Stock alerts

4. **Inventory Management**
   - Stock level tracking
   - Automatic low stock alerts
   - Reorder management

5. **Advanced Reporting**
   - Sales by category
   - Customer lifetime value
   - Inventory turnover

6. **Marketing Tools**
   - Email campaigns
   - Discount codes
   - Promotional banners

## Troubleshooting

**Cannot Login**
- Check credentials (admin/admin123)
- Clear browser cache and localStorage
- Ensure cookies are enabled

**Data Not Saving**
- Check browser's localStorage limits
- Clear browser cache
- Try in incognito/private mode

**Sidebar Not Showing**
- Ensure JavaScript is enabled
- Check browser compatibility
- Clear browser cache

## Support & Maintenance

For issues or feature requests:
- Check documentation first
- Review browser console for errors
- Test in different browsers
- Clear cache and try again

---

**Version**: 1.0  
**Last Updated**: 2024  
**Admin Email**: admin@alabrar.com
