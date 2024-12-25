import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex items-center justify-center md:flex-row md:justify-around '>
        <p className='text-[#a3aed0] text-sm'>© 2024. All Rights Reserved. Made by Switcher.faiz!</p>
        
        <ul className='flex gap-5 text-sm cursor-pointer'>
            <li>Instructions</li>
            <li>Licenses</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
        </ul>
    </div>
  )
}

export default Footer