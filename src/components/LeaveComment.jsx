import React from 'react'

function LeaveComment() {
  return (
    <div className='grid grid-cols-1 gap-4 py-10 bg-slate-50 p-4 sm:p-10'>
        <h5 className='col-span-2'>Leave a comment</h5>
        <input type="text" placeholder='Your Name' className='border border-gray-300 p-3 col-span-2'/>
        <input type="email" placeholder='Your Email' className='border border-gray-300 p-3 col-span-2'/>
        <textarea name="comment" rows='6' id="comment" className='border border-gray-300 col-span-2'></textarea>
        <button className='uppercase bg-primary text-white py-2 px-4 w-fit font-semibold hover:bg-black transition duration-300 '>Post Comment</button>
    </div>
  )
}

export default LeaveComment