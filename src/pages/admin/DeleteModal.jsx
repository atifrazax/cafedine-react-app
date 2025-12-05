import axios from "axios";
import { useState } from "react";

function DeleteModal({isOpen, onClose, id}) {
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const handleDelete = async () => {
        try {
            setLoading(true);
            const res = await axios.delete(`${import.meta.env.VITE_API_URL}/admin/delete-user-manager/${id}`,
                {withCredentials: true}
            );
            setMessage(res?.data?.message);
        } catch (error) {
            setMessage(error?.response?.data?.message || "Delete failed. Please try again");
        } finally {
            setLoading(false);
        }
    }
    if(!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-[90%] sm:w-1/2 relative">
      <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black hover:text-gray-800"
        >
          ✖
        </button>
        <h2 className="text-lg font-semibold mb-4">Delete Product</h2>
        {message ? (
        <p className="text-gray-600 mb-4">{message}</p>
        ) : (
        <>
            <p className="text-gray-600 mb-4">Are you sure you want to delete?</p>
            <div className="flex justify-end">
                <button onClick={onClose} className="bg-gray-500 hover:bg-gray text-white py-2 px-4 rounded mr-2">Cancel</button>
                <button disabled={loading} onClick={handleDelete} className="bg-red-500 hover:bg-red-600 
                text-white py-2 px-4 rounded mr-2 disabled:cursor-none disabled:bg-gray">
                    {loading ? 'Deleting...' : 'Delete'}</button>
            </div>
        </>
        )}
      </div>
    </div>
  )
}

export default DeleteModal