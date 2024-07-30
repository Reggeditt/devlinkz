'use client'

import Link from 'next/link'
import { BsGithub } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io"

const DisplayProfileLinks = () => {
  return (
    <>
      <nav className='w-full flex flex-col items-center'>
        <div className='w-[140px] h-[40px] bg-[#eeeeee] rounded-xl pl-2 pr-2 flex justify-start items-center'>
          <Link href='' className='w-full flex items-center justify-between gap-1 text-sm'>
            <span className='flex items-center gap-1'>< BsGithub />{`Github`}</span>
            <IoIosArrowRoundForward />
          </Link>
        </div>
      </nav>
    </>
  )
}

export default DisplayProfileLinks
