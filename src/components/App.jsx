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
function TiltCard({ children, style }) {
  const ref = useRef(null);

  function handleMouseMove(e) {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10; // max 10deg
    const rotateY = ((x - centerX) / centerX) * -10;
    card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }
  function handleMouseLeave() {
    const card = ref.current;
    if (card) card.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg)';
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        boxShadow: '0 8px 32px 0 rgba(0,0,0,0.28), 0 1.5px 8px 0 rgba(255,255,255,0.08)',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.25s cubic-bezier(.22,1.5,.36,1), box-shadow 0.3s',
        border: '1.5px solid #fff',
        borderTop: '5px solid #fff',
        background: 'rgba(0,0,0,0.92)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {children}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        borderRadius: 'inherit',
        boxShadow: '0 0 32px 0 rgba(255,255,255,0.08) inset',
      }} />
    </div>
  );
}

function App() {
  const mainBlockRef = useRef(null);
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true, amount: 1 }); // 100% видимости
  const [animationDone, setAnimationDone] = useState(false);
  const [activeStripes, setActiveStripes] = useState([true, false, false, false, false]);

  const handleMouseMove = (e) => {
    const block = mainBlockRef.current;
    if (!block) return;
    const rect = block.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    block.style.setProperty('--cursor-x', `${x}px`);
    block.style.setProperty('--cursor-y', `${y}px`);
  };

  return (
    <>
      <div id="header-hover-zone" style={{position: 'fixed', top: 0, left: 0, width: '100vw', height: 24, zIndex: 2000}} />
      <Navigation />
      <div className="snap-container">
        <main
          id="main"
          className="main-block cursor-invert"
          ref={mainBlockRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => {
            if (mainBlockRef.current) {
              mainBlockRef.current.style.removeProperty('--cursor-x');
              mainBlockRef.current.style.removeProperty('--cursor-y');
            }
          }}
        >
          <h1 className="main-title hero-title">
            Qodeq — AI-платформа для саппорта, колл-центров и платежей
          </h1>
          <p className="hero-subtitle">
            Мы автоматизируем до 70% обращений клиентов и экономим десятки тысяч долларов на операторах. Всё в одной платформе — чат-бот, колл-центр бот, пеймент-бот и QA-бот.
          </p>
          <div className="hero-cta">
            <button className="hero-btn primary">Запросить демо</button>
            <button className="hero-btn secondary">Посмотреть продукты</button>
          </div>
        </main>
        <section
          id="about"
          className={`next-block about-block${animationDone ? ' about-black' : ''}`}
          ref={aboutRef}
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          {/* Полосы с контентом по схеме: 1 — пустая, 2 — заголовок, 3 — 3 карточки, 4 — 2 карточки, 5 — пустая */}
          {isAboutInView && !animationDone && (
            <>
              {[0, 1, 2, 3, 4].map(i => {
                const isEven = i % 2 === 0;
                return (
                  activeStripes[i] && (
                    <motion.div
                      key={i}
                      initial={isEven ? { translateX: '-100%' } : { translateX: '100%' }}
                      animate={{ translateX: '0%' }}
                      transition={{ duration: 0.5 }}
                      style={{
                        position: 'absolute',
                        top: `${i * 20}%`,
                        left: 0,
                        width: '100%',
                        height: '20%',
                        background: '#000',
                        zIndex: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                      }}
                      onAnimationComplete={() => {
                        if (i < 4) {
                          setActiveStripes(stripes => {
                            const next = [...stripes];
                            next[i + 1] = true;
                            return next;
                          });
                        } else {
                          setTimeout(() => setAnimationDone(true), 100);
                        }
                      }}
                    >
                      {/* Контент внутри полос */}
                      {i === 1 && (
                        <motion.h2
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.15 }}
                          style={{ color: '#fff', fontSize: '2.2rem', margin: 0, textAlign: 'center' }}
                        >
                          Почему Qodeq
                        </motion.h2>
                      )}
                      {i === 2 && (
                        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
                          {valueProps.slice(0, 3).map((text, idx) => (
                            <TiltCard
                              key={idx}
                              style={{
                                borderRadius: '18px',
                                padding: '28px 32px',
                                fontSize: '1.35rem',
                                fontWeight: 700,
                                letterSpacing: '0.01em',
                                minWidth: 220,
                                maxWidth: 270,
                                flex: '1 1 220px',
                                textAlign: 'center',
                                color: '#fff',
                                margin: 0,
                              }}
                            >
                              {text}
                            </TiltCard>
                          ))}
                        </div>
                      )}
                      {i === 3 && (
                        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
                          {valueProps.slice(3, 5).map((text, idx) => (
                            <TiltCard
                              key={idx}
                              style={{
                                borderRadius: '18px',
                                padding: '28px 32px',
                                fontSize: '1.35rem',
                                fontWeight: 700,
                                letterSpacing: '0.01em',
                                minWidth: 220,
                                maxWidth: 270,
                                flex: '1 1 220px',
                                textAlign: 'center',
                                color: '#fff',
                                margin: 0,
                              }}
                            >
                              {text}
                            </TiltCard>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )
                );
              })}
            </>
          )}
          {/* После анимации полос — итоговое расположение: 5 вертикальных блоков, контент внутри своих полос */}
          {animationDone && (
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
                <h2 style={{ color: '#fff', fontSize: '2.2rem', textAlign: 'center', margin: 0 }}>Почему Qodeq</h2>
              </div>
              {/* 3. 3 карточки */}
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
                  {valueProps.slice(0, 3).map((text, idx) => (
                    <TiltCard
                      key={idx}
                      style={{
                        borderRadius: '18px',
                        padding: '28px 32px',
                        fontSize: '1.35rem',
                        fontWeight: 700,
                        letterSpacing: '0.01em',
                        minWidth: 220,
                        maxWidth: 270,
                        flex: '1 1 220px',
                        textAlign: 'center',
                        color: '#fff',
                        margin: 0,
                      }}
                    >
                      {text}
                    </TiltCard>
                  ))}
                </div>
              </div>
              {/* 4. 2 карточки */}
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
                  {valueProps.slice(3, 5).map((text, idx) => (
                    <TiltCard
                      key={idx}
                      style={{
                        borderRadius: '18px',
                        padding: '28px 32px',
                        fontSize: '1.35rem',
                        fontWeight: 700,
                        letterSpacing: '0.01em',
                        minWidth: 220,
                        maxWidth: 270,
                        flex: '1 1 220px',
                        textAlign: 'center',
                        color: '#fff',
                        margin: 0,
                      }}
                    >
                      {text}
                    </TiltCard>
                  ))}
                </div>
              </div>
              {/* 5. Пустой блок */}
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
            </div>
          )}
        </section>
        <section id="services" className="next-block">
          <h2>Услуги</h2>
          <p>Описание услуг и продуктов платформы Qodeq.</p>
        </section>
        <section id="contacts" className="next-block">
          <h2>Контакты</h2>
          <p>Связаться с нами: info@qodeq.com</p>
        </section>
      </div>
    </>
  );
}

export default App;
