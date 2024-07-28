'use client'

import Navbar from "./Navbar"
import { Divider, message } from "antd"
import { useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { useAuth } from "../context/authContext"
import DisplayProfileLinks from "./DisplayProfileLinks"
import ProfileDisplayCard from "../ProfileCard"
import AddLinkBanner from "./AddLinkBanner"
import ProfileBanner from "./ProfileBanner"

const HomeLayout = ({ children }) => {
  const router = useRouter();
  const path = usePathname()
  const { user } = useAuth();


  useEffect(() => {
    if (!user) {
      router.push('/login');
      message.warning('Please login to access this page');
    }
  }, [user]);
  return (
    <div className="flex flex-col gap-3 w-screen h-screen p-3 bg-[#f5f5f5]">
      <Navbar />
      <div className='flex justify-around w-full h-full rounded-xl'>
        <section className='min-w-[40%] rounded-lg flex justify-center items-center bg-white rounded-xl'>
          <div className='phone-frame-container pt-8 pb-3 bg-contain w-[250px] h-[350px] flex flex-col items-center gap-6'>
            <ProfileDisplayCard />
            <DisplayProfileLinks />
          </div>
        </section>

        <section className='bg-white h-full w-[58%] rounded-lg flex flex-col justify-between gap-2 p-3'>
          <div className="flex flex-col items-start gap-3">
            {path === '/home' || path === '/home/links'? <AddLinkBanner /> : <ProfileBanner />}
            <div className="page-content-container bg-[#fafafa] w-full h-[300px] overflow-y-scroll rounded-lg p-5">
              {children}
            </div>
          </div>
          <Divider style={{margin: '0'}}/>
          <div className="flex justify-end pr-3">
            <button className='bg-blue-500 text-white px-4 py-2 rounded-lg'>Save</button>
          </div>
        </section>
      </div>

    </div>)

}

export default HomeLayout
