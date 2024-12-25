import React from 'react'
import PaymentForm from './PaymentForm'

const Payment = () => {
  return (
    <div className='flex items-center justify-between min-h-[100vh]'>
        {/* Left Part */}
        <div className='flex flex-col items-center justify-center w-1/2'>
            {/* Image */}
            <img src="/left.svg" alt="left" className='w-[150px]' />

            {/* Title */}
            <h3 className='text-[#12372a] text-2xl font-bold'>Payment gateway</h3>

            {/* Slogan */}
            <p className='text-[#a3aed0] text-sm'>Enter school location details</p>
        </div>

        {/* Right Part */}
        <div className='w-1/2'>
            <PaymentForm />
        </div>
    </div>
  )
}

export default Payment