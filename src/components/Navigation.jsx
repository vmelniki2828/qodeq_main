import React from 'react';
import './Navigation.css';

// Кастомная функция очень плавного скролла
function smoothScrollTo(target, duration = 2500) {
  const startY = window.scrollY;
  const endY = target.getBoundingClientRect().top + window.scrollY;
  const distance = endY - startY;
  let startTime = null;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    // easeInOutCubic
    const t = Math.min(timeElapsed / duration, 1);
    const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    window.scrollTo(0, startY + distance * ease);
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }
  requestAnimationFrame(animation);
}

function Navigation() {
  // Функция для плавного скролла к секции
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      smoothScrollTo(section, 2500);
    }
  };

  return (
    <nav className="nav-bar">
      <div className="logo-text">QODEQ</div>
      <ul className="nav-list">
        <li><a href="#main" className="active" aria-current="page" onClick={e => handleNavClick(e, 'main')}>Главная</a></li>
        <li><a href="#about" onClick={e => handleNavClick(e, 'about')}>О нас</a></li>
        <li><a href="#services" onClick={e => handleNavClick(e, 'services')}>Услуги</a></li>
        <li><a href="#contacts" onClick={e => handleNavClick(e, 'contacts')}>Контакты</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;