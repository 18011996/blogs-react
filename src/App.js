
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Article from './pages/Article';
import Main from './pages/Main';


function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/:article' element={<Article />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
};

export default App;
