'use client'

import { Button, Form, Input } from "antd";
import Link from "next/link"
import { useAuth } from "../context/authContext";
import Image from "next/image";

const SignupPage = () => {
  const { signupUser } = useAuth();
  const handleSubmit = (values) => {
    console.log(values);
    signupUser(values.email, values.password)
  };
  return (
    <>
      <div className='prose min-w-screen min-h-screen flex flex-col justify-center items-center gap-5 bg-[#fafafa]'>
        <Image src='/logo.png' width={100} height={100} />
        <div className='w-[467px] bg-white rounded-lg p-10 flex flex-col gap-5'>
          <div className='w-full flex flex-col gap-5 '>
            <h1 className='w-full font-bold'>Create account</h1>
            <p className='w-full'>Lets get you started sharing your links!</p>
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
              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The new password that you entered do not match!'));
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>
              <small>Password must contain at least 8 characters</small>
              <Form.Item>
                <Input type='submit' value="Create Account" className='bg-blue-500 rounded-lg pt-3 pb-3' />
              </Form.Item>
            </Form>
            <Button type='primary' className='w-full bg-red-500 rounded-lg pt-3 pb-3'>
              Sign up with Google
            </Button>
          </div>
          <p className='w-full'>Already have an account? <Link href='/login'>Login</Link></p>
        </div>
      </div>
    </>
  )
}

export default SignupPage
