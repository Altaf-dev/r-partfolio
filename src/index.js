import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.scss';
import './upload/normalize.css';
import Swiper from "./slider/slider";
import Header from "./header/header";
import reportWebVitals from './reportWebVitals';
import Main from "./main/main";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header/>
      <main>
        <Main/>
      </main>
      <Swiper/>
  </React.StrictMode>
);

reportWebVitals();
