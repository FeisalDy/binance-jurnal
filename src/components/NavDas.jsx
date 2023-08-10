import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NavDas = () => {
  return (
    <section>
      <div className='flex w-screen p-2 bg-custom_black'>
        <Image
          src='/images/logo.svg'
          width={25}
          height={25}
          alt='logo'
          className='mx-2'
        />
        <h1 className='mx-6 text-2xl font-bold'>Dashboard</h1>
        <ul className='flex items-center justify-center'>
          <li>
            <Link
              href='/'
              className='p-2 mr-2 border border-custom_green hover:bg-black'
            >
              Symbol
            </Link>
          </li>
          <li>
            <Link
              href='/'
              className='p-2 mr-2 border border-custom_green hover:bg-black'
            >
              Date
            </Link>
          </li>
          <li>
            <Link
              href='/'
              className='p-2 mr-2 border border-custom_green hover:bg-black'
            >
              Side
              <span className=''>
                {/* Dropdown arrow symbol */}
                &#9662;
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default NavDas
