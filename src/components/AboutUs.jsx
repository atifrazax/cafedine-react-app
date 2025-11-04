import React from 'react'

function AboutUs() {
  return (
    <section className='bg-white'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex sm:flex-row flex-col py-30'>
            <div className='flex sm:mb-35'>
                <img src="/imgv-1.webp" alt="resturant photo" loading='lazy' className='object-cover h-auto w-full p-4' />
            </div>
            <div className='relative flex'>
                <img src="/imgv-2.webp" alt="resturant photo" loading='lazy' className='object-cover h-auto w-full p-4'/>
                <div className='absolute text-white bg-primary px-6 py-2 bottom-30 right-0 sm:-right-10'>
                    <span>Book Now!</span>
                </div>
            </div>
            <div className='flex flex-col p-6'>
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente necessitatibus id, animi nemo quos eos minus adipisci veritatis quibusdamm.
                    <br/><br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. repudiandae eius doloribus accusamus fugit .</p>
                <ul className='mt-10 text-black text-2xl font-semibold font-garamond'>
                    <li>- Clean Environment</li>
                    <li>- Experience chefs</li>
                    <li>- Fresh and creative dishes</li>
                </ul>
            </div>
        </div>
        <hr className='text-gray-200' />
    </section>
  )
}

export default AboutUs