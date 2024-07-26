import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div 
    className='w-full h-[80px] bg-white flex justify-between items-center pl-10 pr-10 rounded-lg'
    >
      <Link href={'/home'}><Image src='/logo.png' width={100} height={100} /></Link>
      <nav className='flex justify-center items-center gap-5'>
          <Link href='/home/links'>Links</Link>
          <Link href='/home/profile'>Profile</Link>
      </nav>
      <Link href='/preview'><button>Preview</button></Link>
    </div>
  )
}

export default Navbar