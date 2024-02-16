import React from 'react'

const Page6 = () => {
  return (
    <div className='flex flex-col items-center justify-center font-roboto mb-10'>
        <p className=' font-normal text-xs text-slate-400 tracking-custom'>WE ARE PROUD TO BE RECOMMENDED BY THESE FINE FOLKS:</p>
        <div className='flex sm:flex-col md:flex-row items-center justify-center sm:gap-0 md:gap-20 '>
            <img src='Logo/shopify-2.svg' className='w-44 h-44 opacity-70 hover:opacity-100' />
            <img src='Logo/mailcha.svg' className='w-44 h-44 opacity-70 hover:opacity-100' />
        </div>
        <div className='text-center mb-8 text-slate-400'>
            <p>Copyright © 2006 - 2024 <span className='font-normal border-b-[1px] border-solid border-blue-400 cursor-pointer hover:text-blue-400'>Built by Buffalo Limited</span>. All rights reserved.</p>
            <p>Registered in England Company No. 06048231 VAT Registration No. 899 6307 54</p>
        </div>
        <p className='font-normal text-slate-400 border-b-[1px] border-solid border-blue-400 cursor-pointer hover:text-blue-400'>Read the boring legal stuff</p>
    </div>
  )
}

export default Page6