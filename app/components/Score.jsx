"use client"
import React from 'react'
import { useState } from 'react'

const Score= ({score}) => {
   
    return (
      <div className='lg:w-1/2 p-5  w-full  lg:p-10 text-white  '>
          <div className='  border-4 border-gray-300 flex p-5 justify-between rounded-lg '>
              <div className='lg:pt-0 pt-4'>
                  <div className='font-extrabold text-xl lg:text-3xl'>ROCK</div>
                  <div className='font-extrabold text-xl lg:text-3xl'>PAPER</div>
                  <div className='font-extrabold text-xl lg:text-3xl'>SCISSORS</div>
              </div>
              <div className='w-32 h-28 bg-white text-black rounded-md items-center flex-col flex '>
                  <div className='pt-3 text-blue-900 font-bold text-sm'>SCORE</div>
                  <div className='pt-1  text-6xl text-gray-600'>{score}</div>
              </div>
          </div>
      </div>
    )
}

export default Score