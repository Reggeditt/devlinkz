'use client'

import Navbar from "./Navbar"
import { Button, Divider, message } from "antd"
import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import DisplayProfileLinks from "./DisplayProfileLinks"
import ProfileDisplayCard from "../ProfileCard"
import AddLinkBanner from "./AddLinkBanner"
import ProfileBanner from "./ProfileBanner"
import { auth } from "@/utilities/firebase/firebaseConfig"
import { StoreProvider, useStore } from "../context/StoreContext"

const HomeLayout = ({ children }) => {
  const router = useRouter();
  const path = usePathname()
  const user = auth.currentUser
  const { linkData } = useStore()
  const [saveStatus, setSaveStatus] = useState(false)
  
  useEffect(() => {
    if (!user) {
      router.push('/login');
      message.warning('Please login to access this page');
    }
    setSaveStatus(!linkData)
  }, [user, linkData]);

  return (
    <StoreProvider>
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
              {path === '/home' || path === '/home/links' ? <AddLinkBanner /> : <ProfileBanner />}
              <div className="page-content-container w-full h-full p-5">
                {children}
              </div>
            </div>
          </section>
        </div>
      </div>
    </StoreProvider>
  )
}

export default HomeLayout
