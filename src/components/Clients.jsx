import React from 'react'

const Clients = () => {
  return (
    <div className='bg-gray-100 flex flex-col items-center p-8 md:pb-16 gap-10'>
        <h1 className='text-xl font-medium text-gray-800 text-center'>Trusted by greatest companies</h1>
        <div className='flex flex-col flex-wrap md:flex-row gap-10 items-center'>
            <img src="google.png" className='w-40'/>
            <img src="airbnb.png" className='w-40'/>
            <img src="shopify.png" className='w-40'/>
            <img src="google.png" className='w-40'/>
            <img src="airbnb.png" className='w-40'/>
        </div>
    </div>
  )
}

export default Clients