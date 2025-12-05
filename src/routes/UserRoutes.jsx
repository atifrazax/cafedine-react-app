import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react';
import Loader from '../components/Loader';
import ScrollToTop from '../components/ScrollToTop';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Footer from '../components/Footer';
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const About = lazy(() => import('../pages/About'));
const Recipes = lazy(() => import('../pages/Recipes'));
const Gallery = lazy(() => import('../pages/Gallery'));
const Contact = lazy(() => import('../pages/Contact'));
const Reservation = lazy(() => import('../pages/Reservation'));
const Cart = lazy(() => import('../pages/Cart'));
const Confirmation = lazy(() => import('../pages/Confirmation'));
const Shipping = lazy(() => import('../pages/Shipping'));
const Blogs = lazy(() => import('../pages/Blogs'));
const SingleBlog = lazy(() => import('../pages/SingleBlog'));
const Profile = lazy(() => import('../components/Profile'));
const ClientOrders = lazy(() => import('../pages/ClientOrders'));
const ProtectedRoute = lazy(() => import('../components/ProtectedRoute'));

export default function UserRoutes() {
  return (
  <>
    <ScrollToTop />
    <Navbar />
    <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/shipping" element={<Shipping />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blog/:id" element={<SingleBlog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<ProtectedRoute allowedRoles={['user']}><Profile /></ProtectedRoute>} />
      <Route path="/orders" element={<ProtectedRoute allowedRoles={['user']}><ClientOrders /></ProtectedRoute>} />
      <Route path="*" element={<h1 className='flex justify-center bg-black text-white h-screen'><br /><br />Page Not Found</h1>} />
    </Routes>
    </Suspense>
    <Footer />
    </>
  )
}
