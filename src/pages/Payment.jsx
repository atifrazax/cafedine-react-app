import { Link } from 'react-router-dom'
import BannerAll from '../components/BannerAll'
import paypal from '../assets/icons/paypal.svg'
import Loader from '../components/Loader';

function Payment() {
  const year =new Date().getFullYear();
  return (
    <>
    <Loader />
    <BannerAll title='Payment'/>
    <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-[70%_30%] gap-14 py-30'>
        <div className='flex flex-col space-y-6'>
            <div className='flex sm:flex-row flex-col sm:items-center gap-x-12 border-b pb-4 border-gray-200'>
              <Link to='/shipping' className='py-4 bg-white '><span className='font-dancing text-3xl text-black border me-4 py-2 px-1 font-extrabold'>01.</span> 
                <span className='text-black'>Shipping</span>
              </Link>
              <Link to='/payment' className='py-4 bg-white'><span className='font-dancing text-3xl text-white me-4 bg-primary py-2 px-1 font-extrabold'>02.</span> 
                <span className='text-black font-bold'>Payment</span>
              </Link>
              <Link to='/confirmation' className='py-4 bg-white '><span className='font-dancing text-3xl text-black border me-4 py-2 px-1 font-extrabold'>03.</span> 
                <span className='text-black'>Confirm Pay</span>
              </Link>
            </div>
            <h4 className='my-4 mb-10 border-b pb-4 border-gray-200'>Payments Details</h4>
            <form className='grid grid-cols-1 lg:grid-cols-1 gap-6'>

              <div className='grid grid-cols-1 sm:grid-cols-[30%_70%] gap-4'>
                  <label htmlFor="fname">Full Name on Card:</label>
                  <input type="text" name='fname' placeholder='Full Name' className='p-4 border border-primary/10' />
              </div>

              <div className='grid grid-cols-1 md:grid-cols-[30%_70%] gap-4'>
                  <label htmlFor="number">Card Number:</label>
                  <input type="number" name='card-number' placeholder='245-1234567-789' className='p-4 border border-primary/10' />
              </div>
              
              <div className='grid grid-cols-1 md:grid-cols-[30%_70%] gap-4'>
                  <label htmlFor="country">Date of Expiration</label>
                  <div className='flex gap-x-4 '>
                    <select name="month" id="month" className='p-4 border border-primary/10 w-full'>
                      <option value="">Month</option>
                      <option value="01">January</option>
                      <option value="02">February</option>
                      <option value="03">March</option>
                      <option value="04">April</option>
                      <option value="05">May</option>
                      <option value="06">June</option>
                      <option value="07">July</option>
                      <option value="08">August</option>
                      <option value="09">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>

                    <select name="year" id="year" className='p-4 border border-primary/10 w-full'>
                        <option value="">Year</option>
                        {Array.from({length: 5}, (v, k) => k + year).map(year => (
                          <option value={year} key={year}>{year}</option>
                        ))}
                    </select>
                  </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-[30%_70%] gap-4'>
                  <label htmlFor="security">Security Code:</label>
                  <div className='flex flex-col'>
                    <input type="password" name='security' placeholder='***' className='p-4 border border-primary/10 mb-2' />
                    <small>Must be 3 digits</small> 
                  </div>
              </div>

              <div className='grid grid-cols-2 md:grid-cols-[30%_70%] gap-4 items-center'>
                  <label htmlFor="security">Or Pay Via:</label>
                  <img src={paypal} alt="payapal" className='h-auto w-25 border px-6' />
              </div>
              
              <div className='flex border border-gray-200 p-4 items-center'>
                  <input type="checkbox" name='privacy' className='p-4 border border-primary/10  mr-2' />
                  <span htmlFor="privacy">I have read and accept the <span className='text-primary'>Privacy Policy</span></span>
              </div>
              <button className=' py-3 mt-4 sm:w-1/3 sm:justify-self-end  bg-primary text-white hover:bg-black transition duration-300'>Confirm</button>
              
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

export default Payment