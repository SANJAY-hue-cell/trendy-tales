import React from 'react'
import { assets } from '../assets/assets';
import { MdPolicy } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
import { MdContactSupport } from "react-icons/md";


function OurPolicy() {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <p className='mb-0'>
                <MdPolicy className='w-12 m-auto mb-5' size={25}/>
            </p>
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We Offer hasle free exchange policy</p>
        </div>

        <div>
            <p className='mb-0'>
                <GrStatusGood className='w-12 m-auto mb-5' size={25}/>
            </p>
            <p className='font-semibold'>7 Days Return Policy</p>
            <p className='text-gray-400'>We Provide 7 days free return policy</p>
        </div>

        <div>
            <p className='mb-0'>
                <MdContactSupport className='w-12 m-auto mb-5' size={25}/>
            </p>
            <p className='font-semibold'>Best Customer Support</p>
            <p className='text-gray-400'>We Provide 24/7 Customer Support</p>
        </div>

    </div>
  )
}

export default OurPolicy