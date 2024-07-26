'use client'

import Image from "next/image"
import Navbar from "./Navbar"
import { Divider, message } from "antd"
import DisplayProfile from "./DisplayProfile"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "../context/authContext"

const HomeLayout = ({ children }) => {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      router.push('/login');
      message.warning('Please login to access this page');
    }
  }, [user]);
  return (
    <div className="flex flex-col gap-3 w-screen h-screen p-2 bg-[#f5f5f5]">
      <Navbar />
      <div className='flex justify-around w-full h-full rounded-xl'>
        <section className='min-w-[40%] rounded-lg flex justify-center items-center bg-white rounded-xl'>
          <div className='phone-frame-container w-full h-full flex flex-col justify-center items-center'>
            <DisplayProfile />
          </div>
        </section>

        <section className='bg-white h-full w-[58%] rounded-lg flex flex-col gap-2 p-3'>
          <div className="flex flex-col items-center gap-3">
            <h1 className='text-3xl font-bold'>Customize your links</h1>
            <p className='text-gray-500'>Add/edit/remove links below and then share all your profiles with the world!</p>
            <button className='bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded-lg w-full'>Add new link</button>
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
