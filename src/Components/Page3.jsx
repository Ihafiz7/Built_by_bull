import React from 'react'
import CircularProgressBar from './Circle';

const Page3 = () => {
  const percentage = [
    {id: '1',value:'40',text:'CURRENT PROJECT CAPACITY'},{id: '2',value:'50',text:'AVG. CLIENT REVENUE INCREASE'},{id: '3',value:'70',text:'CLIENTS WHO WENT ON TO GET FUNDING'},{id: '4',value:'65',text:'REPEAT CUSTOMERS'},{id: '5',value:'90',text:'NEW BUSINESS FROM REFERRALS'},
  ]
  return (
    <div>
      <div className='flex flex-col items-center justify-center mt-24'>
          <hr className='w-[125px] h-[2px] bg-slate-500' />
          <p className='text-2xl font-roboto font-extralight mt-4 tracking-widest text-black'>A FEW STATS</p>
      </div>
      <div className='flex items-baseline justify-center sm:flex-wrap md:flex-wrap gap-8 sm:px-0 md:px-24 xl:flex-nowrap xl:px-48 py-12'>
        {percentage.map((item) => (
          <div key={item.id}>
            <CircularProgressBar percentage={item.value} text={item.text} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page3