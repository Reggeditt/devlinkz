'use client'

import React, { useEffect, useState } from 'react'
import { useStore } from '../context/StoreContext'

const AddLinkBanner = () => {
  const { linkData, addNewLinkTemplate } = useStore()

  useEffect(() => {

  }, [linkData])
  return (
    <>
      <h1 className='text-xl font-bold'>Customize your links</h1>
      <p className='text-gray-500 text-sm'>Add/edit/remove links below and then share all your profiles with the world!</p>
      <button
        className='bg-white border border-blue-500 text-blue-500 px-4 py-1 rounded-lg w-full'
        onClick={addNewLinkTemplate}
      >
        Add new link
      </button>
    </>
  )
}

export default AddLinkBanner
