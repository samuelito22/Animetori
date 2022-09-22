import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import {Banner, FigureContainer, Footer, girl} from './index'

export default function Home({data}) {
  const date = new Date();
  const month = date.getMonth().toString();
  const year = date.getFullYear();
  let season = '';
  function getSeason(month, season) {
    switch(month) {
        case '12':case '1':case '2':season = 'Winter';
        break;
        case '3':case '4':case '5':season = 'Spring';
        break;
        case '6':case '7':case '8':season = 'Summer';
        break;
        case '9':case '10':case '11':season = 'Fall';
        break;
    }
    return season
  } 
  season = getSeason(month, season);

  function setHeightList(id){
    var figures = document.getElementById(id).getElementsByTagName('section');
    let biggestHeight = 0;
    for( let i=0; i< figures.length; i++ )
    {
      var figure = figures[i];
      if(figure.offsetHeight > biggestHeight){
        biggestHeight = figure.offsetHeight
      }     
    }
    for( let i=0; i< figures.length; i++ )
    {
      var figure = figures[i];
      figure.style.height = biggestHeight.toString()+'px';   
    }
   }
  useEffect(() =>{
    setHeightList('figureListOne')
    setHeightList('figureListTwo')
    setHeightList('figureListThree')
  })
  return (
    <>
      <Banner/>
      <div className='container text-dark' style={{"display":"grid","gridTemplateColumns":"1fr 1fr","width":"90%","margin":"0 auto"}}>
        <div style={{"margin":"auto"}}>
        <h3>Join competitions</h3>
        <p style={{"fontSize":"0.95rem"}}>Enter online competitions where you will be able to create a manga of a certain genre.<br/>Best everyone to win prizes!</p>
        <div className='btn-dark' style={{"width":"70px"}}>Discover</div>
        </div>
        
      </div>
      <div className='container text-dark'>
        <h2 style={{"textAlign":"center","width":"87%","marginLeft":"auto","marginRight":"auto"}}>Top anime this week<span style={{"fontSize":"1rem","float":"right","marginTop":"8px"}}><Link to='/' className='more'>More +</Link></span></h2>
        <div className='listFigure' id='figureListOne'>
          {data.topAnime.map( anime => (
            <FigureContainer key={anime.mal_id} figure_={anime}/>
          ))}
        </div>
      </div>
      <div className='container text-dark'>
        <h2 style={{"textAlign":"center","width":"80%","marginLeft":"auto","marginRight":"auto"}}>Top manga this week<span style={{"fontSize":"1rem","float":"right","marginTop":"8px"}}><Link to='/' className='more'>More +</Link></span></h2>
        <div className='listFigure' id='figureListTwo'>
          {data.topManga.map( manga => (
            <FigureContainer key={manga.mal_id} figure_={manga}/>
          ))}
        </div>
      </div>
      <div className='container text-dark'>
        <h2 style={{"textAlign":"center","width":"80%","marginLeft":"auto","marginRight":"auto"}}>{season} {year} anime<span style={{"fontSize":"1rem","float":"right","marginTop":"8px"}}><Link to='/' className='more'>More +</Link></span></h2>
        <div className='listFigure' id='figureListThree'>
          {data.seasonAnime.map( season => (
            <FigureContainer key={season.mal_id} figure_={season}/>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  )
}
