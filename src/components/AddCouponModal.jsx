import axios from "axios";
import { useState } from "react";

export default function AddCouponModal({setAddCoupon}) {
    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
     const handleAddCoupon = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/admin/add-coupon`, formData, {withCredentials: true});
      setAddCoupon(false);
    } catch (error) {
      console.log(error);
      setMessage(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded shadow-lg w-1/2 relative">
        <button
          onClick={() => setAddCoupon(false)}
          className="absolute top-2 right-2 text-black hover:text-gray-800"
        >
          ✖
        </button>
        <form onSubmit={handleAddCoupon} className=" *:flex *:gap-4 text-black *:px-6 *:py-2  **:w-full **:py-1 **:px-2 *:bg-gray-100">
            <div>
                <label htmlFor="code">Code</label>
                <input type="text" onChange={(e)=>setFormData(prev=>({...prev, code: e.target.value.toUpperCase()}))} placeholder="Code"/>
            </div>
            <div>
                <label htmlFor="type">Type</label>
                <select type="text" name="type" onChange={(e)=>setFormData(prev=>({...prev, discountType: e.target.value}))}>
                    <option value="">Select</option>
                    <option value="percentage">Percentage</option>
                    <option value="fixed">Fixed</option>
                </select>
            </div>
            <div>
                <label htmlFor="value">Value</label>
                <input type="number" min={1} onChange={(e)=>setFormData(prev=>({...prev, discountValue: Number(e.target.value)}))} placeholder='e.g 10 for 10% / $10'/>
            </div>
            <div>
                <label htmlFor="value">Minimum Subtotal</label>
                <input type="number" min={1} onChange={(e)=>setFormData(prev=>({...prev, minSubtotal: Number(e.target.value)}))} placeholder='e.g minimum 50'/>
            </div>
            <div>
                <label htmlFor="date">Expiry Date</label>
                <input type="date" onChange={(e)=>setFormData(prev=>({...prev, expiryDate: e.target.value}))}/>
            </div>
            <div>
            {message && <small className='text-red-500! block'>{message}</small>}
            </div>
            <button 
            type="submit" 
            disabled={loading} 
            className='shadow bg-primary! hover:bg-gray! py-2! px-8!
            text-white transition-all mt-4 w-fit! duration-300 
            disabled:opacity-50 disabled:cursor-not-allowed'>
                {loading ? "Adding..." : "Add Coupon"}
            </button>
            </form>
        </div>
    </div>
  )
}
