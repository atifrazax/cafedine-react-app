const DishesPlaceholder = () => {
  return (
    <section className='bg-slate-100 py-20'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1'>
            <div className='flex flex-col mb-20 justify-center items-center text-center'>
                <span className='text-primary text-4xl font-dancing font-semibold'>CafeDine Dishes</span>
                <h2 className='mt-4 sm:w-1/2 leading-12 capitalize'>We provide quality food. We care about your health</h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                {Array.from({length: 6}).map((_, index)=>(
                    <div key={index} className='flex flex-col items-start space-y-5 m-3 bg-white '>
                        <div className='bg-gray-200 h-48 w-full object-cover'></div>
                        <div className='flex flex-col space-y-1 p-4'>
                            <h4 className='bg-gray-200 h-6 w-full'></h4>
                            <p className='bg-gray-200 h-12 w-full'></p>
                            <div className='flex gap-1'>
                                <button className='w-fit px-5 py-3 mt-4 text-white bg-gray-200 hover:bg-gray-300 transition duration-300'></button>
                                <button className="w-fit px-5 py-3 mt-4 text-white bg-gray-200 hover:bg-gray-300 transition duration-300">
                                </button>
                            </div>
                        </div>
                    </div>
                ))}                
            </div>
        </div>
    </section>
  )
}

export default DishesPlaceholder