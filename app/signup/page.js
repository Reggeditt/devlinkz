import Link from "next/link"


const SignupPage = () => {
  return (
    <>
      <div className='prose min-w-screen min-h-screen flex justify-center items-center gap-20 bg-[#fafafa]'>
        <div className='w-[467px] bg-white rounded-lg p-10 flex flex-col gap-10'>
          <div className='w-full flex flex-col gap-5 '>
            <h1 className='w-full font-bold'>Create account</h1>
            <p className='w-full'>Lets get you started sharing your links!</p>
          </div>
          <form className='w-full flex flex-col gap-8'>
            <label>
              <span>Email address</span><br />
              <input type='email' placeholder='Email' className='w-full rounded-lg p-2 bg-white border-gray-300' />
            </label>
            <label>
              <span>Create password</span><br />
              <input type='password' placeholder='At least 8 characters' className='w-full rounded-lg p-2 bg-white border-gray-300' />
            </label>
            <label>
              <span>Confirm password</span><br />
              <input type='password' placeholder='At least 8 characters' className='w-full rounded-lg p-2 bg-white border-gray-300' />
            </label>
            <small>Password must contain at least 8 characters</small>
            <button type='submit' className='bg-blue-500 rounded-lg pt-3 pb-3'>Login</button>
          </form>
          <p className='w-full'>Already have an account? <Link href='/login'>Login</Link></p>
        </div>
      </div>
    </>
  )
}

export default SignupPage