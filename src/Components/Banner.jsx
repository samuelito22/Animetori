import React from 'react'
import {Dazai, SearchBar} from './index'


const Banner = () => {
  return (
    <div className='banner'>
        <div className='banner-container'>
            <div className='banner-descriptionBox'>
                <h2>Discover, Analyse and Discuss the anime that intrest you</h2>
                <SearchBar/>
            </div>
            <div className='banner-container-img'><img src={Dazai}/></div>
            
        </div>    
    </div>
  )
}

export default Banner