import React, { useRef, useState } from 'react';
import Navigation from './Navigation';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ParallaxProvider } from 'react-scroll-parallax';
import Starfall from './animations/Starfall';
import PulsingSphere from './animations/PulsingSphere';

const products = [
  {
    id: 'chat',
    title: 'Чат-бот',
    shortDescription: 'Отвечает в чате до 40% обращений.',
    fullDescription: `Автоматизированный чат-бот с искусственным интеллектом для обработки запросов пользователей.
    
    Ключевые преимущества:
    • Мгновенные ответы 24/7
    • Поддержка множества языков
    • Интеграция с популярными мессенджерами
    • Автоматическая эскалация сложных запросов
    • Аналитика и отчетность`,
    features: ['AI-powered ответы', 'Мультиязычность', 'Интеграция с CRM', 'Аналитика запросов']
  },
  {
    id: 'call',
    title: 'Колл-центр бот',
    shortDescription: 'Обрабатывает до 80% звонков без оператора.',
    fullDescription: `Интеллектуальная система обработки телефонных звонков с распознаванием речи.
    
    Ключевые преимущества:
    • Автоматическая обработка типовых запросов
    • Распознавание речи на разных языках
    • Естественный синтез речи
    • Интеграция с существующей телефонией
    • Детальная статистика звонков`,
    features: ['Распознавание речи', 'Синтез речи', 'Маршрутизация', 'Запись разговоров']
  },
  {
    id: 'payment',
    title: 'Пеймент-бот',
    shortDescription: 'Закрывает до 70% тикетов по депозитам и выводам.',
    fullDescription: `Автоматизированная система обработки платежных запросов и поддержки.
    
    Ключевые преимущества:
    • Автоматическая проверка статуса платежей
    • Помощь с депозитами и выводами
    • Интеграция с платежными системами
    • Безопасная обработка данных
    • Мониторинг транзакций`,
    features: ['Проверка платежей', 'Автоматические выводы', 'Безопасность', 'История операций']
  },
  {
    id: 'qa',
    title: 'QA-бот',
    shortDescription: 'Проверяет до 80% чатов и звонков автоматически.',
    fullDescription: `Система контроля качества обслуживания с использованием AI.
    
    Ключевые преимущества:
    • Автоматическая проверка диалогов
    • Оценка качества ответов
    • Выявление проблемных моментов
    • Рекомендации по улучшению
    • Генерация отчетов`,
    features: ['AI-анализ диалогов', 'Оценка качества', 'Рекомендации', 'Отчетность']
  }
];

const valueProps = [
  'Автоматизация до 70% чатов, звонков и тикетов.',
  'Экономия до $50,000 в месяц на поддержке.',
  'Поддержка до 15 языков.',
  'Интеграции с CRM, платежными системами и игровыми платформами.',
  'Аналитика и контроль качества.',
];






