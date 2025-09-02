import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Starfall from './animations/Starfall';
import Navigation from './Navigation';
import './Products.css';
import { IoChatbubbleEllipsesOutline, IoCallOutline, IoWalletOutline, IoHelpCircleOutline, IoStatsChartOutline, IoTimeOutline, IoGlobeOutline, IoSpeedometerOutline, IoEyeOutline, IoCheckmarkCircleOutline, IoAnalyticsOutline, IoShieldCheckmarkOutline, IoFlashOutline, IoLinkOutline, IoTimerOutline, IoDocumentTextOutline } from 'react-icons/io5';

const services = [
  {
    id: 'chatbot',
    name: 'Chatbot',
    icon: IoChatbubbleEllipsesOutline
  },
  {
    id: 'callcenter',
    name: 'Call Center Bot',
    icon: IoCallOutline
  },
  {
    id: 'payment',
    name: 'Payment Bot',
    icon: IoWalletOutline
  },
  {
    id: 'qa',
    name: 'QA Bot',
    icon: IoHelpCircleOutline
  }
];

function Products() {
  const [selectedId, setSelectedId] = useState(null);

  const handleCardClick = (id) => {
    setSelectedId(id === selectedId ? null : id);
  };

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
                      className: 'product-icon'
                    })}
                  </div>
                  <motion.h2 
                    className="product-title"
                    animate={{
                      opacity: selectedId ? 0 : 1,
                      y: selectedId ? 10 : 0
                    }}
                    transition={{ 
                      duration: 0.3, 
                      ease: [0.4, 0.0, 0.2, 1]
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
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`mini-block ${selectedId === service.id ? 'selected' : ''}`}
                  onClick={() => handleCardClick(service.id)}
                >
                  <div className="mini-icon-container">
                    {React.createElement(service.icon, { 
                      className: 'mini-product-icon'
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
                transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
              >
                <div className="chatbot-hero">
                  <h3 className="chatbot-hero-text">
                    Наш ИИ чат-бот обрабатывает до 55% обращений без участия оператора, обеспечивая круглосуточную поддержку клиентов.
                  </h3>
                </div>

                <div className="chatbot-features">
                  <motion.div className="feature-card" whileHover={{ scale: 1.02 }}>
                    <div className="feature-icon">
                      <IoStatsChartOutline />
                    </div>
                    <h4>Работает на собственной генеративной модели</h4>
                  </motion.div>

                  <motion.div className="feature-card uptime-card" whileHover={{ scale: 1.02 }}>
                    <div className="feature-icon">
                      <IoTimeOutline />
                    </div>
                    <h4>UPTIME 97%</h4>
                  </motion.div>

                  <motion.div className="feature-card" whileHover={{ scale: 1.02 }}>
                    <div className="feature-icon">
                      <IoSpeedometerOutline />
                    </div>
                    <h4>Быстрый доступ к базы знаний без участия разработчиков</h4>
                  </motion.div>
                </div>

                <div className="chatbot-capabilities">
                  <h3 className="section-title">Возможности</h3>
                  <div className="capabilities-grid">
                    <motion.div className="capability-item" whileHover={{ x: 5 }}>
                      <span className="capability-bullet">•</span>
                      <span>Поддержка сложных сценариев: KYC, бонусы, лимиты, блокировки</span>
                    </motion.div>
                    <motion.div className="capability-item" whileHover={{ x: 5 }}>
                      <span className="capability-bullet">•</span>
                      <span>Бесшовная интеграция с iGaming-платформой через API</span>
                    </motion.div>
                    <motion.div className="capability-item" whileHover={{ x: 5 }}>
                      <span className="capability-bullet">•</span>
                      <span>Адаптация под любой язык и бренд вашего казино</span>
                    </motion.div>
                    <motion.div className="capability-item" whileHover={{ x: 5 }}>
                      <span className="capability-bullet">•</span>
                      <span>Анализ настроения пользователя: Понимание эмоционального состояния клиента</span>
                    </motion.div>
                    <motion.div className="capability-item" whileHover={{ x: 5 }}>
                      <span className="capability-bullet">•</span>
                      <span>Масштабируемость: Обработка тысячи запросов одновременно</span>
                    </motion.div>
                  </div>
                </div>

                <div className="chatbot-stats">
                  <h3 className="section-title">Статистика Проектов</h3>
                  
                  <div className="case-study">
                    <h4 className="case-study-title">Пример из практики: Проект Alev</h4>
                    <p className="case-study-text">
                      Наш бот обработал 4,324 из 9,827 чатов (43.9%) в разрешенных группах пользователей.
                    </p>
                    <p className="case-study-note">
                      *Бот работал только с определенными группами пользователей. При полном развертывании потенциал значительно выше.
                    </p>
                  </div>

                  <div className="stats-grid">
                    <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
                      <div className="stat-number">4,324</div>
                      <div className="stat-label">Чатов обработано ботом</div>
                      <div className="stat-subtitle">Проект Alev, июнь 2025</div>
                    </motion.div>

                    <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
                      <div className="stat-number">87,210</div>
                      <div className="stat-label">Чатов CIS направление</div>
                      <div className="stat-subtitle">Из 171,704 общего количества (50.8%)</div>
                    </motion.div>

                    <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
                      <div className="stat-number">24/7</div>
                      <div className="stat-label">Время работы</div>
                      <div className="stat-subtitle">Непрерывная поддержка клиентов</div>
                    </motion.div>

                    <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
                      <div className="stat-number">2.5x</div>
                      <div className="stat-label">Увеличение эффективности</div>
                      <div className="stat-subtitle">Операторы обрабатывают сложные запросы</div>
                    </motion.div>
                  </div>
                </div>

                <div className="chatbot-pricing">
                  <h3 className="section-title">Стоимость Обслуживания</h3>
                  
                  <div className="pricing-comparison">
                    <motion.div className="pricing-card ai-pricing" whileHover={{ scale: 1.03 }}>
                      <div className="pricing-header">
                        <div className="pricing-icon">
                          <IoChatbubbleEllipsesOutline />
                        </div>
                        <h4>ИИ-бот</h4>
                      </div>
                      <div className="pricing-amount">$0.15</div>
                      <div className="pricing-label">за один чат</div>
                      <div className="pricing-features">
                        <div className="pricing-feature">✓ Только техническое обслуживание</div>
                        <div className="pricing-feature">✓ Работает 24/7</div>
                        <div className="pricing-feature">✓ Неограниченная масштабируемость</div>
                        <div className="pricing-feature">✓ Мгновенные обновления</div>
                      </div>
                    </motion.div>

                    <motion.div className="pricing-card operator-pricing" whileHover={{ scale: 1.03 }}>
                      <div className="pricing-header">
                        <div className="pricing-icon">
                          <IoCallOutline />
                        </div>
                        <h4>Оператор</h4>
                      </div>
                      <div className="pricing-amount">$0.60</div>
                      <div className="pricing-label">за один чат</div>
                      <div className="pricing-features">
                        <div className="pricing-feature">• Зарплата оператора</div>
                        <div className="pricing-feature">• Оплата отпускных/больничных</div>
                        <div className="pricing-feature">• Человеческий фактор</div>
                        <div className="pricing-feature">• Ограниченное время работы</div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="savings-highlight">
                    <h4>Пример экономии на проекте CIS (87,210 чатов в июне 2025):</h4>
                    <div className="savings-calculation">
                      <div className="calculation-row">
                        <span>Стоимость с операторами:</span>
                        <span className="cost-operator">$52,326</span>
                      </div>
                      <div className="calculation-row">
                        <span>Стоимость с ИИ-ботом:</span>
                        <span className="cost-ai">$13,082</span>
                      </div>
                      <div className="calculation-row savings-total">
                        <span>Экономия в месяц:</span>
                        <span className="savings-amount">$39,244</span>
                      </div>
                      <div className="calculation-row yearly">
                        <span>Годовая экономия:</span>
                        <span className="yearly-amount">$470,928</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="chatbot-roadmap">
                  <h3 className="section-title">Перспективы развития</h3>
                  <div className="roadmap-items">
                    <motion.div className="roadmap-item" whileHover={{ x: 10 }}>
                      <div className="roadmap-icon">
                        <IoGlobeOutline />
                      </div>
                      <div className="roadmap-content">
                        <h4>Глубокое обучение на пользовательских данных</h4>
                        <p>Самостоятельное выявление новых паттернов поведения и улучшение качества ответов</p>
                      </div>
                    </motion.div>

                    <motion.div className="roadmap-item" whileHover={{ x: 10 }}>
                      <div className="roadmap-icon">
                        <IoCallOutline />
                      </div>
                      <div className="roadmap-content">
                        <h4>Полная омниканальность</h4>
                        <p>Единое взаимодействие через любой канал с сохранением истории диалога</p>
                      </div>
                    </motion.div>

                    <motion.div className="roadmap-item" whileHover={{ x: 10 }}>
                      <div className="roadmap-icon">
                        <IoStatsChartOutline />
                      </div>
                      <div className="roadmap-content">
                        <h4>Интеграция с предиктивной аналитикой</h4>
                        <p>Прогнозирование оттока игроков и автоматическая активация целевых предложений</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
            
            {selectedId === 'callcenter' && (
              <motion.div 
                className="callcenter-info"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
              >
                <div className="callcenter-quality-control">
                  <div className="quality-control-hero">
                    <h3 className="quality-control-hero-title">Полная Автоматизация Контроля Звонков</h3>
                    <p className="quality-control-hero-text">
                      Полный контроль над качеством разговоров операторов без ручной проверки.
                    </p>
                  </div>

                  <div className="quality-control-features">
                    <motion.div className="quality-control-feature-card" whileHover={{ scale: 1.02 }}>
                      <div className="quality-control-feature-icon">
                        <IoAnalyticsOutline />
                      </div>
                      <h4>Распознавание Аудио-Звонков</h4>
                      <p>Использование передовой технологии Whisper для анализа всех звонков в реальном времени.</p>
                    </motion.div>

                    <motion.div className="quality-control-feature-card" whileHover={{ scale: 1.02 }}>
                      <div className="quality-control-feature-icon">
                        <IoCheckmarkCircleOutline />
                      </div>
                      <h4>Анализ Соблюдения Скрипта</h4>
                      <p>Проверка эмоционального фона, точности ответов и соблюдения установленных протоколов.</p>
                    </motion.div>

                    <motion.div className="quality-control-feature-card" whileHover={{ scale: 1.02 }}>
                      <div className="quality-control-feature-icon">
                        <IoStatsChartOutline />
                      </div>
                      <h4>Детальная Оценка</h4>
                      <p>Формирование подробной оценки и метрик по каждому оператору с персональными рекомендациями.</p>
                    </motion.div>

                    <motion.div className="quality-control-feature-card" whileHover={{ scale: 1.02 }}>
                      <div className="quality-control-feature-icon">
                        <IoCallOutline />
                      </div>
                      <h4>Универсальность</h4>
                      <p>Подходит как для входящих (Inbound), так и для исходящих (Outbound) звонков любого типа.</p>
                    </motion.div>
                  </div>

                  <div className="quality-control-current-process">
                    <motion.div className="quality-control-process-card" whileHover={{ scale: 1.02 }}>
                      <h4>Вам больше не нужен контролёр, чтобы узнать, как общаются ваши операторы</h4>
                      <div className="quality-control-stats-grid">
                        <motion.div className="quality-control-stat-card" whileHover={{ scale: 1.05 }}>
                          <div className="quality-control-stat-number">1,329</div>
                          <div className="quality-control-stat-label">Проверок звонков</div>
                          <div className="quality-control-stat-subtitle">1-2 специалиста по контролю качества</div>
                        </motion.div>

                        <motion.div className="quality-control-stat-card" whileHover={{ scale: 1.05 }}>
                          <div className="quality-control-stat-number">190</div>
                          <div className="quality-control-stat-label">Проверок на человека</div>
                          <div className="quality-control-stat-subtitle">За смену</div>
                        </motion.div>

                        <motion.div className="quality-control-stat-card" whileHover={{ scale: 1.05 }}>
                          <div className="quality-control-stat-number">3-5</div>
                          <div className="quality-control-stat-label">Минут на проверку</div>
                          <div className="quality-control-stat-subtitle">Ручной анализ</div>
                        </motion.div>

                        <motion.div className="quality-control-stat-card" whileHover={{ scale: 1.05 }}>
                          <div className="quality-control-stat-number">9.5-16</div>
                          <div className="quality-control-stat-label">Часов работы</div>
                          <div className="quality-control-stat-subtitle">На человека</div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="quality-control-economics">
                    <h3 className="section-title">Расчет Экономии</h3>
                    
                    <div className="quality-control-savings-table">
                      <div className="quality-control-table-header">
                        <div>Тип проверки</div>
                        <div>Количество</div>
                        <div>Время/проверка</div>
                        <div>Экономия времени</div>
                      </div>
                      <div className="quality-control-table-row">
                        <div>Full AI</div>
                        <div>446</div>
                        <div>5-15 сек</div>
                        <div>1,784 минуты (29.7 часов)</div>
                      </div>
                      <div className="quality-control-table-row">
                        <div>AI + Специалист</div>
                        <div>620</div>
                        <div>5-7 мин</div>
                        <div>1,240 минут (20.7 часов)</div>
                      </div>
                      <div className="quality-control-table-row">
                        <div>Full Специалист</div>
                        <div>85</div>
                        <div>4 мин</div>
                        <div>Без изменений</div>
                      </div>
                    </div>

                    <div className="quality-control-savings-highlight">
                      <h4>Ежедневная экономия на контроле качества звонков</h4>
                    </div>
                  </div>

                  <div className="quality-control-daily-savings">
                    <div className="quality-control-daily-grid">
                      <motion.div className="quality-control-daily-card" whileHover={{ scale: 1.05 }}>
                        <div className="quality-control-daily-number">50.4</div>
                        <div className="quality-control-daily-label">Часа экономии</div>
                        <div className="quality-control-daily-subtitle">Рабочего времени в день</div>
                      </motion.div>

                      <motion.div className="quality-control-daily-card" whileHover={{ scale: 1.05 }}>
                        <div className="quality-control-daily-number">6.3</div>
                        <div className="quality-control-daily-label">Рабочих места</div>
                        <div className="quality-control-daily-subtitle">В эквиваленте полной занятости</div>
                      </motion.div>

                      <motion.div className="quality-control-daily-card" whileHover={{ scale: 1.05 }}>
                        <div className="quality-control-daily-number">$1,260</div>
                        <div className="quality-control-daily-label">Экономия в день</div>
                        <div className="quality-control-daily-subtitle">На зарплатах</div>
                      </motion.div>

                      <motion.div className="quality-control-daily-card" whileHover={{ scale: 1.05 }}>
                        <div className="quality-control-daily-number">$453,600</div>
                        <div className="quality-control-daily-label">Годовая экономия</div>
                        <div className="quality-control-daily-subtitle">Общая сумма</div>
                      </motion.div>
                    </div>
                  </div>

                  <div className="quality-control-automation-stats">
                    <div className="quality-control-automation-grid">
                      <motion.div className="quality-control-automation-card" whileHover={{ scale: 1.05 }}>
                        <div className="quality-control-automation-number">95%</div>
                        <div className="quality-control-automation-label">Автоматизация</div>
                        <div className="quality-control-automation-subtitle">Проверок звонков ботом</div>
                      </motion.div>

                      <motion.div className="quality-control-automation-card" whileHover={{ scale: 1.05 }}>
                        <div className="quality-control-automation-number">6.3</div>
                        <div className="quality-control-automation-label">Рабочих мест</div>
                        <div className="quality-control-automation-subtitle">Экономия в эквиваленте</div>
                      </motion.div>

                      <motion.div className="quality-control-automation-card" whileHover={{ scale: 1.05 }}>
                        <div className="quality-control-automation-number">$37,800</div>
                        <div className="quality-control-automation-label">Месячная экономия</div>
                        <div className="quality-control-automation-subtitle">Только на зарплатах</div>
                      </motion.div>
                    </div>
                  </div>

                  <div className="quality-control-scaling">
                    <motion.div className="quality-control-scaling-card" whileHover={{ scale: 1.02 }}>
                      <h3>Масштабирование Результатов</h3>
                      <p>
                        Данные показывают, что при росте объемов Voice QA обеспечивает линейное масштабирование без увеличения штата специалистов по контролю качества. Каждые дополнительные 1000 проверок звонков в день экономят $28,500/месяц на зарплатах.
                      </p>
                    </motion.div>
                  </div>
                </div>

                <div className="voice-bot-section">
                  <div className="voice-hero">
                    <h3 className="voice-hero-text">
                      ИИ Voice Bot: Звонки Без Колл-Центра. Наш ИИ Voice Bot эффективно заменит ваш отдел прозвона, работая круглосуточно на нескольких языках.
                    </h3>
                  </div>

                  <div className="voice-features">
                    <motion.div className="voice-feature-card" whileHover={{ scale: 1.02 }}>
                      <div className="voice-feature-icon">
                        <IoCallOutline />
                      </div>
                      <h4>Автоматизированные Звонки</h4>
                      <p>Осуществляет обзвон клиентов для подтверждения операций, проведения промо-кампаний и верификации данных.</p>
                    </motion.div>

                    <motion.div className="voice-feature-card" whileHover={{ scale: 1.02 }}>
                      <div className="voice-feature-icon">
                        <IoChatbubbleEllipsesOutline />
                      </div>
                      <h4>Диалоговые Возможности</h4>
                      <p>Понимает голосовые ответы и поддерживает естественный, эффективный диалог с клиентом.</p>
                    </motion.div>

                    <motion.div className="voice-feature-card" whileHover={{ scale: 1.02 }}>
                      <div className="voice-feature-icon">
                        <IoLinkOutline />
                      </div>
                      <h4>Бесшовная Интеграция</h4>
                      <p>Полная интеграция с CRM-системами и платформами через триггеры и API для максимальной операционной эффективности.</p>
                    </motion.div>

                    <motion.div className="voice-feature-card" whileHover={{ scale: 1.02 }}>
                      <div className="voice-feature-icon">
                        <IoTimeOutline />
                      </div>
                      <h4>Работа 24/7</h4>
                      <p>Всегда следует заданному скрипту, сохраняет фокус и работает без перерывов, обеспечивая непрерывное обслуживание.</p>
                    </motion.div>
                  </div>

                  <div className="voice-economics">
                    <h3 className="section-title">Экономические Показатели</h3>
                    <div className="voice-stats-grid">
                      <motion.div className="voice-stat-card" whileHover={{ scale: 1.05 }}>
                        <div className="voice-stat-number">$300</div>
                        <div className="voice-stat-label">Стоимость создания</div>
                        <div className="voice-stat-subtitle">1 бота</div>
                      </motion.div>

                      <motion.div className="voice-stat-card" whileHover={{ scale: 1.05 }}>
                        <div className="voice-stat-number">$0.1</div>
                        <div className="voice-stat-label">За минуту разговора</div>
                        <div className="voice-stat-subtitle">Стоимость бота</div>
                      </motion.div>

                      <motion.div className="voice-stat-card" whileHover={{ scale: 1.05 }}>
                        <div className="voice-stat-number">$0.12</div>
                        <div className="voice-stat-label">Затраты на 1 лида</div>
                        <div className="voice-stat-subtitle">Средняя стоимость</div>
                      </motion.div>

                      <motion.div className="voice-stat-card" whileHover={{ scale: 1.05 }}>
                        <div className="voice-stat-number">28 сек</div>
                        <div className="voice-stat-label">Длительность разговора</div>
                        <div className="voice-stat-subtitle">В среднем</div>
                      </motion.div>
                    </div>

                    <div className="voice-performance">
                      <div className="voice-overview">
                        <motion.div className="voice-overview-card" whileHover={{ scale: 1.02 }}>
                          <h4>Показатели Эффективности</h4>
                          <div className="voice-overview-stats">
                            <div className="voice-overview-item">
                              <span>Общий дозвон:</span>
                              <span className="stat-number-large">~80%</span>
                            </div>
                            <div className="voice-overview-item">
                              <span>Дозвон без автоответчиков:</span>
                              <span className="stat-number-large">~25%</span>
                            </div>
                            <div className="voice-overview-item">
                              <span>Замещение отдела:</span>
                              <span className="stat-time">Полное</span>
                            </div>
                            <div className="voice-overview-item">
                              <span>Языковая поддержка:</span>
                              <span className="stat-time">Многоязычность</span>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  <div className="voice-comparison">
                    <h3 className="section-title">Расчет Экономии</h3>
                    <p style={{ textAlign: 'center', color: '#ccc', marginBottom: '40px' }}>
                      Для примера, рассмотрим один бот, обрабатывающий до 2500 живых разговоров в день.
                    </p>
                    
                    <div className="voice-comparison-table">
                      <div className="voice-table-header">
                        <div>Параметр</div>
                        <div>Человек-оператор (за 8 часов)</div>
                        <div>ИИ Voice Bot (за 24 часа)</div>
                      </div>
                      <div className="voice-table-row">
                        <div>Объем живых разговоров/день</div>
                        <div>250</div>
                        <div>2500</div>
                      </div>
                      <div className="voice-table-row">
                        <div>Средняя зарплата оператора/день</div>
                        <div>$100</div>
                        <div>N/A</div>
                      </div>
                      <div className="voice-table-row">
                        <div>Стоимость 1 разговора</div>
                        <div>$0.4</div>
                        <div>$0.12</div>
                      </div>
                      <div className="voice-table-row">
                        <div>Общие затраты на объем в 2500 разговоров</div>
                        <div>$1000 (для 10 операторов)</div>
                        <div>$300</div>
                      </div>
                    </div>
                  </div>

                  <div className="voice-total-savings">
                    <div className="voice-savings-grid">
                      <motion.div className="voice-savings-card" whileHover={{ scale: 1.05 }}>
                        <div className="voice-savings-number">$700</div>
                        <div className="voice-savings-label">Ежедневная экономия</div>
                        <div className="voice-savings-subtitle">На операционных расходах</div>
                      </motion.div>

                      <motion.div className="voice-savings-card" whileHover={{ scale: 1.05 }}>
                        <div className="voice-savings-number">$21,000</div>
                        <div className="voice-savings-label">Месячная экономия</div>
                        <div className="voice-savings-subtitle">Средняя экономия</div>
                      </motion.div>

                      <motion.div className="voice-savings-card" whileHover={{ scale: 1.05 }}>
                        <div className="voice-savings-number">$252,000</div>
                        <div className="voice-savings-label">Годовая экономия</div>
                        <div className="voice-savings-subtitle">Общая сумма</div>
                      </motion.div>

                      <motion.div className="voice-savings-card" whileHover={{ scale: 1.05 }}>
                        <div className="voice-savings-number">24/7</div>
                        <div className="voice-savings-label">Доступность</div>
                        <div className="voice-savings-subtitle">Непрерывный режим работы</div>
                      </motion.div>
                    </div>
                  </div>

                  <div className="voice-replacement">
                    <motion.div className="voice-replacement-card" whileHover={{ scale: 1.02 }}>
                      <h3>Увеличение Объема</h3>
                      <p>
                        Один бот способен заменить целый отдел прозвона и выполнять эту работу одновременно на нескольких языках. Количество обрабатываемых звонков в день растет пропорционально месячной экономии на операционных расходах.
                      </p>
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
                transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
              >
                <div className="qa-hero">
                  <h3 className="qa-hero-text">
                    Автоматизируйте контроль качества обслуживания клиентов с помощью ИИ-анализа каждого чата в режиме реального времени.
                  </h3>
                </div>

                <div className="qa-features">
                  <motion.div className="qa-feature-card" whileHover={{ scale: 1.02 }}>
                    <div className="qa-feature-icon">
                      <IoEyeOutline />
                    </div>
                    <h4>Мгновенный Анализ Чатов</h4>
                    <p>Система обрабатывает каждое сообщение оператора, выявляя нарушения протокола и качества обслуживания.</p>
                  </motion.div>

                  <motion.div className="qa-feature-card" whileHover={{ scale: 1.02 }}>
                    <div className="qa-feature-icon">
                      <IoCheckmarkCircleOutline />
                    </div>
                    <h4>15 Критериев Оценки</h4>
                    <p>Вежливость, полнота ответа, соблюдение скрипта, время реакции, грамматика, работа с возражениями, предложение бонусов и 8 других параметров.</p>
                  </motion.div>

                  <motion.div className="qa-feature-card" whileHover={{ scale: 1.02 }}>
                    <div className="qa-feature-icon">
                      <IoAnalyticsOutline />
                    </div>
                    <h4>Персональная Аналитика</h4>
                    <p>Еженедельные отчеты для каждого оператора с детализацией по слабым местам и рекомендациями для улучшения показателей на 25-40%.</p>
                  </motion.div>

                  <motion.div className="qa-feature-card" whileHover={{ scale: 1.02 }}>
                    <div className="qa-feature-icon">
                      <IoShieldCheckmarkOutline />
                    </div>
                    <h4>Неограниченная Масштабируемость</h4>
                    <p>Обрабатывает 50,000 чатов в сутки одновременно, работая с любым количеством операторов без снижения качества анализа.</p>
                  </motion.div>
                </div>

                <div className="qa-revolution">
                  <motion.div className="revolution-card" whileHover={{ scale: 1.03 }}>
                    <h3>Революция в QA</h3>
                    <div className="revolution-comparison">
                      <div className="revolution-old">
                        <span className="revolution-number">2-3</span>
                        <span>чата из 1000 вручную</span>
                      </div>
                      <div className="revolution-arrow">→</div>
                      <div className="revolution-new">
                        <span className="revolution-number">1000</span>
                        <span>чатов с точностью 94,2%</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="qa-economics">
                  <h3 className="section-title">Экономическая Эффективность</h3>
                  
                  <div className="qa-cost-highlight">
                    <h4>Стоимость проверки 1000 чатов ботом составляет $60, что в 8 раз дешевле содержания QA-команды.</h4>
                  </div>

                  <div className="qa-pricing-comparison">
                    <motion.div className="qa-pricing-card qa-team-card" whileHover={{ scale: 1.03 }}>
                      <div className="qa-pricing-header">
                        <div className="qa-pricing-icon">
                          <IoCallOutline />
                        </div>
                        <h4>Традиционная QA-команда</h4>
                      </div>
                      <div className="qa-team-details">
                        <div className="qa-detail-item">5 человек — проверяют 25,000 чатов/месяц</div>
                        <div className="qa-detail-item">Зарплата команды: $5,000/месяц</div>
                        <div className="qa-detail-item">Отпускные/Больничные</div>
                        <div className="qa-detail-item">Человеческий фактор</div>
                        <div className="qa-total-cost">Итого: $7,000/месяц</div>
                        <div className="qa-per-thousand">Стоимость за 1000 чатов: <span className="cost-high">$280</span></div>
                      </div>
                    </motion.div>

                    <motion.div className="qa-pricing-card qa-bot-card" whileHover={{ scale: 1.03 }}>
                      <div className="qa-pricing-header">
                        <div className="qa-pricing-icon">
                          <IoShieldCheckmarkOutline />
                        </div>
                        <h4>QA Бот</h4>
                      </div>
                      <div className="qa-bot-details">
                        <div className="qa-detail-item">Неограниченная проверка чатов</div>
                        <div className="qa-detail-item">Без дополнительных расходов</div>
                        <div className="qa-detail-item">Работает 24/7</div>
                        <div className="qa-detail-item">100% покрытие всех чатов</div>
                        <div className="qa-detail-item">Мгновенные результаты</div>
                        <div className="qa-per-thousand">Стоимость за 1000 чатов: <span className="cost-low">$60</span></div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div className="qa-savings-table">
                  <h3 className="section-title">Расчет экономии на реальных объемах</h3>
                  <div className="qa-table">
                    <div className="qa-table-header">
                      <div>Объем чатов/месяц</div>
                      <div>Стоимость QA-команды</div>
                      <div>Стоимость QA Бота</div>
                      <div>Экономия</div>
                      <div>Экономия %</div>
                    </div>
                    <motion.div className="qa-table-row" whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                      <div>25,000</div>
                      <div className="cost-high">$7,000</div>
                      <div className="cost-low">$1,500</div>
                      <div className="savings-amount">$5,500</div>
                      <div>78.6%</div>
                    </motion.div>
                    <motion.div className="qa-table-row" whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                      <div>50,000</div>
                      <div className="cost-high">$14,000</div>
                      <div className="cost-low">$3,000</div>
                      <div className="savings-amount">$11,000</div>
                      <div>78.6%</div>
                    </motion.div>
                    <motion.div className="qa-table-row" whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                      <div>100,000</div>
                      <div className="cost-high">$28,000</div>
                      <div className="cost-low">$6,000</div>
                      <div className="savings-amount">$22,000</div>
                      <div>78.6%</div>
                    </motion.div>
                    <motion.div className="qa-table-row" whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                      <div>200,000</div>
                      <div className="cost-high">$56,000</div>
                      <div className="cost-low">$12,000</div>
                      <div className="savings-amount">$44,000</div>
                      <div>78.6%</div>
                    </motion.div>
                  </div>
                </div>

                <div className="qa-example">
                  <motion.div className="qa-example-card" whileHover={{ scale: 1.02 }}>
                    <h3>Пример экономии на 100,000 чатов в месяц</h3>
                    <div className="qa-example-comparison">
                      <div className="qa-example-item">
                        <span>QA-команда (20 человек):</span>
                        <span className="cost-high">$28,000/месяц</span>
                      </div>
                      <div className="qa-example-item">
                        <span>QA Бот:</span>
                        <span className="cost-low">$6,000/месяц</span>
                      </div>
                      <div className="qa-example-savings">
                        <span>Экономия:</span>
                        <span className="savings-amount">$22,000/месяц</span>
                      </div>
                      <div className="qa-example-yearly">
                        <span>Годовая экономия:</span>
                        <span className="yearly-amount">$264,000</span>
                      </div>
                    </div>
                    <div className="qa-coverage-bonus">
                      <strong>Плюс: 100% покрытие vs 10-15% при ручной проверке</strong>
                    </div>
                  </motion.div>
                </div>

                <div className="qa-functionality">
                  <h3 className="section-title">Детальная Функциональность Системы</h3>
                  <div className="qa-dashboard-preview">
                    <h4>Панель Управления QA отображает результаты анализа всех чатов:</h4>
                    <div className="qa-dashboard-features">
                      <motion.div className="qa-dashboard-item" whileHover={{ x: 10 }}>
                        <span className="qa-dashboard-bullet">•</span>
                        <span><strong>Чат ID</strong> — уникальный номер для быстрого поиска (например: CHT-240315-001)</span>
                      </motion.div>
                      <motion.div className="qa-dashboard-item" whileHover={{ x: 10 }}>
                        <span className="qa-dashboard-bullet">•</span>
                        <span><strong>Общая оценка</strong> — балл от 1 до 100 на основе всех критериев</span>
                      </motion.div>
                      <motion.div className="qa-dashboard-item" whileHover={{ x: 10 }}>
                        <span className="qa-dashboard-bullet">•</span>
                        <span><strong>Цветовая индикация</strong> — зеленый (85-100), желтый (70-84), красный (менее 70)</span>
                      </motion.div>
                      <motion.div className="qa-dashboard-item" whileHover={{ x: 10 }}>
                        <span className="qa-dashboard-bullet">•</span>
                        <span><strong>Время обработки</strong> — длительность чата и среднее время ответа</span>
                      </motion.div>
                      <motion.div className="qa-dashboard-item" whileHover={{ x: 10 }}>
                        <span className="qa-dashboard-bullet">•</span>
                        <span><strong>Критические нарушения</strong> — автоматическое выделение серьезных ошибок</span>
                      </motion.div>
                      <motion.div className="qa-dashboard-item" whileHover={{ x: 10 }}>
                        <span className="qa-dashboard-bullet">•</span>
                        <span><strong>Дата и смена</strong> — временные метки для трендового анализа</span>
                      </motion.div>
                    </div>
                  </div>
                </div>

                <div className="qa-results">
                  <h3 className="section-title">Результаты внедрения</h3>
                  <div className="qa-results-grid">
                    <motion.div className="qa-result-card" whileHover={{ scale: 1.05 }}>
                      <div className="qa-result-number">87%</div>
                      <div className="qa-result-label">Сокращение времени QA-проверки</div>
                    </motion.div>
                    <motion.div className="qa-result-card" whileHover={{ scale: 1.05 }}>
                      <div className="qa-result-number">31%</div>
                      <div className="qa-result-label">Повышение качества обслуживания</div>
                    </motion.div>
                    <motion.div className="qa-result-card" whileHover={{ scale: 1.05 }}>
                      <div className="qa-result-number">3.2x</div>
                      <div className="qa-result-label">Выявление скрытых проблем быстрее</div>
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
                transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
              >
                <div className="payment-hero">
                  <h3 className="payment-hero-text">
                    Наш бот создан для автоматизации и упрощения процесса обработки заявок, поступающих от платёжной системы, и предназначен для оптимизации повседневной работы сотрудников.
                  </h3>
                </div>

                <div className="payment-features">
                  <motion.div className="payment-feature-card" whileHover={{ scale: 1.02 }}>
                    <div className="payment-feature-icon">
                      <IoFlashOutline />
                    </div>
                    <h4>Мгновенные Ответы</h4>
                    <p>Время реакции на вопросы "где мой депозит/вывод?" сокращается с 3-5 минут до 1 секунды.</p>
                  </motion.div>

                  <motion.div className="payment-feature-card" whileHover={{ scale: 1.02 }}>
                    <div className="payment-feature-icon">
                      <IoLinkOutline />
                    </div>
                    <h4>Интеграция с ИИ Чат-Ботом</h4>
                    <p>Чат-Бот автоматически создает тикет по запросу о непришедшем депозите, а Payment Бот берет их в работу.</p>
                  </motion.div>

                  <motion.div className="payment-feature-card" whileHover={{ scale: 1.02 }}>
                    <div className="payment-feature-icon">
                      <IoStatsChartOutline />
                    </div>
                    <h4>Прямая Связь с PSP</h4>
                    <p>Получает информацию о транзакциях напрямую из платежной системы через API интеграцию.</p>
                  </motion.div>

                  <motion.div className="payment-feature-card" whileHover={{ scale: 1.02 }}>
                    <div className="payment-feature-icon">
                      <IoDocumentTextOutline />
                    </div>
                    <h4>Автоматизация Процессов</h4>
                    <p>Автоматизация создания тикетов и передачи данных в платежную систему с полным контролем.</p>
                  </motion.div>
                </div>

                <div className="payment-efficiency">
                  <h3 className="section-title">Эффективность Автоматизации</h3>
                  <div className="payment-stats-grid">
                    <motion.div className="payment-stat-card" whileHover={{ scale: 1.05 }}>
                      <div className="payment-stat-number">4%</div>
                      <div className="payment-stat-label">Полностью решено ботом</div>
                      <div className="payment-stat-subtitle">Из 100% обработанных тикетов</div>
                    </motion.div>

                    <motion.div className="payment-stat-card" whileHover={{ scale: 1.05 }}>
                      <div className="payment-stat-number">100%</div>
                      <div className="payment-stat-label">Участие в обработке</div>
                      <div className="payment-stat-subtitle">Создание тикетов и передача данных</div>
                    </motion.div>

                    <motion.div className="payment-stat-card" whileHover={{ scale: 1.05 }}>
                      <div className="payment-stat-number">1 сек</div>
                      <div className="payment-stat-label">Время ответа</div>
                      <div className="payment-stat-subtitle">Вместо 3-5 минут</div>
                    </motion.div>

                    <motion.div className="payment-stat-card" whileHover={{ scale: 1.05 }}>
                      <div className="payment-stat-number">24/7</div>
                      <div className="payment-stat-label">Режим работы</div>
                      <div className="payment-stat-subtitle">Критически важный этап</div>
                    </motion.div>
                  </div>
                </div>

                <div className="payment-real-data">
                  <h3 className="section-title">Реальные Данные (CIS Проекты)</h3>
                  
                  <div className="payment-overview">
                    <motion.div className="payment-overview-card" whileHover={{ scale: 1.02 }}>
                      <h4>Июнь 2025 - Общие Показатели</h4>
                      <div className="payment-overview-stats">
                        <div className="payment-overview-item">
                          <span>Всего тикетов:</span>
                          <span className="stat-number-large">44,743</span>
                        </div>
                        <div className="payment-overview-item">
                          <span>Человек в отделе:</span>
                          <span className="stat-number-large">30</span>
                        </div>
                        <div className="payment-overview-item">
                          <span>Среднее время (с ботом):</span>
                          <span className="stat-time">4:20 мин</span>
                        </div>
                        <div className="payment-overview-item">
                          <span>Среднее время (без бота):</span>
                          <span className="stat-time">8:00 мин</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="payment-monthly-comparison">
                    <h4>Сравнение Июнь vs Июль</h4>
                    <div className="payment-comparison-table">
                      <div className="payment-table-header">
                        <div>Показатель</div>
                        <div>Июнь (среднее)</div>
                        <div>Июль (среднее)</div>
                      </div>
                      <motion.div className="payment-table-row" whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                        <div>Тикетов за смену (с дублями)</div>
                        <div>1,418</div>
                        <div>710</div>
                      </motion.div>
                      <motion.div className="payment-table-row" whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                        <div>Дубликаты</div>
                        <div>184</div>
                        <div>9</div>
                      </motion.div>
                      <motion.div className="payment-table-row" whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                        <div>Обработано ботом</div>
                        <div>915</div>
                        <div>523</div>
                      </motion.div>
                      <motion.div className="payment-table-row" whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                        <div>Полностью решено ботом</div>
                        <div>655</div>
                        <div>234</div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                <div className="payment-automation-analysis">
                  <h3 className="section-title">Анализ Эффективности</h3>
                  
                  <div className="automation-comparison">
                    <motion.div className="automation-card with-bot" whileHover={{ scale: 1.03 }}>
                      <div className="automation-header">
                        <div className="automation-icon">
                          <IoTimerOutline />
                        </div>
                        <h4>С автоматизацией (июнь)</h4>
                      </div>
                      <div className="automation-details">
                        <div className="automation-item">44,743 тикетов обработано</div>
                        <div className="automation-item">Средняя скорость: 4:20 мин</div>
                        <div className="automation-item">Общее время: 3,230 часов/месяц</div>
                        <div className="automation-item">Необходимый штат: ~20 человек</div>
                        <div className="automation-highlight">Экономия: до 480 часов/месяц</div>
                        <div className="automation-highlight">Мгновенные ответы клиентам</div>
                      </div>
                    </motion.div>

                    <motion.div className="automation-card without-bot" whileHover={{ scale: 1.03 }}>
                      <div className="automation-header">
                        <div className="automation-icon">
                          <IoTimeOutline />
                        </div>
                        <h4>Без автоматизации</h4>
                      </div>
                      <div className="automation-details">
                        <div className="automation-item">44,743 тикетов</div>
                        <div className="automation-item">Средняя скорость: 8:00 мин</div>
                        <div className="automation-item">Общее время: 5,966 часов/месяц</div>
                        <div className="automation-item">Необходимый штат: ~37 человек</div>
                        <div className="automation-problem">Требуется на 17+ операторов больше</div>
                        <div className="automation-problem">Задержки в ответах клиентам</div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div className="payment-savings">
                  <h3 className="section-title">Месячная экономия на проекте CIS</h3>
                  
                  <div className="payment-savings-grid">
                    <motion.div className="payment-savings-card" whileHover={{ scale: 1.05 }}>
                      <div className="payment-savings-number">2,736</div>
                      <div className="payment-savings-label">Часов сэкономлено</div>
                      <div className="payment-savings-subtitle">Ежемесячно</div>
                    </motion.div>

                    <motion.div className="payment-savings-card" whileHover={{ scale: 1.05 }}>
                      <div className="payment-savings-number">17.1</div>
                      <div className="payment-savings-label">Рабочих мест</div>
                      <div className="payment-savings-subtitle">Экономия в эквиваленте</div>
                    </motion.div>

                    <motion.div className="payment-savings-card" whileHover={{ scale: 1.05 }}>
                      <div className="payment-savings-number">$20,520</div>
                      <div className="payment-savings-label">Месячная экономия</div>
                      <div className="payment-savings-subtitle">Только на зарплатах</div>
                    </motion.div>

                    <motion.div className="payment-savings-card yearly-card" whileHover={{ scale: 1.05 }}>
                      <div className="payment-savings-number">$246,240</div>
                      <div className="payment-savings-label">Годовая экономия</div>
                      <div className="payment-savings-subtitle">При средней ЗП $1,200/мес</div>
                    </motion.div>
                  </div>
                </div>

                <div className="payment-bot-functions">
                  <h3 className="section-title">Функционал Бота</h3>
                  <div className="payment-functions-card">
                    <h4>Бот добавляет к запросу кнопки:</h4>
                    <div className="payment-buttons-grid">
                      <motion.div className="payment-button" whileHover={{ scale: 1.05 }}>Закрыто</motion.div>
                      <motion.div className="payment-button" whileHover={{ scale: 1.05 }}>Выписка</motion.div>
                      <motion.div className="payment-button" whileHover={{ scale: 1.05 }}>Нет платежа</motion.div>
                      <motion.div className="payment-button" whileHover={{ scale: 1.05 }}>Другое</motion.div>
                      <motion.div className="payment-button" whileHover={{ scale: 1.05 }}>Необходимо время</motion.div>
                      <motion.div className="payment-button" whileHover={{ scale: 1.05 }}>Закрыли с изменением суммы</motion.div>
                      <motion.div className="payment-button" whileHover={{ scale: 1.05 }}>Требуется финальный чек</motion.div>
                      <motion.div className="payment-button" whileHover={{ scale: 1.05 }}>Не наши реквизиты</motion.div>
                      <motion.div className="payment-button" whileHover={{ scale: 1.05 }}>Назад</motion.div>
                    </div>
                  </div>
                </div>

                <div className="payment-scaling">
                  <motion.div className="payment-scaling-card" whileHover={{ scale: 1.02 }}>
                    <h3>Масштабирование Результатов</h3>
                    <p>
                      Данные показывают, что при росте объемов Payment Bot обеспечивает значительное масштабирование 
                      без пропорционального увеличения штата операторов. Каждые дополнительные 1,000 тикетов в день 
                      могут приносить существенную экономию за счет автоматизации.
                    </p>
                  </motion.div>
                </div>

                <div className="payment-pilot-note">
                  <motion.div className="pilot-note-card" whileHover={{ scale: 1.02 }}>
                    <h4>📝 Примечание</h4>
                    <p>
                      Данный продукт находится в пилотной стадии. Фиксированная цена на данный момент отсутствует 
                      и может быть сформирована и обсуждена индивидуально, исходя из объемов работы.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
