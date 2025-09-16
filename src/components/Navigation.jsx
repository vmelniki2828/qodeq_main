import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const [textColor, setTextColor] = useState('#fff');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['main', 'about', 'stats', 'how'];
      let currentSection = sections[0];

      // Находим текущую видимую секцию
      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = sectionId;
          }
        }
      });

      // Определяем цвет текста в зависимости от секции
      if (currentSection === 'about' || currentSection === 'stats' || currentSection === 'how') {
        setTextColor('#000'); // черный текст для белых секций
      } else {
        setTextColor('#fff'); // белый текст для темных секций
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Вызываем сразу для начального состояния
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBarStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'var(--color-deep)',
    padding: '0 40px',
    height: '60px',
    boxShadow: '0 2px 8px rgba(68, 83, 94, 0.10)',
    marginBottom: 0
  };

  const logoStyles = {
    fontFamily: "'Space Grotesk', Arial, sans-serif",
    fontSize: '2.0rem',
    letterSpacing: '2px',
    fontWeight: 700,
    userSelect: 'none',
    textShadow: 'none',
    position: 'relative',
    zIndex: 1,
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    color: textColor
  };

  const navListStyles = {
    display: 'flex',
    gap: '32px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative',
    zIndex: 1
  };

  const navLinkStyles = {
    fontFamily: "'Space Grotesk', Arial, sans-serif",
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '1.1rem',
    padding: '8px 0',
    borderBottom: '2px solid transparent',
    transition: 'color 0.3s ease, border-bottom 0.2s',
    color: textColor
  };

  return (
    <>
      <style>{`
        .logo-text:hover {
          transform: scale(1.05);
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }
        
        .nav-list a:hover, .nav-list a:focus {
          border-bottom-width: 2px;
          border-bottom-style: solid;
        }
        
        .nav-list .active {
          border-bottom-width: 2px;
          border-bottom-style: solid;
        }
      `}</style>
      <nav style={navBarStyles}>
        <Link to="/" className="logo-text" style={logoStyles}>QODEQ</Link>
        <ul style={navListStyles}>
          <li>
            <Link to="/" style={navLinkStyles}>Главная</Link>
          </li>
          <li>
            <Link to="/products" style={navLinkStyles}>Продукты</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;