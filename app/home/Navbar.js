'use client'

import { auth } from '@/utilities/firebase/firebaseConfig'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/authContext'

const Navbar = () => {
  const { logoutUser } = useAuth()
  const [openMenu, setOpenMenu] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() => {
    setUser(auth.currentUser)
  }, [user])
  return (
    <div 
    className='w-full h-[80px] bg-white flex justify-between items-center pl-10 pr-10 rounded-lg'
    >
      {console.log(auth.currentUser)}
      <Link href={'/home'}><Image src='/logo.png' width={100} height={100} /></Link>
      <nav className='flex justify-center items-center gap-5'>
          <Link href='/home'>Links</Link>
          <Link href='/home/profile'>Profile</Link>
      </nav>
      <div className='flex justify-center items-center gap-5'>
      <Link href='/preview'><button>Preview</button></Link>
        <Image src={user?.photoURL} width={35} height={35} className='profile-circle rounded-full bg-red-300' onClick={logoutUser}/>
      </div>
    </div>
  )
}

export default Navbar