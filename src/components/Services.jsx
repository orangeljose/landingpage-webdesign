import React from 'react'

import {
  RiMailFill,
} from "react-icons/ri";

const Services = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 p-8 md:p-20'>
        <div className='flex flex-col gap-4'>
            <h1 className='text-[40px] font-bold'>
              How we can help you
            </h1>
            <p className='text-[20px] text-gray-500'>
              Follow our newsletter. We will regulary update our latest project and availability.
            </p>
            <form className='w-full'>
              <div className='relative'>
                <RiMailFill className='absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 text-xl'/>
                <input type='text' className='w-full bg-gray-100 py-4 pl-10 pr-36 rounded-xl outline-none' placeholder='Enter your email address'/>
                <button type='submit' className='absolute top-1/2 -translate-y-1/2 text-lg font-semibold py-2 px-6 bg-primary text-white rounded-xl right-2'>
                  Subscribe
                  </button>
              </div>
            </form>
        </div>
        <div className='grid grid-cols-2'>
          <div>
            <div className='w-full h-full border-2 border-red-300'></div>
            <div className='w-full h-full border-2 border-red-300'></div>
          </div>
          <div>
            <div className='w-full h-full border-2 border-red-300'></div>
            <div className='w-full h-full border-2 border-red-300'></div>
          </div>
        </div>

    </div>
  )
}

export default Services