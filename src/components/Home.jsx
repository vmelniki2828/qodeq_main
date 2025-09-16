import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence, animate } from 'framer-motion';
import Starfall from './animations/Starfall';
import PulsingSphere from './animations/PulsingSphere';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navigation from './Navigation';
import { IoChatbubbleEllipsesOutline, IoCallOutline, IoWalletOutline, IoHelpCircleOutline } from 'react-icons/io5';
import './../index.css';

// Хук для анимированного счетчика с задержкой
function useDelayedCounter(ref, end, delay = 0, duration = 2000) {
  const [counter, setCounter] = useState(0);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const controls = animate(0, end, {
          duration: duration / 1000,
          onUpdate: (value) => setCounter(Math.floor(value))
        });
        return () => controls.stop();
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isInView, end, delay, duration]);

  return counter;
}
const products = [
  {
    id: 'chat',
    title: 'Чат-бот',
    icon: IoChatbubbleEllipsesOutline,
    shortDescription: 'До 40% запросов',
    fullDescription: `Чат-бот на базе ИИ для автоматической обработки обращений пользователей.
    
    Основные преимущества:
    • Мгновенные ответы 24/7
    • Поддержка нескольких языков
    • Интеграция с популярными мессенджерами
    • Автоматическая эскалация сложных случаев
    • Аналитика и отчёты`,
    features: ['Ответы на базе ИИ', 'Мультиязычность', 'Интеграция с CRM', 'Аналитика запросов']
  },
  {
    id: 'call',
    title: 'Бот для колл-центра',
    icon: IoCallOutline,
    shortDescription: 'До 80% звонков',
    fullDescription: `Интеллектуальная система обработки телефонных звонков с распознаванием речи.
    
    Основные преимущества:
    • Автоматическая обработка стандартных запросов
    • Мультиязычное распознавание речи
    • Естественный синтез голоса
    • Интеграция с существующей телефонией
    • Детальная статистика звонков`,
    features: ['Распознавание речи', 'Синтез голоса', 'Маршрутизация звонков', 'Запись звонков']
  },
  {
    id: 'payment',
    title: 'Платёжный бот',
    icon: IoWalletOutline,
    shortDescription: 'До 70% тикетов',
    fullDescription: `Автоматизированная система обработки платёжных запросов и поддержки.
    
    Основные преимущества:
    • Автоматическая проверка статуса платежа
    • Помощь с депозитами и выводами
    • Интеграция с платёжными системами
    • Безопасная обработка данных
    • Мониторинг транзакций`,
    features: ['Проверка платежей', 'Автоматизация выводов', 'Безопасность', 'История транзакций']
  },
  {
    id: 'qa',
    title: 'QA-бот',
    icon: IoHelpCircleOutline,
    shortDescription: 'До 80% проверок',
    fullDescription: `Система контроля качества сервиса на базе искусственного интеллекта.
    
    Основные преимущества:
    • Автоматический анализ диалогов
    • Оценка качества ответов
    • Выявление проблем
    • Рекомендации по улучшению
    • Формирование отчётов`,
    features: ['Анализ диалогов ИИ', 'Оценка качества', 'Рекомендации', 'Отчёты']
  }
];

const valueProps = [
  'Автоматизация до 70% чатов, звонков и обращений.',
  'Экономия до $50,000 в месяц на поддержке.',
  'Поддержка до 15 языков.',
  'Интеграция с CRM, платёжными системами и игровыми платформами.',
  'Аналитика и контроль качества.',
];

