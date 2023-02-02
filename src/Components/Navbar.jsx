import React from 'react';
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar bg-white text-dark">
      <div className='navbar-container'>   
        <Link to='/' style={{"fontFamily": "'League Spartan', sans-serif", "fontSize":"x-large"}}>WEBSITE</Link>
        <ul className="navbar-menu">
          <li><Link to="/anime">Anime</Link></li>
          <li><Link to="/">Manga</Link></li>
          <li><Link to="/">Forum</Link></li>
          <li><Link to="/">Characters</Link></li>
          <li><Link to="/">Competitions</Link></li>
        </ul>
        <div style={{"display":"flex","flexDirection":"row"}}>
          <div className='btn-dark'>Sign in</div>
        
        </div>
      </div>  
    </nav>
  )
}

export default Navbar