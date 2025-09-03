'use client';

import React from 'react'
import { FloatingDockDemo } from './FloatingDockDemo'
import Button from './Button'

function Navbar() {
  return (
   <>
   <div className='flex justify-between items-center'>
   <div>
    <img src="G (2).png" alt="" className='w-32 mt-6 ml-5' />
   </div>
   <FloatingDockDemo />
   <Button />
   </div>
   </>
  )
}

export default Navbar
