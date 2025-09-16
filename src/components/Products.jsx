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
                  <h3 className="section-title-black">Возможности системы</h3>
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
                    <div className="ai-call-placeholder">
                      <div className="call-core"></div>
                      <div className="call-ring ring-1"></div>
                      <div className="call-ring ring-2"></div>
                      <div className="call-waves">
                        {Array.from({ length: 8 }).map((_, i) => (
                          <div key={i} className={`wave wave-${i}`}></div>
                        ))}
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
                  <h3 className="section-title-black">Возможности системы</h3>
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
                  <h3 className="section-title-black">
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
                  <h3 className="section-title-black">Перспективы развития</h3>
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
                  <div className="ai-qa-placeholder">
                    <div className="qa-core"></div>
                    <div className="qa-ring ring-1"></div>
                    <div className="qa-ring ring-2"></div>
                    <div className="quality-indicator indicator-1"></div>
                    <div className="quality-indicator indicator-2"></div>
                    <div className="quality-indicator indicator-3"></div>
                    <div className="quality-indicator indicator-4"></div>
                    <div className="quality-indicator indicator-5"></div>
                    <div className="quality-indicator indicator-6"></div>
                  </div>
                </div>

                {/* Facts Grid */}
                <div className="facts-section">
                  <h3 className="section-title-black">Ключевые факты</h3>
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
                  <h3 className="section-title-black">Возможности системы</h3>
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
                  <h3 className="section-title-black">
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
                  <h3 className="section-title-black">Перспективы развития</h3>
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
                  <div className="ai-payment-placeholder">
                    <div className="payment-core"></div>
                    <div className="payment-ring ring-1"></div>
                    <div className="payment-ring ring-2"></div>
                    <div className="transaction transaction-1"></div>
                    <div className="transaction transaction-2"></div>
                    <div className="transaction transaction-3"></div>
                    <div className="transaction transaction-4"></div>
                    <div className="transaction transaction-5"></div>
                    <div className="transaction transaction-6"></div>
                  </div>
                </div>

                {/* Facts Grid */}
                <div className="facts-section">
                  <h3 className="section-title-black">Ключевые факты</h3>
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
                  <h3 className="section-title-black">Возможности системы</h3>
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
                  <h3 className="section-title-black">
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
                  <h3 className="section-title-black">Перспективы развития</h3>
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
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default Products;
