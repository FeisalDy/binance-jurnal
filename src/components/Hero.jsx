import React from 'react'

const Hero = ({ heading, message }) => {
  return (
    <div className='flex items-center justify-center h-screen mb-8 bg-fixed bg-center bg-cover custom_image'>
      {/* Overlay */}
      <div className='absolute top-0 bottom-0 left-0 right-0 bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        <h2 className='text-5xl font-bold'>{heading}</h2>
        <p className='py-5 text-xl'>{message}</p>
        <button className='px-8 py-2 border'>Trade</button>
      </div>
    </div>
  )
}

export default Hero
