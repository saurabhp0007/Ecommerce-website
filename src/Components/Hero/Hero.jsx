import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>New Arrival Only</h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>new</p>
                    <img src={hand_icon} alt='' />
                </div>
                <p>Collections for</p>
                <p>Everyone</p>
            </div>
            <div className='hero-latest-btn'>
              <div>
                Latest Collections
                <img src={arrow_icon} alt='' />
              </div>
            </div>
        </div>
        <div className='hero-right'>
        <img src={hero_img} alt='' />
        </div>
    </div>
  )
}
