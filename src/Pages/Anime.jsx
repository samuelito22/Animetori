import React from 'react'
import {FigureContainer, setHeightFigure, SideBar, setSeason} from '../index.js'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Anime({data}) {
    const date = new Date();
    const month = date.getMonth().toString();
    const year = date.getFullYear();

    const season = setSeason(month, 0)
    const nextSeason = setSeason(month, 1)
  
    useEffect(() =>{
      setHeightFigure('figureListOne')
      setHeightFigure('figureListTwo')
      setHeightFigure('figureListThree')
    })
  return (
      <section>
      <div className='container text-dark'>
        <h2 style={{"textAlign":"center","position":"relative","zIndex":"1"}}>Top anime this week<span style={{"position":"absolute","right":"80px","top":"8px","fontSize":"1rem"}}><Link to='/' className='more'>More +</Link></span></h2>
        <div className='listFigure' id='figureListOne'>
          {data.topAnime.map( anime => (
            <FigureContainer key={anime.mal_id} figure_={anime}/>
          ))}
        </div>
      </div>
      <div className='container text-dark'>
        <h2 style={{"textAlign":"center","position":"relative","zIndex":"1"}}>{season} {year} anime<span style={{"position":"absolute","right":"80px","top":"8px","fontSize":"1rem"}}><Link to='/' className='more'>More +</Link></span></h2>
        <div className='listFigure' id='figureListTwo'>
          {data.seasonAnime.map( season => (
            <FigureContainer key={season.mal_id} figure_={season}/>
          ))}
        </div>
      </div>
      <div className='container text-dark'>
        <h2 style={{"textAlign":"center","position":"relative","zIndex":"1"}}>Upcomming {year} {nextSeason} anime<span style={{"position":"absolute","right":"80px","top":"8px","fontSize":"1rem"}}><Link to='/' className='more'>More +</Link></span></h2>
        <div className='listFigure' id='figureListThree'>
          {data.seasonAnime.map( season => (
            <FigureContainer key={season.mal_id} figure_={season}/>
          ))}
        </div>
      </div>
      </section>
  )
}

export default Anime