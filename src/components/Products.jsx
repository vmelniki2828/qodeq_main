import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';
import Starfall from './animations/Starfall';
import Navigation from './Navigation';
import {
  IoChatbubbleEllipsesOutline,
  IoCallOutline,
  IoWalletOutline,
  IoHelpCircleOutline,
  IoStatsChartOutline,
  IoGlobeOutline,
  IoEyeOutline,
  IoCheckmarkCircleOutline,
  IoAnalyticsOutline,
  IoFlashOutline,
  IoPersonOutline,
  IoDocumentTextOutline,
  IoLinkOutline,
  IoTimerOutline,
  IoVolumeHighOutline,
  IoCardOutline,
  IoCubeOutline,
  IoTrendingUpOutline,
  IoShieldCheckmarkOutline,
} from 'react-icons/io5';

const services = [
  {
    id: 'chatbot',
    name: 'Чат-бот',
    icon: IoChatbubbleEllipsesOutline,
  },
  {
    id: 'callcenter',
    name: 'Call Center Bot',
    icon: IoCallOutline,
  },
  {
    id: 'payment',
    name: 'Payment Bot',
    icon: IoWalletOutline,
  },
  {
    id: 'qa',
    name: 'QA Bot',
    icon: IoHelpCircleOutline,
  },
];

