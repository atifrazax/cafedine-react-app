import { Routes, Route } from 'react-router-dom'
import {lazy, Suspense} from 'react';
import Loader from '../components/Loader';
const AddProduct = lazy(() => import('../pages/admin/AddProduct'));
const Coupons = lazy(() => import('../pages/admin/Coupons'));
const Orders = lazy(() => import('../pages/admin/Orders'));
const AdminLayout = lazy(() => import('../pages/admin/AdminLayout'));
const Managers = lazy(() => import('../pages/admin/Managers'));
const AdminProducts = lazy(() => import('../pages/admin/AdminProducts'));
const Profile = lazy(() => import('../components/Profile'));
const Users = lazy(() => import('../pages/admin/Users'));
const Dashboard = lazy(() => import('../pages/admin/Dashboard'));

export default function AdminRoutes() {
  return (
    <Suspense fallback={<Loader />}>
    <Routes>
      <Route element={<AdminLayout />}>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/products" element={<AdminProducts />} />
      <Route path="/managers" element={<Managers />} />
      <Route path="/users" element={<Users />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/coupons" element={<Coupons />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/404" element={<h1 className='text-red-400 text-center py-50 uppercase'>404 - Page Not Found</h1>} />
      </Route>
    </Routes>
    </Suspense>
  )
}
