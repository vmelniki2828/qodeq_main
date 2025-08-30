import React, { useRef, useState } from 'react';
import Navigation from './Navigation';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ParallaxProvider } from 'react-scroll-parallax';
import Starfall from './animations/Starfall';
import PulsingSphere from './animations/PulsingSphere';

const products = [
  {
    id: 'chat',
    title: 'Chatbot',
    shortDescription: 'Up to 40% of requests',
    fullDescription: `AI-powered chatbot for automated processing of user requests.
    
    Key Benefits:
    • 24/7 Instant Responses
    • Multi-language Support
    • Popular Messenger Integration
    • Automatic Complex Case Escalation
    • Analytics and Reporting`,
    features: ['AI-powered Responses', 'Multi-language', 'CRM Integration', 'Request Analytics']
  },
  {
    id: 'call',
    title: 'Call Center Bot',
    shortDescription: 'Up to 80% of calls',
    fullDescription: `Intelligent phone call processing system with speech recognition.
    
    Key Benefits:
    • Automated Standard Request Processing
    • Multi-language Speech Recognition
    • Natural Speech Synthesis
    • Existing Telephony Integration
    • Detailed Call Statistics`,
    features: ['Speech Recognition', 'Voice Synthesis', 'Call Routing', 'Call Recording']
  },
  {
    id: 'payment',
    title: 'Payment Bot',
    shortDescription: 'Up to 70% of tickets',
    fullDescription: `Automated payment request and support processing system.
    
    Key Benefits:
    • Automatic Payment Status Verification
    • Deposit and Withdrawal Assistance
    • Payment System Integration
    • Secure Data Processing
    • Transaction Monitoring`,
    features: ['Payment Verification', 'Automated Withdrawals', 'Security', 'Transaction History']
  },
  {
    id: 'qa',
    title: 'QA Bot',
    shortDescription: 'Up to 80% of checks',
    fullDescription: `AI-powered service quality control system.
    
    Key Benefits:
    • Automated Dialogue Review
    • Response Quality Assessment
    • Issue Detection
    • Improvement Recommendations
    • Report Generation`,
    features: ['AI Dialogue Analysis', 'Quality Assessment', 'Recommendations', 'Reporting']
  }
];

const valueProps = [
  'Automation of up to 70% of chats, calls, and tickets.',
  'Save up to $50,000 monthly on support.',
  'Support for up to 15 languages.',
  'Integration with CRM, payment systems, and gaming platforms.',
  'Analytics and quality control.',
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
          <Starfall count={90} isDark={false} />
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
              
              Qodeq — AI Platform for Support, Call Centers and Payments
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
                Why Qodeq
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
              Platform Products
            </motion.h2>            <div style={{
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
                      borderRadius: '22px',
                      padding: '24px',
                      height: '80px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
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
                      fontSize: '1.6rem',
                      margin: 0,
                      color: '#fff',
                      fontWeight: 700,
                      letterSpacing: '0.3px',
                      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                      textAlign: 'center',
                      position: 'relative',
                      lineHeight: 1.2
                    }}>
                      {product.title}
                    </h3>
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
                      duration: 0.35,
                      delay: 0.15,
                      type: "spring",
                      bounce: 0.3,
                      stiffness: 120,
                      damping: 12
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
                          animate={isProductsInView ? { 
                            opacity: 1,
                            y: 0
                          } : {
                            opacity: 0,
                            y: 20
                          }}
                          transition={{ 
                            duration: 0.4,
                            delay: 0.6,
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
                          animate={isProductsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ duration: 0.4, delay: 0.7 }}
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
                              delay: 0.8 + idx * 0.1,
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

        <section
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
                delay: 0.3,
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
                70%
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
                of total workload automated
              </p>
            </motion.div>

            {/* Круговые элементы */}
            {[
                              { 
                number: '40%',
                description: 'of requests handled by chatbot',
                angle: 270,
                order: 1 // top
              },
              { 
                number: '80%',
                description: 'of calls processed by call bot',
                angle: 0,
                order: 2 // right
              },
              { 
                number: '70%',
                description: 'of payment tickets resolved by payment bot',
                angle: 90,
                order: 3 // bottom
              },
              { 
                number: '80%',
                description: 'of QA checks performed by AI',
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
                    {item.number}
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
                marginBottom: '20px',
                background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.8) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 10px rgba(255,255,255,0.1)'
              }}
            >
              Target Industries
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: '1.5rem',
                textAlign: 'center',
                marginBottom: '60px',
                opacity: 0.9
              }}
            >
              Qodeq is designed for:
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
                  text: 'Online Casinos & Betting Companies'
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
                  text: 'Fintech & Payment Services'
                },
                {
                  icon: (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  ),
                  text: 'Call Centers & Support Departments'
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
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 100%)',
                    borderRadius: '24px',
                    padding: '35px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '25px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3), inset 0 2px 10px rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    transform: 'translateZ(0)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                    borderRadius: '16px',
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    {item.icon}
                  </div>
                  <p style={{
                    fontSize: '1.3rem',
                    margin: 0,
                    fontWeight: 500,
                    lineHeight: 1.4,
                    opacity: 0.95,
                    letterSpacing: '0.3px'
                  }}>
                    {item.text}
                  </p>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                    opacity: 0.5
                  }}/>
                </motion.div>
              ))}
            </div>
          </div>

          <Starfall />
        </section>

        </div>
      </div>
    </ParallaxProvider>
  );
}

export default App;