function Products() {

  // Универсальный скролл к блоку "Экономический эффект" для любого бота
  const scrollToEffect = (id) => {
    const effectBlock = document.getElementById(id);
    if (effectBlock) {
      effectBlock.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const scrollToCallCenterEffect = () => {
    const effectBlock = document.getElementById('callcenter-effect');
    if (effectBlock) {
      effectBlock.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  const scrollToPaymentbotEffect = () => {
    const effectBlock = document.getElementById('paymentbot-effect');
    if (effectBlock) {
      effectBlock.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToQABotEffect = () => {
    const effectBlock = document.getElementById('qa-effect');
    if (effectBlock) {
      effectBlock.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  // Вопросы и ответы для блока примеры
  const exampleQuestions = [
    {
      q: 'Как пополнить счет?',
      a: 'Для пополнения счета перейдите в раздел "Депозит", выберите удобный способ оплаты из списка и укажите сумму. Средства поступят на баланс сразу после подтверждения транзакции.',
    },
    {
      q: 'Подскажите, какие документы нужны для верификации?',
      a: 'Для стандартной верификации Вам потребуются: 📋 Фотография основной страницы паспорта. 📸 Селфи с первой страницей паспорта в руке. 📄 Фото страницы с пропиской. Для полной верификации могут запросить: 💳 Фото карты с двух сторон (видны первые 6 и последние 4 цифры, срок действия, ФИО; CVV можно закрыть). Все данные должны быть читабельны и без бликов. Статус верификации можно проверить в разделе "Верификация".',
    },
    {
      q: 'В каком статусе у меня вывод?',
      a: 'Проверьте статус Вашего вывода в разделе "История транзакций" в личном кабинете. Там Вы увидите текущий статус и причину отмены.',
    },
    {
      q: 'Могу вывести на криптовалюту, если депозит был совершенен с карты?',
      a: 'Нет, вывод должен осуществляться тем же способом, которым был произведен депозит. Подробнее — в разделе "Правила и условия".',
    },
    {
      q: 'Могу использовать ВПН?',
      a: 'Использование VPN может повлиять на доступ к казино. Рекомендуем использовать прямое подключение к интернету для стабильной и безопасной игры.',
    },
    {
      q: 'У вас есть бонус на День Рождения?',
      a: 'Да, бонус доступен за 1 день до и 3 дня после дня рождения. Требуется: верифицированный аккаунт, депозиты от 3000 RUB за полгода, уровень лояльности не ниже 2-го. Для активации обратитесь к старшему специалисту.',
    },
    {
      q: 'Как сменить язык сайта?',
      a: 'Вы можете изменить язык сайта кликнув на слайдер в левом нижнем углу экрана и выбрать подходящий язык интерфейса.',
    },
    {
      q: 'Как отыграть бонус?',
      a: 'Условия отыгрыша зависят от конкретного бонуса. Ознакомьтесь с правилами в разделе "Мои бонусы" в личном кабинете.',
    },
    {
      q: 'Сколько занимает проверка документов?',
      a: 'Верификация занимает до 24 часов (обычно несколько часов). Статус можно проверить в разделе "Верификация".',
    },
    {
      q: 'Как долго выводите средства?',
      a: 'Официальный срок — до 24 часов, обычно 1–2 часа. Возможны задержки из-за платёжной системы. Статус заявки — в "Истории транзакций".',
    },
    {
      q: 'Когда приходит кешбэк?',
      a: 'Кешбэк начисляется еженедельно, в понедельник в 4:00 по МСК. Увидеть его можно в разделе "Мои бонусы".',
    },
    {
      q: 'У вас есть приветственные бонусы?',
      a: 'Приветственный пакет включает бонусы на первые 3 депозита. Подробности — в разделе "Мои бонусы и награды".',
    },
    {
      q: 'Что такое РТП?',
      a: 'РТП (Return to Player) — процент возврата игроку от всех ставок в игре. Например, РТП 96% означает, что на каждые 100 рублей 96 возвращаются игрокам. Подробнее — в описании игры.',
    },
    {
      q: 'Зачем нужна верификация?',
      a: 'Верификация подтверждает вашу личность и защищает средства. Загрузите документы в разделе "Верификация". Обычно занимает до 24 часов.',
    },
    {
      q: 'Не пришел депозит, что делать?',
      a: 'Предоставьте копию квитанции из банка с успешным статусом платежа или справку/чек/выписку. Квитанцию можно найти в "Истории операций".',
    },
    {
      q: 'У вас есть реферальная программа?',
      a: 'Информация о партнёрской программе: https://bit.ly/r7_aff_program. Там можно зарегистрироваться и узнать условия.',
    },
    {
      q: 'Как подтвердить почту?',
      a: 'Перейдите по ссылке из письма, отправленного при регистрации. Если не получили письмо — проверьте "Спам" или запросите повторную отправку в разделе "Профиль".',
    },
    {
      q: 'Как сменить язык сайта?',
      a: 'Вы можете изменить язык сайта кликнув на слайдер в левом нижнем углу экрана и выбрать подходящий язык интерфейса.',
    },
    {
      q: 'Где вводить промокод?',
      a: 'Промокоды вводятся в разделе "Профиль" в графе "Есть код для бонуса?"',
    },
    {
      q: 'Где найти условия бонуса?',
      a: 'Условия бонусов — в разделе "Бонусы" на главной странице сайта. Там указаны требования к вейджеру, ограничения и максимальный выигрыш.',
    },
  ];

  const [activeQuestion, setActiveQuestion] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [chatCount, setChatCount] = useState(100000);
  const [operatorCostPerChat, setOperatorCostPerChat] = useState(0.6);
  const [operatorCostPerCall, setOperatorCostPerCall] = useState(1.2);
  const [operatorCostPerQA, setOperatorCostPerQA] = useState(2.0);
  const [showQAModal, setShowQAModal] = useState(false);
  const [imageZoomed, setImageZoomed] = useState(false);

  const handleCardClick = id => {
    setSelectedId(id === selectedId ? null : id);
  };

  // Drag functionality for zoomed image
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = e => {
    if (!imageZoomed) return;
    setIsDragging(true);
    setDragStart({
      x: e.clientX - dragOffset.x,
      y: e.clientY - dragOffset.y,
    });
  };

  const handleMouseMove = e => {
    if (!isDragging || !imageZoomed) return;
    setDragOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleSliderChange = e => {
    setChatCount(parseInt(e.target.value));
  };

  const handleOperatorCostChange = e => {
    const newCost = parseFloat(e.target.value) || 0;
    setOperatorCostPerChat(newCost);
  };

  const handleOperatorCallCostChange = e => {
    const newCost = parseFloat(e.target.value) || 0;
    setOperatorCostPerCall(newCost);
  };

  const handleOperatorQACostChange = e => {
    const newCost = parseFloat(e.target.value) || 0;
    setOperatorCostPerQA(newCost);
  };

  // Calculate costs for Chatbot
  const operatorCost = Math.round(chatCount * operatorCostPerChat);
  const aiCost = Math.round(chatCount * 0.15);
  const savings = operatorCost - aiCost;

  // Calculate costs for Call Center Bot (per minute)
  const operatorCallCost = Math.round(chatCount * operatorCostPerCall);
  const aiCallCost = Math.round(chatCount * 0.1);
  const callSavings = operatorCallCost - aiCallCost;

  // Calculate costs for QA Bot (per check)
  const operatorQACost = Math.round(chatCount * operatorCostPerQA);
  const aiQACost = Math.round(chatCount * 0.06);
  const qaSavings = operatorQACost - aiQACost;

  // Format numbers with commas
  const formatNumber = num => num.toLocaleString();

  return (
    <>
      <style>{`
        /* Диалог в стиле мессенджера для блока вопросов */
        .messenger-dialogue {
          position: absolute;
          left: 50%;
          top: 0;
          transform: translate(-50%, 0);
          z-index: 20;
          min-width: 340px;
          max-width: 540px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          align-items: flex-start;
          background: linear-gradient(135deg, #f7f7f7 80%, #e0e0e0 100%);
          border-radius: 22px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.16), 0 1.5px 0 #e0e0e0;
          padding: 28px 26px 24px 26px;
          border: 1.5px solid #d0d0d0;
          animation: fadeInMessenger 0.35s cubic-bezier(.4,0,.2,1);
          pointer-events: auto;
        }
        
        @keyframes fadeInMessenger {
          from { opacity: 0; transform: translate(-50%, 20px) scale(0.96); }
          to { opacity: 1; transform: translate(-50%, 0) scale(1); }
        }
        
        .examples-section {
          position: relative;
        }
        
        .messenger-bubble {
          padding: 12px 20px;
          border-radius: 16px;
          font-size: 1.08rem;
          font-weight: 500;
          max-width: 95%;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07);
          margin-bottom: 2px;
          line-height: 1.5;
          word-break: break-word;
        }
        
        .messenger-bubble.user {
          background: #e0e0e0;
          color: #000;
          align-self: flex-end;
          border: 1px solid #c0c0c0;
        }
        
        .messenger-bubble.bot {
          background: #fff;
          color: #222;
          border: 1px solid #eee;
        }
        
        .example-question {
          background: linear-gradient(135deg, #fff 0%, #f8f8f8 100%);
          color: #333;
          padding: 12px 20px;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 500;
          white-space: nowrap;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          border: 1px solid rgba(0, 0, 0, 0.1);
          transition: all 0.2s ease;
        }
        
        .example-question.active {
          background: linear-gradient(135deg, #000 0%, #333 100%);
          color: #fff;
          transform: scale(1.05);
          box-shadow: 0 4px 16px rgba(0,0,0,0.4);
        }
        
        .white-block {
          background: linear-gradient(135deg, #fff 0%, #f8f8f8 100%);
          color: #333;
          padding: 12px 20px;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 500;
          white-space: nowrap;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          border: 1px solid rgba(0, 0, 0, 0.1);
          transition: all 0.2s ease;
        }
        
        .white-block.active {
          background: linear-gradient(135deg, #000 0%, #333 100%);
          color: #fff;
          transform: scale(1.05);
          box-shadow: 0 4px 16px rgba(0,0,0,0.4);
        }
        
        /* Основные стили для продуктов */
        .products-page {
          position: relative;
          min-height: 100vh;
          background: #000;
          color: #fff;
          font-family: 'Oswald', Arial, sans-serif;
        }
        
        .starfall-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }
        
        .products-content {
          position: relative;
          z-index: 2;
        }
        
        .products-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: calc(100vh - 80px);
          padding: 80px 20px 40px 20px;
        }
        
        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          max-width: 1200px;
          width: 100%;
        }
        
        .product-card {
          background: linear-gradient(135deg, #fff 0%, #f8f8f8 100%);
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 20px;
          padding: 40px 30px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }
        
        .product-card:hover {
          transform: translateY(-10px);
          background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
          border-color: rgba(0, 0, 0, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
        
        .icon-container {
          width: 80px;
          height: 80px;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.1) 100%);
          border-radius: 50%;
          border: 2px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        .product-icon {
          font-size: 2.5rem;
          color: #000;
        }
        
        .product-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #000;
          margin: 0;
          letter-spacing: 1px;
        }
        
        /* Мини-блоки */
        .mini-blocks-container {
          padding: 80px 20px;
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .mini-blocks-grid {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 40px;
        }
        
        .mini-block {
          width: 60px;
          height: 60px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          background: linear-gradient(135deg, #fff 0%, #f8f8f8 100%);
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        .mini-block.selected {
          background: linear-gradient(135deg, #000 0%, #333 100%);
          border-color: #000;
          transform: scale(1.1);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
        }
        

        
        .mini-icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .mini-product-icon {
          font-size: 1.5rem;
          color: #000;
          transition: color 0.3s ease;
        }
        
        .mini-block.selected .mini-product-icon {
          color: #fff;
        }
        
        .selected-service-title {
          text-align: center;
          font-size: 3rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 60px 0;
          letter-spacing: 2px;
        }
        
        /* Секции */
        .section-title-black {
          font-size: 2.5rem;
          font-weight: 700;
          color: #000;
          text-align: center;
          margin: 0 0 40px 0;
          letter-spacing: 1px;
        }
        
        .section-title-white {
          font-size: 2.5rem;
          font-weight: 700;
          color: #fff;
          text-align: center;
          margin: 0 0 40px 0;
          letter-spacing: 1px;
        }
        
        /* Hero секции */
        .chatbot-hero-new,
        .callcenter-hero-new,
        .qa-hero-new,
        .payment-hero-new {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          padding: 80px 40px;
          background: linear-gradient(135deg, #fff 0%, #f8f8f8 100%);
          border-radius: 30px;
          margin: 40px 0;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }
        
        .hero-content h1 {
          font-size: 3rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 20px 0;
          line-height: 1.2;
        }
        
        .chatbot-hero-new .hero-content h1 {
          color: #000;
        }
        
        .callcenter-hero-new .hero-content h1 {
          color: #000;
        }
        
        .hero-subtitle {
          font-size: 1.2rem;
          color: rgba(255,255,255,0.8);
          margin: 0 0 30px 0;
          line-height: 1.6;
        }
        
        .chatbot-hero-new .hero-subtitle {
          color: rgba(0,0,0,0.7);
        }
        
        .callcenter-hero-new .hero-subtitle {
          color: rgba(0,0,0,0.7);
        }
        
        .payment-hero-new .payment-hero-content h2 {
          color: #000;
          font-size: 3rem;
          font-weight: 700;
          margin: 0 0 20px 0;
          line-height: 1.2;
        }
        
        .payment-hero-new .payment-hero-content p {
          color: rgba(0,0,0,0.7);
          font-size: 1.2rem;
          margin: 0 0 30px 0;
          line-height: 1.6;
        }
        
        .qa-hero-new .qa-hero-content h2 {
          color: #000;
          font-size: 3rem;
          font-weight: 700;
          margin: 0 0 20px 0;
          line-height: 1.2;
        }
        
        .qa-hero-new .qa-hero-content p {
          color: rgba(0,0,0,0.7);
          font-size: 1.2rem;
          margin: 0 0 30px 0;
          line-height: 1.6;
        }
        
        /* Call Center Device Visual */
        .call-center-device {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          position: relative;
        }
        
        .device-container {
          position: relative;
          width: 280px;
          height: 280px;
        }
        
        .device-circle {
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background: #f0f0f0;
          border: 2px solid #e0e0e0;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          animation: devicePulse 3s ease-in-out infinite;
        }
        
        .device-main {
          width: 110px;
          height: 160px;
          background: #000;
          border-radius: 16px;
          position: relative;
          box-shadow: 0 6px 20px rgba(0,0,0,0.3);
          animation: deviceFloat 4s ease-in-out infinite;
        }
        
        .device-screen {
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 70px;
          height: 28px;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 0 12px rgba(255,255,255,0.8);
          animation: screenGlow 2s ease-in-out infinite;
        }
        
        .device-button {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 22px;
          height: 22px;
          background: #00ff85;
          border-radius: 50%;
          box-shadow: 0 0 12px rgba(0,255,133,0.6);
          animation: buttonPulse 1.5s ease-in-out infinite;
        }
        
        .signal-lines {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .signal-line {
          position: absolute;
          width: 3px;
          background: #999;
          border-radius: 2px;
          animation: signalWave 2s ease-in-out infinite;
        }
        
        .signal-line:nth-child(1) {
          top: 30px;
          left: 40px;
          height: 12px;
          animation-delay: 0s;
        }
        
        .signal-line:nth-child(2) {
          top: 25px;
          left: 55px;
          height: 18px;
          animation-delay: 0.2s;
        }
        
        .signal-line:nth-child(3) {
          top: 20px;
          left: 70px;
          height: 24px;
          animation-delay: 0.4s;
        }
        
        .signal-line:nth-child(4) {
          top: 20px;
          right: 70px;
          height: 24px;
          animation-delay: 0.6s;
        }
        
        .signal-line:nth-child(5) {
          top: 25px;
          right: 55px;
          height: 18px;
          animation-delay: 0.8s;
        }
        
        .signal-line:nth-child(6) {
          bottom: 40px;
          left: 45px;
          height: 10px;
          animation-delay: 1s;
        }
        
        .signal-line:nth-child(7) {
          bottom: 40px;
          right: 45px;
          height: 10px;
          animation-delay: 1.2s;
        }
        
        /* Device Animations */
        @keyframes devicePulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(0,0,0,0.1);
          }
          50% {
            transform: scale(1.02);
            box-shadow: 0 0 0 10px rgba(0,0,0,0.05);
          }
        }
        
        @keyframes deviceFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        @keyframes screenGlow {
          0%, 100% {
            box-shadow: 0 0 12px rgba(255,255,255,0.8);
          }
          50% {
            box-shadow: 0 0 20px rgba(255,255,255,1);
          }
        }
        
        @keyframes buttonPulse {
          0%, 100% {
            transform: translateX(-50%) scale(1);
            box-shadow: 0 0 12px rgba(0,255,133,0.6);
          }
          50% {
            transform: translateX(-50%) scale(1.1);
            box-shadow: 0 0 20px rgba(0,255,133,0.8);
          }
        }
        
        @keyframes signalWave {
          0%, 100% {
            opacity: 0.3;
            transform: scaleY(1);
          }
          50% {
            opacity: 1;
            transform: scaleY(1.2);
          }
        }
        
        /* Payment Card Visual */
        .payment-card-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          position: relative;
        }
        
        .payment-card-container {
          position: relative;
          width: 400px;
          height: 280px;
        }
        
        .payment-card {
          width: 260px;
          height: 160px;
          background: #000;
          border-radius: 20px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-5deg);
          box-shadow: 0 12px 35px rgba(0,0,0,0.4);
          animation: cardFloat 4s ease-in-out infinite;
        }
        
        .card-chip {
          position: absolute;
          top: 25px;
          left: 25px;
          width: 35px;
          height: 28px;
          background: #fff;
          border-radius: 6px;
          animation: chipGlow 2s ease-in-out infinite;
        }
        
        .card-dollar {
          position: absolute;
          top: 50%;
          right: 25px;
          transform: translateY(-50%);
          font-size: 3rem;
          color: #fff;
          font-weight: bold;
          animation: dollarPulse 1.5s ease-in-out infinite;
        }
        
        .network-nodes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .network-node {
          position: absolute;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 3px solid #999;
          animation: nodePulse 3s ease-in-out infinite;
        }
        
        .network-node.active {
          background: #000;
          border-color: #000;
          box-shadow: 0 0 8px rgba(0,0,0,0.6);
        }
        
        .network-node:nth-child(1) {
          top: 25px;
          left: 40px;
          animation-delay: 0s;
        }
        
        .network-node:nth-child(2) {
          top: 55px;
          left: 80px;
          animation-delay: 0.5s;
        }
        
        .network-node:nth-child(3) {
          top: 80px;
          left: 120px;
          animation-delay: 1s;
        }
        
        .network-node:nth-child(4) {
          top: 40px;
          right: 55px;
          animation-delay: 1.5s;
        }
        
        .network-node:nth-child(5) {
          top: 70px;
          right: 95px;
          animation-delay: 2s;
        }
        
        .network-node:nth-child(6) {
          bottom: 55px;
          left: 70px;
          animation-delay: 2.5s;
        }
        
        .network-node:nth-child(7) {
          bottom: 80px;
          right: 70px;
          animation-delay: 3s;
        }
        
        .network-node:nth-child(8) {
          bottom: 30px;
          right: 30px;
          animation-delay: 3.5s;
        }
        
        .network-lines {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .network-line {
          position: absolute;
          height: 2px;
          background: #999;
          animation: lineFlow 4s ease-in-out infinite;
        }
        
        .network-line:nth-child(1) {
          top: 40px;
          left: 55px;
          width: 28px;
          animation-delay: 0s;
        }
        
        .network-line:nth-child(2) {
          top: 70px;
          left: 95px;
          width: 22px;
          animation-delay: 1s;
        }
        
        .network-line:nth-child(3) {
          top: 55px;
          right: 70px;
          width: 35px;
          animation-delay: 2s;
        }
        
        .network-line:nth-child(4) {
          bottom: 70px;
          left: 85px;
          width: 25px;
          animation-delay: 3s;
        }
        
        /* Payment Card Animations */
        @keyframes cardFloat {
          0%, 100% {
            transform: translate(-50%, -50%) rotate(-5deg) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) rotate(-5deg) translateY(-10px);
          }
        }
        
        @keyframes chipGlow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(255,255,255,0.4);
          }
          50% {
            box-shadow: 0 0 8px 2px rgba(255,255,255,0.6);
          }
        }
        
        @keyframes dollarPulse {
          0%, 100% {
            transform: translateY(-50%) scale(1);
          }
          50% {
            transform: translateY(-50%) scale(1.1);
          }
        }
        
        @keyframes nodePulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        
        @keyframes lineFlow {
          0%, 100% {
            opacity: 0.2;
            transform: scaleX(1);
          }
          50% {
            opacity: 0.8;
            transform: scaleX(1.3);
          }
        }
        
        /* QA Dashboard Visual */
        .qa-dashboard-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          position: relative;
        }
        
        .qa-dashboard-container {
          position: relative;
          width: 400px;
          height: 350px;
        }
        
        .qa-dashboard-card {
          width: 240px;
          height: 140px;
          background: linear-gradient(135deg, #1a1a1a 0%, #000 100%);
          border-radius: 25px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 15px 35px rgba(0,0,0,0.4), 0 0 20px rgba(0,255,133,0.1);
          animation: dashboardFloat 4s ease-in-out infinite;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 25px;
          border: 1px solid rgba(255,255,255,0.1);
        }
        
        .qa-dashboard-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        
        .qa-dashboard-title {
          color: #fff;
          font-size: 1.4rem;
          font-weight: 700;
          margin: 0;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
        
        .qa-dashboard-subtitle {
          color: #fff;
          font-size: 1rem;
          margin: 8px 0 0 0;
          opacity: 0.9;
          font-weight: 500;
        }
        
        .qa-dashboard-percentage {
          color: #00ff85;
          font-size: 3rem;
          font-weight: 700;
          text-align: right;
          margin: 0;
          animation: percentageGlow 2s ease-in-out infinite;
          text-shadow: 0 0 20px rgba(0,255,133,0.5);
        }
        
        .qa-checkmarks {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .qa-checkmark {
          position: absolute;
          width: 45px;
          height: 45px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          font-weight: bold;
          animation: checkmarkPulse 3s ease-in-out infinite;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
        }
        
        .qa-checkmark.green {
          background: linear-gradient(135deg, #e8f5e8 0%, #d4edda 100%);
          color: #155724;
          animation-delay: 0s;
          border: 2px solid #28a745;
        }
        
        .qa-checkmark.yellow {
          background: linear-gradient(135deg, #fffde7 0%, #fff9c4 100%);
          color: #f57f17;
          animation-delay: 0.5s;
          border: 2px solid #ffeb3b;
        }
        
        .qa-checkmark.red {
          background: linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%);
          color: #c62828;
          animation-delay: 1s;
          border: 2px solid #f44336;
        }
        
        .qa-checkmark:hover {
          transform: scale(1.2) rotate(5deg);
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
        }
        
        .qa-dashboard-card:hover {
          box-shadow: 0 20px 45px rgba(0,0,0,0.5), 0 0 30px rgba(0,255,133,0.2);
          transform: translate(-50%, -50%) scale(1.02);
        }
        
        .qa-checkmark:nth-child(1) {
          top: 15px;
          left: 15px;
        }
        
        .qa-checkmark:nth-child(2) {
          top: 15px;
          right: 15px;
        }
        
        .qa-checkmark:nth-child(3) {
          top: 50px;
          left: 5px;
        }
        
        .qa-checkmark:nth-child(4) {
          top: 50px;
          right: 5px;
        }
        
        .qa-checkmark:nth-child(5) {
          top: 85px;
          left: 15px;
        }
        
        .qa-checkmark:nth-child(6) {
          top: 85px;
          right: 15px;
        }
        
        
        /* QA Dashboard Animations */
        @keyframes dashboardFloat {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px) rotate(0deg);
          }
          25% {
            transform: translate(-50%, -50%) translateY(-5px) rotate(0.5deg);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-10px) rotate(0deg);
          }
          75% {
            transform: translate(-50%, -50%) translateY(-5px) rotate(-0.5deg);
          }
        }
        
        @keyframes percentageGlow {
          0%, 100% {
            text-shadow: 0 0 5px rgba(0,255,133,0.3), 0 0 10px rgba(0,255,133,0.1);
            transform: scale(1);
          }
          50% {
            text-shadow: 0 0 15px rgba(0,255,133,0.6), 0 0 25px rgba(0,255,133,0.3);
            transform: scale(1.05);
          }
        }
        
        @keyframes checkmarkPulse {
          0%, 100% {
            opacity: 0.8;
            transform: scale(1) rotate(0deg);
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          }
          50% {
            opacity: 1;
            transform: scale(1.15) rotate(2deg);
            box-shadow: 0 8px 25px rgba(0,0,0,0.3);
          }
        }
        
        .hero-cta-btn {
          background: linear-gradient(135deg, #000 0%, #333 100%);
          color: #fff;
          border: none;
          padding: 16px 32px;
          border-radius: 25px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        }
        
        .chatbot-hero-new .hero-cta-btn {
          background: linear-gradient(135deg, #000 0%, #333 100%);
          color: #fff;
        }
        
        /* Phone Chat Styles */
        .hero-animation {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .ai-sphere-placeholder {
          width: 320px;
          height: 420px;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 20px;
          border: 6px solid #000;
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
          overflow: hidden;
          position: relative;
        }
        
        .chat-header {
          background: #000;
          color: #fff;
          padding: 12px 15px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .ai-avatar {
          width: 28px;
          height: 28px;
          background: linear-gradient(135deg, #000 0%, #333 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: #fff;
        }
        
        .ai-avatar::before {
          content: "Q";
          font-size: 14px;
          font-weight: bold;
        }
        
        .chat-title {
          font-weight: 600;
          font-size: 14px;
        }
        
        .online-status {
          width: 8px;
          height: 8px;
          background: #000;
          border-radius: 50%;
          margin-left: auto;
        }
        
        .chat-messages {
          padding: 15px;
          height: 280px;
          overflow-y: auto;
          background: #fff;
        }
        
        .message {
          margin-bottom: 10px;
          max-width: 80%;
          padding: 8px 12px;
          border-radius: 15px;
          font-size: 12px;
          line-height: 1.3;
        }
        
        .message.user {
          background: #000;
          color: #fff;
          margin-left: auto;
          border-bottom-right-radius: 5px;
        }
        
        .message.ai {
          background: #f1f3f4;
          color: #000;
          margin-right: auto;
          border-bottom-left-radius: 5px;
        }
        
        .message.typing {
          background: #f1f3f4;
          padding: 15px;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        .typing-indicator {
          display: flex;
          gap: 3px;
        }
        
        .typing-dot {
          width: 6px;
          height: 6px;
          background: #666;
          border-radius: 50%;
          animation: typing 1.4s infinite ease-in-out;
        }
        
        .typing-dot:nth-child(1) { animation-delay: -0.32s; }
        .typing-dot:nth-child(2) { animation-delay: -0.16s; }
        
        @keyframes typing {
          0%, 80%, 100% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .chat-input {
          background: #fff;
          padding: 12px 15px;
          border-top: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .input-field {
          flex: 1;
          height: 28px;
          background: #f8f9fa;
          border-radius: 15px;
          border: 1px solid #e0e0e0;
        }
        
        .send-button {
          width: 28px;
          height: 28px;
          background: #000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        
        .send-button::after {
          content: "→";
          color: #fff;
          font-weight: bold;
          font-size: 12px;
        }
        
        .hero-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(0,0,0,0.4);
        }
        
        .hero-example-btn {
          background: linear-gradient(135deg, #000 0%, #333 100%);
          color: #fff;
          border: none;
          padding: 16px 32px;
          border-radius: 25px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(0,0,0,0.3);
          margin-left: 15px;
        }
        
        .hero-example-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(0,0,0,0.4);
          background: linear-gradient(135deg, #000 0%, #555 100%);
        }
        
        .hero-buttons-container {
          display: flex;
          gap: 15px;
          align-items: center;
          flex-wrap: wrap;
        }
        
        /* QA Modal Styles */
        .qa-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(10px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        
        .qa-modal-content {
          background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
          border-radius: 25px;
          max-width: 900px;
          max-height: 90vh;
          overflow: hidden;
          position: relative;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        .qa-modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(0, 0, 0, 0.1);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: #666;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10001;
        }
        
        .qa-modal-close:hover {
          background: rgba(0, 0, 0, 0.2);
          color: #000;
          transform: scale(1.1);
        }
        
        .qa-modal-header {
          padding: 30px 30px 20px 30px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }
        
        .qa-modal-title {
          font-size: 2rem;
          font-weight: 700;
          color: #000;
          margin: 0 0 10px 0;
          text-align: center;
        }
        
        .qa-modal-subtitle {
          font-size: 1.1rem;
          color: rgba(0, 0, 0, 0.7);
          margin: 0;
          text-align: center;
        }
        
        .qa-modal-body {
          padding: 30px;
        }
        
        .qa-example-image {
          width: 100%;
          height: auto;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .qa-example-image:hover {
          transform: scale(1.02);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        }
        
        .qa-zoom-btn {
          position: absolute;
          top: 20px;
          left: 20px;
          background: rgba(0, 255, 133, 0.9);
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          color: #000;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10001;
          box-shadow: 0 4px 15px rgba(0, 255, 133, 0.3);
        }
        
        .qa-zoom-btn:hover {
          background: rgba(0, 255, 133, 1);
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(0, 255, 133, 0.4);
        }
        
        .qa-modal-image {
          width: 100%;
          height: auto;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .qa-modal-image:hover {
          transform: scale(1.02);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        }
        
        .qa-modal-image.zoomed {
          transform: scale(2);
          cursor: grab;
        }
        
        .qa-modal-image.zoomed:active {
          cursor: grabbing;
        }
        
        /* Факты */
        .facts-section {
          margin: 60px 0;
        }
        
        .facts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }
        
        .fact-card {
          background: linear-gradient(135deg, #fff 0%, #f8f8f8 100%);
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 20px;
          padding: 30px;
          text-align: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        .fact-card:hover {
          transform: translateY(-5px);
          background: linear-gradient(135deg, #f0f0f0 0%, #e8e8e8 100%);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }
        
        .fact-icon {
          font-size: 2.5rem;
          color: #000;
          margin-bottom: 15px;
        }
        
        .fact-number {
          font-size: 2rem;
          font-weight: 700;
          color: #000;
          margin-bottom: 10px;
        }
        
        .fact-description {
          font-size: 1rem;
          color: rgba(0,0,0,0.7);
        }
        
        .fact-card p {
          font-size: 1rem;
          color: rgba(0,0,0,0.7);
          margin: 0;
        }
        
        .highlight-card {
          background: linear-gradient(135deg, #fff 0%, #f8f8f8 100%);
          border-color: rgba(0,0,0,0.2);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        /* Возможности */
        .capabilities-section-new {
          margin: 60px 0;
        }
        
        .capabilities-grid-new {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 25px;
          margin-top: 40px;
        }
        
        .capability-card-new {
          background: linear-gradient(135deg, #fff 0%, #f8f8f8 100%);
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 15px;
          padding: 25px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        
        .capability-card-new:hover {
          transform: scale(1.02);
          background: linear-gradient(135deg, #f0f0f0 0%, #e8e8e8 100%);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }
        
        .capability-icon-new {
          font-size: 2rem;
          color: #000;
          margin-bottom: 15px;
        }
        
        .capability-card-new h4 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #000;
          margin: 0 0 10px 0;
        }
        
        .capability-card-new p {
          font-size: 0.95rem;
          color: rgba(0,0,0,0.7);
          margin: 0;
          line-height: 1.5;
        }
        
        /* Экономика */
        .economics-section {
          margin: 60px 0;
          padding: 40px;
          background: linear-gradient(135deg, #fff 0%, #f8f8f8 100%);
          border-radius: 25px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }
        
        .cost-comparison-interactive {
          margin: 40px 0;
        }
        
        .operator-cost-input {
          margin-bottom: 30px;
        }
        
        .operator-cost-input label {
          display: block;
          font-size: 1.1rem;
          color: #000;
          margin-bottom: 10px;
          font-weight: 500;
          text-align: center;
        }
        
        .cost-input-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #fff;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          padding: 10px 15px;
          width: fit-content;
          margin: 0 auto;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        .currency-symbol {
          color: #000;
          font-weight: 600;
          font-size: 1.1rem;
        }
        
        .cost-input {
          background: transparent;
          border: none;
          color: #000;
          font-size: 1.1rem;
          font-weight: 600;
          width: 80px;
          outline: none;
          text-align: center;
        }
        
        .cost-label-small {
          color: #000;
          font-size: 0.9rem;
        }
        
        .comparison-bars {
          display: flex;
          gap: 20px;
          margin: 30px 0;
          justify-content: center;
        }
        
        .cost-bar {
          flex: 1;
          background: #fff;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 15px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        .cost-label {
          font-size: 1rem;
          color: #000;
          margin-bottom: 10px;
          font-weight: 500;
        }
        
        .cost-bar-fill {
          height: 8px;
          border-radius: 4px;
          margin: 15px 0;
        }
        
        .operator-bar {
          background: linear-gradient(90deg, #000, #333);
          width: 100%;
        }
        
        .ai-bar {
          background: linear-gradient(90deg, #000, #000);
          width: 30%;
        }
        
        .cost-value {
          font-size: 1.1rem;
          font-weight: 600;
          color: #000;
        }
        
        .savings-highlight {
          text-align: center;
          margin: 30px 0;
          padding: 20px;
          background: linear-gradient(135deg, #fff 0%, #f8f8f8 100%);
          border-radius: 15px;
          border: 1px solid rgba(0,0,0,0.2);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        .savings-text {
          font-size: 1.5rem;
          font-weight: 700;
          color: #000;
          margin-bottom: 5px;
        }
        
        .savings-percentage {
          font-size: 1.2rem;
          color: #000;
          font-weight: 500;
        }
        
        /* Метрики */
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          margin: 40px 0;
          justify-items: center;
        }
        
        .metric-card {
          background: linear-gradient(135deg, #fff 0%, #f8f8f8 100%);
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 15px;
          padding: 25px;
          text-align: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        .metric-card:hover {
          transform: scale(1.05);
          background: linear-gradient(135deg, #f0f0f0 0%, #e8e8e8 100%);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }
        
        .metric-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: #000;
          margin-bottom: 10px;
        }
        
        .metric-label {
          font-size: 1rem;
          color: rgba(0,0,0,0.7);
          line-height: 1.4;
        }
        
        /* Калькулятор */
        .calculator-section {
          margin: 60px 0;
          padding: 40px;
          background: #fff;
          border-radius: 25px;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        .calculator-container {
          width: 100%;
          margin: 0 auto;
        }
        
        .calculator-settings {
          margin-bottom: 30px;
        }
        
        .setting-item label {
          display: block;
          font-size: 1.1rem;
          color: #000;
          margin-bottom: 5px;
          font-weight: 500;
        }
        
        .setting-note {
          font-size: 0.9rem;
          color: rgba(0,0,0,0.6);
          margin: 0;
        }
        
        .calculator-input {
          margin: 30px 0;
        }
        
        .calculator-input label {
          display: block;
          font-size: 1.1rem;
          color: #000;
          margin-bottom: 15px;
          font-weight: 500;
        }
        
        .calculator-slider {
          width: 100%;
          height: 8px;
          border-radius: 4px;
          background: rgba(0, 0, 0, 0.1);
          outline: none;
          -webkit-appearance: none;
        }
        
        .calculator-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #000;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        }
        
        .calculator-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #000;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        }
        
        .slider-value {
          text-align: center;
          font-size: 1.2rem;
          font-weight: 600;
          color: #000;
          margin-top: 15px;
        }
        
        .calculator-results {
          margin-top: 30px;
        }
        
        .result-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 20px;
          margin: 10px 0;
          background: rgba(0, 0, 0, 0.05);
          border-radius: 10px;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        .result-item span:first-child {
          color: rgba(0,0,0,0.8);
          font-weight: 500;
        }
        
        .operator-cost-result {
          color: #000;
          font-weight: 600;
          font-size: 1.1rem;
        }
        
        .ai-cost-result {
          color: #000;
          font-weight: 600;
          font-size: 1.1rem;
        }
        
        .savings-result {
          background: linear-gradient(135deg, #fff 0%, #f8f8f8 100%);
          border-color: rgba(0,0,0,0.2);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        .savings-amount-result {
          color: #000;
          font-weight: 700;
          font-size: 1.2rem;
        }
        
        /* Ценообразование */
        .pricing-section {
          margin: 60px 0;
          padding: 40px;
          border-radius: 25px;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        .pricing-comparison-new {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }
        
        .pricing-card-new {
          background: #fff;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 20px;
          padding: 30px;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        
        .pricing-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-bottom: 20px;
        }
        
        .pricing-icon {
          font-size: 2rem;
          color: #000;
        }
        
        .pricing-card-new h4 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #000;
          margin: 0;
        }
        
        .pricing-amount {
          font-size: 3rem;
          font-weight: 700;
          color: #000;
          margin: 15px 0 5px 0;
        }
        
        .pricing-label {
          font-size: 1rem;
          color: rgba(0,0,0,0.7);
          margin-bottom: 25px;
        }
        
        .pricing-features {
          text-align: left;
        }
        
        .pricing-feature {
          padding: 8px 0;
          color: rgba(0,0,0,0.8);
          font-size: 0.95rem;
        }
        
        .call-bot-card,
        .qa-bot-card,
        .payment-bot-card {
          border-color: rgba(0,0,0,0.2);
          background: linear-gradient(135deg, #fff 0%, #f8f8f8 100%);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        .operator-card {
          border-color: rgba(0,0,0,0.2);
          background: linear-gradient(135deg, #fff 0%, #f8f8f8 100%);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        /* Перспективы */
        .prospects-section {
          margin: 60px 0;
          padding: 40px;
          border-radius: 25px;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        .prospects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }
        
        .prospect-card {
          background: #fff;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 15px;
          padding: 25px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }
        
        .prospect-card:hover {
          transform: translateX(10px);
          background: #f8f8f8;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }
        
        .prospect-icon {
          font-size: 2rem;
          color: #fff;
          flex-shrink: 0;
          background: #000;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .prospect-content h4 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #000;
          margin: 0 0 10px 0;
        }
        
        .prospect-content p {
          font-size: 0.95rem;
          color: rgba(0,0,0,0.7);
          margin: 0;
          line-height: 1.5;
        }
        
        /* QA Modal */
        .qa-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        
        .qa-modal-content {
          background: #fff;
          border-radius: 20px;
          max-width: 800px;
          max-height: 90vh;
          overflow: hidden;
          position: relative;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }
        
        .qa-modal-close {
          position: absolute;
          top: 15px;
          right: 15px;
          background: rgba(0, 0, 0, 0.1);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          font-size: 1.5rem;
          cursor: pointer;
          z-index: 10001;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .qa-zoom-btn {
          position: absolute;
          top: 15px;
          right: 65px;
          background: rgba(0, 0, 0, 0.1);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          font-size: 1.2rem;
          cursor: pointer;
          z-index: 10001;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .qa-modal-image {
          width: 100%;
          height: auto;
          max-height: 60vh;
          overflow: hidden;
          position: relative;
        }
        
        .qa-modal-image.zoomed {
          overflow: auto;
        }
        
        .qa-modal-image img {
          width: 100%;
          height: auto;
          display: block;
        }
        
        .qa-placeholder-image {
          width: 100%;
          height: 400px;
          background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 20px;
        }
        
        .placeholder-content {
          text-align: center;
          color: #666;
        }
        
        .placeholder-content h3 {
          margin: 0 0 10px 0;
          font-size: 1.5rem;
        }
        
        .placeholder-content p {
          margin: 0;
          font-size: 1rem;
        }
        
        .qa-modal-description {
          padding: 30px;
          background: #fff;
        }
        
        .qa-modal-description h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #333;
          margin: 0 0 15px 0;
        }
        
        .qa-modal-description p {
          font-size: 1rem;
          color: #666;
          line-height: 1.6;
          margin: 0;
        }
        
        /* Анимации */
        .btn-with-shine {
          position: relative;
          overflow: hidden;
        }
        
        .btn-with-shine::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.6s ease;
        }
        
        .btn-with-shine:hover::before {
          left: 100%;
        }
        
        /* Glass эффект */
        .glass-effect {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .chatbot-hero-new,
          .callcenter-hero-new,
          .qa-hero-new,
          .payment-hero-new {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 40px 20px;
          }
          
          .hero-content h1 {
            font-size: 2.2rem;
          }
          
          .selected-service-title {
            font-size: 2.2rem;
          }
          
          .section-title-black {
            font-size: 2rem;
          }
          
          .products-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
          }
          
          .product-card {
            padding: 20px 15px;
          }
          
          .product-title {
            font-size: 0.9rem;
          }
          
          .facts-grid,
          .capabilities-grid-new,
          .metrics-grid,
          .pricing-comparison-new,
          .prospects-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
          }
          
          .capability-card-new {
            padding: 15px 10px;
          }
          
          .capability-card-new h4 {
            font-size: 1rem;
          }
          
          .capability-card-new p {
            font-size: 0.8rem;
          }
          
          .comparison-bars {
            flex-direction: column;
            gap: 15px;
          }
          
          .mini-blocks-grid {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
      <div className="products-page">
        <div className="starfall-container">
          <Starfall />
        </div>
        <Navigation />

      <div className={`products-content ${selectedId ? 'has-selection' : ''}`}>
        {!selectedId ? (
          <div className="products-container">
            <div className="products-grid">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="product-card"
                  onClick={() => handleCardClick(service.id)}
                >
                  <div className="icon-container">
                    {React.createElement(service.icon, {
                      className: 'product-icon',
                    })}
                  </div>
                  <motion.h2
                    className="product-title"
                    animate={{
                      opacity: selectedId ? 0 : 1,
                      y: selectedId ? 10 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.4, 0.0, 0.2, 1],
                    }}
                  >
                    {service.name}
                  </motion.h2>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mini-blocks-container">
            <div className="mini-blocks-grid">
              {services.map(service => (
                <div
                  key={service.id}
                  className={`mini-block ${
                    selectedId === service.id ? 'selected' : ''
                  }`}
                  onClick={() => handleCardClick(service.id)}
                >
                  <div className="mini-icon-container">
                    {React.createElement(service.icon, {
                      className: 'mini-product-icon',
                    })}
                  </div>
                </div>
              ))}
            </div>
            <motion.h2
              className="selected-service-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            >
              {services.find(s => s.id === selectedId)?.name}
            </motion.h2>

            {selectedId === 'chatbot' && (
              <motion.div
                className="chatbot-info"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
              >
                {/* Hero Section */}
                <div className="chatbot-hero-new">
                  <div className="hero-content">
                    <h1 className="hero-title">
                      Qodeq: автоматизируй до 55% запросов без операторов
                    </h1>
                    <p className="hero-subtitle">
                      Сократи расходы на поддержку, ускорь ответы и обеспечь
                      круглосуточную помощь клиентам.
                    </p>
                    <motion.button 
                      className="hero-cta-btn btn-with-shine"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => scrollToEffect('chatbot-effect')}
                    >
                      Рассчитать стоимость
                    </motion.button>
                  </div>
                  <div className="hero-animation">
                    <div className="ai-sphere-placeholder">
                      <div className="chat-header">
                        <div className="ai-avatar"></div>
                        <div className="chat-title">Qodeq</div>
                        <div className="online-status"></div>
                      </div>

                      <div className="chat-messages">
                        <div className="message user">Привет! Как дела?</div>
                        <div className="message ai">
                          Отлично! Готов помочь вам с любыми вопросами 😊
                        </div>
                        <div className="message ai typing">
                          <div className="typing-indicator">
                            <div className="typing-dot"></div>
                            <div className="typing-dot"></div>
                            <div className="typing-dot"></div>
                          </div>
                        </div>
                      </div>

                      <div className="chat-input">
                        <div className="input-field"></div>
                        <div className="send-button"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Примеры вопросов */}
                <div className="examples-section">
                  <h3 className="section-title-black">Примеры</h3>
                  <div
                    className="examples-list"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '22px',
                      margin: '32px 0',
                    }}
                  >
                    <Marquee
                      gradient={false}
                      speed={40}
                      pauseOnHover
                      style={{ height: '48px' }}
                    >
                      {exampleQuestions.slice(0, 7).map((item, idx) => (
                        <div
                          key={item.q}
                          className={`example-question white-block${
                            activeQuestion === item.q ? ' active' : ''
                          }`}
                          onMouseEnter={() => setActiveQuestion(item.q)}
                          onMouseLeave={() => setActiveQuestion(null)}
                          style={{ marginRight: 32, cursor: 'pointer' }}
                        >
                          {item.q}
                        </div>
                      ))}
                    </Marquee>
                    <Marquee
                      gradient={false}
                      speed={38}
                      direction="right"
                      pauseOnHover
                      style={{ height: '48px' }}
                    >
                      {exampleQuestions.slice(7, 14).map((item, idx) => (
                        <div
                          key={item.q}
                          className={`example-question white-block${
                            activeQuestion === item.q ? ' active' : ''
                          }`}
                          onMouseEnter={() => setActiveQuestion(item.q)}
                          onMouseLeave={() => setActiveQuestion(null)}
                          style={{ marginRight: 32, cursor: 'pointer' }}
                        >
                          {item.q}
                        </div>
                      ))}
                    </Marquee>
                    <Marquee
                      gradient={false}
                      speed={36}
                      pauseOnHover
                      style={{ height: '48px' }}
                    >
                      {exampleQuestions.slice(14, 20).map((item, idx) => (
                        <div
                          key={item.q}
                          className={`example-question white-block${
                            activeQuestion === item.q ? ' active' : ''
                          }`}
                          onMouseEnter={() => setActiveQuestion(item.q)}
                          onMouseLeave={() => setActiveQuestion(null)}
                          style={{ marginRight: 32, cursor: 'pointer' }}
                        >
                          {item.q}
                        </div>
                      ))}
                    </Marquee>
                    {activeQuestion && (
                      <div className="messenger-dialogue">
                        <div className="messenger-bubble user">
                          {activeQuestion}
                        </div>
                        <div className="messenger-bubble bot">
                          {
                            exampleQuestions.find(
                              item => item.q === activeQuestion
                            )?.a
                          }
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Key Facts Cards */}
                <div className="facts-section">
                  <h3 className="section-title-black">Основные показатели</h3>
                  <div className="facts-grid">
                    <motion.div
                      className="fact-card glass-effect"
                      whileHover={{ y: -5 }}
                    >
                      <div className="fact-icon">
                        <IoStatsChartOutline />
                      </div>
                      <div className="fact-content">
                        <div className="fact-number">UPTIME 97%</div>
                        <div className="fact-description">
                          Стабильная работа системы
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="fact-card glass-effect"
                      whileHover={{ y: -5 }}
                    >
                      <div className="fact-icon">
                        <IoDocumentTextOutline />
                      </div>
                      <div className="fact-content">
                        <div className="fact-number">База знаний</div>
                        <div className="fact-description">
                          Быстрый доступ без разработчиков
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="fact-card glass-effect highlight-card"
                      whileHover={{ y: -5 }}
                    >
                      <div className="fact-icon">
                        <IoAnalyticsOutline />
                      </div>
                      <div className="fact-content">
                        <div className="fact-number">$15,000/мес</div>
                        <div className="fact-description">
                          Экономия при 100k чатов
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Capabilities Grid */}
                <div className="capabilities-section-new">
                  <h3 className="section-title-white">Возможности системы</h3>
                  <div className="capabilities-grid-new">
                    <motion.div
                      className="capability-card-new"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="capability-icon-new">
                        <IoShieldCheckmarkOutline />
                      </div>
                      <h4>KYC, бонусы, лимиты, блокировки</h4>
                      <p>Полная поддержка сложных сценариев</p>
                    </motion.div>

                    <motion.div
                      className="capability-card-new"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="capability-icon-new">
                        <IoLinkOutline />
                      </div>
                      <h4>Интеграция с iGaming API</h4>
                      <p>Бесшовная интеграция с платформой</p>
                    </motion.div>

                    <motion.div
                      className="capability-card-new"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="capability-icon-new">
                        <IoGlobeOutline />
                      </div>
                      <h4>Поддержка любого языка и бренда</h4>
                      <p>Адаптация под ваше казино</p>
                    </motion.div>

                    <motion.div
                      className="capability-card-new"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="capability-icon-new">
                        <IoEyeOutline />
                      </div>
                      <h4>Анализ эмоций клиентов</h4>
                      <p>Понимание эмоционального состояния</p>
                    </motion.div>

                    <motion.div
                      className="capability-card-new"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="capability-icon-new">
                        <IoFlashOutline />
                      </div>
                      <h4>Масштабируемость</h4>
                      <p>Тысячи запросов одновременно</p>
                    </motion.div>
                  </div>
                </div>

                {/* Economic Effect */}
                <div className="economics-section">
                  <h3 className="section-title-black" id="chatbot-effect">
                    Экономия в цифрах
                  </h3>

                  {/* Interactive Cost Comparison */}
                  <div className="cost-comparison-interactive">
                    <div className="operator-cost-input">
                      <label htmlFor="operatorCost">
                        Стоимость оператора за чат:
                      </label>
                      <div className="cost-input-container">
                        <span className="currency-symbol">$</span>
                        <input
                          type="number"
                          id="operatorCost"
                          className="cost-input"
                          value={operatorCostPerChat}
                          step="0.01"
                          min="0"
                          onChange={handleOperatorCostChange}
                        />
                        <span className="cost-label-small">за чат</span>
                      </div>
                    </div>

                    <div className="comparison-bars">
                      <div className="cost-bar operator-cost">
                        <div className="cost-label">Оператор</div>
                        <div className="cost-bar-fill operator-bar"></div>
                        <div className="cost-value">
                          ${operatorCostPerChat.toFixed(2)} / чат
                        </div>
                      </div>
                      <div className="cost-bar ai-cost">
                        <div className="cost-label">ИИ-бот</div>
                        <div className="cost-bar-fill ai-bar"></div>
                        <div className="cost-value">$0.15 / чат</div>
                      </div>
                    </div>
                    <div className="savings-highlight">
                      <div className="savings-text">
                        В{' '}
                        {operatorCostPerChat > 0
                          ? (operatorCostPerChat / 0.15).toFixed(1)
                          : 0}
                        x дешевле
                      </div>
                      <div className="savings-percentage">
                        {operatorCostPerChat > 0
                          ? (
                              ((operatorCostPerChat - 0.15) /
                                operatorCostPerChat) *
                              100
                            ).toFixed(1)
                          : 0}
                        % экономии
                      </div>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="metrics-grid">
                    <motion.div
                      className="metric-card"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="metric-number">55%</div>
                      <div className="metric-label">
                        запросов без участия человека
                      </div>
                    </motion.div>

                    <motion.div
                      className="metric-card"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="metric-number">$500k/год</div>
                      <div className="metric-label">
                        экономия при 100k чатов в месяц
                      </div>
                    </motion.div>

                    <motion.div
                      className="metric-card"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="metric-number">4x</div>
                      <div className="metric-label">
                        сокращение времени ответа
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Cost Calculator */}
                <div className="calculator-section">
                  <h3 className="section-title-black">Калькулятор экономии</h3>
                  <div className="calculator-container">
                    <div className="calculator-settings">
                      <div className="setting-item">
                        <label>
                          Стоимость оператора за чат: $
                          {operatorCostPerChat.toFixed(2)}
                        </label>
                        <p className="setting-note">
                          (изменяется в разделе "Экономия в цифрах")
                        </p>
                      </div>
                    </div>
                    <div className="calculator-input">
                      <label>Количество чатов в месяц:</label>
                      <input
                        type="range"
                        min="1000"
                        max="200000"
                        value={chatCount}
                        onChange={handleSliderChange}
                        className="calculator-slider"
                        id="chatCount"
                      />
                      <div className="slider-value">
                        {formatNumber(chatCount)} чатов
                      </div>
                    </div>

                    <div className="calculator-results">
                      <div className="result-item">
                        <span>С операторами:</span>
                        <span className="operator-cost-result">
                          ${formatNumber(operatorCost)}/мес
                        </span>
                      </div>
                      <div className="result-item">
                        <span>С ИИ-ботом:</span>
                        <span className="ai-cost-result">
                          ${formatNumber(aiCost)}/мес
                        </span>
                      </div>
                      <div className="result-item savings-result">
                        <span>Экономия:</span>
                        <span className="savings-amount-result">
                          ${formatNumber(savings)}/мес
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {selectedId === 'callcenter' && (
              <motion.div
                className="callcenter-info"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
              >
                {/* Hero Section */}
                <div className="callcenter-hero-new">
                  <div className="hero-content">
                    <h1 className="hero-title">
                      ИИ Call Center Bot: автоматизация звонков без операторов
                    </h1>
                    <p className="hero-subtitle">
                      Сократи расходы на колл-центр до 70% и обеспечь
                      круглосуточную поддержку по телефону.
                    </p>
                    <div
                      className="callcenter-audio-players"
                      style={{
                        display: 'flex',
                        gap: '2rem',
                        justifyContent: 'center',
                        margin: '2rem 0',
                      }}
                    >
                      <audio controls style={{ width: '320px' }}>
                        <source src="./audio_1.mp3" type="audio/mpeg" />
                        Ваш браузер не поддерживает аудио.
                      </audio>
                      <audio controls style={{ width: '320px' }}>
                        <source src="./audio_2.mp3" type="audio/mpeg" />
                        Ваш браузер не поддерживает аудио.
                      </audio>
                    </div>
                    <motion.button
                      className="hero-cta-btn btn-with-shine"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={scrollToCallCenterEffect}
                    >
                      Рассчитать стоимость
                    </motion.button>
                  </div>
                  <div className="hero-animation">
                    <div className="call-center-device">
                      <div className="device-container">
                        <div className="device-circle">
                          <div className="device-main">
                            <div className="device-screen"></div>
                            <div className="device-button"></div>
                          </div>
                          <div className="signal-lines">
                            <div className="signal-line"></div>
                            <div className="signal-line"></div>
                            <div className="signal-line"></div>
                            <div className="signal-line"></div>
                            <div className="signal-line"></div>
                            <div className="signal-line"></div>
                            <div className="signal-line"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Facts Cards */}
                <div className="facts-section">
                  <h3 className="section-title-black">Основные показатели</h3>
                  <div className="facts-grid">
                    <motion.div
                      className="fact-card glass-effect"
                      whileHover={{ y: -5 }}
                    >
                      <div className="fact-icon">
                        <IoCallOutline />
                      </div>
                      <div className="fact-content">
                        <div className="fact-number">До 80%</div>
                        <div className="fact-description">
                          Обрабатывает звонков
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="fact-card glass-effect highlight-card"
                      whileHover={{ y: -5 }}
                    >
                      <div className="fact-icon">
                        <IoAnalyticsOutline />
                      </div>
                      <div className="fact-content">
                        <div className="fact-number">$25k/мес</div>
                        <div className="fact-description">
                          Экономия при 50k звонков
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="fact-card glass-effect"
                      whileHover={{ y: -5 }}
                    >
                      <div className="fact-icon">
                        <IoStatsChartOutline />
                      </div>
                      <div className="fact-content">
                        <div className="fact-number">UPTIME 97%</div>
                        <div className="fact-description">
                          Стабильная работа системы
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Capabilities Grid */}
                <div className="capabilities-section-new">
                  <h3 className="section-title-white">Возможности системы</h3>
                  <div className="capabilities-grid-new">
                    <motion.div
                      className="capability-card-new"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="capability-icon-new">
                        <IoCallOutline />
                      </div>
                      <h4>Приём входящих и исходящих звонков</h4>
                      <p>Полный цикл телефонной поддержки</p>
                    </motion.div>

                    <motion.div
                      className="capability-card-new"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="capability-icon-new">
                        <IoVolumeHighOutline />
                      </div>
                      <h4>Голосовой синтез и распознавание речи</h4>
                      <p>Естественное общение с клиентами</p>
                    </motion.div>

                    <motion.div
                      className="capability-card-new"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="capability-icon-new">
                        <IoLinkOutline />
                      </div>
                      <h4>Интеграция с CRM и телефонией</h4>
                      <p>Бесшовная работа с системами</p>
                    </motion.div>

                    <motion.div
                      className="capability-card-new"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="capability-icon-new">
                        <IoGlobeOutline />
                      </div>
                      <h4>Поддержка до 15 языков</h4>
                      <p>Международная поддержка клиентов</p>
                    </motion.div>

                    <motion.div
                      className="capability-card-new"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="capability-icon-new">
                        <IoFlashOutline />
                      </div>
                      <h4>Массовая обзвонная кампания</h4>
                      <p>Автоматизация обзвона тысяч клиентов</p>
                    </motion.div>
                  </div>
                </div>

                {/* Economic Effect */}
                <div className="economics-section">
                  <h3 className="section-title-black" id="callcenter-effect">Экономический эффект</h3>

                  {/* Interactive Cost Comparison */}
                  <div className="cost-comparison-interactive">
                    <div className="operator-cost-input">
                      <label htmlFor="operatorCallCost">
                        Стоимость оператора за минуту звонка:
                      </label>
                      <div className="cost-input-container">
                        <span className="currency-symbol">$</span>
                        <input
                          type="number"
                          id="operatorCallCost"
                          className="cost-input"
                          value={operatorCostPerCall}
                          step="0.01"
                          min="0"
                          onChange={handleOperatorCallCostChange}
                        />
                        <span className="cost-label-small">за минуту</span>
                      </div>
                    </div>

                    <div className="comparison-bars">
                      <div className="cost-bar operator-cost">
                        <div className="cost-label">Оператор</div>
                        <div className="cost-bar-fill operator-bar"></div>
                        <div className="cost-value">
                          ${operatorCostPerCall.toFixed(2)} / минута
                        </div>
                      </div>
                      <div className="cost-bar ai-cost">
                        <div className="cost-label">Call Bot</div>
                        <div className="cost-bar-fill ai-bar"></div>
                        <div className="cost-value">$0.10 / минута</div>
                      </div>
                    </div>
                    <div className="savings-highlight">
                      <div className="savings-text">
                        В{' '}
                        {operatorCostPerCall > 0
                          ? (operatorCostPerCall / 0.1).toFixed(1)
                          : 0}
                        x дешевле
                      </div>
                      <div className="savings-percentage">
                        {operatorCostPerCall > 0
                          ? (
                              ((operatorCostPerCall - 0.1) /
                                operatorCostPerCall) *
                              100
                            ).toFixed(1)
                          : 0}
                        % экономии
                      </div>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="metrics-grid">
                    <motion.div
                      className="metric-card"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="metric-number">80%</div>
                      <div className="metric-label">автоматизация звонков</div>
                    </motion.div>

                    <motion.div
                      className="metric-card"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="metric-number">70%</div>
                      <div className="metric-label">
                        сокращение расходов колл-центра
                      </div>
                    </motion.div>

                    <motion.div
                      className="metric-card"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="metric-number">24/7</div>
                      <div className="metric-label">
                        круглосуточная поддержка
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Cost Calculator */}
                <div className="calculator-section">
                  <h3 className="section-title-black">
                    Калькулятор экономии звонков
                  </h3>
                  <div className="calculator-container">
                    <div className="calculator-settings">
                      <div className="setting-item">
                        <label>
                          Стоимость оператора за минуту: $
                          {operatorCostPerCall.toFixed(2)}
                        </label>
                        <p className="setting-note">
                          (изменяется в разделе "Экономический эффект")
                        </p>
                      </div>
                    </div>
                    <div className="calculator-input">
                      <label>Количество минут звонков в месяц:</label>
                      <input
                        type="range"
                        min="1000"
                        max="100000"
                        value={chatCount}
                        onChange={handleSliderChange}
                        className="calculator-slider"
                        id="callCount"
                      />
                      <div className="slider-value">
                        {formatNumber(chatCount)} минут
                      </div>
                    </div>

                    <div className="calculator-results">
                      <div className="result-item">
                        <span>С операторами:</span>
                        <span className="operator-cost-result">
                          ${formatNumber(operatorCallCost)}/мес
                        </span>
                      </div>
                      <div className="result-item">
                        <span>С Call Bot:</span>
                        <span className="ai-cost-result">
                          ${formatNumber(aiCallCost)}/мес
                        </span>
                      </div>
                      <div className="result-item savings-result">
                        <span>Экономия:</span>
                        <span className="savings-amount-result">
                          ${formatNumber(callSavings)}/мес
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing Comparison */}
                <div className="pricing-section">
                  <h3 className="section-title-white">
                    Стоимость обслуживания
                  </h3>
                  <div className="pricing-comparison-new">
                    <motion.div
                      className="pricing-card-new call-bot-card"
                      whileHover={{ scale: 1.03 }}
                    >
                      <div className="pricing-header">
                        <div className="pricing-icon">
                          <IoCallOutline />
                        </div>
                        <h4>Call Bot</h4>
                      </div>
                      <div className="pricing-amount">$0.10</div>
                      <div className="pricing-label">за минуту</div>
                      <div className="pricing-features">
                        <div className="pricing-feature">
                          ✓ Автоматическая обработка
                        </div>
                        <div className="pricing-feature">✓ Работает 24/7</div>
                        <div className="pricing-feature">
                          ✓ Неограниченная масштабируемость
                        </div>
                        <div className="pricing-feature">
                          ✓ Интеграция с CRM
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="pricing-card-new operator-card"
                      whileHover={{ scale: 1.03 }}
                    >
                      <div className="pricing-header">
                        <div className="pricing-icon">
                          <IoPersonOutline />
                        </div>
                        <h4>Оператор</h4>
                      </div>
                      <div className="pricing-amount">
                        ${operatorCostPerCall.toFixed(2)}
                      </div>
                      <div className="pricing-label">за минуту</div>
                      <div className="pricing-features">
                        <div className="pricing-feature">
                          • Зарплата оператора
                        </div>
                        <div className="pricing-feature">
                          • Отпускные/больничные
                        </div>
                        <div className="pricing-feature">
                          • Человеческий фактор
                        </div>
                        <div className="pricing-feature">
                          • Ограниченные часы работы
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Future Prospects */}
                <div className="prospects-section">
                  <h3 className="section-title-white">Перспективы развития</h3>
                  <div className="prospects-grid">
                    <motion.div
                      className="prospect-card"
                      whileHover={{ x: 10 }}
                    >
                      <div className="prospect-icon">
                        <IoVolumeHighOutline />
                      </div>
                      <div className="prospect-content">
                        <h4>Улучшение качества синтеза речи</h4>
                        <p>
                          Еще более естественное звучание и эмоциональная
                          окраска голоса
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="prospect-card"
                      whileHover={{ x: 10 }}
                    >
                      <div className="prospect-icon">
                        <IoChatbubbleEllipsesOutline />
                      </div>
                      <div className="prospect-content">
                        <h4>Интеграция с WhatsApp/Telegram звонками</h4>
                        <p>
                          Расширение каналов коммуникации для максимального
                          охвата
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="prospect-card"
                      whileHover={{ x: 10 }}
                    >
                      <div className="prospect-icon">
                        <IoStatsChartOutline />
                      </div>
                      <div className="prospect-content">
                        <h4>Smart-обзвоны с ИИ-персонализацией</h4>
                        <p>
                          Индивидуальный подход к каждому клиенту на основе
                          поведенческой аналитики
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}

            {selectedId === 'qa' && (
              <motion.div
                className="qa-info"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
              >
                {/* Hero Section */}
                <div className="qa-hero-new">
                  <div className="qa-hero-content">
                    <h2>ИИ QA Bot: контроль качества поддержки</h2>
                    <p>
                      Проводи до 80% проверок чатов и звонков автоматически,
                      экономь время тимлидов и супервайзеров
                    </p>
                    <div className="hero-buttons-container">
                      <motion.button
                        className="hero-cta-btn btn-with-shine"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToQABotEffect}
                      >
                        Рассчитать стоимость
                      </motion.button>
                      <motion.button
                        className="hero-example-btn btn-with-shine"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowQAModal(true)}
                      >
                        Посмотреть пример
                      </motion.button>
                    </div>
                  </div>
                  <div className="hero-animation">
                    <div className="qa-dashboard-visual">
                      <div className="qa-dashboard-container">
                        <div className="qa-dashboard-card">
                          <div className="qa-dashboard-header">
                            <div className="qa-dashboard-title">QA</div>
                            <div className="qa-dashboard-subtitle">Dashboard</div>
                          </div>
                          <div className="qa-dashboard-percentage">94.2%</div>
                        </div>
                        <div className="qa-checkmarks">
                          <div className="qa-checkmark green">✓</div>
                          <div className="qa-checkmark yellow">✓</div>
                          <div className="qa-checkmark red">✓</div>
                          <div className="qa-checkmark green">✓</div>
                          <div className="qa-checkmark yellow">✓</div>
                          <div className="qa-checkmark red">✓</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Facts Grid */}
                <div className="facts-section">
                  <h3 className="section-title-white">Ключевые факты</h3>
                  <div className="facts-grid">
                    <motion.div
                      className="fact-card"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="fact-number">80%</div>
                      <p>Выполняет до 80% QA-проверок</p>
                    </motion.div>

                    <motion.div
                      className="fact-card"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="fact-number">500</div>
                      <p>Экономия до 500 часов работы QA в месяц</p>
                    </motion.div>

                    <motion.div
                      className="fact-card"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="fact-number">24/7</div>
                      <p>Автоматический скоринг по KPI</p>
                    </motion.div>
                  </div>
                </div>

                {/* Capabilities Grid */}
                <div className="capabilities-section-new">
                  <h3 className="section-title-white">Возможности системы</h3>
                  <div className="capabilities-grid-new">
                    <motion.div
                      className="capability-card-new"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="capability-icon-new">
                        <IoEyeOutline />
                      </div>
                      <h4>Проверка чатов и звонков по чек-листам</h4>
                      <p>Комплексная проверка соблюдения стандартов</p>
                    </motion.div>

                    <motion.div
                      className="capability-card-new"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="capability-icon-new">
                        <IoStatsChartOutline />
                      </div>
                      <h4>Формирование отчётов и метрик</h4>
                      <p>Детальная аналитика по всем показателям</p>
                    </motion.div>

                    <motion.div
                      className="capability-card-new"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="capability-icon-new">
                        <IoPersonOutline />
                      </div>
                      <h4>Автоматический скоринг операторов</h4>
                      <p>Объективная оценка работы сотрудников</p>
                    </motion.div>

                    <motion.div
                      className="capability-card-new"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="capability-icon-new">
                        <IoAnalyticsOutline />
                      </div>
                      <h4>Анализ тональности</h4>
                      <p>Определение эмоциональной окраски общения</p>
                    </motion.div>

                    <motion.div
                      className="capability-card-new"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="capability-icon-new">
                        <IoFlashOutline />
                      </div>
                      <h4>Масштабируемость до десятков тысяч чатов</h4>
                      <p>Обработка больших объёмов без потери качества</p>
                    </motion.div>
                  </div>
                </div>

                {/* Economic Effect */}
                <div className="economics-section">
                  <h3 className="section-title-black" id='qa-effect'>Экономический эффект</h3>

                  {/* Interactive Cost Comparison */}
                  <div className="cost-comparison-interactive">
                    <div className="operator-cost-input">
                      <label htmlFor="operatorQACost">
                        Стоимость оператора QA за проверку чата:
                      </label>
                      <div className="cost-input-container">
                        <span className="currency-symbol">$</span>
                        <input
                          type="number"
                          id="operatorQACost"
                          className="cost-input"
                          value={operatorCostPerQA}
                          step="0.01"
                          min="0"
                          onChange={handleOperatorQACostChange}
                        />
                        <span className="cost-label-small">за проверку</span>
                      </div>
                    </div>

                    <div className="comparison-bars">
                      <div className="cost-bar operator-cost">
                        <div className="cost-label">Оператор QA</div>
                        <div className="cost-bar-fill operator-bar"></div>
                        <div className="cost-value">
                          ${operatorCostPerQA.toFixed(2)} / проверка
                        </div>
                      </div>
                      <div className="cost-bar ai-cost">
                        <div className="cost-label">QA Bot</div>
                        <div className="cost-bar-fill ai-bar"></div>
                        <div className="cost-value">$0.06 / проверка</div>
                      </div>
                    </div>
                    <div className="savings-highlight">
                      <div className="savings-text">
                        В{' '}
                        {operatorCostPerQA > 0
                          ? (operatorCostPerQA / 0.06).toFixed(1)
                          : 0}
                        x дешевле
                      </div>
                      <div className="savings-percentage">
                        {operatorCostPerQA > 0
                          ? (
                              ((operatorCostPerQA - 0.06) / operatorCostPerQA) *
                              100
                            ).toFixed(1)
                          : 0}
                        % экономии
                      </div>
                    </div>
                  </div>
                </div>

                {/* QA Cost Calculator */}
                <div className="calculator-section">
                  <h3 className="section-title-black">
                    Калькулятор экономии QA
                  </h3>
                  <div className="calculator-container">
                    <div className="calculator-settings">
                      <div className="setting-item">
                        <label>
                          Стоимость QA-специалиста за проверку: $
                          {operatorCostPerQA.toFixed(2)}
                        </label>
                        <p className="setting-note">
                          (изменяется в разделе "Экономический эффект")
                        </p>
                      </div>
                    </div>
                    <div className="calculator-input">
                      <label>Количество проверок чатов в месяц:</label>
                      <input
                        type="range"
                        min="1000"
                        max="200000"
                        value={chatCount}
                        onChange={handleSliderChange}
                        className="calculator-slider"
                        id="qaCount"
                      />
                      <div className="slider-value">
                        {formatNumber(chatCount)} проверок
                      </div>
                    </div>

                    <div className="calculator-results">
                      <div className="result-item">
                        <span>С QA-специалистами:</span>
                        <span className="operator-cost-result">
                          ${formatNumber(operatorQACost)}/мес
                        </span>
                      </div>
                      <div className="result-item">
                        <span>С QA Bot:</span>
                        <span className="ai-cost-result">
                          ${formatNumber(aiQACost)}/мес
                        </span>
                      </div>
                      <div className="result-item savings-result">
                        <span>Экономия:</span>
                        <span className="savings-amount-result">
                          ${formatNumber(qaSavings)}/мес
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing Section */}
                <div className="pricing-section">
                  <h3 className="section-title-white">
                    Стоимость обслуживания
                  </h3>
                  <div className="pricing-comparison-new">
                    <motion.div
                      className="pricing-card-new qa-bot-card"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="pricing-header">
                        <div className="pricing-icon">
                          <IoFlashOutline />
                        </div>
                        <h4>QA Bot</h4>
                      </div>
                      <div className="pricing-amount">$0.06</div>
                      <div className="pricing-label">за проверку</div>
                      <div className="pricing-features">
                        <div className="pricing-feature">
                          • Мгновенная обработка
                        </div>
                        <div className="pricing-feature">
                          • 100% покрытие чатов
                        </div>
                        <div className="pricing-feature">• Работа 24/7</div>
                        <div className="pricing-feature">
                          • Автоматические отчёты
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="pricing-card-new"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="pricing-header">
                        <div className="pricing-icon">
                          <IoPersonOutline />
                        </div>
                        <h4>QA-специалист</h4>
                      </div>
                      <div className="pricing-amount">
                        ${operatorCostPerQA.toFixed(2)}
                      </div>
                      <div className="pricing-label">за проверку</div>
                      <div className="pricing-features">
                        <div className="pricing-feature">
                          • Время обработки 15-30 мин
                        </div>
                        <div className="pricing-feature">
                          • Покрытие 2-5% чатов
                        </div>
                        <div className="pricing-feature">• Работа в смены</div>
                        <div className="pricing-feature">
                          • Субъективная оценка
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Prospects Section */}
                <div className="prospects-section">
                  <h3 className="section-title-white">Перспективы развития</h3>
                  <div className="prospects-grid">
                    <motion.div
                      className="prospect-card"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="prospect-icon">
                        <IoGlobeOutline />
                      </div>
                      <div className="prospect-content">
                        <h4>Поддержка мультиязычных QA-скриптов</h4>
                        <p>
                          Расширение системы для работы с международными
                          командами и многоязычной поддержкой клиентов
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="prospect-card"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="prospect-icon">
                        <IoLinkOutline />
                      </div>
                      <div className="prospect-content">
                        <h4>Интеграция с HR и LMS-системами</h4>
                        <p>
                          Автоматическая синхронизация с системами управления
                          персоналом и обучающими платформами
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="prospect-card"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="prospect-icon">
                        <IoCheckmarkCircleOutline />
                      </div>
                      <div className="prospect-content">
                        <h4>Автоматическая выдача рекомендаций операторам</h4>
                        <p>
                          Персонализированные советы по улучшению качества
                          работы на основе анализа ошибок
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}

            {selectedId === 'payment' && (
              <motion.div
                className="payment-info"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
              >
                {/* Hero Section */}
                <div className="payment-hero-new">
                  <div className="payment-hero-content">
                    <h2>ИИ Payment Bot: автоматизация обработки платежей</h2>
                    <p>
                      Сократи нагрузку на саппорт, обрабатывай до 70% тикетов по
                      платежам автоматически
                    </p>
                    <motion.button
                      className="hero-cta-btn btn-with-shine"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={scrollToPaymentbotEffect}
                    >
                      Рассчитать стоимость
                    </motion.button>
                  </div>
                  <div className="hero-animation">
                    <div className="payment-card-visual">
                      <div className="payment-card-container">
                        <div className="payment-card">
                          <div className="card-chip"></div>
                          <div className="card-dollar">$</div>
                        </div>
                        <div className="network-nodes">
                          <div className="network-node active"></div>
                          <div className="network-node"></div>
                          <div className="network-node active"></div>
                          <div className="network-node"></div>
                          <div className="network-node active"></div>
                          <div className="network-node"></div>
                          <div className="network-node active"></div>
                          <div className="network-node"></div>
                        </div>
                        <div className="network-lines">
                          <div className="network-line"></div>
                          <div className="network-line"></div>
                          <div className="network-line"></div>
                          <div className="network-line"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Facts Grid */}
                <div className="facts-section">
                  <h3 className="section-title-white">Ключевые факты</h3>
                  <div className="facts-grid">
                    <motion.div
                      className="fact-card"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="fact-number">70%</div>
                      <p>Закрывает до 70% тикетов по депозитам/выводам</p>
                    </motion.div>

                    <motion.div
                      className="fact-card"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="fact-number">$20k</div>
                      <p>Экономия до $20k/мес при 30k тикетов</p>
                    </motion.div>

                    <motion.div
                      className="fact-card"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="fact-number">24/7</div>
                      <p>Интеграция с платёжными системами</p>
                    </motion.div>
                  </div>
                </div>

                {/* Capabilities Grid */}
                <div className="capabilities-section-new">
                  <h3 className="section-title-white">Возможности системы</h3>
                  <div className="capabilities-grid-new">
                    <motion.div
                      className="capability-card-new"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="capability-icon-new">
                        <IoCardOutline />
                      </div>
                      <h4>Проверка статуса транзакций</h4>
                      <p>Мгновенная проверка платежных операций</p>
                    </motion.div>

                    <motion.div
                      className="capability-card-new"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="capability-icon-new">
                        <IoLinkOutline />
                      </div>
                      <h4>Интеграция с PSP/банками</h4>
                      <p>Прямое подключение к платёжным провайдерам</p>
                    </motion.div>

                    <motion.div
                      className="capability-card-new"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="capability-icon-new">
                        <IoTimerOutline />
                      </div>
                      <h4>Автоматические ответы по задержкам</h4>
                      <p>Уведомления о статусе задержанных платежей</p>
                    </motion.div>

                    <motion.div
                      className="capability-card-new"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="capability-icon-new">
                        <IoStatsChartOutline />
                      </div>
                      <h4>Логирование и аналитика</h4>
                      <p>Детальная отчётность по всем операциям</p>
                    </motion.div>

                    <motion.div
                      className="capability-card-new"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="capability-icon-new">
                        <IoFlashOutline />
                      </div>
                      <h4>Масштабируемость (десятки тысяч запросов)</h4>
                      <p>Обработка больших объёмов транзакций</p>
                    </motion.div>
                  </div>
                </div>

                {/* Economic Effect */}
                <div className="economics-section">
                  <h3 className="section-title-black" id='paymentbot-effect'>Экономический эффект</h3>

                  {/* Cost Comparison */}
                  <div className="cost-comparison">
                    <div className="comparison-bars">
                      <div className="cost-bar operator-cost">
                        <div className="cost-label">Оператор</div>
                        <div className="cost-bar-fill operator-bar"></div>
                        <div className="cost-value">$0.80 / тикет</div>
                      </div>
                      <div className="cost-bar ai-cost">
                        <div className="cost-label">Payment Bot</div>
                        <div className="cost-bar-fill ai-bar"></div>
                        <div className="cost-value">$0.20 / тикет</div>
                      </div>
                    </div>
                    <div className="savings-highlight">
                      <div className="savings-text">Экономия до 4x</div>
                      <div className="savings-percentage">
                        70% автоматизации
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing Section */}
                <div className="pricing-section">
                  <h3 className="section-title-white">
                    Стоимость обслуживания
                  </h3>
                  <div className="pricing-comparison-new">
                    <motion.div
                      className="pricing-card-new payment-bot-card"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="pricing-header">
                        <div className="pricing-icon">
                          <IoFlashOutline />
                        </div>
                        <h4>Payment Bot</h4>
                      </div>
                      <div className="pricing-amount">$0.20</div>
                      <div className="pricing-label">за тикет</div>
                      <div className="pricing-features">
                        <div className="pricing-feature">
                          • Мгновенная обработка
                        </div>
                        <div className="pricing-feature">
                          • Интеграция с PSP
                        </div>
                        <div className="pricing-feature">• Работа 24/7</div>
                        <div className="pricing-feature">
                          • Автоматическая аналитика
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="pricing-card-new"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="pricing-header">
                        <div className="pricing-icon">
                          <IoPersonOutline />
                        </div>
                        <h4>Оператор</h4>
                      </div>
                      <div className="pricing-amount">$0.80</div>
                      <div className="pricing-label">за тикет</div>
                      <div className="pricing-features">
                        <div className="pricing-feature">
                          • Время обработки 3-5 мин
                        </div>
                        <div className="pricing-feature">• Работа в смены</div>
                        <div className="pricing-feature">
                          • Человеческий фактор
                        </div>
                        <div className="pricing-feature">
                          • Дополнительные расходы
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Prospects Section */}
                <div className="prospects-section">
                  <h3 className="section-title-white">Перспективы развития</h3>
                  <div className="prospects-grid">
                    <motion.div
                      className="prospect-card"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="prospect-icon">
                        <IoCubeOutline />
                      </div>
                      <div className="prospect-content">
                        <h4>Подключение крипто-процессинга</h4>
                        <p>
                          Интеграция с блокчейн-сетями и криптовалютными
                          платформами для обработки децентрализованных платежей
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="prospect-card"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="prospect-icon">
                        <IoShieldCheckmarkOutline />
                      </div>
                      <div className="prospect-content">
                        <h4>Smart-проверки аномалий</h4>
                        <p>
                          Машинное обучение для выявления подозрительных
                          транзакций и предотвращения мошенничества
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="prospect-card"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="prospect-icon">
                        <IoTrendingUpOutline />
                      </div>
                      <div className="prospect-content">
                        <h4>Предиктивная аналитика платежных сбоев</h4>
                        <p>
                          Прогнозирование возможных проблем с платежами и
                          превентивные меры по их устранению
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </div>

      {/* QA Bot Example Modal */}
      {showQAModal && (
        <motion.div
          className="qa-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowQAModal(false)}
        >
          <motion.div
            className="qa-modal-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={e => e.stopPropagation()}
          >
            <div className="qa-modal-header">
              <h2 className="qa-modal-title">Пример работы QA Bot</h2>
              <p className="qa-modal-subtitle">
                Посмотрите, как ИИ автоматически проверяет качество чатов
              </p>
            </div>
            
            <div className="qa-modal-body">
              <button
                className="qa-modal-close"
                onClick={() => {
                  setShowQAModal(false);
                  setImageZoomed(false);
                  setDragOffset({ x: 0, y: 0 });
                }}
              >
                ×
              </button>
              <button
                className="qa-zoom-btn"
              onClick={() => {
                setImageZoomed(!imageZoomed);
                if (imageZoomed) {
                  setDragOffset({ x: 0, y: 0 });
                }
              }}
              title={imageZoomed ? 'Уменьшить' : 'Увеличить'}
            >
              {imageZoomed ? '🔍-' : '🔍+'}
            </button>
            <div
              className={`qa-modal-image ${imageZoomed ? 'zoomed' : ''}`}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <img
                src="/Untitled.png"
                alt="QA Bot Dashboard Example"
                onClick={() => setImageZoomed(!imageZoomed)}
                style={{
                  cursor: imageZoomed
                    ? isDragging
                      ? 'grabbing'
                      : 'grab'
                    : 'zoom-in',
                  transform: imageZoomed
                    ? `translate(${dragOffset.x}px, ${dragOffset.y}px) scale(1.2)`
                    : 'scale(1)',
                  userSelect: 'none',
                }}
                onError={e => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
                onDragStart={e => e.preventDefault()}
              />
              <div className="qa-placeholder-image" style={{ display: 'none' }}>
                <div className="placeholder-content">
                  <IoAnalyticsOutline size={80} />
                  <h3>QA Bot Dashboard</h3>
                  <p>Пример интерфейса системы контроля качества</p>
                </div>
              </div>
            </div>
            <div className="qa-modal-description">
              <h3>QA Bot Analytics Dashboard</h3>
              <p>
                Панель аналитики показывает ключевые метрики качества
                обслуживания: общее количество чатов (4,250), средний рейтинг
                (94.2), общее количество ошибок (1,420) и детальную статистику
                по операторам с их показателями эффективности.
              </p>
            </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
    </>
  );
}

export default Products;
