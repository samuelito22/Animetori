import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import {Banner, FigureContainer, girl, setHeightFigure, setSeason} from '../index.js'

export default function Home({data}) {
  const date = new Date();
  const month = date.getMonth().toString();
  const year = date.getFullYear();
  
  const season = setSeason(month);

  useEffect(() =>{
    setHeightFigure('figureListOne')
    setHeightFigure('figureListTwo')
    setHeightFigure('figureListThree')

  })
  return (
    <>
      <Banner/>
      <div className='container text-dark'>
        <h2 style={{"textAlign":"center","position":"relative","zIndex":"1"}}>Top anime this week<span style={{"position":"absolute","right":"80px","top":"8px","fontSize":"1rem"}}><Link to='/' className='more'>More +</Link></span></h2>
        <div className='listFigure' id='figureListOne'>
          {data.topAnime.map( anime => (
            <FigureContainer key={anime.mal_id} figure_={anime}/>
          ))}
        </div>
      </div>
      <div className='container text-light' style={{"display":"flex","justifyContent":"center","width":"100%","margin":"2% auto","backgroundColor":"#242424","paddingBottom":"30px","position":"relative"}}>
        <div style={{"textAlign":"center"}}>
        <h2>Join competitions</h2>
        <p style={{"fontSize":"1rem"}}>Enter online competitions where you will be able to create a manga of a certain genre.<br/>Best everyone to win prizes!</p>
        <div className='btn-light' style={{"width":"70px","margin":"0 auto"}}>Discover</div>
        </div>
        <img src={girl} style={{"height":"100%","position":"absolute","top":"0","right":"0"}} id="competitionImage"/>
      </div>
      <div className='container text-dark'>
        <h2 style={{"textAlign":"center","position":"relative","zIndex":"1"}}>Top manga this week<span style={{"position":"absolute","right":"80px","top":"8px","fontSize":"1rem"}}><Link to='/' className='more'>More +</Link></span></h2>
        <div className='listFigure' id='figureListTwo'>
          {data.topManga.map( manga => (
            <FigureContainer key={manga.mal_id} figure_={manga}/>
          ))}
        </div>
      </div>
      <div className='container text-dark'>
        <h2 style={{"textAlign":"center","position":"relative","zIndex":"1"}}>{season} {year} anime<span style={{"position":"absolute","right":"80px","top":"8px","fontSize":"1rem"}}><Link to='/' className='more'>More +</Link></span></h2>
        <div className='listFigure' id='figureListThree'>
          {data.seasonAnime.map( season => (
            <FigureContainer key={season.mal_id} figure_={season}/>
          ))}
        </div>
      </div>
    </>
  )
}
