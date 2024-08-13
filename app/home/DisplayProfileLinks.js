'use client'

import Link from 'next/link'
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
      <nav className='w-full flex flex-col items-center gap-3'>
        {linkData?.links?.map((link, index) => (
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
      </nav>
    </>
  )
}

export default DisplayProfileLinks
