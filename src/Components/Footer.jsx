import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='text-light' style={{"width":"100%","marginTop":"50px","marginBottom":"auto","display":"grid","gridTemplateColumns":"1fr 1fr", "backgroundColor":"#242424","padding":"20px 0"}}>
      <div style={{"margin":"auto","textAlign":"center"}}>
        <h2>Website</h2>
        <p>Find out more of your favourite anime and mangas<br/>&<br/>Explore the vast world of anime</p>
      </div>
      <div style={{"display":"flex","flexDirection":"column","margin":"auto"}}>
        <Link to='/' style={{"color":"white","paddingBottom":"5px"}}>Contact</Link>
        <Link to='/' style={{"color":"white","paddingBottom":"5px"}}>About</Link>
        <Link to='/' style={{"color":"white"}}>Don't have an account yet?</Link>
      </div>
    </div>
  )
}
