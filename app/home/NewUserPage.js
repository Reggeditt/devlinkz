'use client'

import React from 'react'
import Image from 'next/image'

const NewUserPage = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Image className='getStartedBanner bg-white rounded-lg' src={'/getstarted.svg'} width={150} height={200} />
      <h1 className='text-3xl font-bold text-left'>
        Lets get you started
      </h1>
      <p className='text-gray-500'>
        {`
          Use the "Add new link" button to get started. Once your have
          more than one link, you can reorder and edit them. We're here to help
          you share your profiles with everyone!
        `}
      </p>
    </div>
  )
}

export default NewUserPage
