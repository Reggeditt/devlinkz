import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div 
    className='w-full h-[80px] bg-gray-400 flex justify-between items-center pl-10 pr-10 rounded-lg'
    >
      <Link href={'/home'}><Image src='/logo.png' width={50} height={50} /></Link>
      <nav className='flex justify-center items-center gap-5'>
          <Link href='/home/links'>Links</Link>
          <Link href='/home/profile'>Profile</Link>
      </nav>
      <button>Preview</button>
    </div>
  )
}

export default Navbar