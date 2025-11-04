import BannerAll from '../components/BannerAll'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'

function Confirmation() {
  return (
    <>
    <Loader />
    <BannerAll title='Confirmation'/>
    <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-30'>
        <div className='flex flex-col space-y-6 text-center justify-center items-center'>
            <span className='text-6xl sm:text-7xl font-semibold text-primary font-garamond'>Thank You</span>
            <span className='text-6xl sm:text-7xl font-semibold text-black font-garamond capitalize mb-6'>for your reservation</span>
            <span>Your order hasn’t shipped yet but we will send you an email when it does.</span>
            <div className='flex space-x-4'>
                <Link to='/recipes' className='bg-black text-white px-4 py-2 font-semibold hover:bg-primary transition duration-300 uppercase'>Back to shop</Link>
                <Link to='/cart' className='bg-white border text-black px-4 py-2 font-semibold hover:bg-primary transition duration-300 hover:text-white uppercase'>Track Order</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Confirmation