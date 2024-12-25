"use client"
import React, { useState } from 'react'

const PaymentForm = () => {

    const [formData,setFormData] = useState({
        address: '',
        city: '',
        state: '',
        postalCode: '',
        cardHolderName: '',
        cardNumber: '',
        expiry: '',
        cvc: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...FormData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted successfully",FormData);
    }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        {/* Title */}
        <h2 className='text-2xl font-bold'>Complete registration payment</h2>

        {/* Sub- heading */}
        <h3 className='text-xl font-semibold'>Personal details</h3>

        {/* 1st */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

            {/* For Address */}
            <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Address Line</label>

                <input 
                    type="text"
                    name='address'
                    value={FormData.address}
                    onChange={handleChange}
                    className='w-full p-2 border rounded-md outline-none'
                    placeholder='P.o Box 1223'
                />
            </div>

            {/* For city */}
            <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>City</label>

                <input 
                    type="text"
                    name='city'
                    value={FormData.city}
                    onChange={handleChange}
                    className='w-full p-2 border rounded-md outline-none'
                    placeholder='Arusha'
                />
            </div>
        </div>

        {/* 2nd */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

            {/* For State */}
            <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>State</label>

                <input 
                    type="text"
                    name='state'
                    value={FormData.state}
                    onChange={handleChange}
                    className='w-full p-2 border rounded-md outline-none'
                    placeholder='Arusha, Tanzania'
                />
            </div>

            {/* For Postal code */}
            <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Postal Code</label>

                <input 
                    type="text"
                    name='postalCode'
                    value={FormData.postalCode}
                    onChange={handleChange}
                    className='w-full p-2 border rounded-md outline-none'
                    placeholder='9090'
                />
            </div>
        </div>

        {/* Payment Methods */}
        <div className='flex flex-col gap-3'>
            {/* Sub- heading */}
            <h3 className='text-xl font-semibold'>Payment Methods</h3>

            {/* Images */}
            <div className='flex items-center gap-5'>
                <img className='w-10' src="/visa.svg" alt="visa" />
                <img className='w-10' src="/stripe.svg" alt="stripe" />
                <img className='w-10' src="/paypal.svg" alt="paypal" />
                <img className='w-10' src="/master.svg" alt="master" />
                <img className='w-10' src="/gPay.svg" alt="gPay" />
            </div>
        </div>

        {/* Card Details */}
        <div className='flex flex-col gap-3'>
            {/* Sub- heading */}
            <h3 className='text-xl font-semibold'>Payment Methods</h3>

            {/* CardHolder Name */}
            <div>
                <label className='block text-sm font-bold text-gray-700 mb-1'>Cardholder's Name</label>

                <input 
                    type="text"
                    name='cardHolderName'
                    value={FormData.cardHolderName}
                    onChange={handleChange}
                    className='w-full p-2 border rounded-md outline-none'
                    placeholder='seen on your card'
                />
            </div>

            {/* Card Number */}
            <div>
                <label className='block text-sm font-bold text-gray-700 mb-1'>Card Number</label>

                <input 
                    type="text"
                    name='cardNumber'
                    value={FormData.cardNumber}
                    onChange={handleChange}
                    className='w-full p-2 border rounded-md outline-none'
                    placeholder='seen on your card'
                />
            </div>

            {/* Grid Expiry and cvc */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                {/* For Expiry */}
                <div>
                    <label className='block text-sm font-bold text-gray-700 mb-1'>Expiry</label>

                    <input 
                        type="text"
                        name='expiry'
                        value={FormData.expiry}
                        onChange={handleChange}
                        className='w-full p-2 border rounded-md outline-none'
                        placeholder='20/23'
                    />
                </div>

                {/* For Postal code */}
                <div>
                    <label className='block text-sm font-bold text-gray-700 mb-1'>CVC</label>

                    <input 
                        type="text"
                        name='cvc'
                        value={FormData.cvc}
                        onChange={handleChange}
                        className='w-full p-2 border rounded-md outline-none'
                        placeholder='654'
                    />
                </div>
            </div>
        </div>

        {/* Button for submit */}
        <button type="submit" className='w-full mt-2 bg-green-900 text-white py-3 px-4 rounded-md hover:bg-green-800 transition-colors duration-200'>Next</button>
    </form>
  )
}

export default PaymentForm