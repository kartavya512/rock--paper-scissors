import React from 'react'
import rules from "../images/image-rules.svg"
import Image from 'next/image'

const Rules = () => {
  return (
    <div className=' w-[25%]  p-10'>
        <div className=''>Rules</div>


<div className='flex justify-center p-10'>
        <Image src={rules}></Image></div>

    </div>
  )
}

export default Rules