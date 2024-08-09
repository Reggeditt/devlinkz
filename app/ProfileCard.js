'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { useAuth } from './context/authContext'
import { auth } from '@/utilities/firebase/firebaseConfig'

const ProfileDisplayCard = () => {
  const [user, setUser] = useState(auth.currentUser)
  return (
    <>
      <div className='flex flex-col gap-2 justify-center items-center'>
        <div className='w-[55px] h-[55px] rounded-full relative'>
          <Image src={user?.photoURL} fill className='rounded-full max-w-[100px]' />
        </div>
        <div className='flex flex-col items-center'>
          <h1 className='font-bold text-xl'>{user?.displayName.split(' ')[0] || 'User'}</h1>
          <p className='text-xs text-gray-400'>{user?.email}</p>
        </div>
      </div>
      
    </>
  )
}

export default ProfileDisplayCard