import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='prose min-w-screen min-h-screen flex justify-center items-center gap-20 bg-[#fafafa]'>
      <div className='w-[467px] bg-white rounded-lg p-10 flex flex-col gap-10'>
        <div className='w-full flex flex-col gap-5 '>
          <h1 className='w-full font-bold'>Login Page</h1>
          <p className='w-full'>Add your details below to get back into the app</p>
        </div>
        <form className='w-full flex flex-col gap-8'>
          <label>
            <span>Email</span><br/>
            <input type='email' placeholder='Email' className='w-full rounded-lg p-2 bg-white border-gray-300'/>
          </label>
          <label>
            <span>Password</span><br/>
            <input type='password' placeholder='Password' className='w-full rounded-lg p-2 bg-white border-gray-300'/>
          </label>
          <button type='submit' className='bg-blue-500 rounded-lg pt-3 pb-3'>Login</button>
        </form>
        <p className='w-full'>Dont have an account? <Link href='/signup'>Create account</Link></p>
      </div>
    </div>
  )
}

export default LoginPage