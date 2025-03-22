import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between items-center py-2 px-10 '>
      <h3 className='text-xl font-semibold'>Thakoon Wongka-in</h3>
      <div className='space-x-8'>
        <span className='font-semibold rounded-2xl p-2 px-4 cursor-pointer duration-200 hover:bg-amber-200 '>Home</span>
        <span className='font-semibold rounded-2xl p-2 px-4 cursor-pointer duration-200 hover:bg-amber-200'>About me</span>
        <span className='font-semibold rounded-2xl p-2 px-4 cursor-pointer duration-200 hover:bg-amber-200'>Gallery</span>
      </div>

      <button className='font-semibold bg-green-200 rounded-2xl p-2 px-4 cursor-pointer'>Click me</button>
    </div>
  )
}

export default Navbar
