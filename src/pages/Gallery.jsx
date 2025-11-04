import BannerAll from '../components/BannerAll'
import { useObserver } from '../assets/hooks/Observer';
import Loader from '../components/Loader';
function Gallery() {
  useObserver();
  return (
    <>
    <Loader />
    <BannerAll title='Our Gallery'/>
    <section className='bg-white py-30'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 '>
            <div className='flex flex-col mb-30 justify-center items-center text-center capitalize'>
                <span className='text-primary text-4xl font-dancing font-semibold'>Our Gallery</span>
                <h2 className='mt-4 sm:w-2/3 leading-12'>Awesome place good decoration to spend quality time</h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                <img src="/cafe-1.jpg" alt="Cafe" className='w-full h-auto animate' loading='lazy'/>
                <img src="/cafe-2.jpg" alt="Cafe" className='w-full h-auto animate' loading='lazy'/>
                <img src="/cafe-3.jpg" alt="Cafe" className='w-full h-auto animate' loading='lazy'/>
                <img src="/cafe-4.jpg" alt="Cafe" className='w-full h-auto' loading='lazy'/>
                <img src="/cafe-5.jpg" alt="Cafe" className='w-full h-auto' loading='lazy'/>
                <img src="/cafe-6.jpg" alt="Cafe" className='w-full h-auto' loading='lazy'/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Gallery