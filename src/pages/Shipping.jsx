import BannerAll from '../components/BannerAll'
import Loader from '../components/Loader'
import { useAuth } from '../contexts/useAuth'
import stripe from '../assets/icons/stripe.svg'
import { useEffect, useState, useMemo } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from '../components/CheckoutForm';
import { Suspense } from 'react'

function Shipping() {

  const stripePromise = useMemo(() => loadStripe(import.meta.env.VITE_STRIPE_KEY), []);
  const location = useLocation();
  const {cart, coupon, clearCart, updateCoupon} = useAuth();
  const [clientSecret, setClientSecret] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const taxRate = 4.99; // can be changed dynamically later

  useEffect(() => {
    if(location.state) setClientSecret(location.state);
  }, [location.state]);
  const order = async (shippingData, coupon, cart, taxRate) => {
    setLoading(true);
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/order/new`, {
        shippingData,
        cart,
        coupon: coupon?._id,
        taxRate,
      }, {
        withCredentials: true
      });
      const data = await res?.data;
      if(data?.message === 'cod created') {
        navigate('/confirmation')
        clearCart();
        updateCoupon('');
      };
      if(data?.client_secret) setClientSecret(data.client_secret);
    } catch (error) {
      if(error?.response?.data.message === 'Not authorized') return navigate('/login', {state: {message: "Please login to place order"}});
      setError(error?.response?.data?.message || "Order failed. Please try again" );
    } finally {
      setLoading(false);
    }
  }
  const [shippingData, setShippingData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    address: '',
    cityArea: '',
    shippingRate: 0,
    country: '',
    zipCode: '',
    note: '',
    paymentMethod: '',

  });
  let total = 0;
    const cartTotal = cart.reduce((total, product) => total + product.price * product.qty, 0)
    if (cartTotal < Number(coupon?.minSubtotal)) {
        total = cartTotal;
    } else {
        const discount = coupon?.type === "percentage" ? cartTotal * (Number(coupon?.value) / 100) : Number(coupon?.value) || 0;
        total = (cartTotal - discount);
      }
      const subTotal = (Number(total) + shippingData?.shippingRate || 0);
      const grandTotal = Number(subTotal) + parseFloat(subTotal) * ((taxRate) / 100)

  const orderSubmit = async (e) => {
    e.preventDefault();
    setError('');
    await order(shippingData, coupon, cart, taxRate);
  }
  return (
    <>
    <Loader />
    <BannerAll title='Checkout'/>
    <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-[70%_30%] gap-6 py-30'>
        <div className='flex flex-col space-y-6'>
            <div className='flex sm:flex-row flex-col sm:items-center gap-x-12 border-b pb-4 border-gray-200'>
              <button className='py-4 bg-white'>
                <span className={`font-dancing text-3xl text-black border me-4 ${!clientSecret && 'bg-primary text-white'} py-2 px-1 font-extrabold`}>01.</span> 
                <span className='text-black font-bold'>Shipping</span>
              </button>
              <button className='py-4 bg-white '>
                <span className={`font-dancing text-3xl text-black border ${clientSecret && 'bg-primary text-white'} me-4 py-2 px-1 font-extrabold`}>02.</span> 
                <span className='text-black'>Payment</span>
              </button>
              <button className='py-4 bg-white '>
                <span className='font-dancing text-3xl text-black border me-4 py-2 px-1 font-extrabold'>03.</span> 
                <span className='text-black'>Confirm Pay</span>
              </button>
            </div>
            {!clientSecret ? (
              <>
            <h4 className='my-4 mb-10 border-b pb-4 border-gray-200'>Your Details</h4>
            <form onSubmit={orderSubmit} className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
              <div className='flex flex-col gap-4'>
                  <label htmlFor="fname">First Name</label>
                  <input type="text" onChange={(e)=>setShippingData(prev=>({...prev, fname:e.target.value}))} name='fname' placeholder='Last Name' className='p-4 border border-primary/10' />
              </div>
              
              <div className='flex flex-col gap-4'>
                  <label htmlFor="name">Last Name</label>
                  <input type="text" onChange={(e)=>setShippingData(prev=>({...prev, lname:e.target.value}))} name='lname' placeholder='Last Name' className='p-4 border border-primary/10' />
              </div>

              <div className='flex flex-col gap-4'>
                  <label htmlFor="address">Address</label>
                  <input type="text" onChange={(e)=>setShippingData(prev=>({...prev, address:e.target.value}))} name='address' placeholder='Address 1' className='p-4 border border-primary/10' />
              </div>
              
              <div className='flex flex-col gap-4'>
                  <label htmlFor="city">City</label>
                  <select name="city" 
                  onChange={(e)=>{
                  setShippingData(prev=>({...prev, shippingRate: parseFloat(e.target.value)}));
                  setShippingData(prev=>({...prev, cityArea:e.target.options[e.target.selectedIndex].dataset.text}))
                  }
                  } className='p-4 border border-primary/10'>
                      <option value="0" data-text="">City Area</option>
                      <option value="1.99" data-text="East 1-km">East 1-km</option>
                      <option value="0.99" data-text="West 1-km">West 1-km</option>
                      <option value="1.49" data-text="North 1-km">North 1-km</option>
                      <option value="2.00" data-text="South 1-km">South 1-km</option>
                  </select>
              </div>

              <div className='flex flex-col gap-4'>
                  <label htmlFor="country">Country</label>
                  <select type="text" onChange={(e)=>setShippingData(prev=>({...prev, country:e.target.value}))} name='country' className='p-4 border border-primary/10'>
                    <option value="pakistan">Pakistan</option>
                    <option value="uae">UAE</option>
                  </select>
              </div>
              <div className='flex flex-col gap-4'>
                  <label htmlFor="zipCode">Zip Code</label>
                  <input type="text" onChange={(e)=>setShippingData(prev=>({...prev, zipCode:e.target.value}))} name='zipCode' placeholder='Zip Code' className='p-4 border border-primary/10' />
              </div>
              <div className='flex flex-col gap-4'>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" onChange={(e)=>setShippingData(prev=>({...prev, email:e.target.value}))} name='email' placeholder='Email' className='p-4 border border-primary/10' />
              </div>
              
              <div className='flex flex-col gap-4'>
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" onChange={(e)=>setShippingData(prev=>({...prev, phone:e.target.value}))} name='phone' placeholder='Phone' className='p-4 border border-primary/10' />
              </div>

              <textarea name="note" onChange={(e)=>setShippingData(prev=>({...prev, note:e.target.value}))}  rows="5" placeholder="Special Requirments" className='p-4 border border-primary/10 md:col-span-2'></textarea>
              <div className='grid grid-cols-2 md:grid-cols-[30%_70%] gap-4 items-center'>
                <label>Payment Method:</label>
              <div className="flex flex-wrap sm:flex-row gap-3">
                {/* Stripe */}
                <label
                  className={`cursor-pointer border px-4 py-2 rounded flex items-center gap-3 
                    ${shippingData.paymentMethod === "stripe" ? "border-blue-500 ring-2 ring-blue-300" : "border-gray-300"}`}
                >
                  <input
                    type="radio"
                    name="method"
                    value="stripe"
                    onChange={(e) => setShippingData(prev=>({...prev, paymentMethod: e.target.value}))}
                    className="hidden"
                  />
                  <img src={stripe} alt="paypal" className="h-10 w-20 object-contain" />
                </label>

                {/* COD */}
                <label
                  className={`cursor-pointer border px-1 py-4 rounded text-center gap-3 
                    ${shippingData.paymentMethod === "cod" ? "border-blue-500 ring-2 ring-blue-300" : "border-gray-300"}`}
                >
                  <input
                    type="radio"
                    name="method"
                    value="cod"
                    onChange={(e) => setShippingData(prev=>({...prev, paymentMethod: e.target.value}))}
                    className="hidden"
                  />
                  <span className="text-sm text-center">Cash On Delivery</span>
                </label>
              </div>
            </div>
              {error && <p className='text-red-500'>{error}</p>}
              <button type='submit' disabled={loading} className='py-4 px-2 md:col-span-2 md:justify-self-end sm:w-1/3 
              bg-primary text-center text-white hover:bg-black transition duration-300'>
              {loading ? "Loading..." : "Continue to Payment"}
              </button>
          </form>
          </>
            ) : (
            <Suspense fallback={<Loader/>}>
            <h4 className='my-4 mb-10 border-b pb-4 border-gray-200'>Payments Details</h4>
          <Elements stripe={stripePromise} options={{clientSecret: clientSecret}}>
            <CheckoutForm clearCart={clearCart} updateCoupon={updateCoupon}/>
          </Elements>
          </Suspense>
            )}
      </div>
      <div className='flex flex-col rounded-md p-8 my-auto bg-slate-100 justify-center mt-20'>
          <div className="flex flex-col space-y-4 p-4  text-black">
            <h4 className="border-b pb-4 border-gray-300 text-center">Order Summary</h4>
            <p className='text-gray'>Review your details and proceed with a secure payment. Your order is just one step away.</p>
            <div className="flex justify-between border-b pb-4 border-gray-300">
                <span>Subtotal</span><span>$ {cartTotal.toFixed(2)}</span>
            </div>
            {coupon &&
            <div className="flex justify-between border-b pb-4 border-gray-300">
                <span>Coupon</span><span className='text-red-500'>- {coupon.type === "percentage" ? `${Number(coupon.value)} %` : `$ ${Number(coupon.value)}`}</span>
            </div>
            }
            <div className="flex justify-between border-b pb-4 pt-4 font-semibold uppercase">
                <span>Total</span>
                <span>$ {total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b py-4 border-gray-300">
                <span>Shipping</span><span>$ {shippingData?.shippingRate?.toFixed(2)}</span>
            </div>
            {cart && cart.length > 0 && 
            <div className="flex justify-between border-b pb-4 border-gray-300">
                <span>Tax</span><span>{taxRate} %</span>
            </div>
            }
            <div className="flex justify-between pt-4 font-semibold uppercase">
                <span>Grand Total</span>
                <span>$ {grandTotal.toFixed(2)}</span>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Shipping