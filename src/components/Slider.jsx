import React from 'react'

function Slider() {
    const data = [
        { img: '/recipe-1.webp', text: 'We deliver good quality food with great service to our customers' },
        { img: '/imgv-3.webp', text: 'We deliver good quality food with great service to our customers' },
        { img: '/recipe-2.webp', text: 'Fresh, Delious food to reach your optimum health and fitness' },
        { img: '/imgv-2.webp', text: 'Fresh, Delious food to reach your optimum health and fitness' },
        { img: '/recipe-3.webp', text: 'Good food starts with food ingradients. Have a great time with us' },
        { img: '/imgv-1.webp', text: 'Good food starts with food ingradients. Have a great time with us' },
        { img: '/recipe-1.webp', text: 'We deliver good quality food with great service to our customers' },
        { img: '/recipe-2.webp', text: 'Fresh, Delious food to reach your optimum health and fitness' },
        { img: '/imgv-3.webp', text: 'Good food starts with food ingradients. Have a great time with us' },
        { img: '/recipe-1.webp', text: 'We deliver good quality food with great service to our customers' },
        { img: '/imgv-2.webp', text: 'Fresh, Delious food to reach your optimum health and fitness' },
        { img: '/recipe-3.webp', text: 'Good food starts with food ingradients. Have a great time with us' },
    ]
  return (
    <section className='relative bg-white pt-20'>
        <div className="carousel w-full">
        {data.map((item, index) => (
            <div key={index} id={`slide${index + 1}`} className="carousel-item relative w-1/2 md:w-1/4 lg:w-1/6  border-2">
                <img
                    src={item.img}
                    className="w-full h-80 object-cover object-right" 
                    loading='lazy'
                    alt='Instagram post'
                />
        </div>
        ))}
        
        
        </div>
        <button className='absolute top-1/2 left-1/2 -translate-x-20 uppercase bg-primary px-6 py-2 font-bold text-white hover:bg-black transition duration-300'>@instagram</button>
    </section>
  )
}

export default Slider