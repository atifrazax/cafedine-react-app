import axios from "axios";
import { useState } from "react";
import getCsrfToken from "../utils/getCsrfToken";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";
export default function UpdateModal({ isOpen, onClose, product }) {
    const productId = product?._id;
    
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
    name: product?.name,
    description: product?.description,
    price: product?.price,
    quantity: product?.quantity,
    category: product?.category,
    file: null,
  });
  const [error, setError] = useState(null);
  // Handle form submission
  const handleUpdate = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
          const csrfToken = await getCsrfToken(); // Get the CSRF token
          // console.log(csrfToken);
          
        let imageUrl, imagePublicId;
        if(formData.file) {
          const res = await uploadToCloudinary(formData.file);
          imageUrl = res.imageUrl;
          imagePublicId = res.imagePublicId;        
          // console.log('Image uploaded',imageUrl, imagePublicId);
        }
        const res = await axios.patch(`${import.meta.env.VITE_API_URL}/admin/update-product/${productId}`, {
          name: formData.name,
          description: formData.description,
          price: formData.price,
          salePrice: formData.salePrice,
          quantity: formData.quantity,
          category: formData.category,
          image: imageUrl,
          imagePublicId,
        }, {
          headers: { 'x-csrf-token': csrfToken }, // Send the CSRF token
          withCredentials: true
        });
        setError(res.data.message); // on update product success message
      } catch (error) {
        console.log(error);
        setError(error.response?.data?.message || "Update failed");
      } finally {
        setLoading(false);
      }
    };

    if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-1/2 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black hover:text-gray-800"
        >
          ✖
        </button>
        <h4 className="text-center">Update Product</h4>
        <form onSubmit={handleUpdate} className=" *:flex *:gap-4 text-black *:px-6 *:py-2  **:w-full **:py-1 **:px-2 *:odd:bg-gray-100">
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" onChange={(e)=>setFormData(prev=>({...prev, name: e.target.value}))} placeholder={product?.name}/>
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <select type="text" onChange={(e)=>setFormData(prev=>({...prev, category: e.target.value}))} placeholder={product?.category}>
                    <option value="">Select</option>
                    <option value="beverages">Beverages</option>
                    <option value="food">Food</option>
                    <option value="snacks">Snacks & Sides</option>
                    <option value="desserts">Desserts</option>
                    <option value="specials">Specials / Combos</option>
                    <option value="add-ons">Add-ons / Extras</option>
                </select>
            </div>
            <div>
                <label htmlFor="image">Image</label>
                <input type="file" onChange={(e)=>setFormData(prev=>({...prev, file: e.target.files[0]}))} className="w-55"/>
            </div>
            <div>
                <label htmlFor="quantity">Quantity</label>
                <input type="number" min={1} onChange={(e)=>setFormData(prev=>({...prev, quantity: e.target.value}))} placeholder={product?.quantity}/>
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input type="number" step={0.01} min={1} onChange={(e)=>setFormData(prev=>({...prev, price: e.target.value}))} placeholder={product?.price}/>
            </div>
            <div>
                <label htmlFor="salePrice">Sale Price</label>
                <input type="number" step={0.01} min={0} onChange={(e)=>setFormData(prev=>({...prev, salePrice: e.target.value}))} placeholder={product?.salePrice}/>
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <textarea type="text" onChange={(e)=>setFormData(prev=>({...prev, description: e.target.value}))} name="description" rows={3} placeholder={product?.description}/>
            </div>
            {error && <small className='text-red-500! block'>{error}</small>}
            <button 
            type="submit" 
            disabled={loading} 
            className='shadow bg-primary! hover:bg-gray! py-2! px-8!
            text-white transition-all mt-4 w-fit! duration-300 
            disabled:opacity-50 disabled:cursor-not-allowed'>
                {loading ? "Updating..." : "Update Product"}
            </button>
            </form>
      </div>
    </div>
  );
}
