"use client"
import React from 'react'
import Image from 'next/image';
import { useUser } from '@clerk/clerk-react';
function WelcomeBanner() {
    const {user}= useUser();
  return (
    <div className='p-5 bg-primary w-full text-white rounded-lg flex items-center gap-6'>
        <Image src={'/laptop.png'} alt="laptop" width={100} height={100}></Image>
        <div>
            <h2 className='font-bold text-3xl'>Hello, {user?.fullName}</h2>
            <p className=''>Welcome Back, Its time to get back and start learning new course</p>
        </div>
    </div>
  )
}

export default WelcomeBanner