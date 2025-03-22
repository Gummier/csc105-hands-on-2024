import React from 'react'
import Gal1 from '../images/gallery1.jpg'
import Gal2 from '../images/gallery2.jpg'
import Gal3 from '../images/gallery3.jpg'
import Gal4 from '../images/gallery4.jpg'
import Gal5 from '../images/gallery5.jpg'
import Gal6 from '../images/gallery6.jpg'
import laker from '../images/lakerWall3.jpg'
function Gallery() {
  return (
    <div className='flex flex-col bg-gray-800 w-screen items-center justify-center' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${laker})`, }} >
        <div className='font-bold mb-10 text-white'>
            <h1>Gallery</h1>
        </div>
        <div className="grid grid-cols-3 gap-2 w-1/2 space-y-6">
            <img src={Gal1} alt="" className='object-cover w-100 h-50 rounded-2xl'/>
            <img src={Gal2} alt="" className='object-cover w-100 h-50 rounded-2xl'/>
            <img src={Gal3} alt="" className='object-cover w-100 h-50 rounded-2xl'/>
            <img src={Gal4} alt="" className='object-cover w-100 h-50 rounded-2xl'/>
            <img src={Gal5} alt="" className='object-cover w-100 h-50 rounded-2xl'/>
            <img src={Gal6} alt="" className='object-cover w-100 h-50 rounded-2xl'/>
     </div>
    </div>
  )
}

export default Gallery
