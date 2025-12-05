import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {useAuth} from "../contexts/useAuth.js";
import getUser from "../utils/getUser";
import Loader from "../components/Loader";


export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const { user, setUser } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if(user) return navigate("/", {replace: true});
    if (location.state?.message) {
      setError(location.state.message);
    }
  }, [location.state, navigate, user]);
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      
      try {
        await axios.post(`${import.meta.env.VITE_API_URL}/signin`, {
          email,
          password
        }, {
          withCredentials: true
        });
        await getUser(setUser); // Get user data from backend via /me route
        navigate("/my-blogs", {replace: true});
      } catch (error) {
        setError(error.response?.data?.message || "Login failed");
      } finally {
        setLoading(false);
      }
    };
    // Google SignIn
    const googleSignin = async (e) => {
      e.preventDefault();
      window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
    }
  return (
    <section className="bg-black">
      <Loader />
        <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-30 pb-15 min-h-screen'>
            <div className='grid place-content-center sm:w-1/2 mx-auto bg-white shadow-2xl shadow-white/60 rounded-2xl p-10'>
                <h1 className='text-red-custom mb-12 text-center text-primary'>Login</h1>
                 <form onSubmit={handleSubmit} className='flex flex-col gap-2 relative *:text-gray'>
                    <input value={email} onChange={e=>setEmail(e.target.value)} id='email' autoComplete="true" type="email" placeholder='Your Email' className='shadow py-3 px-10 rounded-lg'/>
                    <input value={password} onChange={e=>setPassword(e.target.value)} id='password' autoComplete="true" type="password" placeholder='Your Password' className='shadow py-3 px-10 rounded-lg'/>
                    {error && <small className='text-red-400!'>{error}</small>}
                    <button 
                    disabled={loading} 
                    type="submit" 
                    className='shadow bg-primary hover:bg-gray py-2 px-10 rounded-lg
                     text-white! transition-all mt-4
                     duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                     '>
                     {loading ? "Logging In..." : "Login"}
                     </button>
                    <button
                    disabled={loading}
                    onClick={googleSignin}
                    className='flex shadow-md bg-white border border-gray hover:border-primary py-2 px-6 rounded-lg
                     text-gray transition-all mt-0
                     duration-300 disabled:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed
                     '><img src="google-icon.svg" alt="" className="w-6 h-auto me-3"/>
                     Continue with Google
                     </button>

                    <small className='text-center text-gray-400 mt-4'>Don't have an account? <Link to="/register" className='text-primary'>Register Now</Link></small>
                 </form>
            </div>
        </div>
    </section>
  )
}
