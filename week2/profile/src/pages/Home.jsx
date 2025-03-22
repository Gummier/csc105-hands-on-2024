import img from '../images/kareem.jpg'
import mainWall from '../images/mainWall.jpg'
import React from 'react'
import Fb from '../logos/facebook.svg'
import Dribble from '../logos/dribble.svg'
import Ig from '../logos/instagram.svg'
function Home() {
  return (
    <>
    <div className='w-screen h-screen bg-green-900 flex justify-center items-center' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${mainWall})`, }}>
      <div className='w-1/2 bg-white flex p-4 items-center rounded-2xl'>
        <div className='w-2/3'>
            <h2 className='text-3xl font-semibold'> Hello, it's me</h2>
            <h1 className='font-bold'>Thakoon Wongka-in</h1>
            <h2 className='text-3xl font-semibold mb-4'>I'm a freshman</h2>
            <h3 className='text-xl w-1/2 '>While I'm in the spot 30's on me buy out the club people know that i'm paid</h3>
            <div className='flex space-x-4 mt-4'>

              <img src = {Fb} alt="Logo" width={34} className='cursor-pointer' />
              <img src = {Dribble} alt="Logo" width={34} className='cursor-pointer' />
              <img src = {Ig} alt="Logo" width={48} className='cursor-pointer' />
            </div>
              <button className='bg-yellow-600 w-1/3 mt-8 rounded-2xl p-2 font-bold text-white duration-200 hover:bg-green-800 '>My Portfolio</button>
        </div> 
        <div>
        <img src={img} alt="Profile" className='rounded' />

        </div>
      
      </div>
    </div>
    </>
  )
}

export default Home
