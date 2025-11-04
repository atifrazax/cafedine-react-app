import React from 'react'
import Socials from './Socials'
function Chefs() {
    const data = [
        {img: '/chef-1.webp', name: 'Quality Food', para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nulla officia sint.'},
        {img: '/chef-2.webp', name: 'Friendly Place', para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.impedit maiores fugit illo deserunt!'},
        {img: '/chef-3.webp', name: 'Affordable Price', para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nulla officia sint.'},
    ]
  return (
    <section className='bg-white py-30'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 '>
            <div className='flex flex-col mb-20 justify-center items-center text-center'>
                <span className='text-primary text-4xl font-dancing font-semibold'>Meet The Chefs</span>
                <h2 className='mt-4 sm:w-1/2 leading-12 capitalize'>We have experienced and creative chefs to start</h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 sm:gap-y-4'>
                {data.map((item, index)=>(
                    <div key={index} className='flex flex-col space-y-3 p-4 animate'>
                        <img src={item.img} alt="Recipe" loading='lazy' className='h-auto w-full' />
                        <h5>{item.name}</h5>
                        <span className='font-bold'>Master Chef</span>
                        <p>{item.para}</p>
                        <div>
                            <Socials />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Chefs