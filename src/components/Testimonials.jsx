
function Testimonials() {
    const data = [
        { name: 'Mr. Atif Raza', img:'/chef-1.webp', rank: 'CEO, Founder', text: 'They deliver good quality food with great service to our customers, Inventore, et unde? Illo deserunt, vel totam enim quidem ipsam modi neque?' },
        { name: 'Mr. Zara Smith', img:'/chef-2.webp', rank: 'Manager', text: 'Fresh, Delious food to reach your optimum health and fitness. Inventore, Illo deserunt, vel totam enim quidem ipsam mode.' },
        { name: 'Mr. David Warner', img:'/chef-3.webp', rank: 'Chef', text: 'Good food starts with food ingradients. Have a great time with them. ipsum, dolor sit amet consectetur adipisicing elit.' },
    ]
  return (
    <section className="bg-gray-50">
    <hr className='text-gray-200 pt-20' /> 
    <div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-center items-center flex flex-col pb-20'>
        <div className='flex flex-col mb-15 justify-center items-center text-center w-full'>
            <span className='text-primary text-4xl font-dancing font-semibold'>Customers Reviews</span>
            <h2 className='mt-4 sm:w-1/2 leading-12 capitalize'>Our customers say about us. Lets check out some</h2>
        </div>
        <div className="carousel w-full">
            {data.map((item, index) => (
                <div key={index} id={`slide${index + 1}`} className="carousel-item relative w-full flex justify-center items-center text-center">
                <div className="relative sm:w-2/3 flex flex-col justify-center items-center  ">

                    <p className="text-3xl font-semibold font-garamond mb-8">{item.text}</p>
                    <img src={item.img} alt="user photo" loading='lazy' className="h-24 w-24 rounded-full my-8"/>
                    <div className="text-black font-bold ">{item.name}</div>
                    <div className="font-extralight text-sm">{item.rank}</div>
                
                </div>
            </div>
            ))}
        </div>
    </div>
    </section>
  )
}

export default Testimonials