function App() {
  const mainBlockRef = useRef(null);
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const isProductsInView = useInView(productsRef, { once: true, amount: 0.5 });
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <ParallaxProvider>
      <div style={{ position: 'relative' }}>
        {/* Фиксированные элементы */}
        <div style={{
          position: 'fixed', 
          inset: 0, 
          zIndex: 1,
          pointerEvents: 'none'
        }}>
          <Starfall count={90} isDark={true} />
        </div>

        <div style={{
          position: 'fixed',
          inset: 0,
          background: '#000',
          opacity: 1,
          transition: 'opacity 0.5s ease-out',
          zIndex: 0,
          pointerEvents: 'none'
        }} />

        {/* Навигация */}
        <div id="header-hover-zone" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: 24,
          zIndex: 2000
        }} />
        <Navigation />

        {/* Основной контент */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          <main
            id="main"
            ref={mainBlockRef}
            style={{
              position: 'relative',
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              overflow: 'hidden',
              padding: '0 80px'
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                maxWidth: 600,
                padding: '24px',
                fontSize: '3.2rem',
                lineHeight: 1.1,
                fontWeight: 700,
                letterSpacing: '1.5px',
                background: 'rgba(0,0,0,0.72)',
                borderRadius: 18,
                color: '#fff',
                marginBottom: 24
              }}
            >
              Qodeq — AI-платформа для саппорта, колл-центров и платежей
            </motion.h1>
            <PulsingSphere scrollProgress={0} />
          </main>

          <section
            id="about"
            ref={aboutRef}
            style={{
              position: 'relative',
              minHeight: '100vh',
              background: '#fff',
              zIndex: 20,
              display: 'flex',
              alignItems: 'center',
              color: '#000'
            }}
          >
            <div style={{
              maxWidth: 1200,
              margin: '0 auto',
              padding: '40px',
              width: '100%'
            }}>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                style={{
                  color: '#000',
                  fontSize: '2.8rem',
                  textAlign: 'center',
                  marginBottom: 40,
                  fontWeight: 800,
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)'
                }}
              >
                Почему Qodeq
              </motion.h2>

            <div style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              gap: 40
            }}>
              {/* Центральная линия */}
              <motion.div 
                initial={{ scaleY: 0 }}
                animate={isAboutInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: 0,
                  bottom: 0,
                  width: 3,
                  background: 'linear-gradient(180deg, transparent 0%, #000 15%, #000 85%, transparent 100%)',
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
                    <p style={{
                      margin: 0,
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      color: '#000000',
                      lineHeight: 1.35,
                      textAlign: idx % 2 === 0 ? 'left' : 'right'
                    }}>
                      {text}
                    </p>
                  </motion.div>

                  {/* Центральная точка */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={isAboutInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.3, delay: isAboutInView ? 1.8 + idx * 0.2 : 0 }}
                    style={{
                      position: 'absolute',
                      left: 'calc(50% - 10px)',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: 16,
                      height: 16,
                      background: '#000',
                      borderRadius: '50%',
                      border: '4px solid #fff',
                      boxShadow: '0 0 0 2px #000',
                      zIndex: 2
                    }}
                  />

                  <div style={{ flex: '0 0 42%' }} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="products"
          ref={productsRef}
          style={{
            position: 'relative',
            minHeight: '100vh',
            background: '#000',
            zIndex: 20,
            display: 'flex',
            alignItems: 'center',
            color: '#fff'
          }}
        >
          <div style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '40px',
            width: '100%'
          }}>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isProductsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8,
                type: "spring",
                bounce: 0.4
              }}
              style={{
                color: '#fff',
                fontSize: '2.8rem',
                textAlign: 'center',
                marginBottom: 60,
                fontWeight: 700
              }}
            >
              Продукты платформы
            </motion.h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '300px 1fr',
              gap: '60px',
              position: 'relative',
              perspective: '1500px'
            }}>
              {/* Список продуктов */}
              <motion.div
                initial={{ 
                  opacity: 0, 
                  x: -100,
                  rotateY: -30,
                  scale: 0.9
                }}
                animate={isProductsInView ? { 
                  opacity: 1, 
                  x: 0,
                  rotateY: 0,
                  scale: 1
                } : {}}
                transition={{ 
                  duration: 1,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px'
                }}
              >
                {products.map((product, idx) => (
                  <motion.div
                    key={product.id}
                    initial={{ 
                      opacity: 0,
                      x: -50,
                      y: 20,
                      scale: 0.9
                    }}
                    animate={isProductsInView ? { 
                      opacity: 1,
                      x: 0,
                      y: 0,
                      scale: 1
                    } : {}}
                    transition={{ 
                      duration: 0.5,
                      delay: 0.4 + idx * 0.15,
                      type: "spring",
                      bounce: 0.3
                    }}
                    whileHover={{
                      x: 15,
                      scale: 1.02,
                      transition: { 
                        duration: 0.3,
                        type: "spring",
                        bounce: 0.4
                      },
                      boxShadow: '0 15px 30px -10px rgba(0,0,0,0.7), inset 0 0 20px rgba(255,255,255,0.15)'
                    }}
                    style={{
                      background: selectedProduct?.id === product.id ? 
                        'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)' : 
                        'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                      borderRadius: '20px',
                      padding: '24px',
                      cursor: 'pointer',
                      border: '1px solid',
                      borderColor: selectedProduct?.id === product.id ?
                        'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)',
                      transition: 'all 0.3s ease',
                      boxShadow: selectedProduct?.id === product.id ?
                        '0 10px 30px -10px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,255,255,0.1)' :
                        '0 5px 20px -5px rgba(0,0,0,0.3), inset 0 0 10px rgba(255,255,255,0.05)',
                      backdropFilter: 'blur(10px)'
                    }}
                    onClick={() => setSelectedProduct(product)}
                  >
                    <h3 style={{
                      fontSize: '1.4rem',
                      marginBottom: '10px',
                      color: '#fff',
                      fontWeight: 700,
                      letterSpacing: '0.5px',
                      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                      position: 'relative',
                      display: 'inline-block'
                    }}>
                      {product.title}
                    </h3>
                    <p style={{
                      fontSize: '0.95rem',
                      lineHeight: 1.4,
                      color: 'rgba(255,255,255,0.7)',
                      margin: 0
                    }}>
                      {product.shortDescription}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Детальное описание выбранного продукта */}
              <div style={{
                position: 'relative',
                minHeight: 500
              }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedProduct?.id}
                    initial={{ 
                      opacity: 0,
                      x: -100,
                      rotateY: -30,
                      scale: 0.9
                    }}
                    animate={{ 
                      opacity: 1,
                      x: 0,
                      rotateY: 0,
                      scale: 1
                    }}
                    exit={{
                      opacity: 0,
                      x: 100,
                      rotateY: 30,
                      scale: 0.9
                    }}
                    transition={{ 
                      duration: 0.5,
                      type: "spring",
                      bounce: 0.3
                    }}
                    style={{
                      background: 'linear-gradient(165deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                      borderRadius: '30px',
                      padding: '40px',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      boxShadow: '0 20px 40px -20px rgba(0,0,0,0.7), inset 0 0 30px rgba(255,255,255,0.05)',
                      position: 'absolute',
                      inset: 0,
                      overflow: 'hidden'
                    }}
                  >
                    {selectedProduct ? (
                      <>
                        <motion.h3
                          initial={{ 
                            opacity: 0,
                            y: 20
                          }}
                          animate={{ 
                            opacity: 1,
                            y: 0
                          }}
                          transition={{ 
                            duration: 0.4,
                            delay: 0.2,
                            type: "spring",
                            bounce: 0.3
                          }}
                          style={{
                            fontSize: '2.2rem',
                            marginBottom: '25px',
                            color: '#fff',
                            fontWeight: 700
                          }}
                        >
                          {selectedProduct.title}
                        </motion.h3>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                        >
                      <p style={{
                        fontSize: '1.1rem',
                        lineHeight: 1.6,
                        color: 'rgba(255,255,255,0.9)',
                        whiteSpace: 'pre-line',
                        marginBottom: '30px'
                      }}>
                        {selectedProduct.fullDescription}
                      </p>
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '12px',
                        marginTop: '20px'
                      }}>
                        {selectedProduct.features.map((feature, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ 
                              opacity: 0,
                              scale: 0.8,
                              y: 20
                            }}
                            animate={{ 
                              opacity: 1,
                              scale: 1,
                              y: 0
                            }}
                            transition={{ 
                              duration: 0.4,
                              delay: 1.0 + idx * 0.1,
                              type: "spring",
                              bounce: 0.4
                            }}
                            whileHover={{
                              scale: 1.1,
                              transition: { 
                                duration: 0.2,
                                type: "spring",
                                bounce: 0.4
                              }
                            }}
                            style={{
                              background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                              padding: '10px 20px',
                              borderRadius: '25px',
                              fontSize: '0.9rem',
                              color: 'rgba(255,255,255,0.9)',
                              border: '1px solid rgba(255,255,255,0.2)',
                              boxShadow: '0 5px 15px -5px rgba(0,0,0,0.3), inset 0 0 15px rgba(255,255,255,0.05)',
                              backdropFilter: 'blur(5px)',
                              letterSpacing: '0.5px',
                              fontWeight: 500
                            }}
                          >
                            {feature}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </>
                ) : (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '1.2rem'
                  }}>
                    Выберите продукт для просмотра деталей
                  </div>
                )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default App;
