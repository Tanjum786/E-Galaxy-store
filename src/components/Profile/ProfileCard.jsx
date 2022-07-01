import React from 'react'
import { Link } from 'react-router-dom'
import "./profile.css"

export const ProfileCard = () => {
  return (
    <div className='profilecard-container'>
    <div className='profile-navigation'>
        <Link className='nav-link' to="/">
           Profile 
        </Link>
        <Link className='nav-link' to="/">
            My address
        </Link>
        <Link className='nav-link' to="/">
            Order
        </Link>
    </div>
    </div>
  )
}
