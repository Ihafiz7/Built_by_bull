import React from 'react'

const Header = () => {
  return (
    <div className='sm:flex-col xl:flex-row flex items-center justify-center sm:gap-4 xl:gap-12 xl:m-6 sm:m-8 font-roboto'>
        <div className='xl:hidden sm:flex'>
            <img src='Logo/logo-bull.png' alt='Logo' className='w-24 h-24' />
        </div>
        <div>
            <ul className='ul'>
                <li className='list hover:text-blue-900'>HOME</li>
                <li className='list hover:text-blue-900'>WORK</li>
                <li className='list hover:text-blue-900'>ABOUT</li>
            </ul>
        </div>
        <div className='sm:hidden xl:flex flex-col items-center gap-2'>
            <span className=' text-xs'>BUILT BY</span>
            <img src='Logo/logo-bull.png' alt='Logo' className='w-24 h-24' />
        </div>
        <div>
            <ul className='ul'>
                <li className='list hover:text-blue-900'>FEED</li>
                <li className='list hover:text-blue-900'>JOBS</li>
                <li className='list hover:text-blue-900'>CONTACT</li>
            </ul>
        </div>
    </div>
  )
}

export default Header