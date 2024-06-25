import React from 'react'
import imgg from '../Assets/Accelerate Your Business Growth.png'

export default function Home() {
  return (
    
     <div className="homecontainner">
      <div className="leftside">
        <div className="info">
        <p>Accelerate Your Business Growth</p>
        <p>Explore Field With our Experties</p>
        <button className='getstarted'>Get Started</button>
      </div>
      </div>
      <div className="rightside">
        <img className='sideimage' src={imgg} alt="build" />
      </div>
     </div>
    
  )
}
