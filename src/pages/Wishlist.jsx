
import Banner from "../components/Banner";
import Subscriber from "../components/Subscribe";
import Button from "../components/Button";
import { useObserver } from "../assets/hooks/Observer";


export default function Wishlist() {
    const products = [
        { id: 1, name: "Bell Pepper", image: "./product-6.jpg", price: 4.90, quantity: 2, description: "Behind the word mountains, far from the countries Vokalia and Consonantia" },
        { id: 2, name: "Strawberry", image: "./product-5.jpg", price: 2.90, quantity: 1, description: "Far far away, behind the word from the countries Vokalia and Consonantia" },
        { id: 3, name: "Green Beans", image: "./product-4.jpg", price: 1.90, quantity: 4, description: "Word mountains, far from the countries Vokalia and Consonantia" },
        { id: 4, name: "Purple Cabbage", image: "./product-3.jpg", price: 4.90, quantity: 2, description: "Behind the word mountains, far from the countries Vokalia and Consonantia" },
        { id: 5, name: "Tomato", image: "./product-2.jpg", price: 2.90, quantity: 1, description: "Far far away, behind the word from the countries Vokalia and Consonantia" },
        { id: 6, name: "Brocolli", image: "./product-7.jpg", price: 1.90, quantity: 4, description: "Word mountains, far from the countries Vokalia and Consonantia" },
    ]
    useObserver();

    return (
        <>
        <Banner src="./vegetables-basket.jpg" page="My Wishlist"/>
        
        <section  className="bg-secondary py-35">
            <div className=" overflow-x-auto container mx-auto max-w-7xl px-4 md:px-6 lg:px-10 flex flex-col sm:flex-col justify-between space-y-2 sm:gap-y-0 ">
                
                <ul className="min-w-[600px] flex flex-row justify-between items-center px-4 py-6 gap-0 sm:gap-0 bg-primary text-secondary overflow-auto">
                    <li className="w-1/7"></li>
                    <li className="w-1/5"></li>
                    <li className="w-1/4">Product Name</li>
                    <li className="w-1/8">Price</li>
                    <li className="w-1/3">Add</li>
                </ul>
            {products.map((product, index)=>{
                return(
                    <ul key={index} className="min-w-[600px] flex flex-row justify-between items-center text-center py-2 
                        bg-secondary text-dark  border border-gray-300">
                        <li className="w-1/7"><i className="bi bi-x-circle"/></li>
                        <li className="w-1/5">
                            <img src={product.image} alt="" />
                        </li>
                        <li className="w-1/4 flex flex-col space-y-2">
                            <span>{product.name}</span>
                            <p>{product.description.length > 20 ? product.description.slice(0, 20) + "..." : product.description}</p>
                        </li>
                        <li className="w-1/8">${product.price}</li>
                        <li className="w-1/3"><Button name="Add to Cart" /></li>
                        
                    </ul>
                )
            })}
            
            </div>
        </section>
        <Subscriber />
        </>
    )
}