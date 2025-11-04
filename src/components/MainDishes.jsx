

function MainDishes({data}) {
  return (
    <section className='bg-slate-100 py-30'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 '>
            <div className='flex flex-col mb-20 justify-center items-center text-center'>
                <span className='text-primary text-4xl font-dancing font-semibold'>CafeDine Dishes</span>
                <h2 className='mt-4 sm:w-1/2 leading-12 capitalize'>We provide quality food. We care about your health</h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                {data.map((item, index)=>(
                    <div key={index} className='flex flex-col items-start space-y-5 m-3 bg-white animate'>
                        <img src={item.img} alt="Recipe" loading='lazy' className='h-50 w-full object-cover' />
                        <div className='flex flex-col space-y-1 p-4'>
                            <h4>{item.title} - <span className='text-primary'>${item.price}</span></h4>
                            <p className='h-12 overflow-hidden'>Mushrooms, Ruccola, Pomodoro, Mozzarella, Olives</p>
                            <button className="w-1/2 px-5 py-3 mt-4 text-white bg-primary hover:bg-black transition duration-300">Add To Cart</button>
                        </div>
                    </div>
                ))}                
            </div>
        </div>
    </section>
  )
}

export default MainDishes