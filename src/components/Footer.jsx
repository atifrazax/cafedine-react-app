import React from 'react'
import Socials from './Socials'

function Footer() {
  return (
    <>
    <footer className='bg-black'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col py-20 justify-center items-center'>
            <div className='flex space-x-20 flex-col sm:flex-row space-y-16'>
                <div className='flex-1 space-y-4'>
                    <h5 className='text-white mb-6'>About</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, possimus nemo eveniet.</p>
                    <Socials className='flex-row'/>
                </div>
                <div className='flex-1 flex-col '>
                    <h5 className='mb-6 text-white'>Contact Info</h5>
                    <div className='mb-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" inline me-2 icon icon-tabler icons-tabler-outline icon-tabler-device-mobile"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z" /><path d="M11 4h2" /><path d="M12 17v.01" /></svg>
                        <a href='tel:+123456789' >+1 234 56789</a>
                    </div>
                    <div className='mb-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" inline me-2 icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                        <a href='mailto:name@domain.com'>name@domain.com</a>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" inline me-2 icon icon-tabler icons-tabler-outline icon-tabler-map-pins"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.828 9.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z" /><path d="M8 7l0 .01" /><path d="M18.828 17.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z" /><path d="M16 15l0 .01" /></svg>
                        <address className='inline'>123 Fake Los Angeles, USA</address>
                    </div>
                </div>
                <div className='flex-1'>
                    <h5 className='mb-6 text-white'>Opening Hours</h5>
                    <p className='text-gray'>Monday - Thursday </p>
                    <span className='font-garamond text-white font-medium'>10:00 AM - 11:00 PM</span>
                    <p className='text-gray mt-4'>Friday - Sunday </p>
                    <span className='font-garamond text-white font-medium'>8:00 AM - 2:00 PM </span>
                </div>
            </div>
            <div className='flex flex-col text-center sm:w-1/2 mt-16  text-white'>
                <h5 className='text-gray'>Get Latest Food Recipe At Your Inbox</h5>
                <div className='relative mt-4 w-full flex justify-center items-center'>
                    <input type="email" placeholder='Enter Email' className=' w-full bg-[#000] border border-gray-800 p-3 '/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute right-3 inline me-2 text-white icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                </div>
            </div>
        </div>
        <div className="bg-[#000] py-8 text-white/95">
            <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-10 justify-center text-center">
                <span className='text-sm'>Copyright © {new Date().getFullYear()} All rights reserved | This template is made with ❤️ by <a href="https://atifraza.is-great.net/" className="font-bold uppercase" target="_blank" >Atif</a></span>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer