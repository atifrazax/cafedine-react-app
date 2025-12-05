import { Link } from "react-router-dom"

function BestDishes({img,p}) {
  return (
    <section 
      className={`bg-center bg-cover bg-no-repeat w-full h-[70vh] bg-fixed`}
      style={{backgroundImage: `url(${img || '/recipe-2.webp'})`}}
    >
        <div className='flex flex-col justify-center items-center h-[70vh] text-center bg-black/30'>
            <span className='text-white/70 text-2xl mb-4 font-dancing font-bold'>Prepare The Best Dishes</span>
            <h2 className='mb-10 sm:w-1/2 leading-12 text-white capitalize'>{p}</h2>
            <Link to='/reservation' className="uppercase bg-white text-black px-8 py-3 hover:bg-primary hover:text-white transition duration-300">Book Now</Link>
        </div>
    </section>
  )
}

export default BestDishes