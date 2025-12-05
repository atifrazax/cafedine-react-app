import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import formatImage from '../utils/formatImage.js'

const fetchDishes = async (category) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin/products`, {
      params: {
        category: category ? category : {},
      }
    });
    return response.data.docs;
  } catch (error) {
    console.error(error);
    return [];
  }
}
function Dishes() {
  const [category, setCategory] = useState('')
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
      useEffect(() => {
  setLoading(true);

  let timer;
  fetchDishes(category).then((data) => {

      timer = setTimeout(() => {
        setDishes(data);
        setLoading(false);
      }, 150); // small delay to fade-out
      });
  return () => clearTimeout(timer);
}, [category]);
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
                <div className='flex flex-wrap space-x-4 justify-center mb-6 font-bold *:hover:text-primary *:uppercase *:transition-all *:duration-300'>
                    <button value={""} onClick={handleClick} >All</button>
                    <button value={'snacks'} onClick={handleClick} >Snacks</button>
                    <button value={'beverages'} onClick={handleClick} >Beverages</button>
                    <button value={'desserts'} onClick={handleClick} >Desserts</button>
                    <button value={'specials'} onClick={handleClick} >Specials</button>
                    <button value={'add-ons'} onClick={handleClick} >Add-Ons</button>
                </div>
            <div className={`
              grid grid-cols-1 sm:grid-cols-2
              transition-all duration-300
              ${loading ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}>
                {dishes.map((item)=>(
                    <div key={item?._id} className='flex space-y-0 p-4 border border-dashed m-3 sm:items-center'>
                        <img src={formatImage(item?.image)} alt={item?.name} loading='lazy' className='h-25 w-40 me-4' />
                        <div className='flex flex-col'>
                            <h5>{item?.name} - 
                                <span className={item?.salePrice > 0 ? `line-through text-gray-400 ms-2` : `text-primary`}>${item?.price}</span>
                                { item?.salePrice > 0 && 
                                <span className='text-primary ms-2'>${item?.salePrice}</span> }
                            </h5>
                            <p className='overflow-hidden sm:h-auto line-clamp-2'>{item?.description}</p>
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