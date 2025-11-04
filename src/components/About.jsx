import React from 'react'

function About() {
    const data = [
        {img: '/recipe-2.webp', title: 'Quality Food', para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nulla officia sint.'},
        {img: '/recipe-3.webp', title: 'Friendly Place', para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.impedit maiores fugit illo deserunt!'},
        {img: '/recipe-2.webp', title: 'Affordable Price', para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nulla officia sint.'},
    ]
  return (
    <section className='bg-white pb-30'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 '>
            <div className='flex flex-col mb-20 justify-center items-center text-center'>
                <span className='text-primary text-4xl font-dancing font-semibold'>About CafeDine</span>
                <h2 className='mt-4 sm:w-1/2 leading-12 capitalize'>We are a modern restaurant in the center of the city</h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 '>
                {data.map((item, index)=>(
                    <div key={index} className='flex flex-col space-y-4 p-4 animate'>
                        <img src={item.img} alt="Recipe" loading='lazy' className='h-auto w-full' />
                        <h5>{item.title}</h5>
                        <p>{item.para}</p>
                    </div>
                ))}
                
                
            </div>
        </div>
    </section>
  )
}

export default About