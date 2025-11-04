import React from 'react'

function BannerAll({title}) {
  return (
    <div className='flex justify-center items-center text-center bg-[url(/banner.webp)] h-[60vh] bg-cover bg-center'>
        <h1 className='text-white'>{title}</h1>
    </div>
  )
}

export default BannerAll