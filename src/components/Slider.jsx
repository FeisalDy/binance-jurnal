'use client'
import React, { useState } from 'react'
import { SliderData } from './SliderData'
import Image from 'next/image'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <div id='gallery' className='max-w-[1240px] mx-auto'>
      <h1 className='p-4 text-2xl font-bold text-center'>Gallery</h1>
      <div className='relative flex justify-center p-4'>
        {SliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? 'opacity-[1] ease-in duration-1000'
                  : 'hidden'
              }
            >
              <div className='relative flex justify-center p-4'>
                <FaArrowCircleLeft
                  className='absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]'
                  onClick={prevSlide}
                  size={50}
                />
                {index === current && (
                  <div className='h-screen-1/4 w-screen-5/6 md:h-screen-5/6'>
                    <Image
                      src={slide.image}
                      alt='/'
                      fill={true}
                      //   width={1440} // Set your desired width
                      //   height={300} // Set your desired height
                      objectFit='cover'
                    />
                  </div>
                )}
                <FaArrowCircleRight
                  className='absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]'
                  onClick={nextSlide}
                  size={50}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Slider
