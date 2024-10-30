'use client'

import React from 'react'
import { assets } from '@/Assets/assets'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
            <Image src={assets.logo} width={180} alt='logo' className='w-[130px] sm:w-auto' />
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000] '>Get started<Image src={assets.arrow} alt='icon'/></button>
        </div>
        <div className='text-center items-center my-8'>
            <h1 className='text-3xl sm:text-5xl font-medium'>Improbable freedom in Hotel Search</h1>
            <p className='mt-10 max-w-[1000px] m-auto text-xs sm:text-base'>The Hotel List API provides a list of hotels inside a city or an area, it taps into a detailed hotel database returning the name, hotel ID and location for each hotel bookable in Amadeus that matches the specified criteria. The hotel finder API functionality contains three flexible endpoints to look for hotels in several different ways:
            Find hotels by city using an IATA city code. Limit the results to certain hotel chains, narrow down the list to display only options with the desired amenities, filter by star ratings, and more.</p>
            
 
        </div>
    </div>
  )
}

export default Header