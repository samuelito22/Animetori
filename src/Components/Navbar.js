import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbarContainer'>
            <Link to="/"><div className='navbarLogo'>ANIMETORI</div></Link>
        </div>
    </div>
  )
}
