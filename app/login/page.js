'use client'

import { Button, Form, Input } from "antd";
import Link from "next/link"
import { useAuth } from "../context/authContext";
import Image from "next/image";

const SignupPage = () => {
  const { signinUser, signinUserWithGoogle } = useAuth();
  const handleSubmit = (values) => {
    signinUser(values.email, values.password)
  };
  return (
    <>
      <div className='prose min-w-screen min-h-screen flex flex-col justify-center items-center gap-5 bg-[#fafafa]'>
        <Image src='/logo.png' width={100} height={100} />
        <div className='w-[467px] bg-white rounded-lg p-10 flex flex-col gap-5'>
          <div className='w-full flex flex-col gap-5 '>
            <h1 className='w-full font-bold'>Login</h1>
            <p className='w-full'>Add your details below to get back into the app</p>
          </div>
          <div className="w-full">
            <Form className='w-full flex flex-col' onFinish={handleSubmit}>
              <Form.Item label='Email address' name='email' rules={[{
                required: true,
                type: 'email',
                message: 'Please enter a valid email address'
              }]}>
                <input type='email' placeholder='Email' className='w-full rounded-lg p-2 bg-white border-gray-300' />
              </Form.Item>
              <Form.Item label='Create password' name='password' rules={[{
                required: true,
                min: 8,
                message: 'Password must contain at least 8 characters'
              }]}>
                <input type='password' placeholder='At least 8 characters' className='w-full rounded-lg p-2 bg-white border-gray-300' />
              </Form.Item>
              <Form.Item>
                <Input type='submit' value="Login" className='bg-blue-500 rounded-lg pt-3 pb-3' />
              </Form.Item>
            </Form>
            <Button type='primary' className='w-full bg-red-500 rounded-lg pt-3 pb-3' onClick={signinUserWithGoogle}>
              Sign in with Google
            </Button>
          </div>
          <p className='w-full'>Dont have an account? <Link href='/signup'>Create account</Link></p>
        </div>
      </div>
    </>
  )
}

export default SignupPage
