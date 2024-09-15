import React, { useContext, useEffect } from 'react'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

function Footer() {

    const {navigate} = useContext(ShopContext) ;

    useEffect(() => {
        window.scrollTo(0,0)
    },[navigate])

  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <h4 className='w-32 mb-5 text-base' style={{color:'#D01582' , fontWeight:'bold'}}>TRENDY TALES</h4>
                <p className='w-full md:2/3 text-gray-600'>Trendy Tales offers the latest fashion trends with stylish, affordable clothing and a seamless online shopping experience. Dress your best, effortlessly!</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li onClick={() => navigate('/')}>Home</li>
                    <li onClick={() => navigate('/about')}>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>Get In Touch</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91-9996527654</li>
                    <li>trendy_tales@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>
                Copyright 2024@ TrendyTales.com - All Rights Reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer