import React from 'react'

export default function setHeightFigure(id) {
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
