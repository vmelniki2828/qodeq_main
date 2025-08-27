import React, { useState, useEffect } from 'react';
import './Navigation.css';

function Navigation() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const startPoint = windowHeight * 0.5;
      const endPoint = windowHeight * 1.2;
      const progress = Math.min(1, Math.max(0, (scrollY - startPoint) / (endPoint - startPoint)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = scrollProgress < 0.5;
  const navColor = isDark ? '#fff' : '#000';

  return (
    <nav className="nav-bar">
      <div className="logo-text" style={{ color: navColor }}>QODEQ</div>
      <ul className="nav-list">
        <li><a href="#main" className="active" aria-current="page" style={{ color: navColor }}>Главная</a></li>
        <li><a href="#about" style={{ color: navColor }}>Почему Qodeq</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;