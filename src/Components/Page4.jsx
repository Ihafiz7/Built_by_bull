import React from 'react'
import { data } from './data'

const Page4 = () => {

    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handleButtonClick = (index) => {
        setCurrentIndex(index);
    };
  return (
    <div>
        <div>
            <div className='flex flex-col items-center justify-center mt-24'>
                <hr className='w-[125px] h-[2px] bg-slate-500' />
                <p className='text-2xl font-roboto font-extralight mt-4 tracking-widest text-black'>HAPPY CLIENTS</p>
            </div>
        </div>
        <div>
                <div className='flex flex-col items-center justify-center font-roboto gap-8 mt-16'>
                    <div className='w-[70%] flex flex-col items-center justify-center gap-8'>
                        <p className='text-xl tracking-wide text-center text-gray-500'>{data[currentIndex].text}</p>
                        <p className='text-sm tracking-wide text-center text-gray-500'>{data[currentIndex].name}</p>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-4 mt-4 mb-20'>
                {data.map((item,index) => (
                    <div key={index} onClick={() => handleButtonClick(index)}>
                        <button className={`mx-2 p-2 w-8 h-8 rounded-full ${currentIndex === index ? 'bg-[#60e6a8] text-white' : 'bg-gray-300 hover:bg-[#60e6a8] '}`} ></button>
                    </div>
                ))}
                </div>
            
        </div>
    </div>
  )
}

export default Page4