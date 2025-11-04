import BannerAll from '../components/BannerAll'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'

function Shipping() {
  return (
    <>
    <Loader />
    <BannerAll title='Checkout'/>
    <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-[70%_30%] gap-6 py-30'>
        <div className='flex flex-col space-y-6'>
            <div className='flex sm:flex-row flex-col sm:items-center gap-x-12 border-b pb-4 border-gray-200'>
              <Link to='/shipping' className='py-4 bg-white'><span className='font-dancing text-3xl text-white me-4 bg-primary py-2 px-1 font-extrabold'>01.</span> 
                <span className='text-black font-bold'>Shipping</span>
              </Link>
              <Link to='/payment' className='py-4 bg-white '><span className='font-dancing text-3xl text-black border me-4 py-2 px-1 font-extrabold'>02.</span> 
                <span className='text-black'>Payment</span>
              </Link>
              <Link to='/confirmation' className='py-4 bg-white '><span className='font-dancing text-3xl text-black border me-4  py-2 px-1 font-extrabold'>03.</span> 
                <span className='text-black'>Confirm Pay</span>
              </Link>
            </div>
            <h4 className='my-4 mb-10 border-b pb-4 border-gray-200'>Your Details</h4>
            <form className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
              <div className='flex flex-col gap-4'>
                  <label htmlFor="fname">First Name</label>
                  <input type="text" name='fname' placeholder='Last Name' className='p-4 border border-primary/10' />
              </div>
              
              <div className='flex flex-col gap-4'>
                  <label htmlFor="name">Last Name</label>
                  <input type="text" name='lname' placeholder='Last Name' className='p-4 border border-primary/10' />
              </div>

              <div className='flex flex-col gap-4'>
                  <label htmlFor="address">Address</label>
                  <input type="text" name='address' placeholder='Address 1' className='p-4 border border-primary/10' />
              </div>
              
              <div className='flex flex-col gap-4'>
                  <label htmlFor="country">Country</label>
                  <select name="country" id="country" className='p-4 border border-primary/10'>
                      <option value="pakistan">Pakistan</option>
                      <option value="usa">USA</option>
                      <option value="uae">UAE</option>
                      <option value="uk">UK</option>
                      <option value="italy">Italy</option>
                  </select>
              </div>

              <div className='flex flex-col gap-4'>
                  <label htmlFor="city">City</label>
                  <input type="text" name='city' placeholder='City' className='p-4 border border-primary/10' />
              </div>
              <div className='flex flex-col gap-4'>
                  <label htmlFor="zip">Zip Code</label>
                  <input type="text" name='zip' placeholder='Zip Code' className='p-4 border border-primary/10' />
              </div>
              <div className='flex flex-col gap-4'>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" name='email' placeholder='Email' className='p-4 border border-primary/10' />
              </div>
              
              <div className='flex flex-col gap-4'>
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" name='phone' placeholder='Phone' className='p-4 border border-primary/10' />
              </div>

              <textarea name="message" id="message"  rows="5" placeholder="Special Requirments" className='p-4 border border-primary/10 md:col-span-2'></textarea>
              
              <button className='py-4 px-2 md:col-span-2 md:justify-self-end sm:w-1/3 bg-primary text-white hover:bg-black transition duration-300'>Continue to Payment</button>
          </form>
      </div>
      <div className='flex flex-col rounded-md p-8 my-auto bg-slate-100 justify-center mt-20'>
          <div className="flex flex-col space-y-4 p-4  text-black">
            <h4 className="border-b pb-4 border-gray-300 text-center">Order Summary</h4>
            <p className='text-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quisquam!</p>
            <div className="flex justify-between border-b pb-4 border-gray-300">
                <span>Subtotal</span><span>$245</span>
            </div>
            <div className="flex justify-between border-b pb-4 border-gray-300">
                <span>Shipping</span><span>$0.00</span>
            </div>
            <div className="flex justify-between border-b pb-4 border-gray-300">
                <span>Tax</span><span>$0.00</span>
            </div>
            <div className="flex justify-between pt-4 font-semibold uppercase">
                <span>Grand Total</span>
                <span>$245.00</span>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Shipping