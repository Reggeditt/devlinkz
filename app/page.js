import Link from 'next/link'
import React from 'react'

const SplashPage = () => {
  return (
    <div className='w-full h-screen bg-black relative flex flex-col justify-center items-start'>
      <nav className='w-full h-[60px] pr-20 pl-20 pt-5 pb-5 flex justify-between items-center bg-white/30 backdrop-blur-xl absolute top-0'>
        <span className='text-white bg-blue-600 p-2 rounded-lg'>Devlinkz</span>
        <span className='pt-1 pb-1 rounded-lg bg-gray-100 text-bold'>
          <Link href={'/login'} className='p-2 bg-gray-100 rounded-l-lg text-bold hover:bg-red-500'>Login</Link>|
          <Link href={'/signup'} className='p-2 bg-gray-100 rounded-r-lg text-bold hover:bg-blue-500'>Sign-up</Link>
        </span>
      </nav>
      <section className='text-white pl-20 flex flex-col justify-evenly gap-3'>
        <h1 className='text-6xl'>Welcome to Devlinkz</h1>
        <p className='text-gray-200 text-4xl'>One place to keep all your links!</p>
        <Link href={'/home'} className='p-2 bg-blue-500 rounded-lg text-2xl text-center hover:bg-red-500 w-40'>Get Started</Link>
      </section>
    </div>
  )
}

export default SplashPage