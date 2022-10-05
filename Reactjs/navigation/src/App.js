import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import TopBar from './component/topbar';
import Home from './page/home';
import About from './page/about';
import Contact from './page/contact';
import News from './page/news';

function App() {
  return (
          <BrowserRouter>
          <TopBar />
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/news" element={<News />} />
              </Routes>
          </BrowserRouter>
  );
}

export default App;
