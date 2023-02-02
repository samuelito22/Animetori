import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import indexStyle from './Styles/index.css'
import figureStyle from './Styles/figureStyle.css'
import bannerStyle from './Styles/banner.css'
import sidebarStyle from './Styles/sidebarStyle.css'

export { default as Navbar } from './Components/Navbar';
export { default as Footer } from './Components/Footer';
export { default as Banner } from './Components/Banner';
export { default as SearchBar } from './Components/SearchBar';
export { default as FigureContainer } from './Components/FigureContainer';
export { default as SideBar } from './Components/Sidebar';

export { default as mha } from './Assets/mha.png';
export { default as Dazai } from './Assets/Dazai.png';
export { default as girl } from './Assets/girl.png';

export { default as HomePage } from './Pages/Home';
export { default as AnimePage } from './Pages/Anime';

export { default as setHeightFigure } from './Hooks/setHeightFigure';
export { default as setSeason } from './Hooks/setSeason';


const tableStyles = {...indexStyle, ...figureStyle, ...bannerStyle, ...sidebarStyle}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);