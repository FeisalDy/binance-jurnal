import React from 'react'
import Image from 'next/image'

const SideBar = () => {
  const navbarHeight = 48
  const sidebarHeight = `calc(100vh - ${navbarHeight}px)`

  return (
    <div
      className='w-12 bg-custom_black_sidebar'
      style={{ height: sidebarHeight }}
    >
      <Image src='/images/setting.svg' width={30} height={30} alt='logo' />
    </div>
  )
}

export default SideBar
