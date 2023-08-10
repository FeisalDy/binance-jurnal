import React from 'react'
import Hero from '@/components/Hero'
import { SliderData } from '@/components/SliderData'
import Slider from '@/components/Slider'
import NavBar from '@/components/NavBar'

const Page = () => {
  return (
    <div>
      <NavBar />

      <Hero
        heading='Home'
        message='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      />
      <Slider slides={SliderData} />
    </div>
  )
}

export default Page
