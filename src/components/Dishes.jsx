import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Dishes() {
    const data = [
        {img: '/recipe-2.webp', title: 'Vitello Tonato', price: 25, category: 'starter', para: 'Adipisicing elit. Ipsa nulla officia sint.'},
        {img: '/recipe-3.webp', title: 'Crema di Pomodoro', price: 39, category: 'launch', para: 'Lorem Maiores fugit illo deserunt!'},
        {img: '/recipe-2.webp', title: 'Affordable Price', price: 20, category: 'dinner', para: 'Amet, consectetur adipisicing elit. Ipsa nulla officia.'},
        {img: '/recipe-1.webp', title: 'Seasonal Soup', price: 15, category: 'starter', para: 'Dlor sit amet, consectetur adipisicing elit.'},
        {img: '/recipe-2.webp', title: 'Oatmeal Cookie', price: 15, category: 'launch', para: 'Ipsa nulla officia sint.'},
        {img: '/recipe-4.webp', title: 'Pizza Pane', price: 27, category: 'dinner', para: 'Consectetur adipisicing elit. Ipsa nulla officia sint.'},
    ]
    const [category, setCategory] = useState('all')

    const handleClick = (e) => {
        setCategory(e.target.value)
    }
  return (
    <section className='bg-white py-30'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 '>
            <div className='flex flex-col mb-20 justify-center items-center text-center'>
                <span className='text-primary text-4xl font-dancing font-semibold'>CafeDine Dishes</span>
                <h2 className='mt-4 sm:w-1/2 leading-12 capitalize'>We provide quality food. We care about your health</h2>
            </div>
                <div className='flex flex-wrap space-x-4 justify-center mb-6 font-bold'>
                    <button value={'all'} onClick={handleClick} className='hover:text-primary uppercase transition duration-300'>All</button>
                    <button value={'starter'} onClick={handleClick} className='hover:text-primary uppercase transition duration-300'>Starter</button>
                    <button value={'launch'} onClick={handleClick} className='hover:text-primary uppercase transition duration-300'>Launch</button>
                    <button value={'dinner'} onClick={handleClick} className='hover:text-primary uppercase transition duration-300'>Dinner</button>
                </div>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                {data.filter((item) => item.category === category || category === 'all').map((item, index)=>(
                    <div key={index} className='flex space-y-0 p-4 border border-dashed m-3 sm:items-center'>
                        <img src={item.img} alt="Recipe" loading='lazy' className='h-25 w-40 me-4' />
                        <div className='flex flex-col'>
                            <h5>{item.title} - <span className='text-primary'>${item.price}</span></h5>
                            <p className='h-20 overflow-hidden sm:h-auto'>{item.para}</p>
                        </div>
                    </div>
                ))}                
            </div>
        </div>
            <div className='flex justify-center py-25 bg-[url(/cover.webp)] bg-bottom-right bg-contain bg-no-repeat'>
                <Link to='/recipes' className="uppercase bg-black text-white px-8 py-3 hover:bg-primary hover:text-white transition duration-300">View full Menu</Link>
            </div>
    </section>
  )
}

export default Dishes