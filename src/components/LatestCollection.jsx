import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title' ;
import { products } from '../assets/assets';
import ProductItem from './ProductItem';

function LatestCollection() {

    const { products } = useContext(ShopContext);
    const[latestProducts , setLatestProducts] = useState([]);
    
    useEffect(() => {
        setLatestProducts(products.slice(0,10)) ;
    },[])
    
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'Latest'} text2={'Collection'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm  md:text-base text-gray-600'>
               Trendy Tales brings you fresh, on-trend styles designed to elevate your wardrobe. Discover a range of versatile outfits, from bold statement pieces to timeless essentials, all crafted with attention to detail and quality. Whether you're dressing for work, weekends, or special occasions, our Latest Collection ensures you'll always stay ahead of the fashion curve!"
            </p>
        </div>

        {/* Rendering Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {latestProducts.map((item , index) => (
                < ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))}
        </div>

    </div>
  )
}

export default LatestCollection