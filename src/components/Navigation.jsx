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

  return (
    <nav className="nav-bar">
      <Link to="/" className="logo-text" style={{ color: textColor }}>QODEQ</Link>
      <ul className="nav-list">
        <li>
          <Link to="/" style={{ color: textColor }}>Главная</Link>
        </li>
        <li>
          <Link to="/products" style={{ color: textColor }}>Продукты</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;