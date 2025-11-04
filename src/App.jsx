
import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Recipes from './pages/Recipes';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Reservation from './pages/Reservation';
import Cart from './pages/Cart';
import Confirmation from './pages/Confirmation';
import Shipping from './pages/Shipping';
import Payment from './pages/Payment';
import Blogs from './pages/Blogs';
import SingleBlog from './pages/SingleBlog';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <main>
      <BrowserRouter>
      <Navbar />
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1 className='flex justify-center bg-black text-white h-screen'><br /><br />Page Not Found</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  )
}

export default App
