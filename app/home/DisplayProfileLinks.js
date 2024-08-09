'use client'

import Link from 'next/link'
import { BsGithub } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useStore } from '../context/StoreContext';

const DisplayProfileLinks = () => {
  const { linkData } = useStore()
  return (
    <>
      <nav className='w-full flex flex-col items-center'>
        {linkData?.map((link, index) => (
            <div key={index} className='w-[140px] h-[40px] bg-[#eeeeee] rounded-xl pl-2 pr-2 flex justify-start items-center'>
          <Link href={link.link}>
            <div className='flex items-center gap-2 hover:text-[#FF6B6B]'>
              {link.platform === 'github' ? <FaGithub /> : link.platform === 'linkedin' ? <FaLinkedin /> : link.platform === 'facebook' ? <FaFacebook /> : <FaYoutube />}
              <a className='capitalize'>{link.platform}</a>
              <IoIosArrowRoundForward className='' />
            </div>
          </Link>
        </div>
        )
        )}
          {/* <Link href='' className='w-full flex items-center justify-between gap-1 text-sm'>
            <span className='flex items-center gap-1'>< BsGithub />{`Github`}</span>
            <IoIosArrowRoundForward />
          </Link> */}
      </nav>
    </>
  )
}

export default DisplayProfileLinks
