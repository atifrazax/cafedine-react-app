import React from 'react'

function Comments() {
  return (
    <div className='grid grid-cols-[auto_1fr] gap-x-4 py-10'>
        <img src="/chef-1.webp" alt="Profile" className="w-20 h-auto object-cover " />
        <div>
            <div className='flex flex-col'>
                <h5>John Doe</h5>
                <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nulla unde voluptate earum ipsum veniam.</p>
                <span>&#8599; Reply</span>
            </div>
            {/* ----Replies----- */}
            <div className='grid grid-cols-[auto_1fr] space-x-3 py-10'>
                <img src="/chef-3.webp" alt="Profile" className="w-15 h-auto object-cover " />
                <div>
                    <div className='flex flex-col'>
                        <h5>Zowa Kite</h5>
                        <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nulla unde voluptate earum ipsum veniam.</p>
                        <span>&#8599; Reply</span>
                    </div>
                </div>
            </div>
            {/* ----Replies----- */}
        </div>


        <img src="/chef-2.webp" alt="Profile" className="w-20 h-auto object-cover " />
        <div>
            <div className='flex flex-col'>
                <h5>Jeff Ray</h5>
                <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nulla unde voluptate earum ipsum veniam.</p>
                <span>&#8599; Reply</span>
            </div>
            {/* ----Replies----- */}
            {/* <div className='grid grid-cols-[15%_85%] py-10'>
                <img src="/img-3.jpg" alt="Profile" className="w-20 h-20 object-cover " />
                <div>
                    <div className='flex flex-col'>
                        <h5>John Doe</h5>
                        <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nulla unde voluptate earum ipsum veniam.</p>
                        <span>&#8599; Reply</span>
                    </div>
                </div>
            </div> */}
            {/* ----Replies----- */}
        </div>
    </div>
  )
}

export default Comments