import { useState } from "react";
import BannerAll from '../components/BannerAll'
import Loader from "../components/Loader";


export default function Cart() {
    const initialProducts = [
            {id: 1, img: '/recipe-2.webp', title: 'Vitello Tonato', price: 25, quantity: 2, para: 'Adipisicing elit. Ipsa nulla officia sint.'},
            {id: 2, img: '/recipe-3.webp', title: 'Crema di Pomodoro', price: 39,quantity: 1, para: 'Lorem Maiores fugit illo deserunt!'},
            {id: 3, img: '/recipe-5.webp', title: 'Oatmeal Cookie', price: 15,quantity: 5, para: 'Ipsa nulla officia sint.'},
            {id: 4, img: '/recipe-4.webp', title: 'Pizza Pane', price: 27,quantity: 3, para: 'Consectetur adipisicing elit. Ipsa nulla officia sint.'},
        ]
    const [products, setProducts] = useState(initialProducts);

    const handleChanges = (id, value) => {
        const updatedProducts = products.map((p) => {
            if (p.id === id) {
                return {...p, quantity: value}
            }else{
                return p;
            }
        })
    setProducts(updatedProducts);
    }
    const handleDel = (id) => {
        const updatedList = products.filter((p)=>{
            return p.id !== id
        })
        setProducts(updatedList);
    }
    return (
        <>
        <Loader />
        <BannerAll title="My Cart"/>
        
        <section  className="bg-slate-50 py-35">
            <div className=" overflow-x-auto container mx-auto max-w-7xl px-4 md:px-6 lg:px-10 flex flex-col sm:flex-col justify-between space-y-2 sm:gap-y-0 ">
                <ul className="min-w-[800px] flex flex-row justify-center items-center text-center px-4 py-6 gap-0 sm:gap-0 text-black overflow-auto">
                    <li className="w-1/5"></li>
                    <li className="w-1/4">Product Name</li>
                    <li className="w-1/6">Price</li>
                    <li className="w-1/6">Quantity</li>
                    <li className="w-1/6">Total</li>
                    <li className="w-1/7 text-4xl">&times;</li>
                </ul>
            {products.map((product, index)=>{
                return(
                    <ul key={index} className="min-w-[800px] flex flex-row justify-between items-center text-center py-2 
                         text-black  border-y border-gray-300">
                        <li className="w-1/5">
                            <img src={product.img} alt="order img" loading="lazy" className="w-20 sm:w-35 h-auto rounded-md"/>
                        </li>
                        <li className="w-1/4 flex flex-col space-y-2">
                            <span>{product.title}</span>
                            <p>{product.description}</p>
                        </li>
                        <li className="w-1/6">${product.price}</li>
                        <li className="w-1/6"><input type="number" value={product.quantity} min={1} max={10} onChange={e=>handleChanges(product.id, e.target.value)} className="text-center px-4 py-2 border border-gray-200 rounded-sm"/></li>
                        <li className="w-1/6">${(product.price * product.quantity).toFixed(2)}</li>
                        <li className="w-1/7 hover:scale-150 hover:transition duration-300 text-4xl"  onClick={()=>handleDel(product.id)}>&times;</li>
                    </ul>
                )
            })}
            
            </div>
            <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-10 flex flex-col sm:flex-col justify-between space-y-2 sm:gap-y-0 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="flex flex-col space-y-4 p-8  mt-6sm:mt-0">
                        <p>Enter your coupon code if you have one</p>
                        <input type="text" placeholder="Coupon Code" className="border sm:w-2/3 p-3"/>
                        {/* <Button name="Apply Coupon" type="submit" className="w-full"/> */}
                    </div>
                    <div className="flex flex-col space-y-4 p-8  text-black">
                        <h4 className="border-b pb-4 border-gray-300">Order Summary</h4>
                        <div className="flex justify-between border-b pb-4 border-gray-300">
                            <span>Subtotal</span><span>${products.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between border-b pb-4 border-gray-300">
                            <span>Shipping</span><span>$0.00</span>
                        </div>
                        <div className="flex justify-between border-b pb-4 border-gray-300">
                            <span>Tax</span><span>$0.00</span>
                        </div>
                        <div className="flex justify-between  pt-4 font-semibold uppercase">
                            <span>Total</span>
                            <span>${products.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}</span>
                        </div>
                        <button className="bg-primary text-white px-6 py-2 mt-4 hover:bg-black transition duration-300">Proceed To Checkout</button>
                        {/* <Button name="Checkout" type="submit" /> */}
                    </div>
                </div>
            </div>
        </section>
        {/* <Subscriber /> */}
        </>
    )
}