import React from 'react'
import './NewLetter.css'

export const NewLetter = () => {
  return (
    <div className='newletter'>
        <h1>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h1>
        <p>Subscribe to our NewsLetter and stay Updated</p>
        <div>
            <input type='text' placeholder='Your Email'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}
