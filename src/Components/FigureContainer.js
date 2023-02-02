import {Link} from 'react-router-dom'
import React, { useEffect, useState} from 'react'
import { FaRegHeart } from 'react-icons/fa';

function FigureContainer({figure_}) {

  return (
    <section className='figure'>
      <div className='content'>
        <div className='imgBx'><Link to="/"><img src={figure_.images.jpg.large_image_url} alt="..."/></Link>
        </div>
        <div className='title' ><Link to='/'>{figure_.title}</Link></div>
        <div className='description' id='description'>
            <div className='synopsis'>{figure_.synopsis}<div className='read-more'/></div>
            <div style={{"padding":"5px"}}>{figure_.genres.slice(0, 5).map(genre => (
              <div className='genre' key={genre.mal_id} 
              style={{
                "display":"inline-block",
                "color":"white",
                "backgroundColor":"var(--dark)",
                "borderRadius":"12px",
                "padding":"2px 8px",
                "fontSize":"0.85rem",
                "marginTop":"10px"
              }}>
                {genre.name}
              </div>
            ))}</div>
            <div className='option'>
              <div className='heart item'><FaRegHeart style={{"fill":"red"}}/></div>
              <Link to="/" className='item'>Explore</Link>
              <div style={{"transform":"translateY(-10%)"}} className="item">Rank<br/>{figure_.rank}</div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default FigureContainer