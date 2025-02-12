import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 p-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={assets.logo_dark} alt='' />
                <p className='mt-4 text-gray-400'>Velit commodo officia consectetur incididunt aliquip elit Lorem. Qui anim occaecat in magna consequat esse quis do culpa amet consectetur id irure. </p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h1 className='text-white text-lg font-bold mb-4'>Company</h1>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href='Header' className='hover:text-white'>Home</a>
                    <a href='#About' className='hover:text-white'>About</a>
                    <a href='#Contact' className='hover:text-white'>Contact Us</a>
                    <a href='#' className='hover:text-white'>Privacy Policy</a>
                </ul>
            </div>
            <div className='w-full md:w-1/3'>
                <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
                <p className='text-gray-400 mb-4 max-w-80'>Get the latest weekly updates, straight to your inbox</p>
                <div className='flex gap-2'>
                    <input className='w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none md:w-auto' type='email' placeholder='Enter Your Email' required />
                    <button className='text-white bg-blue-500 py-2 px-4 rounded'>Subscribe</button>
                </div>
            </div>
        </div>
        <div className='text-center text-gray-500 border-t border-gray-700 py-4 mt-10'>
            Copyright 2025 @ VersaSkill. All Rights Reserved
        </div>
    </div>
  )
}

export default Footer
