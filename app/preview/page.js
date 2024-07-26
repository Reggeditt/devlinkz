'use client'

const PreviewPage = () => {
  return (
    <div className='relative bg-[#fafafa]'>
      <header className='p-5 bg-[#633CFF]'>
        <nav className='bg-white flex justify-between items-center pt-2 pb-2 pl-5 pr-5 rounded-xl'>
          <button className='bg-white text-[#633CFF] border border-[#633CFF] px-4 py-2 rounded-lg'>Back to Editor</button>
          <button className='bg-[#633CFF] text-white px-4 py-2 rounded-lg'>Share Link</button>
        </nav>
      </header>
      <main className='relative'>
        <div className='banner bg-[#633CFF] rounded-b-2xl w-full h-[200px]'/>
        <div 
          className={`
            absolute w-[250px] h-[400px] bg-white top-20 left-[calc((100%-250px)/2)] rounded-2xl shadow-lg
            flex flex-col justify-center items-center
          `}
        >
          profile data display here
        </div>
      </main>
    </div>
  )
}

export default PreviewPage
