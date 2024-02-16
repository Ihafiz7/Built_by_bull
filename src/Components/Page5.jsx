import React from 'react'

const Page5 = () => {
  return (
    <div>
        <div className='flex sm:flex-col md:flex-row items-center justify-center font-roboto'>
            <div className='flex sm:flex-col md:flex-row sm:items-center md:items-start justify-evenly  gap-8'>
                <div className='w-[33%] flex flex-col items-center justify-center'>
                    <hr className='sm:w-[300px] md:w-[175px] h-[2px] my-8 bg-slate-500' />
                    <div className='w-28 h-28 flex justify-center items-center rounded-full border-2 border-red-600 my-8'>
                        <img src='Logo/event.svg' className='w-12 h-12' />
                    </div>
                    <p className='text-2xl md:tracking-normal md:text-center xl:tracking-widest font-normal mb-4'>PROJECT PLANNER</p>
                    <p className=' w-[80%] sm:h-28 md:h-20 xl:h-16 text-center'>Intersted in working with us? Launch a proposal to get started.</p>
                    <button className='button mt-4'>LAUNCH IT</button>
                </div>
                <div className='w-[33%] flex flex-col items-center justify-center'>
                    <hr className='sm:w-[300px] md:w-[175px] h-[2px] my-8 bg-slate-500' />
                    <div className='w-28 h-28 flex justify-center items-center rounded-full border-2 border-red-600 my-8'>
                        <img src='Logo/mess.svg' className='w-12 h-12' />
                    </div>
                    <p className='text-2xl md:tracking-normal max-md:text-center xl:tracking-widest font-normal mb-4'>CONTACT</p>
                    <p className='underline underline-offset-8 md:w-[80%] text-center cursor-pointer hover:text-blue-400'>exampleBull@gmail.com</p>
                </div>
                <div className='w-[33%] flex flex-col items-center justify-center'>
                    <hr className='sm:w-[300px] md:w-[175px] h-[2px] my-8 bg-slate-500' />
                    <div className='w-28 h-28 flex justify-center items-center rounded-full border-2 border-red-600 my-8'>
                        <img src='Logo/cadly.svg' className='w-12 h-12' />
                    </div>
                    <p className='text-2xl md:tracking-normal max-md:text-center xl:tracking-widest font-normal mb-4'>CALENDLY</p>
                    <p className='w-[80%] sm:h-28 md:h-20 xl:h-16 text-center'>Get A schedule. Lets get moving</p>
                    <button className='button mt-4'>BOOK IN</button>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center my-12'>
            <hr className='w-[75%] h-[2px] my-8 bg-slate-500 ' />
        </div>
    </div>
  )
}

export default Page5