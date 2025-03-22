import React from 'react'
import Img from '../images/skyhook.jpg'
import Wallpaper from '../images/laker.jpg'
function About() {
  return (
    <div className='w-screen h-screen bg-amber-600 flex justify-center items-center ' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${Wallpaper})`, }}>
      <div className='w-1/2 bg-white flex'>
        <div>
            <img src={Img} alt="" width={400}/>

        </div>
        <div className='w-1/2 space-y-4 p-6'>
            <h2 className='font-bold text-6xl'>About Me</h2>
            <h2 className='font-semibold text-2xl'>College Student</h2>
            <p className='w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nam dolores eligendi non et nisi molestiae debitis numquam quae! Debitis soluta consectetur, similique ad ullam aspernatur sequi odit modi repellat adipisci a, blanditiis ab. Doloremque facilis, beatae fugiat neque repudiandae officia perferendis commodi atque! Repellat maiores recusandae incidunt consequatur tenetur est, dolorem dolore asperiores libero sapiente suscipit, laborum iste reprehenderit explicabo inventore fugiat impedit quia aspernatur corporis rerum dicta consequuntur quo modi officia. Rem quae qui aut odio atque dolor nisi, facilis perferendis soluta incidunt adipisci to</p>
            <button className='bg-yellow-700 text-white duration-300 hover:bg-green-800 p-2 rounded-xl font-semibold px-4'>Read more</button>
        </div>
      </div>
    </div>
  )
}

export default About
