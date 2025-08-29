import React, { useState, useEffect } from 'react';
import './Navigation.css';

function Navigation() {
  const [textColor, setTextColor] = useState('#fff');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['main', 'about', 'products'];
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
      if (currentSection === 'about') {
        setTextColor('#000'); // черный текст для белой секции
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
            Главная
          </a>
        </li>
        <li>
          <a 
            href="#about"
            style={{ color: textColor }}
          >
            Почему Qodeq
          </a>
        </li>
        <li>
          <a 
            href="#products"
            style={{ color: textColor }}
          >
            Продукты
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;