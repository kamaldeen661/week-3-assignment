 import React from 'react';
import  './css/global.css';
import './css/layout.css';
import './css/components.css';
import './css/sample-wallpaper.css';
import venom  from './img/venom-1.jpg';
import hulk from './img/hulk-1.jpg';
import venmon2 from './img/venom-2.jpg';



function App() {
  return (
    
      
       
      
      
      <body>
      <nav class="navbar">
        <div class="container">
          <a href="#">Hulk</a>
          
          <a href="#" class="logo is-active">Mavel</a>
          <a href="#">Venom</a>
        </div>
      </nav>
  
      
      <header class="header">
        <div class="container">
          <h1 class="title">Mavel's Fearless</h1>
          <p class="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
            molestias earum eveniet.
          </p>
          <div class="search-bar">
            <input type="search" placeholder="Search" />
          </div>
  
          
          <div class="sample-wallpaper">
            
            <article class="wallpaper">
              <img src={venom} alt="Wallpaper #1" class="wallpaper" />
            </article>
  
            
            <article class="wallpaper">
              <img src={hulk} alt="Wallpaper #1" class="wallpaper" />
            </article>
  
            
            <article class="wallpaper">
              <img src={venmon2} alt="Wallpaper #1" class="wallpaper" />
            </article>
          </div>
        </div>
      </header>
    
    </body>
    
  );
}

export default App;
