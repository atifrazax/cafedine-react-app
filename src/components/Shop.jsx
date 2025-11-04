import Banner from "../components/Banner";
function Shop() {
    const products = [
        {id:1, src: "./product-1.jpg", name: "Bell Pepper", price: 25.99, discount: 30, newPrice: 19.99},
        {id:2, src: "./product-2.jpg", name: "Strawberry", price: 15.99, discount: null, newPrice: 15.99},
        {id:3, src: "./product-3.jpg", name: "Green Beans", price: 5.99, discount: 45, newPrice: 2.99},
        {id:4, src: "./product-4.jpg", name: "Purple Cabbage", price: 8.99, discount: null, newPrice: 6.99},
        {id:5, src: "./product-5.jpg", name: "Tomato", price: 9.99, discount: null, newPrice: 7.99},
        {id:6, src: "./product-6.jpg", name: "Brocolli", price: 12.99, discount: null, newPrice: 3.99},
        {id:7, src: "./product-7.jpg", name: "Carrots", price: 17.99, discount: 30, newPrice: 19.99},
        {id:8, src: "./product-8.jpg", name: "Fruit Juice", price: 11.99, discount: null, newPrice: 19.99},
    ];
  return (
    <>
    <Banner src="./vegetables-basket.jpg" page="Shop"/>
    <section className="bg-secondary py-25">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-10 gap-y-10 sm:gap-y-0 ">
            <div className='w-full flex flex-col items-center justify-center text-center'>
                <h2 className='mb-6'>Our Products</h2>
                <p className='mb-15'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center uppercase'>
                {products.map((product) => (
                    <div key={product.id} className='w-full flex flex-col border border-gray-200 font-light group relative'>
                        <img src={product.src} alt="" className='relative transform group-hover:scale-110 transition-all duration-300 p-4'/>
                        {product.discount && <span className='absolute bg-primary text-secondary text-sm py-1 px-3'>{product.discount}%</span>}
                        <h5 className='my-3'>{product.name}</h5>
                        <span className='text-primary mb-5'>${product.newPrice} <del className='text-gray-400'>${product.price}</del></span>
                        <div className='absolute flex group-hover:flex gap-3 bottom-3 left-1/2 -translate-x-1/2 bg-secondary opacity-0 group-hover:opacity-100 transition-all duration-300 '>
                            <a href='#' className=' bg-primary text-secondary w-8 h-8 rounded-full flex flex-row justify-center items-center'>
                                <i className="bi bi-cart-plus-fill "/></a>
                            <a href='#' className=' bg-primary text-secondary w-8 h-8 rounded-full flex flex-row justify-center items-center'>
                                <i className="bi bi-heart-fill"/></a>
                            <a href='#' className=' bg-primary text-secondary w-8 h-8 rounded-full flex flex-row justify-center items-center'>
                                <i className="bi bi-list"/></a>
                        </div>
                    </div>
                ))}                
            </div>
        </div>
    </section>
    </>
  )
}

export default Shop