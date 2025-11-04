import { Link } from "react-router-dom"
function Banner() {

    const data = [
        { img: '/recipe-1.webp', text: 'We deliver good quality food with great service to our customers' },
        { img: '/recipe-2.webp', text: 'Fresh, Delious food to reach your optimum health and fitness' },
        { img: '/recipe-3.webp', text: 'Good food starts with food ingradients. Have a great time with us' },
    ]
  return (
    <section className='h-[112vh] overflow-hidden'>
        
             
    <div className="carousel w-full">
        {data.map((item, index) => (
            <div key={index} id={`slide${index + 1}`} className="carousel-item relative w-full">
            <div className="relative w-full ">
                <img
                    src={item.img}
                    className="w-full h-[110vh] object-cover object-right" />
            <div className="absolute text-white bottom-40 sm:right-1/3 left-5 sm:left-40 flex-col  ">
                <div className="text-primary text-4xl font-dancing mb-8">Welcome to resturant</div>
                <p className="sm:text-7xl text-5xl font-semibold font-garamond mb-8">{item.text}</p>
                <Link to='/recipes' className="uppercase bg-primary px-7 py-3 hover:bg-black transition duration-300">View Menu</Link>
            </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href={`#slide${(index + 1)-1}`} className="btn btn-circle hidden md:flex">❮</a>
            <a href={`#slide${(index + 1)+1}`} className="btn btn-circle hidden md:flex">❯</a>
            </div>
        </div>
        ))}
        
        
        </div>
    </section>
  )
}

export default Banner