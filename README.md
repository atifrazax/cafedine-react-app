# ☕ CafeDine App

**CadeDine** is a full-stack **MERN (MongoDB, Express, React, Node.js)** restaurant web application featuring a complete **user and admin panel**, **online payments**, **coupon management**, and **role-based access control**.

---

## 🚀 Features

### User

- User authentication with **JWT** and **Google OAuth**
- View products with **category filter**, search by name, and price sorting
- Add products to cart and place orders
- Checkout with **Stripe** (online payment) or **Cash on Delivery**
- View order details (products, payment, shipping)
- Apply coupons (fixed or percentage-based)
- Frontend routes protected based on role (user only access)

### Admin

- Admin login with JWT
- Manage **products** (CRUD: name, description, price, sale price, stock, image, category)
- Manage **orders** and **payment status**
- Manage **coupons** (add, delete, validate expiry)
- Manage **managers** (add, list, delete)
- View **dashboard**: total sales, active users, top product, top 5 products
- **Cloudinary integration** for hassle-free image handling
- Stripe webhook automatically updates order payment status
- Frontend routes protected based on role (admin only access)

### Other Features

- Role-based route protection (admin, user)
- CSRF protection for user routes
- React Router for frontend navigation
- Responsive UI using **Tailwind CSS**
- Local environment configuration via `.env` file (`.env.example` included)
- Easy setup for development (`npm run dev` for client and server)

---

## 🛠️ Tech Stack

- **Frontend**: Fully responsive and optimized UI using React.js, React Router, Tailwind CSS, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT for users and admin, Google OAuth for users
- **Payment**: Stripe checkout integration with webhook auto-updating payment status
- **Image Handling & Storage**: Product images stored in Cloudinary for optimized performance
- **Animations**: Intersection Observer
- **Coupons**: Apply fixed or percentage-based discounts
- **Role-Based Access**: Certain routes and pages are protected for **admin** or **user** roles only
- **Security**: CSRF protection, role-based access
- **Admin Features**: Manage products (CRUD), orders, coupons, managers, and view dashboard stats
- **User Features**: Browse products, filter/search, cart management, checkout, and view order details

---

## Installation

1. Clone the repository:

```bash
git clone <repo-url>
cd cadeDine
```

2. Install dependencies for both server and client:

```bash
cd client && npm install
cd server && npm install
```

3. Create .env file using .env.example and configure(client):

```bash
VITE_API_URL=your_server_URL
VITE_STRIPE_KEY=your_stripe_publishable_key
```

4. Create .env file using .env.example and configure(server):

```bash
NODE_ENV=production
CLIENT_URL=http://localhost:5173
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_keys
CLOUDINARY_SECRET=your_keys
GOOGLE_CLIENT_ID=your_keys
GOOGLE_CLIENT_SECRET=your_keys
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback
STRIPE_SK=your_stripe_secrect_key
STRIPE_WEBHOOK_SECRET=your_keys
```

5 . Run development client & server:

```bash
cd client && npm run dev
cd server && npm run dev
```

## Backend Routes

### Admin

| Route                            | Method | Description         |
| -------------------------------- | ------ | ------------------- |
| `/admin/login`                   | POST   | Admin login         |
| `/admin/dashboard`               | GET    | Admin dashboard     |
| `/admin/products`                | GET    | List all products   |
| `/admin/add-product`             | POST   | Add new product     |
| `/admin/update-product/:id`      | PATCH  | Update product      |
| `/admin/delete-product/:id`      | DELETE | Delete product      |
| `/admin/all-coupons`             | GET    | List coupons        |
| `/admin/add-coupon`              | POST   | Add coupon          |
| `/admin/delete-coupon/:id`       | DELETE | Delete coupon       |
| `/admin/register-manager`        | POST   | Add manager         |
| `/admin/get-managers`            | GET    | Get managers list   |
| `/admin/delete-user-manager/:id` | DELETE | Delete manager/user |
| `/admin/get-users`               | GET    | Get users list      |

### Orders

| Route                         | Method | Description         |
| ----------------------------- | ------ | ------------------- |
| `/order/all`                  | GET    | Get all orders      |
| `/order/new`                  | POST   | Create new order    |
| `/order/update/status/:id`    | PATCH  | Update order status |
| `/order/v1/checkout/sessions` | POST   | Stripe checkout     |

### Users

| Route                        | Method | Description           |
| ---------------------------- | ------ | --------------------- |
| `/user/me`                   | GET    | Get user profile      |
| `/user/register`             | POST   | Register user         |
| `/user/signin`               | POST   | User login            |
| `/user/logout`               | POST   | Logout user           |
| `/user/update-profile`       | PATCH  | Update profile        |
| `/user/verify-coupon/:code`  | GET    | Verify coupon         |
| `/user/auth/google`          | GET    | Google OAuth login    |
| `/user/auth/google/callback` | GET    | Google OAuth callback |
| `/user/csrf`                 | GET    | CSRF token            |

## Frontend Routes

### Admin Pages (Protected)

/admin/login – Admin login page

/admin/dashboard – Dashboard with total sales, active users, top products

/admin/products – Product management (CRUD)

/admin/coupons – Manage coupons

/admin/managers – Add, list, delete managers

/admin/users – View users list

/admin/orders – View and update order status

### User Pages (Protected)

/login – User login page

/register – User registration page

/profile – User profile page

/cart – Shopping cart

/checkout – Checkout page

/orders – User order list

/order/:id – View order details

/products – Browse products with search, filter, and sort

**Note:** All frontend routes are protected based on role, matching the backend authorization rules.

### Admin Dashboard Features

_--_ Total sales, active users

_--_ Top product (with image)

_--_ Top 5 products (units sold, revenue)

_--_ Payment status tracking (COD/Stripe)

_--_ Order detail view (product, user, shipping, payment info)

## Notes

_--_ Admin can manually update order/payment status; Stripe webhooks auto-update online payment status

_--_ Product images uploaded to Cloudinary to reduce server load

_--_ Future TODO: Manager roles to update orders and manage products
