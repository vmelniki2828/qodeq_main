import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Products from './Products';
import Home from './Home';

function App() {
  const globalStyles = {
    body: {
      background: '#000',
      color: '#fff',
      fontFamily: "'Oswald', Arial, sans-serif",
      margin: 0,
      minHeight: '100vh',
      position: 'relative',
      overflowX: 'hidden'
    },
    html: {
      scrollBehavior: 'smooth'
    },
    '*': {
      fontFamily: "'Oswald', Arial, sans-serif"
    }
  };

  return (
    <Router>
      <div className="app" style={globalStyles.body}>
        <style>{`
          @import-normalize;
          
          body {
            background: #000;
            color: #fff;
            font-family: 'Oswald', Arial, sans-serif;
            margin: 0;
            min-height: 100vh;
            position: relative;
            overflow-x: hidden;
          }
          
          body::before {
            content: '';
            position: fixed;
            left: 0; top: 0; right: 0; bottom: 0;
            pointer-events: none;
            background: radial-gradient(circle 60px at var(--cursor-x, -1000px) var(--cursor-y, -1000px), #fff 0%, #fff 30px, transparent 120px);
            z-index: 0;
            transition: background 0.2s;
          }
          
          #root, .main-title, .logo-text, .nav-list a, h1, h2, h3, h4, h5, h6, p, span, li, a {
            position: relative;
            z-index: 1;
            color: #fff;
          }
          
          html {
            scroll-behavior: smooth;
          }
          
          html, body, #root, h1, h2, h3, h4, h5, h6, p, span, li, a, button, input, textarea {
            font-family: 'Oswald', Arial, sans-serif;
          }
          
          .snap-container {
            scroll-snap-type: y mandatory;
            overflow-y: auto;
            height: 100vh;
          }
          
          .main-block,
          .next-block {
            scroll-snap-align: start;
            min-height: 100vh;
          }
          
          .about-block {
            background: #fff;
            color: #000;
            transition: background 0s, color 0s;
          }
          .about-block.about-black {
            background: #000;
            color: #fff;
          }
        `}</style>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
