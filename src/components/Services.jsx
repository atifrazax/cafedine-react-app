import React from 'react'
import juice from '../assets/icons/juice.svg'
import basket from '../assets/icons/basket.svg'
import cake from '../assets/icons/cake.svg'
import event from '../assets/icons/event.svg'
import pie from '../assets/icons/pie.svg'
import reserve from '../assets/icons/reserve.svg'
function Services() {
  return (
    <section className='bg-white py-30'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 '>
            <div className='flex flex-col mb-20 justify-center items-center text-center'>
                <span className='text-primary text-4xl font-dancing font-semibold'>Our services</span>
                <h2 className='mt-4 sm:w-1/2 leading-12 capitalize'>We provide good services with lots of facilities</h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 sm: gap-y-15 text-center '>
                <div className='justify-center items-center flex flex-col animate'>
                    <img src={juice} alt="" aria-hidden className='w-16 h-16' />
                    <h5 className='my-4'>Fresh Food</h5>
                    <p className='text-gray-500'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className='justify-center items-center flex flex-col animate'>
                    <img src={pie} alt="" aria-hidden className='w-16 h-16' />
                    <h5 className='my-4'>Quality Cuisine</h5>
                    <p className='text-gray-500'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className='justify-center items-center flex flex-col animate'>
                    <img src={cake} alt="" aria-hidden className='w-16 h-16' />
                    <h5 className='my-4'>Bread & Pancake</h5>
                    <p className='text-gray-500'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className='justify-center items-center flex flex-col'>
                    <img src={basket} alt="" aria-hidden className='w-16 h-16' />
                    <h5 className='my-4'>Fresh Vegies Salad</h5>
                    <p className='text-gray-500'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className='justify-center items-center flex flex-col'>
                    <img src={event} alt="" aria-hidden className='w-16 h-16' />
                    <h5 className='my-4'>Event Management</h5>
                    <p className='text-gray-500'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className='justify-center items-center flex flex-col'>
                    <img src={reserve} alt="" aria-hidden className='w-16 h-16' />
                    <h5 className='my-4'>Reserve Now</h5>
                    <p className='text-gray-500'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services