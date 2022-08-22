import React from 'react'
import {Link} from "react-router-dom"
import SearchBar from './SearchBar'
import animeHeader from '../Images/animeHeader.png'

export default function Header() {
  return (
    <div className='banner'>
        <div className='banner-topNavbar'>
            <Link to="/" className='banner-topNavbar-Logo'>ANIMETORI</Link>
            <ul className='banner-topNavbar-menu'>
                <li><Link to="/">SIGN IN</Link></li>
                <li><Link to="/">SIGN UP</Link></li>
            </ul>
        </div>
        <div className='banner-container'>
            <div className='banner-descriptionBox'>
                <h2>Discover, Analyse and Discuss the anime that intrest you</h2>
                <SearchBar/>
            </div>
            <img src={animeHeader}/>
        </div>
    </div>
  )
}
