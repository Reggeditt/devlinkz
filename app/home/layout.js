'use client'

import Navbar from "./Navbar"
import { message } from "antd"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import DisplayProfileLinks from "./DisplayProfileLinks"
import ProfileDisplayCard from "../ProfileCard"
import { auth } from "@/utilities/firebase/firebaseConfig"
import { StoreProvider } from "../context/StoreContext"

const HomeLayout = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    if (!auth.currentUser) {
      router.push('/login');
      console.log(auth?.currentUser)
      message.warning('Please login to access this page');
    }
  }, [auth.currentUser]);

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
                {children}
          </section>
        </div>
      </div>
    </StoreProvider>
  )
}

export default HomeLayout
