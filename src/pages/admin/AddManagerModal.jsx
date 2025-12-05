import axios from "axios";
import { useState } from "react";
import getCsrfToken from '../../utils/getCsrfToken.js';

export default function AddManagerModal({isOpen, setIsOpen}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
          const csrfToken = await getCsrfToken(); // Get the CSRF token
          console.log(csrfToken);

          const res = await axios.post(`${import.meta.env.VITE_API_URL}/admin/register-manager`, { name, email, password, role: 'manager' }, {
            withCredentials: true,
            headers: { 'x-csrf-token': csrfToken }, // Send the CSRF token
          });
          setName('');
          setEmail('');
          setPassword('');
          setMessage(res.data.message || "Register successfully.");
        
        } catch (error) {
          setMessage(error.response?.data?.message || "Register failed. Please try again");
        } finally {
          setLoading(false);
        }
      };
if(!isOpen) return null;
  return (
    <section className="bg-black">
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-lg w-1/2 relative">
            <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-black hover:text-gray-800"
        >
          ✖
        </button>
                <h1 className='text-red-custom mb-15 text-center text-primary'>Create New Manager</h1>
                 <form onSubmit={handleSubmit} className='flex flex-col gap-2 *:text-gray'>

                    <input value={name} onChange={e=>setName(e.target.value)} id='name' type="text" placeholder='Your Name' className='shadow py-3 px-10 rounded-lg bg-white'/>

                    <input value={email} onChange={e=>setEmail(e.target.value)} id='email' type="email" placeholder='Your Email' className='shadow py-3 px-10 rounded-lg bg-white'/>

                    <input value={password} onChange={e=>setPassword(e.target.value)} id='password' type="password" placeholder='Your Password' className='shadow py-3 px-10 rounded-lg bg-white'/>
                    
                    {message && <small className='text-red-400!'>{message}</small>}

                    <button type="submit" disabled={loading} 
                    className='shadow bg-primary hover:bg-gray hover:text-gray py-2 px-10 rounded-lg bg-gray-custom
                     text-white! hover:bg-red-custom transition-all mt-4
                     duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                    '>
                      {loading ? "Creating..." : "Create Manager"}
                    </button>

                    {/* <span className="animate-[moveAround_8s_ease-in-out_infinite] absolute h-32 w-32 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-10 -z-1"></span> */}
                 </form>
            </div>
        </div>
    </section>
  )
}
