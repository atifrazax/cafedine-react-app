import { useState } from "react";
import BannerAll from '../components/BannerAll'
import Loader from "../components/Loader";
import { useAuth } from "../contexts/useAuth";
import { useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";


export default function Cart() {
    const navigate = useNavigate();
    const couponRef = useRef();
    const {cart, updateCart, removeFromCart, coupon, updateCoupon} = useAuth();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const applyCoupon = async (e) => {
        e.preventDefault();
        setLoading(true);
        updateCoupon("")
        if(!couponRef.current.value) return setMessage("Please enter a valid code");
        setMessage("");
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/verify-coupon/${couponRef.current.value.toUpperCase()}`,
                {withCredentials: true});
            const coupon = await res?.data?.coupon;
            updateCoupon(coupon);
            setLoading(true);
        } catch (error) {
            setMessage(error?.response?.data?.message || "Coupon not found. Please try again");
        }
    }
    useEffect(() => {
        setProducts(cart);
    }, [cart]);
    let total = 0;
    const subtotal = products.reduce((total, product) => total + product.price * product.qty, 0)
    if (subtotal < coupon?.minSubtotal) {
        total = subtotal;
    } else {
        const discount = coupon?.type === "percentage" ? subtotal * (Number(coupon?.value) / 100) : Number(coupon?.value) || 0;
        total = (subtotal - discount);
    }
    return (
        <>
        <Loader />
        <BannerAll title="My Cart"/>
        <section  className="bg-slate-50 py-35">
            {products.length > 0 ? (
                <>
            <div className="overflow-x-auto mx-auto max-w-7xl px-4 md:px-6 lg:px-10 flex flex-col sm:flex-col justify-between space-y-2 sm:gap-y-0 ">
                <ul className="min-w-[800px] flex flex-row justify-center items-center text-center px-4 py-6 gap-0 sm:gap-0 text-black overflow-auto">
                    <li className="w-1/5"></li>
                    <li className="w-1/4">Name</li>
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
                            <span>{product.name}</span>
                            <p>{product.description}</p>
                        </li>
                        <li className="w-1/6">${product.price}</li>
                        <li className="w-1/6"><input type="number" value={product.qty} min={1} max={10} onChange={e=>updateCart(product._id, e.target.value)} className="text-center px-4 py-2 border border-gray-200 rounded-sm"/></li>
                        <li className="w-1/6">${(product.price * product.qty).toFixed(2)}</li>
                        <li className="w-1/7 hover:scale-150 hover:transition duration-300 text-4xl"  onClick={()=>removeFromCart(product._id)}>&times;</li>
                    </ul>
                )
            })}
            
            </div>
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10 flex flex-col sm:flex-col justify-between space-y-2 sm:gap-y-0 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <form onSubmit={applyCoupon} className="flex flex-col space-y-4 p-8 mt-6 sm:mt-0">
                        <p>Enter your coupon code if you have one</p>
                        <input type="text" name='code' ref={couponRef} onChange={()=>setLoading(false)} placeholder="Coupon Code" className="border sm:w-2/3 p-3 uppercase"/>
                        {message && <p className="text-red-500">{message}</p>}
                        <button disabled={loading} name="Apply Coupon" type="submit" className="sm:w-2/3 bg-primary text-center
                         text-white px-6 py-2 hover:bg-black transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed
                         ">
                            Apply Coupon
                        </button>
                    </form>
                    <div className="flex flex-col space-y-4 p-8  text-black">
                        <h4 className="border-b pb-4 border-gray-300">Order Summary</h4>
                        <div className="flex justify-between border-b pb-4 border-gray-300">
                            <span>Subtotal</span><span>$ {products.reduce((total, product) => total + product.price * product.qty, 0).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between border-b pb-4 border-gray-300">
                            <span>Shipping</span><span>$ 0.00</span>
                        </div>
                        <div className="flex justify-between border-b pb-4 border-gray-300">
                            <span>Tax</span><span>$ 0.00</span>
                        </div>
                        { coupon && subtotal >= coupon?.minSubtotal &&
                            <div className="flex justify-between border-b pb-4 border-gray-300">
                                <span>Coupon</span>
                                <span className='text-red-500'>- {coupon.type === "percentage" ? `${Number(coupon.value)} %` : `$ ${Number(coupon.value)}`}</span>
                            </div>
                        }
                        {subtotal < coupon?.minSubtotal && coupon && (
                        <p className="text-red-500 text-sm">
                            Coupon cannot be applied on subtotal less than ${coupon?.minSubtotal}
                        </p>
                        )}

                        <div className="flex justify-between  pt-4 font-semibold uppercase">
                            <span>Total</span>
                            <span>$ {total.toFixed(2)}</span>
                        </div>
                        <button disabled={subtotal < 1} onClick={()=>{
                            subtotal < coupon?.minSubtotal && updateCoupon("");
                            navigate('/shipping'); 
                            }} 
                        className="bg-primary text-center text-white px-6 py-2 mt-4 disabled:hover:bg-gray-400
                        hover:bg-black transition duration-300 disabled:cursor-not-allowed
                        ">Proceed To Checkout</button>
                    </div>
                </div>
            </div>
            </>
            ) : (
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col ">
                    <div className="flex flex-col mb-20 justify-center items-center text-center">
                        <span className="text-primary text-4xl font-dancing font-semibold">Cart is Empty</span>
                        <h2 className='mt-4 sm:w-1/2 leading-12 capitalize'>Your cart is empty, please add some items to your cart</h2>
                    </div>
                    <div className='flex justify-center space-x-4'>
                        <Link to='/recipes' className='bg-white border text-black px-4 py-2 font-semibold hover:bg-primary transition duration-300 hover:text-white uppercase'>Shop Now</Link>
                    </div>
                </div>
            )}
        </section>
        </>
    )
}