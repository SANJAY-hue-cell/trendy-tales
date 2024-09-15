import React from 'react'

function NewsletterBox() {
    const onSubmitHandler = (e) => {
        e.preventDefault() ;
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>
          First purchase at Trendy Tales! Stay in the loop with exclusive access to new arrivals, special promotions, and styling tips, all while enjoying an instant discount. Don’t miss out on the chance to upgrade your wardrobe for less!"
        </p>
        <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3' onSubmit={onSubmitHandler}>
            <input type="email" placeholder='Enter your email' className='w-full sm:flex-1 outline-none' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsletterBox