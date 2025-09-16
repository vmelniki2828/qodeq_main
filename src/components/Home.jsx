import React, { useRef, useState, useEffect, useMemo } from 'react';
import { motion, useInView, AnimatePresence, animate } from 'framer-motion';
import Starfall from './animations/Starfall';
import PulsingSphere from './animations/PulsingSphere';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navigation from './Navigation';
import { IoChatbubbleEllipsesOutline, IoCallOutline, IoWalletOutline, IoHelpCircleOutline } from 'react-icons/io5';
import { useLanguage } from '../contexts/LanguageContext';

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
// Products будут созданы динамически в компоненте

// ValueProps будут созданы динамически в компоненте

function Home() {
  const { t, language } = useLanguage();
  const mainBlockRef = useRef(null);
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const statsRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const isProductsInView = useInView(productsRef, { once: true, amount: 0.5 });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);

  // Динамические массивы для переводов
  const valueProps = [
    t('valueProp1'),
    t('valueProp2'),
    t('valueProp3'),
    t('valueProp4'),
    t('valueProp5')
  ];

  const products = useMemo(() => [
    {
      id: 'chat',
      title: t('chatbotTitle'),
      icon: IoChatbubbleEllipsesOutline,
      shortDescription: t('chatbotSubtitle'),
      fullDescription: t('chatbotFullDescription'),
      features: t('chatbotFeatures')
    },
    {
      id: 'call',
      title: t('callCenterTitle'),
      icon: IoCallOutline,
      shortDescription: t('callCenterSubtitle'),
      fullDescription: t('callCenterFullDescription'),
      features: t('callCenterFeatures')
    },
    {
      id: 'payment',
      title: t('paymentTitle'),
      icon: IoWalletOutline,
      shortDescription: t('paymentSubtitle'),
      fullDescription: t('paymentFullDescription'),
      features: t('paymentFeatures')
    },
    {
      id: 'qa',
      title: t('qaTitle'),
      icon: IoHelpCircleOutline,
      shortDescription: t('qaSubtitle'),
      fullDescription: t('qaFullDescription'),
      features: t('qaFeatures')
    }
  ], [t]);

  // Инициализация и обновление выбранного продукта при изменении языка
  useEffect(() => {
    if (products.length > 0) {
      setSelectedProduct(prevProduct => {
        if (!prevProduct) {
          // Первоначальная инициализация
          return products[0];
        } else {
          // Обновление при изменении языка - находим продукт с тем же ID
          const updatedProduct = products.find(p => p.id === prevProduct.id);
          return updatedProduct || products[0];
        }
      });
    }
  }, [products, language]); // Добавили language в зависимости

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
      text: t('testimonial1'),
      author: t('testimonial1Author'),
      company: t('testimonial1Company')
    },
    {
      text: t('testimonial2'),
      author: t('testimonial2Author'),
      company: t('testimonial2Company')
    },
    {
      text: t('testimonial3'),
      author: t('testimonial3Author'),
      company: t('testimonial3Company')
    },
    {
      text: t('testimonial4'),
      author: t('testimonial4Author'),
      company: t('testimonial4Company')
    },
    {
      text: t('testimonial5'),
      author: t('testimonial5Author'),
      company: t('testimonial5Company')
    }
  ];

  // Автоматическая смена слайдов
  useEffect(() => {
    if (isAutoPlayPaused) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlayPaused]);

  // Функция для выбора комментария с паузой автопролистывания
  const handleTestimonialSelect = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlayPaused(true);
    
    // Возобновляем автопролистывание через 10 секунд
    setTimeout(() => {
      setIsAutoPlayPaused(false);
    }, 10000);
  };

  return (
    <ParallaxProvider>
      <style>{`
        /* CTA Button Styles with Gradient Shine Effect */
        .cta-button {
          position: relative;
          overflow: hidden;
          isolation: isolate;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          transition: left 0.6s ease;
          z-index: -1;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:hover {
          animation: pulse-glow 2s infinite;
        }

        /* Primary CTA Button (Get Started) */
        .cta-primary {
          padding: 18px 40px;
          font-size: 1.2rem;
          font-weight: 600;
          background: #fff;
          color: #000;
          border: none;
          border-radius: 30px;
          box-shadow: 0 15px 30px rgba(0,0,0,0.3);
        }

        .cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        /* Navigation Button Styles */
        .nav-button {
          position: relative;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid #000;
          background: #fff;
          color: #000;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .nav-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 0, 0, 0.2),
            transparent
          );
          transition: left 0.4s ease;
        }

        .nav-button:hover {
          background: #000;
          color: #fff;
          transform: scale(1.1);
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }

        .nav-button:hover::before {
          left: 100%;
        }

        /* Indicator Button Styles */
        .indicator-button {
          height: 8px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .indicator-button.active {
          width: 24px;
          background: #000;
        }

        .indicator-button.inactive {
          width: 8px;
          background: rgba(0,0,0,0.3);
        }

        .indicator-button.inactive:hover {
          background: rgba(0,0,0,0.5);
          transform: scale(1.2);
        }


        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 15px 30px rgba(0,0,0,0.3);
          }
          50% {
            box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(0,0,0,0.2);
          }
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem !important;
            max-width: 100% !important;
            padding: 16px !important;
            margin-bottom: 16px !important;
          }
          
          .hero-subtitle {
            font-size: 1rem !important;
            max-width: 100% !important;
            padding: 12px !important;
            margin-bottom: 20px !important;
          }
          
          .hero-buttons {
            flex-direction: column !important;
            gap: 12px !important;
            align-items: center !important;
          }
          
          .cta-button {
            width: 100% !important;
            max-width: 280px !important;
            font-size: 1rem !important;
            padding: 12px 24px !important;
          }
          
          .nav-button {
            display: none !important;
          }
          
          .hero-main {
            padding: 0 20px !important;
          }
          
          .hero-main {
            height: 100vh !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            align-items: center !important;
            text-align: center !important;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.6rem !important;
            letter-spacing: 0.5px !important;
          }
          
          .hero-subtitle {
            font-size: 0.9rem !important;
          }
          
          .cta-button {
            font-size: 0.9rem !important;
            padding: 10px 20px !important;
          }
        }

        /* Stats Section Responsive */
        @media (max-width: 768px) {
          .stats-container {
            height: 100vh !important;
            min-height: 100vh !important;
            padding: 20px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            position: relative !important;
          }
          
          .central-stats-circle {
            width: 133px !important;
            height: 133px !important;
            padding: 17px !important;
          }
          
          .central-stats-circle p:first-child {
            font-size: 2rem !important;
            margin-bottom: 7px !important;
          }
          
          .central-stats-circle p:last-child {
            font-size: 0.6rem !important;
            line-height: 1.3 !important;
          }
          
          .stats-circle {
            width: 220px !important;
            height: 220px !important;
            position: absolute !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            z-index: 2 !important;
          }
          
          .stats-block {
            width: 80px !important;
            height: 45px !important;
            padding: 8px !important;
            position: absolute !important;
            border-radius: 8px !important;
            z-index: 1 !important;
          }
          
          .stats-number {
            font-size: 1rem !important;
            margin-bottom: 3px !important;
          }
          
          .stats-description {
            font-size: 0.43rem !important;
            line-height: 1.2 !important;
          }
        }

        @media (max-width: 480px) {
          .stats-container {
            height: 100vh !important;
            min-height: 100vh !important;
            padding: 15px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            position: relative !important;
          }
          
          .central-stats-circle {
            width: 113px !important;
            height: 113px !important;
            padding: 13px !important;
          }
          
          .central-stats-circle p:first-child {
            font-size: 1.67rem !important;
            margin-bottom: 5px !important;
          }
          
          .central-stats-circle p:last-child {
            font-size: 0.53rem !important;
            line-height: 1.2 !important;
          }
          
          .stats-circle {
            width: 190px !important;
            height: 190px !important;
            position: absolute !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            z-index: 2 !important;
          }
          
          .stats-block {
            width: 70px !important;
            height: 40px !important;
            padding: 6px !important;
            position: absolute !important;
            border-radius: 6px !important;
            z-index: 1 !important;
          }
          
          .stats-number {
            font-size: 0.9rem !important;
            margin-bottom: 2px !important;
          }
          
          .stats-description {
            font-size: 0.38rem !important;
            line-height: 1.1 !important;
          }
        }

        /* How it Works Section Responsive */
        @media (max-width: 768px) {
          .how-it-works-container {
            padding: 20px !important;
          }
          
          .how-it-works-title {
            font-size: 2rem !important;
            margin-bottom: 20px !important;
          }
          
          .how-it-works-subtitle {
            font-size: 1rem !important;
            margin-bottom: 30px !important;
          }
          
          .how-it-works-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
            margin-bottom: 30px !important;
          }
          
          .how-it-works-card {
            flex-direction: row !important;
            gap: 15px !important;
            text-align: left !important;
          }
          
          .how-it-works-icon {
            width: 50px !important;
            height: 50px !important;
            flex-shrink: 0 !important;
          }
          
          .how-it-works-card h3 {
            font-size: 1.1rem !important;
            margin-bottom: 4px !important;
          }
          
          .how-it-works-card p {
            font-size: 0.9rem !important;
            line-height: 1.3 !important;
          }
        }

        @media (max-width: 480px) {
          .how-it-works-container {
            padding: 15px !important;
          }
          
          .how-it-works-title {
            font-size: 1.6rem !important;
          }
          
          .how-it-works-subtitle {
            font-size: 0.9rem !important;
          }
          
          .how-it-works-grid {
            gap: 20px !important;
          }
          
          .how-it-works-card {
            gap: 12px !important;
          }
          
          .how-it-works-icon {
            width: 40px !important;
            height: 40px !important;
          }
          
          .how-it-works-card h3 {
            font-size: 1rem !important;
          }
          
          .how-it-works-card p {
            font-size: 0.8rem !important;
          }
        }

        /* Testimonials Section Responsive */
        @media (max-width: 768px) {
          .testimonials-container {
            padding: 40px 20px !important;
          }
          
          .testimonials-title {
            font-size: 2.5rem !important;
            margin-bottom: 20px !important;
          }
          
          .testimonials-subtitle {
            font-size: 1.1rem !important;
            margin-bottom: 40px !important;
          }
          
          .testimonials-card {
            padding: 30px 20px !important;
            margin: 0 10px !important;
          }
          
          .testimonials-text {
            font-size: 1.1rem !important;
            line-height: 1.5 !important;
          }
          
          .testimonials-author {
            font-size: 0.9rem !important;
          }
          
          .testimonials-company {
            font-size: 0.8rem !important;
          }
          
          .testimonials-avatar {
            width: 40px !important;
            height: 40px !important;
            font-size: 1rem !important;
          }
        }

        @media (max-width: 480px) {
          .testimonials-container {
            padding: 30px 15px !important;
          }
          
          .testimonials-title {
            font-size: 2rem !important;
          }
          
          .testimonials-subtitle {
            font-size: 1rem !important;
          }
          
          .testimonials-card {
            padding: 25px 15px !important;
            margin: 0 5px !important;
          }
          
          .testimonials-text {
            font-size: 1rem !important;
          }
          
          .testimonials-author {
            font-size: 0.8rem !important;
          }
          
          .testimonials-company {
            font-size: 0.7rem !important;
          }
          
          .testimonials-avatar {
            width: 35px !important;
            height: 35px !important;
            font-size: 0.9rem !important;
          }
        }

        /* CTA Section Responsive */
        @media (max-width: 768px) {
          .cta-container {
            padding: 60px 20px !important;
          }
          
          .cta-title {
            font-size: 2.5rem !important;
            margin-bottom: 20px !important;
          }
          
          .cta-subtitle {
            font-size: 1.1rem !important;
            margin-bottom: 30px !important;
          }
          
          .cta-button {
            width: 100% !important;
            max-width: 300px !important;
            font-size: 1rem !important;
            padding: 12px 24px !important;
          }
        }

        @media (max-width: 480px) {
          .cta-container {
            padding: 40px 15px !important;
          }
          
          .cta-title {
            font-size: 2rem !important;
          }
        }

        /* Products Section Mobile Styles */
        @media (max-width: 768px) {
          .products-section {
            padding: 20px 15px !important;
            min-height: auto !important;
          }
          
          .products-title {
            font-size: 1.8rem !important;
            margin-bottom: 20px !important;
          }
          
          .products-grid-container {
            grid-template-columns: 1fr !important;
            gap: 15px !important;
          }
          
          .products-list {
            order: 2 !important;
            gap: 10px !important;
          }
          
          .product-item {
            height: 50px !important;
            padding: 8px !important;
            border-radius: 12px !important;
          }
          
          .product-icon {
            width: 30px !important;
            height: 30px !important;
            font-size: 1rem !important;
            margin-right: 8px !important;
          }
          
          .product-info {
            gap: 4px !important;
          }
          
          .product-title {
            font-size: 0.9rem !important;
          }
          
          .product-details {
            padding: 15px !important;
            border-radius: 12px !important;
            position: relative !important;
            min-height: auto !important;
          }
          
          .product-details-title {
            font-size: 1.4rem !important;
            margin-bottom: 10px !important;
            padding-bottom: 8px !important;
            border-bottom: 2px solid #000 !important;
          }
          
          .product-details-title div {
            width: 35px !important;
            height: 35px !important;
            border-radius: 8px !important;
          }
          
          .product-details-title div svg {
            width: 18px !important;
            height: 18px !important;
          }
          
          .product-details-description {
            font-size: 0.9rem !important;
            line-height: 1.4 !important;
            margin-bottom: 15px !important;
          }
          
          .product-features {
            gap: 6px !important;
            flex-wrap: wrap !important;
          }
          
          .product-feature {
            padding: 6px 10px !important;
            font-size: 0.75rem !important;
            border-radius: 6px !important;
          }
        }

        @media (max-width: 480px) {
          .products-section {
            padding: 15px 10px !important;
            min-height: auto !important;
          }
          
          .products-title {
            font-size: 1.5rem !important;
            margin-bottom: 15px !important;
          }
          
          .products-grid-container {
            gap: 10px !important;
          }
          
          .products-list {
            gap: 8px !important;
          }
          
          .product-item {
            height: 45px !important;
            padding: 6px !important;
            border-radius: 10px !important;
          }
          
          .product-icon {
            width: 25px !important;
            height: 25px !important;
            font-size: 0.8rem !important;
            margin-right: 6px !important;
          }
          
          .product-info {
            gap: 2px !important;
          }
          
          .product-title {
            font-size: 0.8rem !important;
          }
          
          .product-details {
            padding: 12px !important;
            border-radius: 10px !important;
            position: relative !important;
            min-height: auto !important;
          }
          
          .product-details-title {
            font-size: 1.2rem !important;
            margin-bottom: 8px !important;
            padding-bottom: 6px !important;
            border-bottom: 1px solid #000 !important;
          }
          
          .product-details-title div {
            width: 30px !important;
            height: 30px !important;
            border-radius: 6px !important;
          }
          
          .product-details-title div svg {
            width: 16px !important;
            height: 16px !important;
          }
          
          .product-details-description {
            font-size: 0.8rem !important;
            line-height: 1.3 !important;
            margin-bottom: 12px !important;
          }
          
          .product-features {
            gap: 4px !important;
            flex-wrap: wrap !important;
          }
          
          .product-feature {
            padding: 4px 8px !important;
            font-size: 0.7rem !important;
            border-radius: 4px !important;
          }
        }
          
          .cta-subtitle {
            font-size: 1rem !important;
          }
          
          .cta-button {
            font-size: 0.9rem !important;
            padding: 10px 20px !important;
          }
        }
      `}</style>
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
            className="hero-main"
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
              className="hero-title"
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
              
{t('heroDescription')}
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
{t('whyQodeqTitle')}
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
          className="products-section"
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
              className="products-title"
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
{t('productsTitle')}
            </motion.h2>
            
            <div className="products-grid-container" style={{
              display: 'grid',
              gridTemplateColumns: '320px 1fr',
              gap: '60px',
              position: 'relative',
              perspective: '1500px'
            }}>
              {/* Список продуктов */}
              <motion.div
                className="products-list"
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
                    className="product-item"
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
                    <div className="product-icon" style={{
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
                    <div className="product-info" style={{ flex: 1 }}>
                      <h3 className="product-title" style={{
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
                position: 'relative'
              }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedProduct?.id}
                    className="product-details"
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
                          className="product-details-title"
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
                      <p className="product-details-description" style={{
                        fontSize: '1.1rem',
                        lineHeight: 1.6,
                        color: '#000',
                        whiteSpace: 'pre-line',
                        marginBottom: '30px',
                        opacity: 0.8
                      }}>
                        {selectedProduct.fullDescription}
                      </p>
                      <div className="product-features" style={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        gap: '8px',
                        marginTop: '20px'
                      }}>
                        {selectedProduct.features.map((feature, idx) => (
                          <motion.span
                            key={idx}
                            className="product-feature"
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
          <div className="stats-container" style={{
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
              className="central-stats-circle"
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
{t('totalAutomated')}
              </p>
            </motion.div>

            {/* Круговые элементы */}
            {[
                { 
                  counter: chatCounter,
                  description: t('chatRequests'),
                  angle: 270,
                  order: 1 // top
                },
                { 
                  counter: callCounter,
                  description: t('callCenter'),
                  angle: 0,
                  order: 2 // right
                },
                { 
                  counter: paymentCounter,
                  description: t('paymentTickets'),
                  angle: 90,
                  order: 3 // bottom
                },
                { 
                  counter: qaCounter,
                  description: t('qualityChecks'),
                  angle: 180,
                  order: 4 // left
                }
            ].map((item, idx) => {
              // Адаптивный радиус в зависимости от размера экрана
              const isMobile = window.innerWidth <= 768;
              const isSmallMobile = window.innerWidth <= 480;
              const radius = isSmallMobile ? 120 : isMobile ? 150 : 250;
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
                  className="stats-block"
                  style={{
                    position: 'absolute',
                    background: 'linear-gradient(145deg, #000000, #1a1a1a)',
                    color: '#fff',
                    padding: '20px',
                    borderRadius: '20px',
                    width: '200px',
                    height: '90px',
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
                  <p className="stats-number" style={{
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
                  <p className="stats-description" style={{
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
              className="stats-circle"
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
{t('targetAudienceTitle')}
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
{t('targetAudienceSubtitle')}
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
                  text: t('targetAudience1')
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
                  text: t('targetAudience2')
                },
                {
                  icon: (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  ),
                  text: t('targetAudience3')
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

          <div className="how-it-works-container" style={{
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
                marginBottom: '30px'
              }}
            >
              <motion.h2
                className="how-it-works-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  fontSize: '2.2rem',
                  fontWeight: 800,
                  marginBottom: '15px',
                  background: 'linear-gradient(135deg, #000 0%, #333 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 2px 10px rgba(0,0,0,0.05)'
                }}
              >
{t('howItWorksTitle')}
              </motion.h2>
              <motion.p
                className="how-it-works-subtitle"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  fontSize: '1.2rem',
                  color: '#666',
                  maxWidth: '500px',
                  margin: '0 auto'
                }}
              >
{t('howItWorksSubtitle')}
              </motion.p>
            </motion.div>

            <div className="how-it-works-grid" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '40px 30px',
              marginBottom: '40px',
              position: 'relative'
            }}>
              {[
                {
                  title: t('integrationTitle'),
                  description: t('integrationDescription'),
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  )
                },
                {
                  title: t('processingTitle'),
                  description: t('processingDescription'),
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2" />
                      <path d="M12 12v-2" />
                      <path d="M12 12h4" />
                    </svg>
                  )
                },
                {
                  title: t('escalationTitle'),
                  description: t('escalationDescription'),
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
                  title: t('analyticsReports'),
                  description: t('detailedReportsAnalytics'),
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
                  className="how-it-works-card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                    gap: '20px',
                    position: 'relative'
                  }}
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
                    }}
                    className="how-it-works-icon"
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '18px',
                      background: '#000',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1rem',
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
                    <h3 className="how-it-works-card h3" style={{
                      fontSize: '1.3rem',
                      fontWeight: 700,
                      margin: '0 0 6px 0',
                      color: '#000'
                    }}>
                      {step.title}
                    </h3>
                    <p className="how-it-works-card p" style={{
                      fontSize: '1rem',
                      margin: 0,
                      fontWeight: 400,
                      lineHeight: 1.4,
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

                  <p className="testimonials-text" style={{
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
                    <div className="testimonials-avatar" style={{
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
                      <p className="testimonials-author" style={{
                        fontSize: '1rem',
                        margin: 0,
                        fontWeight: 600,
                        color: '#000'
                      }}>
                        {testimonials[currentTestimonial].author}
                      </p>
                      <p className="testimonials-company" style={{
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
                    onClick={() => handleTestimonialSelect(index)}
                    className={`indicator-button ${index === currentTestimonial ? 'active' : 'inactive'}`}
                  />
                ))}
              </div>

              {/* Navigation arrows */}
              <button
                onClick={() => handleTestimonialSelect(currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1)}
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
                onClick={() => handleTestimonialSelect((currentTestimonial + 1) % testimonials.length)}
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
              className="cta-container"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                maxWidth: '800px',
                margin: '0 auto'
              }}
            >
              <h2 className="cta-title" style={{
                fontSize: '3.2rem',
                fontWeight: 800,
                marginBottom: '30px',
                lineHeight: 1.2,
                background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.8) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 10px rgba(255,255,255,0.1)'
              }}>
{t('heroTitle')}
              </h2>
              <p className="cta-subtitle" style={{
                fontSize: '1.5rem',
                lineHeight: 1.5,
                opacity: 0.9,
                marginBottom: '40px'
              }}>
{t('heroSubtitle')}
              </p>
              <motion.a
                href="https://t.me/qodeq_bot"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cta-button cta-primary"
                style={{ textDecoration: 'none', display: 'inline-block' }}
              >
{t('startButton')}
              </motion.a>
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
{t('footerCopyright')}<br/>
                <span style={{fontSize: '0.95rem', opacity: 0.7}}>{t('footerCreatedBy')}</span>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: '8px'
              }}>
                <div style={{fontSize:'0.95rem',opacity:0.7}}>
{t('footerTelegram')} <a href="https://t.me/qodeq_bot" style={{color:'#fff',textDecoration:'underline',opacity:0.7}}>@qodeq_bot</a>
                </div>
                <div style={{fontSize:'0.95rem',opacity:0.7}}>
                  <a href="mailto:manager@softqod.com" style={{color:'#fff',textDecoration:'underline',opacity:0.7}}>{t('footerEmail')}</a>
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
