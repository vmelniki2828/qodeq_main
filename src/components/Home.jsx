import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Starfall from './animations/Starfall';
import PulsingSphere from './animations/PulsingSphere';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navigation from './Navigation';
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

function Home() {
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
              
              Qodeq — AI Platform for Support, Call Centers and Payments
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
                marginBottom: '10px',
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
                marginBottom: '30px',
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
                How Qodeq Works
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
                Streamlined process for maximum efficiency
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
                  title: 'Integration Setup',
                  description: 'Connect to chats, calls, and payments through our unified API.',
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  )
                },
                {
                  title: 'AI-Powered Processing',
                  description: 'Smart bots handle up to 70% of standard requests automatically.',
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2" />
                      <path d="M12 12v-2" />
                      <path d="M12 12h4" />
                    </svg>
                  )
                },
                {
                  title: 'Smart Escalation',
                  description: 'Complex cases are intelligently routed to human operators.',
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
                  title: 'Analytics & Insights',
                  description: 'Comprehensive reports and performance analytics for management.',
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

            {/* Enhanced Testimonial section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                maxWidth: '600px',
                margin: '0 auto',
                background: 'linear-gradient(145deg, rgba(255,255,255,1) 0%, rgba(248,248,248,1) 100%)',
                padding: '25px 30px',
                borderRadius: '24px',
                position: 'relative',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 15px 30px rgba(0,0,0,0.06)'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '30px',
                width: '40px',
                height: '40px',
                background: '#000',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 6px 15px rgba(0,0,0,0.15)',
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
                fontSize: '1.2rem',
                lineHeight: 1.4,
                marginBottom: '15px',
                fontWeight: 500,
                color: '#000',
                position: 'relative'
              }}>
                "With Qodeq, we reduced support costs by 45% and accelerated payment ticket processing 5x."
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <div style={{
                  width: '35px',
                  height: '35px',
                  borderRadius: '10px',
                  background: '#000',
                  opacity: 0.1
                }} />
                <div>
                  <p style={{
                    fontSize: '0.95rem',
                    margin: 0,
                    fontWeight: 600,
                    color: '#000'
                  }}>
                    Head of Support
                  </p>
                  <p style={{
                    fontSize: '0.85rem',
                    margin: '2px 0 0 0',
                    opacity: 0.6,
                    fontWeight: 500
                  }}>
                    Leading iGaming Brand
                  </p>
                </div>
              </div>
            </motion.div>
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
                Qodeq — Customer Support Automation That Works From Day One
              </h2>
              <p style={{
                fontSize: '1.5rem',
                lineHeight: 1.5,
                opacity: 0.9,
                marginBottom: '40px'
              }}>
                Discover how our AI bots can reduce your costs and improve service quality
              </p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '18px 40px',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  background: '#fff',
                  color: '#000',
                  border: 'none',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
                  transition: 'all 0.3s ease'
                }}
              >
                Get Started
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
                © 2025 Qodeq. All rights reserved.
              </div>
              <div style={{
                display: 'flex',
                gap: '30px'
              }}>
                <a href="#privacy" style={{
                  color: '#fff',
                  opacity: 0.7,
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'opacity 0.3s ease'
                }}>
                  Privacy Policy
                </a>
                <a href="#terms" style={{
                  color: '#fff',
                  opacity: 0.7,
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'opacity 0.3s ease'
                }}>
                  Terms of Service
                </a>
                <a href="#contact" style={{
                  color: '#fff',
                  opacity: 0.7,
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'opacity 0.3s ease'
                }}>
                  Contact
                </a>
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
