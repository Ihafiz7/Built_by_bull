import React from 'react'
import Header from './Header'

const Page1 = () => {
  return (
    <div className='flex flex-col items-center justify-center '>
        <Header />
        <p className='font-bold font-roboto text-center sm:text-6xl xl:text-7xl sm:my-8 xl:my-16 tracking-wider'>A higher plain</p>
        <p className='xl:w-[800px] break-words text-center xl:text-2xl sm:text-lg text-stone-500 sm:mb-10 xl:mb-20'>We build brands and beautiful websites for clients who need a little help to create something truly special. We do it with love in Brighton for clients all around the world and we can do it for you too...</p>
    </div>
  )
}

export default Page1