import React from 'react'
import Image from 'next/image'

const NewUserPage = () => {
  return (
    <>
      <h1 className='text-3xl font-bold'>Lets get you started</h1>
      <p className='text-gray-500'>{`Use the "Add new link" button to get started. Once your have
          more than one link, you can reorder and edit them. We're here to help
          you share your profiles with everyone!`}</p>
    </>
  )
}

export default NewUserPage
