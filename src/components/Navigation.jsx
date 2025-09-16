import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

function Navigation() {
  const [textColor, setTextColor] = useState('#fff');
  const { t, language, toggleLanguage } = useLanguage();

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
    alignItems: 'center',
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

  const languageButtonStyles = {
    fontFamily: "'Space Grotesk', Arial, sans-serif",
    background: 'transparent',
    border: `2px solid ${textColor}`,
    borderRadius: '8px',
    padding: '6px 12px',
    fontSize: '0.9rem',
    fontWeight: 500,
    color: textColor,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginLeft: '16px'
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
        
        .language-button:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: scale(1.05);
        }
        
        .language-button:active {
          transform: scale(0.95);
        }

        /* Адаптивные стили для Navigation */
        @media (max-width: 768px) {
          .nav-bar {
            padding: 0 20px !important;
            height: 50px !important;
          }
          
          .logo-text {
            font-size: 1.5rem !important;
            letter-spacing: 1px !important;
          }
          
          .nav-list {
            gap: 20px !important;
          }
          
          .nav-link {
            font-size: 1rem !important;
            padding: 6px 0 !important;
          }
          
          .language-button {
            padding: 5px 10px !important;
            font-size: 0.8rem !important;
            margin-left: 12px !important;
          }
        }

        @media (max-width: 480px) {
          .nav-bar {
            padding: 0 15px !important;
            height: 45px !important;
          }
          
          .logo-text {
            font-size: 1.3rem !important;
            letter-spacing: 0.5px !important;
          }
          
          .nav-list {
            gap: 15px !important;
          }
          
          .nav-link {
            font-size: 0.9rem !important;
            padding: 5px 0 !important;
          }
          
          .language-button {
            padding: 4px 8px !important;
            font-size: 0.75rem !important;
            margin-left: 8px !important;
            border-radius: 6px !important;
          }
        }

        @media (max-width: 360px) {
          .nav-bar {
            padding: 0 10px !important;
            height: 40px !important;
          }
          
          .logo-text {
            font-size: 1.1rem !important;
            letter-spacing: 0px !important;
          }
          
          .nav-list {
            gap: 10px !important;
          }
          
          .nav-link {
            font-size: 0.8rem !important;
            padding: 4px 0 !important;
          }
          
          .language-button {
            padding: 3px 6px !important;
            font-size: 0.7rem !important;
            margin-left: 6px !important;
            border-radius: 4px !important;
          }
        }
      `}</style>
      <nav className="nav-bar" style={navBarStyles}>
        <Link to="/" className="logo-text" style={logoStyles}>QODEQ</Link>
        <ul className="nav-list" style={navListStyles}>
          <li>
            <Link to="/" className="nav-link" style={navLinkStyles}>{t('home')}</Link>
          </li>
          <li>
            <Link to="/products" className="nav-link" style={navLinkStyles}>{t('products')}</Link>
          </li>
          <li>
            <button 
              className="language-button"
              style={languageButtonStyles}
              onClick={toggleLanguage}
              title={t('language')}
            >
              {language === 'ru' ? 'EN' : 'RU'}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;