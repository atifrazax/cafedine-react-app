import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/useAuth.js';
import getCsrfToken from '../../utils/getCsrfToken.js';
import {uploadToCloudinary} from '../../utils/uploadToCloudinary.js';
import Loader from '../../components/Loader.jsx';

export default function AddProduct() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if(!user) return navigate("/admin", {state: {message: "Your session has expired. Please log in again."}});
  }, [user, navigate]);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('');
  const [file, setFile] = useState('');
  const [error, setError] = useState('');
  const [uploading, setUploading] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setUploading(true);
      
      try {
        if (!name || !description || !price || !quantity || !category || !file) {
          setError("Please fill all the required fields");
          return;
        }
        const csrfToken = await getCsrfToken(); // Get the CSRF token
        
        let imageUrl, imagePublicId;
        if(file) {
          const res = await uploadToCloudinary(file);
          if(!res.success) {
            setError(res.message);
            return;
          } else {
            imageUrl = res.imageUrl;
            imagePublicId = res.imagePublicId;
          }
        }
        
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/admin/add-product`, {
          name,
          description,
          price,
          quantity,
          category,
          image: imageUrl,
          imagePublicId,
        }, {
          headers: { 'x-csrf-token': csrfToken }, // Send the CSRF token
          withCredentials: true
        });
        const message = res.data;
        setError(message.message);
        setName('');
        setDescription('');
        setFile('');
        setPrice(1);
        setQuantity(1);
        setCategory('');
      } catch (error) {
        setError(error.response?.data?.message || error.message || "Something went wrong. Please try again.");
      } finally {
        setUploading(false);
      }
    };

  return (
    <section className='bg-black min-h-screen'>
      <Loader />
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-30 rounded-2xl'>
        <h1 className="text-center text-gray font-extrabold mb-8">Add New Product</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 bg-slate-50 p-4 sm:p-10 text-gray sm:w-[50%] mx-auto rounded-2xl'>
            <label htmlFor="name" >Product Name <sup className='text-red-500'>*</sup></label>
                <input type="text" name='name' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name' className='border border-gray-300 p-3 col-span-2'/>

            <label htmlFor="file">Upload Image <sup className='text-red-500'>*</sup></label>
                <input type="file" name='image' accept='image/*' onChange={(e) => setFile(e.target.files[0])} className='border border-gray-300 p-3 col-span-2'/>
                
            <div className='flex flex-col sm:flex-row gap-4'>
              <label htmlFor="price">Price<sup className='text-red-500'>*</sup></label>
                  <input type="number" name='price' min={1} step={0.01} value={price} onChange={(e) => setPrice(e.target.value)} className='border sm:w-1/2 border-gray-300 p-3 '/>
              
              <label htmlFor="price">Quantity<sup className='text-red-500'>*</sup></label>
                  <input type="number" name='price' min={1} value={quantity} onChange={(e) => setQuantity(e.target.value)} className='border w-1/2 border-gray-300 p-3 '/>
            </div>

            <label htmlFor="category">Category <sup className='text-red-500'>*</sup></label>
                <select type="text" name='category' onChange={(e) => setCategory(e.target.value)} className='border border-gray-300 p-3 '>
                  <option value="beverages">Beverages</option>
                  <option value="food">Food</option>
                  <option value="snacks">Snacks & Sides</option>
                  <option value="desserts">Desserts</option>
                  <option value="specials">Specials / Combos</option>
                  <option value="add-ons">Add-ons / Extras</option>
                </select>

            <label htmlFor="file">Product Description <sup className='text-red-500'>*</sup></label>
            <textarea name="description" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Product Description here...' rows='4' className='border p-3 border-gray-300 col-span-2'></textarea>
            
            {error && <small className='text-red-500! col-span-2'>{error}</small>}

            <button type="submit" disabled={uploading} 
                    className='shadow bg-primary hover:text-gray uppercase px-7 py-3 hover:bg-black
                     text-white! hover:bg-red-custom transition-all mt-4 w-fit
                     duration-300 disabled:opacity-50 disabled:cursor-not-allowed'>
                      {uploading ? "Uploading..." : "Add Product"}
            </button>
        </form>
    </div>
    </section>
  )
}
