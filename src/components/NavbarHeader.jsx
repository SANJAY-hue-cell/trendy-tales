import React, { useContext, useState } from 'react' ;
import { Link, NavLink } from 'react-router-dom';

/* react icons */

import {
    FaSearch ,
    FaUser ,
    FaShoppingCart 
} from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { ShopContext } from '../context/ShopContext';

function NavbarHeader() {

    const[visible , setVisible] = useState(false) ;
    const {setShowSearch , getCartCount} =useContext(ShopContext) ;

  return (
    <div className='flex items-center justify-between py-5 font-medium'>

        <Link to='/' style={{color:'#D01582' , fontWeight:'bold'}}>
         TRENDY TALES
        </Link>

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

            <NavLink to='/' className='flex flex-col items-center gap-1 '>
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>

            <NavLink to='/collection' className='flex flex-col items-center gap-1 '>
                <p>COLLECTION</p> 
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>

            <NavLink to='/about' className='flex flex-col items-center gap-1 '>
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>

            <NavLink to='/contact' className='flex flex-col items-center gap-1 '>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>

        </ul>

        <div className="flex items-center gap-6">
            <p>
             <FaSearch onClick={() => setShowSearch(true)} className='w-5 cursor-pointer'/>
            </p>
            <div className="group relative">
                <Link to='/login'>
                <p>
                    <FaUser className='w-5 cursor-pointer'/>
                </p>
                </Link>
                <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                    <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                       <p className="cursor-pointer hover:text-black">My Profile</p>
                       <p className="cursor-pointer hover:text-black">Orders</p>
                       <p className="cursor-pointer hover:text-black">Logout</p>
                    </div>
                </div>
            </div>
            <Link to='/cart' className='relative'>
            <p>
                <FaShoppingCart className='w-5 min-w-5'/>
            </p>
            <p className='absolute right-[-5px] bottom-[-5px] w-3 h-3 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
                {getCartCount()}
            </p>
            </Link>

            <p onClick={() => setVisible(true)} className='w-5 cursor-pointer sm:hidden'>
                <CiMenuFries />
            </p>
        </div>

        {/* sidebar menu for small screens */}

        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={()=> setVisible(false)} className='flex items-center gap-4 p-3'>
                    <p className=''>
                        <IoClose size={25} className='h-10 rotate-180'/>
                    </p>
                </div>
                <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>Home</NavLink>
                <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>Collection</NavLink>
                <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>About</NavLink>
                <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>Contact</NavLink>
            </div>
        </div>

    </div>
  )
}

export default NavbarHeader