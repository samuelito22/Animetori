import React, { useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Navbar } from './Components/index.js';


const App = () => {
  
  const[topAnime, setTopAnime] = useState([]);
  const[topManga, setTopManga] = useState([]);
  const[seasonAnime, setSeason] = useState([]);
    
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
  }
    const GetTopAnime = async() => {
        const temp = await fetch('https://api.jikan.moe/v4/top/anime?filter=bypopularity&filter=airing')
            .then(res => res.json());

        setTopAnime(temp.data.slice(0,7));
    }

    const GetTopManga = async() => {
      const temp = await fetch('https://api.jikan.moe/v4/top/manga?filter=bypopularity&filter=publishing&type=manhwa')
          .then(res => res.json());
      setTopManga(temp.data.slice(0, 7));
  }
  const GetSeason = async() => {
    const temp = await fetch('https://api.jikan.moe/v4/seasons/now')
        .then(res => res.json());
    temp.data = shuffle(temp.data);
    setSeason(temp.data.slice(0, 7));
}
    useEffect(() => {
      GetTopAnime();
      GetTopManga();
      GetSeason();
    }, []);
    const data = {topAnime, topManga, seasonAnime};
   

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home data={data}/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App