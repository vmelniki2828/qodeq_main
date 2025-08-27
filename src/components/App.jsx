import React, { useRef, useState } from 'react';
import Navigation from './Navigation';
import { motion, useInView } from 'framer-motion';

const valueProps = [
  'Автоматизация до 70% чатов, звонков и тикетов.',
  'Экономия до $50,000 в месяц на поддержке.',
  'Поддержка до 15 языков.',
  'Интеграции с CRM, платежными системами и игровыми платформами.',
  'Аналитика и контроль качества.',
];

// 3D карточка с эффектом наклона
// function TiltCard({ children, style }) {
//   const ref = useRef(null);

//   function handleMouseMove(e) {
//     const card = ref.current;
//     if (!card) return;
//     const rect = card.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;
//     const rotateX = ((y - centerY) / centerY) * 10; // max 10deg
//     const rotateY = ((x - centerX) / centerX) * -10;
//     card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
//   }
//   function handleMouseLeave() {
//     const card = ref.current;
//     if (card) card.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg)';
//   }

//   return (
//     <div
//       ref={ref}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       style={{
//         ...style,
//         boxShadow: '0 8px 32px 0 rgba(0,0,0,0.28), 0 1.5px 8px 0 rgba(0,0,0,0.08)',
//         transformStyle: 'preserve-3d',
//         transition: 'transform 0.25s cubic-bezier(.22,1.5,.36,1), box-shadow 0.3s',
//         border: '1.5px solid #000',
//         borderTop: '5px solid #000',
//         background: '#fff',
//         position: 'relative',
//         overflow: 'hidden',
//       }}
//     >
//       {children}
//       <div style={{
//         position: 'absolute',
//         inset: 0,
//         pointerEvents: 'none',
//         borderRadius: 'inherit',
//         boxShadow: '0 0 32px 0 rgba(0,0,0,0.08) inset',
//       }} />
//     </div>
//   );
// }

// Компонент анимированного звездопада с адаптивным цветом
function Starfall({ count = 60, isDark = true }) {
  const ref = useRef();
  React.useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;
    let stars = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2 + 0.5,
      speed: Math.random() * 0.7 + 0.3
    }));
    let animationId;
    function animate() {
      ctx.clearRect(0, 0, width, height);
      for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        if (isDark) {
          ctx.fillStyle = 'rgba(255,255,255,0.85)';
          ctx.shadowColor = '#fff';
        } else {
          ctx.fillStyle = 'rgba(0,0,0,0.85)';
          ctx.shadowColor = '#000';
        }
        ctx.shadowBlur = 8;
        ctx.fill();
        star.y += star.speed;
        if (star.y > height) {
          star.x = Math.random() * width;
          star.y = -2;
          star.r = Math.random() * 1.2 + 0.5;
          star.speed = Math.random() * 0.7 + 0.3;
        }
      }
      animationId = requestAnimationFrame(animate);
    }
    animate();
    window.addEventListener('resize', handleResize);
    function handleResize() {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    }
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [count, isDark]);
  return (
    <canvas
      ref={ref}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.7,
      }}
    />
  );
}

// SVG-планета с кольцом и glow с адаптивным цветом
function PlanetSVG({ scrollProgress = 0 }) {
  const isDark = scrollProgress < 0.5;
  const planetColor = isDark ? '#fff' : '#000';
  const opacity = Math.max(0.3, 1 - scrollProgress * 0.7);
  
  return (
    <div style={{
      position: 'absolute',
      right: 80,
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 2,
      width: 320,
      height: 320,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none',
      opacity: opacity,
      transition: 'opacity 0.3s ease',
    }}>
      <svg width="320" height="320" viewBox="0 0 320 320" fill="none" style={{ display: 'block' }}>
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={planetColor} stopOpacity="0.9" />
            <stop offset="100%" stopColor={planetColor} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="160" cy="160" r="90" fill="url(#glow)" />
        <circle cx="160" cy="160" r="78" fill={planetColor} fillOpacity="0.13" />
        <circle cx="160" cy="160" r="62" fill={planetColor} fillOpacity="0.9" />
        <ellipse
          cx="160" cy="160" rx="120" ry="32"
          fill="none"
          stroke={planetColor}
          strokeWidth="6"
          opacity="0.7"
          style={{
            transformOrigin: '160px 160px',
            animation: 'planet-ring-spin 7s linear infinite',
          }}
        />
      </svg>
      <style>{`
        @keyframes planet-ring-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

// Компонент красивого перехода между блоками
function SmoothTransition() {
  const [scrollProgress, setScrollProgress] = useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      // Переход начинается в середине первого блока и заканчивается в начале второго
      const startPoint = windowHeight * 0.5;
      const endPoint = windowHeight * 1.2;
      const progress = Math.min(1, Math.max(0, (scrollY - startPoint) / (endPoint - startPoint)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(180deg, 
          rgba(0,0,0,${1 - scrollProgress}) 0%, 
          rgba(255,255,255,${scrollProgress}) 100%)`,
        zIndex: 50,
        pointerEvents: 'none',
        transition: 'opacity 0.1s',
      }}
    />
  );
}

