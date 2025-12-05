import { forwardRef, useEffect } from 'react';
import eyeHeart from "/eye-heart.svg";
import { useAuth } from '../contexts/useAuth';
import { useState } from 'react';

const MainDishes = forwardRef(({data}, ref) => {
    const [isAdded, setIsAdded] = useState(null);
      const { addToCart } = useAuth();
      useEffect(() => {
          let timer = setTimeout(() => {
              setIsAdded(false);
          }, 500);
          return () => clearTimeout(timer);
      })
  return (
    <section className='bg-slate-100 py-20'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1'>
            <div className='flex flex-col mb-20 justify-center items-center text-center'>
                <span className='text-primary text-4xl font-dancing font-semibold'>CafeDine Dishes</span>
                <h2 className='mt-4 sm:w-1/2 leading-12 capitalize'>We provide quality food. We care about your health</h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                {data.map((item, index)=>(
                    <div ref={index === 0 ? ref : null} key={item?._id} className='flex flex-col items-start space-y-5 m-3 bg-white '>
                        <img src={item?.image} alt="Recipe" loading='lazy' className='h-48 w-full object-cover' />
                        <div className='flex flex-col space-y-1 p-4'>
                            <h4>{item?.name} - 
                                <span className={item?.salePrice > 0 ? `line-through text-gray-400 ms-2` : `text-primary`}>${item?.price}</span>
                                { item?.salePrice > 0 && 
                                <span className='text-primary ms-2'>${item?.salePrice}</span> }
                            </h4>
                            <p className='h-12 overflow-hidden'>{item?.description}</p>
                            <div className='flex gap-1'>
                            <button key={item?._id} onClick={()=>{addToCart({_id:item?._id, name: item?.name, price: item?.salePrice > 0 ? item?.salePrice : item?.price, img: item?.image});
                                setIsAdded(item?._id)}} disabled={isAdded === item?._id}
                                className={`w-fit px-5 py-3 mt-4 text-white bg-primary hover:bg-black transition duration-300
                                ${isAdded === item?._id ? 'scale-105 bg-green-600! cursor-none' : ''}`}>
                                    Add To Cart
                                </button>
                                <button className="w-fit px-5 py-3 mt-4 text-white bg-gray-100 hover:bg-gray-300 transition duration-300">
                                    <img src={eyeHeart} alt="" className='w-6 h-auto'/>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}                
            </div>
        </div>
    </section>
  )
})

export default MainDishes