function Home() {
  const mainBlockRef = useRef(null);
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const statsRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const isProductsInView = useInView(productsRef, { once: true, amount: 0.5 });
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Анимированные счетчики для статистики
  // Периферийные блоки анимируются сразу после выезда соответствующих блоков
  const chatCounter = useDelayedCounter(statsRef, 40, 1300, 1500); // блок появляется в 1.3 сек, счетчик 1.5 сек
  const callCounter = useDelayedCounter(statsRef, 80, 1800, 1500); // блок появляется в 1.8 сек, счетчик 1.5 сек  
  const paymentCounter = useDelayedCounter(statsRef, 70, 2300, 1500); // блок появляется в 2.3 сек, счетчик 1.5 сек
  const qaCounter = useDelayedCounter(statsRef, 80, 2800, 1500); // блок появляется в 2.8 сек, счетчик 1.5 сек
  
  // Центральный блок анимируется после всех периферийных
  const centralCounter = useDelayedCounter(statsRef, 70, 4100, 1500); // блок появляется в 4.1 сек, счетчик 1.5 сек

  const testimonials = [
    {
      text: "С Qodeq мы сократили расходы на поддержку на 45% и ускорили обработку платёжных тикетов в 5 раз.",
      author: "Руководитель поддержки",
      company: "Ведущий iGaming бренд"
    },
    {
      text: "Эффективность колл-центра выросла на 60%. ИИ отлично справляется с рутинными запросами, а команда фокусируется на сложных случаях.",
      author: "Операционный директор",
      company: "Платформа онлайн-казино"
    },
    {
      text: "Внедрение прошло без проблем. Уже через 2 недели время ответа на запросы клиентов сократилось на 70%.",
      author: "Менеджер по работе с клиентами",
      company: "Финтех-стартап"
    },
    {
      text: "Мультиязычная поддержка открыла для нас новые рынки. Теперь обслуживаем клиентов на 12 языках без усилий.",
      author: "Руководитель международного бизнеса",
      company: "Глобальная беттинг-компания"
    },
    {
      text: "ROI был заметен с первого дня. Платформа окупается за счёт экономии и роста удовлетворённости клиентов.",
      author: "Технический директор",
      company: "Платёжная компания"
    }
  ];

  // Автоматическая смена слайдов
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <ParallaxProvider>
      <div style={{ position: 'relative' }}>
        {/* Фиксированные элементы */}
        <div style={{
          position: 'fixed',
          inset: 0,
          background: '#000',
          opacity: 1,
          transition: 'opacity 0.5s ease-out',
          zIndex: 0,
          pointerEvents: 'none'
        }} />
        
        <div style={{
          position: 'fixed', 
          inset: 0, 
          zIndex: 3000,
          pointerEvents: 'none',
          mixBlendMode: 'difference'
        }}>
          <Starfall count={120} isDark={false} />
        </div>

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
              
              Qodeq — мульти-бот AI для автоматизации поддержки, колл-центра и платежей
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <PulsingSphere scrollProgress={0} />
            </motion.div>
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
              gridTemplateColumns: '320px 1fr',
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
                  gap: '24px'
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
                      scale: 1.05,
                      transition: { 
                        duration: 0.3,
                        type: "spring",
                        bounce: 0.4
                      }
                    }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      background: selectedProduct?.id === product.id ? 
                        '#fff' : '#000',
                      borderRadius: '20px',
                      padding: '16px',
                      height: '70px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      cursor: 'pointer',
                      border: '2px solid',
                      borderColor: selectedProduct?.id === product.id ?
                        '#000' : '#fff',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: selectedProduct?.id === product.id ?
                        '0 8px 25px rgba(255,255,255,0.2), inset 0 0 0 1px rgba(0,0,0,0.1)' :
                        '0 4px 15px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(255,255,255,0.1)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onClick={() => setSelectedProduct(product)}
                  >
                    {/* Декоративная полоска */}
                    <div style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: '4px',
                      background: selectedProduct?.id === product.id ? '#000' : '#fff',
                      transition: 'all 0.4s ease'
                    }} />
                    
                    {/* Иконка */}
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: selectedProduct?.id === product.id ? '#000' : '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '14px',
                      transition: 'all 0.4s ease',
                      boxShadow: selectedProduct?.id === product.id ? 
                        '0 3px 10px rgba(0,0,0,0.15)' : 
                        '0 3px 10px rgba(255,255,255,0.1)'
                    }}>
                      {React.createElement(product.icon, {
                        size: 20,
                        color: selectedProduct?.id === product.id ? '#fff' : '#000'
                      })}
                    </div>
                    
                    {/* Название услуги */}
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontSize: '1.2rem',
                        margin: 0,
                        color: selectedProduct?.id === product.id ? '#000' : '#fff',
                        fontWeight: 600,
                        letterSpacing: '0.1px',
                        textAlign: 'left',
                        lineHeight: 1.2,
                        transition: 'color 0.4s ease'
                      }}>
                        {product.title}
                      </h3>
                    </div>
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
                      scale: 0.8,
                      y: 100,
                      rotateX: -20,
                      transformPerspective: 1000
                    }}
                    animate={isProductsInView ? { 
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      rotateX: 0
                    } : {
                      opacity: 0,
                      scale: 0.8,
                      y: 100,
                      rotateX: -20
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.8,
                      y: -100,
                      rotateX: 20
                    }}
                    transition={{ 
                      duration: 0.2,
                      delay: 0.05,
                      type: "spring",
                      bounce: 0.2,
                      stiffness: 200,
                      damping: 20
                    }}
                    style={{
                      background: '#fff',
                      borderRadius: '24px',
                      padding: '40px',
                      border: '2px solid #000',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)',
                      position: 'absolute',
                      inset: 0,
                      overflow: 'hidden',
                      color: '#000'
                    }}
                  >
                    {selectedProduct ? (
                      <>
                        <motion.h3
                          initial={{ 
                            opacity: 0,
                            y: 20
                          }}
                          animate={isProductsInView ? { 
                            opacity: 1,
                            y: 0
                          } : {
                            opacity: 0,
                            y: 20
                          }}
                          transition={{ 
                            duration: 0.2,
                            delay: 0.1,
                            type: "spring",
                            bounce: 0.2
                          }}
                          style={{
                            fontSize: '2.2rem',
                            margin: '0 0 25px 0',
                            color: '#000',
                            fontWeight: 700,
                            borderBottom: '3px solid #000',
                            paddingBottom: '15px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px'
                          }}
                        >
                          <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '12px',
                            background: '#000',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            {React.createElement(selectedProduct.icon, {
                              size: 28,
                              color: '#fff'
                            })}
                          </div>
                          {selectedProduct.title}
                        </motion.h3>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={isProductsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ duration: 0.2, delay: 0.15 }}
                        >
                      <p style={{
                        fontSize: '1.1rem',
                        lineHeight: 1.6,
                        color: '#000',
                        whiteSpace: 'pre-line',
                        marginBottom: '30px',
                        opacity: 0.8
                      }}>
                        {selectedProduct.fullDescription}
                      </p>
                      <div style={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        gap: '8px',
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
                              duration: 0.2,
                              delay: 0.2 + idx * 0.05,
                              type: "spring",
                              bounce: 0.2
                            }}
                            style={{
                              background: '#000',
                              padding: '10px 18px',
                              borderRadius: '18px',
                              fontSize: '0.85rem',
                              color: '#fff',
                              border: '2px solid #000',
                              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                              letterSpacing: '0.2px',
                              fontWeight: 600,
                              position: 'relative',
                              overflow: 'hidden',
                              whiteSpace: 'nowrap',
                              flexShrink: 0
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
                    color: '#000',
                    fontSize: '1.2rem',
                    background: '#fff',
                    borderRadius: '24px',
                    border: '2px solid #000',
                    padding: '40px'
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

        <section
          ref={statsRef}
          id="stats"
          style={{
            position: 'relative',
            minHeight: '100vh',
            background: '#fff',
            zIndex: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000',
            overflow: 'hidden'
          }}
        >
          <div style={{
            maxWidth: 1200,
            width: '100%',
            height: '100vh',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Центральный элемент */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ 
                duration: 0.8,
                delay: 3.3, // Появляется после всех периферийных блоков
                type: "spring",
                bounce: 0.4
              }}
              style={{
                position: 'absolute',
                background: 'linear-gradient(145deg, #000000, #1a1a1a)',
                borderRadius: '50%',
                width: '200px',
                height: '200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '30px',
                textAlign: 'center',
                boxShadow: '0 25px 50px rgba(0,0,0,0.25), inset 0 2px 4px rgba(255,255,255,0.1)',
                zIndex: 2,
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <p style={{
                background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.8) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '3.2rem',
                fontWeight: 800,
                margin: 0,
                lineHeight: 1,
                marginBottom: '10px',
                textShadow: '0 2px 10px rgba(255,255,255,0.2)'
              }}>
                {centralCounter}%
              </p>
              <p style={{
                color: '#fff',
                fontSize: '1rem',
                fontWeight: 500,
                margin: 0,
                lineHeight: 1.5,
                opacity: 0.95,
                letterSpacing: '0.5px'
              }}>
                всего объёма работы автоматизировано
              </p>
            </motion.div>

            {/* Круговые элементы */}
            {[
              { 
                counter: chatCounter,
                description: 'запросов обработано чат-ботом',
                angle: 270,
                order: 1 // top
              },
              { 
                counter: callCounter,
                description: 'звонков обработано ботом колл-центра',
                angle: 0,
                order: 2 // right
              },
              { 
                counter: paymentCounter,
                description: 'платёжных тикетов решено платёжным ботом',
                angle: 90,
                order: 3 // bottom
              },
              { 
                counter: qaCounter,
                description: 'проверок проведено AI-ботом качества',
                angle: 180,
                order: 4 // left
              }
            ].map((item, idx) => {
              const radius = 250; // Радиус круга
              const angle = (item.angle * Math.PI) / 180; // Преобразование в радианы
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);

              return (
                <motion.div
                  key={idx}
                  initial={{ 
                    opacity: 0, 
                    scale: 0.5,
                    x: x * 0.3,
                    y: y * 0.3
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1,
                    x,
                    y
                  }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ 
                    duration: 0.8,
                    delay: 0.8 + item.order * 0.5, // Задержка базируется на порядке
                    type: "spring",
                    bounce: 0.4
                  }}
                  style={{
                    position: 'absolute',
                    background: 'linear-gradient(145deg, #000000, #1a1a1a)',
                    color: '#fff',
                    padding: '20px',
                    borderRadius: '20px',
                    width: '160px',
                    height: '120px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2), inset 0 2px 4px rgba(255,255,255,0.1)',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1,
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <p style={{
                    fontSize: '2.2rem',
                    fontWeight: 800,
                    margin: 0,
                    lineHeight: 1.1,
                    marginBottom: '8px',
                    background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.8) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 2px 10px rgba(255,255,255,0.2)'
                  }}>
                    {item.counter}%
                  </p>
                  <p style={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    margin: 0,
                    lineHeight: 1.5,
                    opacity: 0.95,
                    letterSpacing: '0.3px',
                    padding: '0 10px'
                  }}>
                    {item.description}
                  </p>
                </motion.div>
              );
            })}

            {/* Декоративное кольцо */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ 
                duration: 1.2,
                delay: 0.1,
                type: "spring",
                bounce: 0.3
              }}
              style={{
                position: 'absolute',
                width: '450px',
                height: '450px',
                border: '2px solid rgba(0,0,0,0.1)',
                borderRadius: '50%',
                zIndex: 0,
                boxShadow: 'inset 0 0 50px rgba(0,0,0,0.05)',
                background: 'radial-gradient(circle at center, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0) 70%)'
              }}
            />
          </div>
        </section>

        {/* Блок "Для кого" */}
        <section
          id="target"
          style={{
            position: 'relative',
            height: '100vh',
            background: '#000',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            padding: 0
          }}
        >
          <div style={{
            maxWidth: '1200px',
            width: '100%',
            position: 'relative',
            zIndex: 1,
            padding: '0 20px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6 }}
              style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                textAlign: 'center',
                marginBottom: '10px',
                background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.8) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 10px rgba(255,255,255,0.1)'
              }}
            >
              Для кого
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: '1.5rem',
                textAlign: 'center',
                marginBottom: '30px',
                opacity: 0.9
              }}
            >
              Qodeq подходит для:
            </motion.p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '30px',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              {[
                {
                  icon: (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                      <line x1="8" y1="21" x2="16" y2="21"/>
                      <line x1="12" y1="17" x2="12" y2="21"/>
                      <path d="M6 7h.01M6 11h.01M6 15h.01M18 7h.01M18 11h.01M18 15h.01"/>
                    </svg>
                  ),
                  text: 'Онлайн-казино и букмекерские компании'
                },
                {
                  icon: (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="5" width="20" height="14" rx="2"/>
                      <path d="M2 10h20"/>
                      <path d="M6 15h4"/>
                      <circle cx="18" cy="15" r="1"/>
                    </svg>
                  ),
                  text: 'Финтех и платёжные сервисы'
                },
                {
                  icon: (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  ),
                  text: 'Колл-центры и отделы поддержки'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ 
                    duration: 0.6,
                    delay: 0.3 + index * 0.2,
                    type: "spring",
                    bounce: 0.4
                  }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 12px 35px rgba(0,0,0,0.15)',
                    transition: { 
                      duration: 0.3,
                      type: "spring",
                      bounce: 0.4
                    }
                  }}
                  style={{
                    background: '#fff',
                    borderRadius: '20px',
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    border: '2px solid #000',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                    transform: 'translateZ(0)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {/* Декоративная полоска */}
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: '4px',
                    background: '#000'
                  }} />
                  
                  <div style={{
                    background: '#000',
                    borderRadius: '12px',
                    padding: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                    border: '2px solid #000',
                    minWidth: '60px',
                    minHeight: '60px'
                  }}>
                    {item.icon}
                  </div>
                  <p style={{
                    fontSize: '1.1rem',
                    margin: 0,
                    fontWeight: 600,
                    lineHeight: 1.3,
                    color: '#000',
                    letterSpacing: '0.1px'
                  }}>
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <Starfall />
        </section>

        {/* How it Works Section */}
        <section
          id="how"
          style={{
            position: 'relative',
            height: '100vh',
            background: 'linear-gradient(180deg, #fff 0%, #f8f8f8 100%)',
            color: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            zIndex: 20,
            overflow: 'hidden'
          }}
        >
          {/* Background Pattern */}
          <div style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.04,
            backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 0)',
            backgroundSize: '40px 40px',
            pointerEvents: 'none'
          }} />

          <div style={{
            maxWidth: '1200px',
            width: '100%',
            position: 'relative',
            padding: '0 40px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                textAlign: 'center',
                marginBottom: '60px'
              }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  fontSize: '2.8rem',
                  fontWeight: 800,
                  marginBottom: '20px',
                  background: 'linear-gradient(135deg, #000 0%, #333 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 2px 10px rgba(0,0,0,0.05)'
                }}
              >
                Как работает Qodeq
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  fontSize: '1.4rem',
                  color: '#666',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}
              >
                Оптимизированный процесс для максимальной эффективности
              </motion.p>
            </motion.div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '60px 40px',
              marginBottom: '60px',
              position: 'relative'
            }}>
              {[
                {
                  title: 'Интеграция',
                  description: 'Подключение чатов, звонков и платежей через единый API.',
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  )
                },
                {
                  title: 'Обработка на базе ИИ',
                  description: 'Умные боты автоматически обрабатывают до 70% стандартных запросов.',
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2" />
                      <path d="M12 12v-2" />
                      <path d="M12 12h4" />
                    </svg>
                  )
                },
                {
                  title: 'Умная эскалация',
                  description: 'Сложные случаи направляются операторам.',
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  )
                },
                {
                  title: 'Аналитика и отчёты',
                  description: 'Подробные отчёты и аналитика для руководства.',
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 21H3" />
                      <path d="M18 7l-8.586 8.586L7 13.172 3 17.172" />
                      <path d="M19 7h-4v4" />
                    </svg>
                  )
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6,
                    delay: 0.2 + Math.floor(index / 2) * 0.15,
                    type: "spring",
                    bounce: 0.4
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                    gap: '30px',
                    position: 'relative'
                  }}
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
                    }}
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '24px',
                      background: '#000',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      flexShrink: 0,
                      position: 'relative',
                      overflow: 'hidden',
                      border: '2px solid rgba(255,255,255,0.1)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                    }}
                  >
                    {step.icon}
                    <div style={{
                      position: 'absolute',
                      top: '-20%',
                      left: '-20%',
                      width: '140%',
                      height: '140%',
                      background: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 70%)',
                      pointerEvents: 'none'
                    }} />
                  </motion.div>
                  
                  <div style={{
                    flex: 1,
                    textAlign: index % 2 === 0 ? 'left' : 'right',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      margin: '0 0 8px 0',
                      color: '#000'
                    }}>
                      {step.title}
                    </h3>
                    <p style={{
                      fontSize: '1.15rem',
                      margin: 0,
                      fontWeight: 400,
                      lineHeight: 1.5,
                      color: '#666'
                    }}>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Testimonial Slider */}
            <div style={{
              maxWidth: '700px',
              margin: '0 auto',
              position: 'relative'
            }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.95 }}
                  transition={{ 
                    duration: 0.5,
                    type: "spring",
                    bounce: 0.3
                  }}
                  style={{
                    background: '#fff',
                    padding: '40px',
                    borderRadius: '24px',
                    position: 'relative',
                    border: '2px solid #000',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.1)'
                  }}
                >
                  {/* Quote icon */}
                  <div style={{
                    position: 'absolute',
                    top: '-20px',
                    left: '40px',
                    width: '40px',
                    height: '40px',
                    background: '#000',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid #fff'
                  }}>
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                    </svg>
                  </div>

                  <p style={{
                    fontSize: '1.25rem',
                    lineHeight: 1.5,
                    marginBottom: '25px',
                    fontWeight: 500,
                    color: '#000',
                    fontStyle: 'italic'
                  }}>
                    {testimonials[currentTestimonial].text}
                  </p>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px'
                  }}>
                    <div style={{
                      width: '45px',
                      height: '45px',
                      borderRadius: '12px',
                      background: '#000',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: '1.2rem',
                      fontWeight: 'bold'
                    }}>
                      {testimonials[currentTestimonial].author.charAt(0)}
                    </div>
                    <div>
                      <p style={{
                        fontSize: '1rem',
                        margin: 0,
                        fontWeight: 600,
                        color: '#000'
                      }}>
                        {testimonials[currentTestimonial].author}
                      </p>
                      <p style={{
                        fontSize: '0.9rem',
                        margin: '2px 0 0 0',
                        color: '#666',
                        fontWeight: 500
                      }}>
                        {testimonials[currentTestimonial].company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider indicators */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '8px',
                marginTop: '25px'
              }}>
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`indicator-button ${index === currentTestimonial ? 'active' : 'inactive'}`}
                  />
                ))}
              </div>

              {/* Navigation arrows */}
              <button
                onClick={() => setCurrentTestimonial((prev) => prev === 0 ? testimonials.length - 1 : prev - 1)}
                className="nav-button"
                style={{
                  position: 'absolute',
                  left: '-60px',
                  top: '50%',
                  transform: 'translateY(-50%)'
                }}
              >
                ←
              </button>

              <button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="nav-button"
                style={{
                  position: 'absolute',
                  right: '-60px',
                  top: '50%',
                  transform: 'translateY(-50%)'
                }}
              >
                →
              </button>
            </div>
          </div>
        </section>

        {/* Closing CTA Section */}
        <section
          id="cta"
          style={{
            position: 'relative',
            height: '100vh',
            background: '#000',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            zIndex: 20,
            overflow: 'hidden'
          }}
        >
          {/* Main Content */}
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px 20px',
            textAlign: 'center',
            position: 'relative'
          }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                maxWidth: '800px',
                margin: '0 auto'
              }}
            >
              <h2 style={{
                fontSize: '3.2rem',
                fontWeight: 800,
                marginBottom: '30px',
                lineHeight: 1.2,
                background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.8) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 10px rgba(255,255,255,0.1)'
              }}>
                Qodeq — автоматизация поддержки, которая работает с первого дня
              </h2>
              <p style={{
                fontSize: '1.5rem',
                lineHeight: 1.5,
                opacity: 0.9,
                marginBottom: '40px'
              }}>
                Узнайте, как наши ИИ-боты помогут сократить расходы и повысить качество сервиса
              </p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cta-button cta-primary"
              >
                Начать
              </motion.button>
            </motion.div>
          </div>

          {/* Footer */}
          <footer style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            padding: '30px 0',
            width: '100%'
          }}>
            <div style={{
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '0 40px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                opacity: 0.8
              }}>
                © 2025 Qodeq. Все права защищены.<br/>
                <span style={{fontSize: '0.95rem', opacity: 0.7}}>created by softqod.com</span>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: '8px'
              }}>
                <div style={{fontSize:'0.95rem',opacity:0.7}}>
                  TG: <a href="https://t.me/qodeq_bot" style={{color:'#fff',textDecoration:'underline',opacity:0.7}}>@qodeq_bot</a>
                </div>
                <div style={{fontSize:'0.95rem',opacity:0.7}}>
                  <a href="mailto:manager@softqod.com" style={{color:'#fff',textDecoration:'underline',opacity:0.7}}>manager@softqod.com</a>
                </div>
              </div>
            </div>
          </footer>
        </section>

        </div>
      </div>
    </ParallaxProvider>
  );
}

export default Home;