function App() {
  const mainBlockRef = useRef(null);
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.7 }); // 70% видимости для запуска анимации
  // const [animationDone, setAnimationDone] = useState(false);
  // const [activeStripes, setActiveStripes] = useState([true, false, false, false, false]);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleMouseMove = (e) => {
    const block = mainBlockRef.current;
    if (!block) return;
    const rect = block.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    block.style.setProperty('--cursor-x', `${x}px`);
    block.style.setProperty('--cursor-y', `${y}px`);
  };

  React.useEffect(() => {
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

  return (
    <>
      <div style={{position: 'fixed', inset: 0, zIndex: 100, pointerEvents: 'none'}}>
        <Starfall count={90} isDark={scrollProgress < 0.5} />
      </div>
      <SmoothTransition />
      <div id="header-hover-zone" style={{position: 'fixed', top: 0, left: 0, width: '100vw', height: 24, zIndex: 2000}} />
      <Navigation />
      <div className="snap-container">
        <main
          id="main"
          className="main-block cursor-invert"
          ref={mainBlockRef}
          style={{ position: 'relative', overflow: 'hidden' }}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => {
            if (mainBlockRef.current) {
              mainBlockRef.current.style.removeProperty('--cursor-x');
              mainBlockRef.current.style.removeProperty('--cursor-y');
            }
          }}
        >
          <h1 className="main-title hero-title" style={{
            maxWidth: 600,
            padding: '24px 24px',
            fontSize: '3.2rem',
            margin: '0 0 24px 80px',
            lineHeight: 1.1,
            fontWeight: 700,
            letterSpacing: '1.5px',
            background: 'rgba(0,0,0,0.72)',
            borderRadius: 18,
            zIndex: 2,
            position: 'relative',
            textAlign: 'left',
            alignSelf: 'flex-start',
          }}>
            Qodeq — AI-платформа для саппорта, колл-центров и платежей
          </h1>
          <PlanetSVG scrollProgress={scrollProgress} />
        </main>
        <section
          id="about"
          className={`next-block about-block`}
          ref={aboutRef}
          style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#fff' }}
        >

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
          }}>
            {/* 1. Пустой блок */}
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
            {/* 2. Заголовок */}
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              <h2 style={{ color: '#000', fontSize: '2.2rem', textAlign: 'center', margin: 0, mixBlendMode: 'normal' }}>Почему Qodeq</h2>
            </div>
            {/* 3. Анимированный список */}
            <div style={{ flex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 80px' }}>
              <div style={{ 
                width: '100%', 
                maxWidth: 900, 
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: 28
              }}>
                {/* Центральная линия */}
                <motion.div 
                  initial={{ scaleY: 0 }}
                  animate={isAboutInView ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: 0,
                    bottom: 0,
                    width: 3,
                    background: 'linear-gradient(180deg, transparent 0%, #000 20%, #000 80%, transparent 100%)',
                    transform: 'translateX(-50%)',
                    transformOrigin: 'top',
                    zIndex: 0
                  }} 
                />
                
                {valueProps.map((text, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ 
                      opacity: 0, 
                      x: idx % 2 === 0 ? -100 : 100,
                      scale: 0.8
                    }}
                    animate={isAboutInView ? { 
                      opacity: 1, 
                      x: 0,
                      scale: 1
                    } : {
                      opacity: 0, 
                      x: idx % 2 === 0 ? -100 : 100,
                      scale: 0.8
                    }}
                    transition={{ 
                      duration: 0.8, 
                      delay: isAboutInView ? 1 + idx * 0.2 : 0,
                      type: "spring",
                      bounce: 0.4
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      position: 'relative',
                      zIndex: 1,
                      flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse'
                    }}
                  >
                    {/* Контент карточки */}
                    <motion.div 
                      whileHover={{ 
                        y: -6, 
                        boxShadow: '8px 16px 0px #000',
                        scale: 1.02
                      }}
                      style={{
                        flex: '0 0 42%',
                        background: '#fff',
                        border: '2px solid #000',
                        borderRadius: 14,
                        padding: '24px 22px',
                        position: 'relative',
                        boxShadow: '6px 6px 0px #000',
                        cursor: 'pointer'
                      }}
                    >
                      {/* Номер */}
                      <motion.div 
                        initial={{ scale: 0, rotate: -180 }}
                        animate={isAboutInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                        transition={{ duration: 0.5, delay: isAboutInView ? 1.5 + idx * 0.2 : 0 }}
                        style={{
                          position: 'absolute',
                          top: -14,
                          [idx % 2 === 0 ? 'right' : 'left']: -14,
                          width: 40,
                          height: 40,
                          background: '#000',
                          color: '#fff',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.2rem',
                          fontWeight: 700,
                          border: '3px solid #fff'
                        }}
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </motion.div>
                      
                      {/* Текст */}
                      <div style={{
                        fontSize: '1.15rem',
                        fontWeight: 600,
                        color: '#000',
                        lineHeight: 1.35,
                        textAlign: idx % 2 === 0 ? 'left' : 'right'
                      }}>
                        {text}
                      </div>
                      

                    </motion.div>
                    
                    {/* Центральная точка - чуть правее центра */}
                    <div style={{
                      position: 'absolute',
                      left: 'calc(50% + 2px)',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                      zIndex: 2,
                    }}>
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={isAboutInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 0.3, delay: isAboutInView ? 1.8 + idx * 0.2 : 0 }}
                        style={{
                          width: 16,
                          height: 16,
                          background: '#000',
                          borderRadius: '50%',
                          border: '4px solid #fff',
                          boxShadow: '0 0 0 2px #000'
                        }} 
                      />
                    </div>
                    
                    {/* Пустое пространство для баланса */}
                    <div style={{ flex: '0 0 42%' }} />
                  </motion.div>
                ))}
              </div>
            </div>
            {/* 5. Пустой блок */}
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
          </div>
        </section>

      </div>
    </>
  );
}

export default App;
