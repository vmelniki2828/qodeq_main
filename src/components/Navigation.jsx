import React, { useState, useEffect } from 'react';
import './Navigation.css';

function Navigation() {
  const [textColor, setTextColor] = useState('#fff');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['main', 'about', 'products', 'stats', 'target', 'how', 'cta'];
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

  return (
    <nav className="nav-bar">
      <div className="logo-text" style={{ color: textColor }}>QODEQ</div>
      <ul className="nav-list">
        <li>
          <a 
            href="#main" 
            className="active" 
            aria-current="page"
            style={{ color: textColor }}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#about"
            style={{ color: textColor }}
          >
            Why Qodeq
          </a>
        </li>
        <li>
          <a 
            href="#products"
            style={{ color: textColor }}
          >
            Products
          </a>
        </li>
        <li>
          <a 
            href="#stats"
            style={{ color: textColor }}
          >
            Stats
          </a>
        </li>
        <li>
          <a 
            href="#target"
            style={{ color: textColor }}
          >
            For Business
          </a>
        </li>
        <li>
          <a 
            href="#how"
            style={{ color: textColor }}
          >
            How it Works
          </a>
        </li>
        <li>
          <a 
            href="#cta"
            style={{ color: textColor }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;