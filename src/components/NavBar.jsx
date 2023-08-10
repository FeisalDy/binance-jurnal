'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import Image from 'next/image'

const NavBar = () => {
  const { data: session } = useSession()
  const [providers, setProviders] = useState(null)
  const [nav, setNav] = useState(false)
  const [color, setColor] = useState('transparent')
  const [text, setText] = useState('white')

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders()

      setProviders(response)
    }
    setUpProviders()
  }, [])

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff')
        setText('#000000')
      } else {
        setColor('transparent')
        setText('#ffffff')
      }
    }
    window.addEventListener('scroll', changeColor)
  }, [])

  return (
    <nav
      style={{ backgroundColor: `${color}` }}
      className='fixed top-0 left-0 z-10 w-full duration-300 ease-in'
    >
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-2 text-white'>
        <Link href='/'>
          <h1 style={{ color: `${text}` }} className='text-5xl font-bold'>
            C
          </h1>
        </Link>
        <ul className='hidden sm:flex' style={{ color: `${text}` }}>
          <li className='p-4'>
            <Link href='/'>Home</Link>
          </li>
          <li className='p-4'>
            <Link href='/#gallery'>Gallery</Link>
          </li>
          <li className='p-4'>
            <Link href='/work'>Work</Link>
          </li>
          <li className='p-4'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        {session?.user ? (
          <div className='hidden sm:flex'>
            <button
              type='button'
              onClick={() => signOut()}
              className='p-4'
              style={{ color: `${text}` }}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map(provider => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() =>
                    signIn(provider.id, { callbackUrl: '/dashboard' })
                  }
                >
                  Sign in
                </button>
              ))}
          </>
        )}

        {/* Mobile Button */}
        <div onClick={handleNav} className='z-10 block sm:hidden'>
          {nav ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${text}` }} />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-screen text-center duration-300 ease-in bg-black sm:hidden'
              : 'absolute top-0 bottom-0 left-[-100%] right-0 flex items-center justify-center w-full h-screen text-center duration-300 ease-in bg-black sm:hidden'
          }
        >
          <ul onClick={handleNav}>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/'>Home</Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#gallery'>Gallery</Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/work'>Work</Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
