import React, { useContext, useEffect, useState } from 'react' ;
import {ShopContext} from '../context/ShopContext' ;
import { IoMdArrowDroprigh, IoMdArrowDropright } from "react-icons/io";
import Title from '../components/Title';
import ProductItem from '../components/ProductItem'

function Collection() {

  const [showFilter , setShowFilter] = useState(false);
  const [filterProducts , setFilterProducts] = useState([]) ;
  const [cateogory , setCateogory] = useState([]) ;
  const [subCateogory , setSubCateogory] = useState([]) ;
  const [sortType , setSortType] = useState('relevant') ;
  const {products , search , showSearch} = useContext(ShopContext) ;

  const toggleCateogory = (e) => {
    if(cateogory.includes(e.target.value)){
      setCateogory(prev=> prev.filter(item => item !== e.target.value)) ;
    }
    else{
      setCateogory(prev => [...prev , e.target.value])
    }
  }

  const toggleSubCateogory = (e) => {
    if(subCateogory.includes(e.target.value)){
      setSubCateogory(prev => prev.filter(item => item !== e.target.value)) ;
    }
    else{
      setSubCateogory(prev => [...prev , e.target.value]);
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice() ;
    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }
    if(cateogory.length > 0){
      productsCopy = productsCopy.filter(item => cateogory.includes(item.cateogory)) ;
    }
    if(subCateogory.length > 0){
      productsCopy = productsCopy.filter(item => subCateogory.includes(item.subCateogory)) ;
    }
    setFilterProducts(productsCopy);
  }

  const sortProduct = () => {
    let fpCopy = filterProducts.slice() ;

    switch(sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price))) ;
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b) => (b.price - a.price))) ;
        break ;

      default :
       applyFilter();
       break ;
    }
  }

  useEffect(() => {
    applyFilter() ;
  },[cateogory , subCateogory , search , showSearch]);

  useEffect(() => {
    sortProduct();
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>Filters <IoMdArrowDropright  className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} size={25}/></p>
        {/* Cateogory Filter */}
        <div className={`border bordergray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Cateogories</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCateogory}/> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCateogory}/> Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCateogory}/> Kids
            </p>
          </div>
        </div>
        {/*Subcategory filter */}
        <div className={`border bordergray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Type</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCateogory}/> Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCateogory}/> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCateogory}/> Winterwear
            </p>
          </div>
        </div>
      </div>

      {/*Right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4 '>
          <Title text1={'ALL'} text2={'COLLECTION'} />
          {/* product sort */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by : Relevant</option>
            <option value="low-high">Sort by : Low to High</option>
            <option value="high-low">Sort by : High to Low</option>
          </select>
        </div>
        {/* Map Products */}
      <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        {filterProducts.map((item , index) => (
          <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
        ))}
      </div>
      </div>

      

    </div>
  )
}

export default Collection