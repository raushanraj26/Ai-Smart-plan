import React from 'react'
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1 className='font-extrabold text-[60px] text-center mt-16'>
        <span className='text-[#f56551] whitespace-nowrap '>Discover your next Adventure with Ai:</span>
         <br /> Personliszed Itineries at Your Fingertips.
      </h1>
         <p className='text-xl text-gray text-center '>Your PErsonal trip Planner andtravel curator,creating custom iternaraies to your interest and budget</p>
  <Link to ={'/create-trip'}>
  <button>Get Started, It's Free</button>
  </Link>
    </div>
  )
}

export default Hero