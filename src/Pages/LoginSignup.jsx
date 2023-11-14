import React from 'react'
import './CSS/LoginSignUp.css'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type='text' placeholder='Enter your name'/>
          <input type='text' placeholder='Enter your email'/>
          <input type='text' placeholder='Enter password'/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
        <div className='loginsignup-agree'>
          <input type='checkbox' id='' name='' />
          <p>By continuing , i agree to term and all the policy</p>
        </div>
      </div>
    </div>
  )
}
