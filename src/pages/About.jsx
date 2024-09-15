import React from 'react';
import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox' ;
import { assets } from '../assets/assets';

function About() {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img  className='w-full md:max-w-[450px]' src={assets.about} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
           <p>At Trendy Tales, we're passionate about making fashion accessible, affordable, and exciting. Our mission is to provide a seamless online shopping experience with a curated selection of the latest trends and timeless pieces. We believe fashion is a form of self-expression, and we aim to inspire confidence and individuality through our diverse collections. </p>
           <p>With quality, style, and customer satisfaction at the heart of everything we do, Trendy Tales is here to help you look and feel your best, every day!</p>
           <b className='text-gray-800'>Our Mission</b>
           <p>Our mission is to empower individuals through fashion by offering trendy, high-quality clothing at accessible prices. We strive to provide a seamless, enjoyable shopping experience while keeping our customers at the forefront of every decision. Our goal is to inspire confidence and self-expression with every outfit, helping you create your own unique style story.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Ouality Assurance:</b>
          <p className='text-gray-600'> Our Quality Assurance process ensures that every piece meets the highest standards of craftsmanship, durability, and comfort. We carefully source materials and rigorously inspect each product to deliver clothing that not only looks great but also stands the test of time. Shop with confidence, knowing that every item from Trendy Tales is designed to offer the best in both style and quality.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>From easy navigation on our website to fast, reliable shipping and simple returns, we’ve designed every step to save you time and hassle. Whether you're browsing the latest trends or making a quick purchase, Trendy Tales ensures a smooth, stress-free process from start to finish.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our dedicated team is here to assist you with any questions, concerns, or needs you may have, ensuring a personalized and supportive shopping experience. From prompt responses to thoughtful solutions, we go the extra mile to ensure your satisfaction and make your journey with us seamless and enjoyable.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About