import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  ru: {
    // Navigation
    home: 'Главная',
    products: 'Продукты',
    language: 'Язык',
    
    // Home page
    heroTitle: 'Qodeq — автоматизация поддержки, которая работает с первого дня',
    heroSubtitle: 'Узнайте, как наши ИИ-боты помогут сократить расходы и повысить качество сервиса',
    heroDescription: 'Qodeq — AI платформа для автоматизации поддержки, колл-центра и платежей',
    whyQodeqTitle: 'Почему Qodeq',
    startButton: 'Начать',
    productsTitle: 'Продукты платформы',
    totalAutomated: 'всего объёма работы автоматизировано',
    chatRequests: 'запросов обработано чат-ботом',
    callCenter: 'звонков обработано ботом колл-центра',
    paymentTickets: 'платёжных тикетов решено платёжным ботом',
    qualityChecks: 'проверок проведено AI-ботом качества',
    
    // Value propositions
    valueProp1: 'Автоматизация до 70% чатов, звонков и обращений.',
    valueProp2: 'Экономия до $50,000 в месяц на поддержке.',
    valueProp3: 'Поддержка до 15 языков.',
    valueProp4: 'Интеграция с CRM, платёжными системами и игровыми платформами.',
    valueProp5: 'Аналитика и контроль качества.',
    
    // Testimonials
    testimonial1: 'С Qodeq мы сократили расходы на поддержку на 45% и ускорили обработку платёжных тикетов в 5 раз.',
    testimonial1Author: 'Руководитель поддержки',
    testimonial1Company: 'Ведущий iGaming бренд',
    testimonial2: 'Эффективность колл-центра выросла на 60%. ИИ отлично справляется с рутинными запросами, а команда фокусируется на сложных случаях.',
    testimonial2Author: 'Операционный директор',
    testimonial2Company: 'Платформа онлайн-казино',
    testimonial3: 'Внедрение прошло без проблем. Уже через 2 недели время ответа на запросы клиентов сократилось на 70%.',
    testimonial3Author: 'Менеджер по работе с клиентами',
    testimonial3Company: 'Финтех-стартап',
    testimonial4: 'Мультиязычная поддержка открыла для нас новые рынки. Теперь обслуживаем клиентов на 12 языках без усилий.',
    testimonial4Author: 'Руководитель международного бизнеса',
    testimonial4Company: 'Глобальная беттинг-компания',
    testimonial5: 'ROI был заметен с первого дня. Платформа окупается за счёт экономии и роста удовлетворённости клиентов.',
    testimonial5Author: 'Технический директор',
    testimonial5Company: 'Платёжная компания',
    
    // How it works
    howItWorksTitle: 'Как работает Qodeq',
    howItWorksSubtitle: 'Простой процесс внедрения и настройки',
    integrationTitle: 'Интеграция',
    integrationDescription: 'Подключение чатов, звонков и платежей через единый API.',
    processingTitle: 'Обработка на базе ИИ',
    processingDescription: 'Умные боты автоматически обрабатывают до 70% стандартных запросов.',
    escalationTitle: 'Умная эскалация',
    escalationDescription: 'Сложные случаи направляются операторам.',
    
    // Target audience section
    targetAudienceTitle: 'Для кого',
    targetAudienceSubtitle: 'Qodeq подходит для:',
    targetAudience1: 'Онлайн-казино и букмекерские компании',
    targetAudience2: 'Финтех и платёжные сервисы',
    targetAudience3: 'Колл-центры и отделы поддержки',
    
    // Products page
    chatbotTitle: 'Чат-бот',
    chatbotSubtitle: 'До 40% запросов',
    chatbotDescription: 'Чат-бот на базе ИИ для автоматической обработки обращений пользователей.',
    chatbotHeroTitle: 'Чат-бот: автоматизация поддержки',
    chatbotHeroSubtitle: 'Обрабатывай до 40% запросов автоматически, сокращай нагрузку на операторов',
    chatbotHeroDescription: 'Чат-бот на базе ИИ для автоматической обработки обращений пользователей.',
    chatbotFullDescription: `Чат-бот на базе ИИ для автоматической обработки обращений пользователей.
    
    Основные преимущества:
    • Мгновенные ответы 24/7
    • Поддержка нескольких языков
    • Интеграция с популярными мессенджерами
    • Автоматическая эскалация сложных случаев
    • Аналитика и отчёты`,
    chatbotFeatures: ['Ответы на базе ИИ', 'Мультиязычность', 'Интеграция с CRM', 'Аналитика запросов'],
    
    callCenterTitle: 'Бот для колл-центра',
    callCenterSubtitle: 'До 80% звонков',
    callCenterDescription: 'Интеллектуальная система обработки телефонных звонков с распознаванием речи.',
    callCenterFullDescription: `Интеллектуальная система обработки телефонных звонков с распознаванием речи.
    
    Основные преимущества:
    • Автоматическая обработка стандартных запросов
    • Мультиязычное распознавание речи
    • Естественный синтез голоса
    • Интеграция с существующей телефонией
    • Детальная статистика звонков`,
    callCenterFeatures: ['Распознавание речи', 'Синтез голоса', 'Маршрутизация звонков', 'Запись звонков'],
    
    paymentTitle: 'Платёжный бот',
    paymentSubtitle: 'До 70% тикетов',
    paymentDescription: 'Автоматизированная система обработки платёжных запросов и поддержки.',
    paymentFullDescription: `Автоматизированная система обработки платёжных запросов и поддержки.
    
    Основные преимущества:
    • Автоматическая проверка статуса платежа
    • Помощь с депозитами и выводами
    • Интеграция с платёжными системами
    • Безопасная обработка данных
    • Мониторинг транзакций`,
    paymentFeatures: ['Проверка платежей', 'Автоматизация выводов', 'Безопасность', 'История транзакций'],
    
    qaTitle: 'QA-бот',
    qaSubtitle: 'До 80% проверок',
    qaDescription: 'Система контроля качества сервиса на базе искусственного интеллекта.',
    qaFullDescription: `Система контроля качества сервиса на базе искусственного интеллекта.
    
    Основные преимущества:
    • Автоматический анализ диалогов
    • Оценка качества ответов
    • Выявление проблем
    • Рекомендации по улучшению
    • Формирование отчётов`,
    qaFeatures: ['Анализ диалогов ИИ', 'Оценка качества', 'Рекомендации', 'Отчёты'],
    
    // Products page specific texts
    productsPageTitle: 'Продукты',
    chatbotHeroTitle: 'Qodeq: автоматизируй до 55% запросов без операторов',
    chatbotHeroSubtitle: 'Сократи расходы на поддержку, ускорь ответы и обеспечь круглосуточную помощь клиентам.',
    calculateCostButton: 'Рассчитать стоимость',
    examplesTitle: 'Примеры',
    // Key metrics
    keyMetricsTitle: 'Основные показатели',
    stableSystemWork: 'Стабильная работа системы',
    knowledgeBase: 'База знаний',
    quickAccessNoDevs: 'Быстрый доступ без разработчиков',
    monthlySavings100k: 'Экономия при 100k чатов',
    processesCalls: 'Обрабатывает звонков',
    monthlySavings50k: 'Экономия при 50k звонков',
    // System capabilities
    systemCapabilitiesTitle: 'Возможности системы',
    kycBonusesLimits: 'KYC, бонусы, лимиты, блокировки',
    fullSupportComplexScenarios: 'Полная поддержка сложных сценариев',
    integrationIgamingApi: 'Интеграция с iGaming API',
    seamlessPlatformIntegration: 'Бесшовная интеграция с платформой',
    supportAnyLanguageBrand: 'Поддержка любого языка и бренда',
    adaptationToYourCasino: 'Адаптация под ваше казино',
    customerEmotionAnalysis: 'Анализ эмоций клиентов',
    understandingEmotionalState: 'Понимание эмоционального состояния',
    scalability: 'Масштабируемость',
    thousandsRequestsSimultaneously: 'Тысячи запросов одновременно',
    // Call center capabilities
    incomingOutgoingCalls: 'Приём входящих и исходящих звонков',
    fullPhoneSupportCycle: 'Полный цикл телефонной поддержки',
    voiceSynthesisSpeechRecognition: 'Голосовой синтез и распознавание речи',
    naturalCustomerCommunication: 'Естественное общение с клиентами',
    integrationCrmTelephony: 'Интеграция с CRM и телефонией',
    seamlessSystemWork: 'Бесшовная работа с системами',
    supportUpTo15Languages: 'Поддержка до 15 языков',
    internationalCustomerSupport: 'Международная поддержка клиентов',
    massCallingCampaign: 'Массовая обзвонная кампания',
    automationThousandsCustomers: 'Автоматизация обзвона тысяч клиентов',
    // Economics section texts
    perChat: 'за чат',
    operator: 'Оператор',
    aiBot: 'ИИ-бот',
    timesCheaper: 'x дешевле',
    savingsPercentage: '% экономии',
    requestsWithoutHuman: 'запросов без участия человека',
    savingsWith100kChats: 'экономия при 100k чатов в месяц',
    responseTimeReduction: 'сокращение времени ответа',
    callAutomation: 'автоматизация звонков',
    callCenterCostReduction: 'сокращение расходов колл-центра',
    roundTheClockSupport: 'круглосуточная поддержка',
    operatorCostPerMinute: 'Стоимость оператора за минуту:',
    changesInEconomicsSection: '(изменяется в разделе "Экономический эффект")',
    changesInEconomicsSectionSavings: '(изменяется в разделе "Экономия в цифрах")',
    monthlyChatsCount: 'Количество чатов в месяц:',
    // Metric values
    savings500kPerYear: '$500k/год',
    // Calculator texts
    chats: 'чатов',
    minutes: 'минут',
    checks: 'проверок',
    withOperators: 'С операторами:',
    withAiBot: 'С ИИ-ботом:',
    withCallBot: 'С Call Bot:',
    withQaSpecialists: 'С QA-специалистами:',
    withQaBot: 'С QA Bot:',
    savings: 'Экономия:',
    perMonth: '/мес',
    monthlyCallMinutes: 'Количество минут звонков в месяц:',
    monthlyChatChecks: 'Количество проверок чатов в месяц:',
    qaSpecialistCostPerCheck: 'Стоимость QA-специалиста за проверку:',
    // Chat messages
    helloHowAreYou: 'Привет! Как дела?',
    greatReadyToHelp: 'Отлично! Готов помочь вам с любыми вопросами 😊',
    // Call Center Bot texts
    callCenterBotTitle: 'ИИ Call Center Bot: автоматизация звонков без операторов',
    callCenterBotSubtitle: 'Сократи расходы на колл-центр до 70% и обеспечь круглосуточную поддержку по телефону.',
    browserNotSupportAudio: 'Ваш браузер не поддерживает аудио.',
    upTo80Percent: 'До 80%',
    uptime97Percent: 'UPTIME 97%',
    // Economic Effect texts
    economicEffect: 'Экономический эффект',
    operatorCostPerCallMinute: 'Стоимость оператора за минуту звонка:',
    perMinute: 'за минуту',
    callBot: 'Call Bot',
    perMinuteValue: '/ минута',
    // Calculator titles
    callsCalculator: 'звонков',
    qaCalculator: 'QA',
    // Pricing section texts
    serviceCost: 'Стоимость обслуживания',
    perMinutePricing: 'за минуту',
    perCheckPricing: 'за проверку',
    perTicketPricing: 'за тикет',
    automaticProcessing: 'Автоматическая обработка',
    works247: 'Работает 24/7',
    unlimitedScalability: 'Неограниченная масштабируемость',
    crmIntegration: 'Интеграция с CRM',
    operatorSalary: 'Зарплата оператора',
    vacationSickLeave: 'Отпускные/больничные',
    humanFactor: 'Человеческий фактор',
    limitedWorkingHours: 'Ограниченные часы работы',
    instantProcessing: 'Мгновенная обработка',
    hundredPercentCoverage: '100% покрытие чатов',
    automaticReports: 'Автоматические отчёты',
    qaSpecialist: 'QA-специалист',
    processingTime15to30min: 'Время обработки 15-30 мин',
    coverage2to5percent: 'Покрытие 2-5% чатов',
    workInShifts: 'Работа в смены',
    subjectiveAssessment: 'Субъективная оценка',
    pspIntegration: 'Интеграция с PSP',
    automaticAnalytics: 'Автоматическая аналитика',
    processingTime3to5min: 'Время обработки 3-5 мин',
    additionalExpenses: 'Дополнительные расходы',
    // Prospects section texts
    developmentProspects: 'Перспективы развития',
    // Call Center prospects
    speechSynthesisImprovement: 'Улучшение качества синтеза речи',
    speechSynthesisDescription: 'Еще более естественное звучание и эмоциональная окраска голоса',
    whatsappTelegramIntegration: 'Интеграция с WhatsApp/Telegram звонками',
    whatsappTelegramDescription: 'Расширение каналов коммуникации для максимального охвата',
    smartCallsWithAi: 'Smart-обзвоны с ИИ-персонализацией',
    smartCallsDescription: 'Индивидуальный подход к каждому клиенту на основе поведенческой аналитики',
    // QA prospects
    multilingualQaScripts: 'Поддержка мультиязычных QA-скриптов',
    multilingualQaDescription: 'Расширение системы для работы с международными командами и многоязычной поддержкой клиентов',
    hrLmsIntegration: 'Интеграция с HR и LMS-системами',
    hrLmsDescription: 'Автоматическая синхронизация с системами управления персоналом и обучающими платформами',
    automaticOperatorRecommendations: 'Автоматическая выдача рекомендаций операторам',
    operatorRecommendationsDescription: 'Персонализированные советы по улучшению качества работы на основе анализа ошибок',
    // Payment prospects
    cryptoProcessingIntegration: 'Подключение крипто-процессинга',
    cryptoProcessingDescription: 'Интеграция с блокчейн-сетями и криптовалютными платформами для обработки децентрализованных платежей',
    smartAnomalyChecks: 'Smart-проверки аномалий',
    anomalyChecksDescription: 'Машинное обучение для выявления подозрительных транзакций и предотвращения мошенничества',
    predictivePaymentAnalytics: 'Предиктивная аналитика платежных сбоев',
    paymentAnalyticsDescription: 'Прогнозирование возможных проблем с платежами и превентивные меры по их устранению',
    // Payment Bot texts
    paymentBotTitle: 'ИИ Payment Bot: автоматизация обработки платежей',
    paymentBotSubtitle: 'Сократи нагрузку на саппорт, обрабатывай до 70% тикетов по платежам автоматически',
    keyFacts: 'Ключевые факты',
    closesUpTo70PercentTickets: 'Закрывает до 70% тикетов по депозитам/выводам',
    savingsUpTo20kPerMonth: 'Экономия до $20k/мес при 30k тикетов',
    paymentSystemsIntegration: 'Интеграция с платёжными системами',
    // Payment Bot capabilities
    transactionStatusCheck: 'Проверка статуса транзакций',
    instantPaymentOperationsCheck: 'Мгновенная проверка платежных операций',
    pspBanksIntegration: 'Интеграция с PSP/банками',
    directPaymentProvidersConnection: 'Прямое подключение к платёжным провайдерам',
    automaticDelayResponses: 'Автоматические ответы по задержкам',
    delayedPaymentsStatusNotifications: 'Уведомления о статусе задержанных платежей',
    loggingAndAnalytics: 'Логирование и аналитика',
    detailedOperationsReporting: 'Детальная отчётность по всем операциям',
    scalabilityTensOfThousands: 'Масштабируемость (десятки тысяч запросов)',
    largeVolumeTransactionsProcessing: 'Обработка больших объёмов транзакций',
    // Payment Bot Economic Effect
    paymentBot: 'Payment Bot',
    perTicket: '/ тикет',
    savingsUpTo4x: 'Экономия до 4x',
    seventyPercentAutomation: '70% автоматизации',
    // QA Bot texts
    qaBotTitle: 'ИИ QA Bot: контроль качества поддержки',
    qaBotSubtitle: 'Проводи до 80% проверок чатов и звонков автоматически, экономь время тимлидов и супервайзеров',
    lookAtExample: 'Посмотреть пример',
    // QA Bot Modal
    qaBotExampleTitle: 'Пример работы QA Bot',
    qaBotExampleSubtitle: 'Посмотрите, как ИИ автоматически проверяет качество чатов',
    zoomIn: 'Увеличить',
    zoomOut: 'Уменьшить',
    qaBotDashboard: 'QA Bot Dashboard',
    qaBotDashboardExample: 'Пример интерфейса системы контроля качества',
    qaBotAnalyticsDashboard: 'QA Bot Analytics Dashboard',
    qaBotAnalyticsDescription: 'Панель аналитики показывает ключевые метрики качества обслуживания: общее количество чатов (4,250), средний рейтинг (94.2), общее количество ошибок (1,420) и детальную статистику по операторам с их показателями эффективности.',
    // QA Bot facts
    performsUpTo80PercentQaChecks: 'Выполняет до 80% QA-проверок',
    savingsUpTo500HoursQaWork: 'Экономия до 500 часов работы QA в месяц',
    automaticKpiScoring: 'Автоматический скоринг по KPI',
    // QA Bot capabilities
    chatCallChecklistsCheck: 'Проверка чатов и звонков по чек-листам',
    comprehensiveStandardsComplianceCheck: 'Комплексная проверка соблюдения стандартов',
    reportAndMetricsGeneration: 'Формирование отчётов и метрик',
    detailedAnalyticsOnAllIndicators: 'Детальная аналитика по всем показателям',
    automaticOperatorScoring: 'Автоматический скоринг операторов',
    objectiveEmployeeWorkAssessment: 'Объективная оценка работы сотрудников',
    sentimentAnalysis: 'Анализ тональности',
    emotionalCommunicationToneDetection: 'Определение эмоциональной окраски общения',
    scalabilityTensOfThousandsChats: 'Масштабируемость до десятков тысяч чатов',
    largeVolumeProcessingWithoutQualityLoss: 'Обработка больших объёмов без потери качества',
    // QA Bot Economic Effect
    qaOperatorCostPerChatCheck: 'Стоимость оператора QA за проверку чата:',
    perCheck: 'за проверку',
    qaOperator: 'Оператор QA',
    qaBot: 'QA Bot',
    perCheckValue: '/ проверка',
    timesCheaper: 'x дешевле',
    savingsPercentage: '% экономии',
    // How Qodeq Works
    analyticsReports: 'Аналитика и отчёты',
    detailedReportsAnalytics: 'Подробные отчёты и аналитика для руководства.',
    // Example questions
    exampleQ1: 'Как пополнить счет?',
    exampleQ2: 'Подскажите, какие документы нужны для верификации?',
    exampleQ3: 'В каком статусе у меня вывод?',
    exampleQ4: 'Могу вывести на криптовалюту, если депозит был совершенен с карты?',
    exampleQ5: 'Могу использовать ВПН?',
    exampleQ6: 'У вас есть бонус на День Рождения?',
    exampleQ7: 'Как сменить язык сайта?',
    exampleQ8: 'Как отыграть бонус?',
    exampleQ9: 'Сколько занимает проверка документов?',
    exampleQ10: 'Как долго выводите средства?',
    exampleQ11: 'Когда приходит кешбэк?',
    exampleQ12: 'У вас есть приветственные бонусы?',
    exampleQ13: 'Что такое РТП?',
    exampleQ14: 'Зачем нужна верификация?',
    exampleQ15: 'Не пришел депозит, что делать?',
    exampleQ16: 'У вас есть реферальная программа?',
    exampleQ17: 'Как подтвердить почту?',
    exampleQ18: 'Где вводить промокод?',
    exampleQ19: 'Где найти условия бонуса?',
    // Example answers
    exampleA1: 'Для пополнения счета перейдите в раздел "Депозит", выберите удобный способ оплаты из списка и укажите сумму. Средства поступят на баланс сразу после подтверждения транзакции.',
    exampleA2: 'Для стандартной верификации Вам потребуются: 📋 Фотография основной страницы паспорта. 📸 Селфи с первой страницей паспорта в руке. 📄 Фото страницы с пропиской. Для полной верификации могут запросить: 💳 Фото карты с двух сторон (видны первые 6 и последние 4 цифры, срок действия, ФИО; CVV можно закрыть). Все данные должны быть читабельны и без бликов. Статус верификации можно проверить в разделе "Верификация".',
    exampleA3: 'Проверьте статус Вашего вывода в разделе "История транзакций" в личном кабинете. Там Вы увидите текущий статус и причину отмены.',
    exampleA4: 'Нет, вывод должен осуществляться тем же способом, которым был произведен депозит. Подробнее — в разделе "Правила и условия".',
    exampleA5: 'Использование VPN может повлиять на доступ к казино. Рекомендуем использовать прямое подключение к интернету для стабильной и безопасной игры.',
    exampleA6: 'Да, бонус доступен за 1 день до и 3 дня после дня рождения. Требуется: верифицированный аккаунт, депозиты от 3000 RUB за полгода, уровень лояльности не ниже 2-го. Для активации обратитесь к старшему специалисту.',
    exampleA7: 'Вы можете изменить язык сайта кликнув на слайдер в левом нижнем углу экрана и выбрать подходящий язык интерфейса.',
    exampleA8: 'Условия отыгрыша зависят от конкретного бонуса. Ознакомьтесь с правилами в разделе "Мои бонусы" в личном кабинете.',
    exampleA9: 'Верификация занимает до 24 часов (обычно несколько часов). Статус можно проверить в разделе "Верификация".',
    exampleA10: 'Официальный срок — до 24 часов, обычно 1–2 часа. Возможны задержки из-за платёжной системы. Статус заявки — в "Истории транзакций".',
    exampleA11: 'Кешбэк начисляется еженедельно, в понедельник в 4:00 по МСК. Увидеть его можно в разделе "Мои бонусы".',
    exampleA12: 'Приветственный пакет включает бонусы на первые 3 депозита. Подробности — в разделе "Мои бонусы и награды".',
    exampleA13: 'РТП (Return to Player) — процент возврата игроку от всех ставок в игре. Например, РТП 96% означает, что на каждые 100 рублей 96 возвращаются игрокам. Подробнее — в описании игры.',
    exampleA14: 'Верификация подтверждает вашу личность и защищает средства. Загрузите документы в разделе "Верификация". Обычно занимает до 24 часов.',
    exampleA15: 'Предоставьте копию квитанции из банка с успешным статусом платежа или справку/чек/выписку. Квитанцию можно найти в "Истории операций".',
    exampleA16: 'Информация о партнёрской программе: https://bit.ly/r7_aff_program. Там можно зарегистрироваться и узнать условия.',
    exampleA17: 'Перейдите по ссылке из письма, отправленного при регистрации. Если не получили письмо — проверьте "Спам" или запросите повторную отправку в разделе "Профиль".',
    exampleA18: 'Промокоды вводятся в разделе "Профиль" в графе "Есть код для бонуса?"',
    exampleA19: 'Условия бонусов — в разделе "Бонусы" на главной странице сайта. Там указаны требования к вейджеру, ограничения и максимальный выигрыш.',
    calculatorTitle: 'Калькулятор экономии',
    operatorCostLabel: 'Стоимость оператора за чат:',
    dailyChatsLabel: 'Количество чатов в день:',
    economicsTitle: 'Экономия в цифрах',
    serviceCostTitle: 'Стоимость обслуживания',
    beforeAutomation: 'До автоматизации',
    afterAutomation: 'После автоматизации',
    operatorResponseTime: 'Время ответа оператора',
    automatedResponseTime: 'Время ответа бота',
    minutes: 'минут',
    seconds: 'секунд',
    monthlySavings: 'Экономия в месяц',
    requestsProcessed: 'заявок обработано',
    
    // Footer
    footerCopyright: '© 2025 Qodeq. Все права защищены.',
    footerCreatedBy: 'created by softqod.com',
    footerTelegram: 'TG:',
    footerEmail: 'manager@softqod.com',
    
    // Common
    examples: 'Примеры',
    keyMetrics: 'Основные показатели',
    systemCapabilities: 'Возможности системы',
    economicEffect: 'Экономический эффект',
    costCalculator: 'Калькулятор экономии',
    serviceCost: 'Стоимость обслуживания',
    developmentProspects: 'Перспективы развития',
    keyFacts: 'Ключевые факты',
    viewExample: 'Посмотреть пример',
    close: 'Закрыть'
  },
  
  en: {
    // Navigation
    home: 'Home',
    products: 'Products',
    language: 'Language',
    
    // Home page
    heroTitle: 'Qodeq — support automation that works from day one',
    heroSubtitle: 'Learn how our AI bots can help reduce costs and improve service quality',
    heroDescription: 'Qodeq — AI platform for support, call center and payment automation',
    whyQodeqTitle: 'Why Qodeq',
    startButton: 'Start',
    productsTitle: 'Platform Products',
    totalAutomated: 'of total work volume automated',
    chatRequests: 'requests processed by chatbot',
    callCenter: 'calls processed by call center bot',
    paymentTickets: 'payment tickets resolved by payment bot',
    qualityChecks: 'quality checks performed by AI bot',
    
    // Value propositions
    valueProp1: 'Automation of up to 70% of chats, calls and inquiries.',
    valueProp2: 'Savings of up to $50,000 per month on support.',
    valueProp3: 'Support for up to 15 languages.',
    valueProp4: 'Integration with CRM, payment systems and gaming platforms.',
    valueProp5: 'Analytics and quality control.',
    
    // Testimonials
    testimonial1: 'With Qodeq, we reduced support costs by 45% and accelerated payment ticket processing by 5 times.',
    testimonial1Author: 'Support Manager',
    testimonial1Company: 'Leading iGaming Brand',
    testimonial2: 'Call center efficiency increased by 60%. AI handles routine requests excellently, while the team focuses on complex cases.',
    testimonial2Author: 'Operations Director',
    testimonial2Company: 'Online Casino Platform',
    testimonial3: 'Implementation went smoothly. Within 2 weeks, customer response time decreased by 70%.',
    testimonial3Author: 'Customer Relations Manager',
    testimonial3Company: 'Fintech Startup',
    testimonial4: 'Multilingual support opened new markets for us. Now we serve customers in 12 languages effortlessly.',
    testimonial4Author: 'International Business Director',
    testimonial4Company: 'Global Betting Company',
    testimonial5: 'ROI was noticeable from day one. The platform pays for itself through savings and increased customer satisfaction.',
    testimonial5Author: 'Technical Director',
    testimonial5Company: 'Payment Company',
    
    // How it works
    howItWorksTitle: 'How Qodeq Works',
    howItWorksSubtitle: 'Simple implementation and setup process',
    integrationTitle: 'Integration',
    integrationDescription: 'Connect chats, calls and payments through a single API.',
    processingTitle: 'AI-based Processing',
    processingDescription: 'Smart bots automatically handle up to 70% of standard requests.',
    escalationTitle: 'Smart Escalation',
    escalationDescription: 'Complex cases are directed to operators.',
    
    // Target audience section
    targetAudienceTitle: 'Who is it for',
    targetAudienceSubtitle: 'Qodeq is suitable for:',
    targetAudience1: 'Online casinos and betting companies',
    targetAudience2: 'Fintech and payment services',
    targetAudience3: 'Call centers and support departments',
    
    // Products page
    chatbotTitle: 'Chatbot',
    chatbotSubtitle: 'Up to 40% of requests',
    chatbotDescription: 'AI-powered chatbot for automatic processing of user inquiries.',
    chatbotFullDescription: `AI-powered chatbot for automatic processing of user inquiries.
    
    Key advantages:
    • Instant responses 24/7
    • Multi-language support
    • Integration with popular messengers
    • Automatic escalation of complex cases
    • Analytics and reports`,
    chatbotFeatures: ['AI-powered responses', 'Multi-language', 'CRM integration', 'Request analytics'],
    
    callCenterTitle: 'Call Center Bot',
    callCenterSubtitle: 'Up to 80% of calls',
    callCenterDescription: 'Intelligent phone call processing system with speech recognition.',
    callCenterFullDescription: `Intelligent phone call processing system with speech recognition.
    
    Key advantages:
    • Automatic processing of standard requests
    • Multi-language speech recognition
    • Natural voice synthesis
    • Integration with existing telephony
    • Detailed call statistics`,
    callCenterFeatures: ['Speech recognition', 'Voice synthesis', 'Call routing', 'Call recording'],
    
    paymentTitle: 'Payment Bot',
    paymentSubtitle: 'Up to 70% of tickets',
    paymentDescription: 'Automated system for processing payment requests and support.',
    paymentFullDescription: `Automated system for processing payment requests and support.
    
    Key advantages:
    • Automatic payment status verification
    • Help with deposits and withdrawals
    • Integration with payment systems
    • Secure data processing
    • Transaction monitoring`,
    paymentFeatures: ['Payment verification', 'Withdrawal automation', 'Security', 'Transaction history'],
    
    qaTitle: 'QA Bot',
    qaSubtitle: 'Up to 80% of checks',
    qaDescription: 'Service quality control system based on artificial intelligence.',
    qaFullDescription: `Service quality control system based on artificial intelligence.
    
    Key advantages:
    • Automatic dialogue analysis
    • Response quality assessment
    • Problem identification
    • Improvement recommendations
    • Report generation`,
    qaFeatures: ['AI dialogue analysis', 'Quality assessment', 'Recommendations', 'Reports'],
    
    // Products page specific texts
    productsPageTitle: 'Products',
    chatbotHeroTitle: 'Qodeq: automate up to 55% of requests without operators',
    chatbotHeroSubtitle: 'Reduce support costs, speed up responses and provide 24/7 customer assistance.',
    calculateCostButton: 'Calculate cost',
    examplesTitle: 'Examples',
    // Key metrics
    keyMetricsTitle: 'Key Metrics',
    stableSystemWork: 'Stable system operation',
    knowledgeBase: 'Knowledge Base',
    quickAccessNoDevs: 'Quick access without developers',
    monthlySavings100k: 'Savings with 100k chats',
    processesCalls: 'Processes calls',
    monthlySavings50k: 'Savings with 50k calls',
    // System capabilities
    systemCapabilitiesTitle: 'System Capabilities',
    kycBonusesLimits: 'KYC, bonuses, limits, blocks',
    fullSupportComplexScenarios: 'Full support for complex scenarios',
    integrationIgamingApi: 'Integration with iGaming API',
    seamlessPlatformIntegration: 'Seamless platform integration',
    supportAnyLanguageBrand: 'Support for any language and brand',
    adaptationToYourCasino: 'Adaptation to your casino',
    customerEmotionAnalysis: 'Customer emotion analysis',
    understandingEmotionalState: 'Understanding emotional state',
    scalability: 'Scalability',
    thousandsRequestsSimultaneously: 'Thousands of requests simultaneously',
    // Call center capabilities
    incomingOutgoingCalls: 'Incoming and outgoing call handling',
    fullPhoneSupportCycle: 'Full phone support cycle',
    voiceSynthesisSpeechRecognition: 'Voice synthesis and speech recognition',
    naturalCustomerCommunication: 'Natural communication with customers',
    integrationCrmTelephony: 'Integration with CRM and telephony',
    seamlessSystemWork: 'Seamless work with systems',
    supportUpTo15Languages: 'Support for up to 15 languages',
    internationalCustomerSupport: 'International customer support',
    massCallingCampaign: 'Mass calling campaign',
    automationThousandsCustomers: 'Automation of calling thousands of customers',
    // Economics section texts
    perChat: 'per chat',
    operator: 'Operator',
    aiBot: 'AI Bot',
    timesCheaper: 'x cheaper',
    savingsPercentage: '% savings',
    requestsWithoutHuman: 'requests without human involvement',
    savingsWith100kChats: 'savings with 100k chats per month',
    responseTimeReduction: 'response time reduction',
    callAutomation: 'call automation',
    callCenterCostReduction: 'call center cost reduction',
    roundTheClockSupport: '24/7 support',
    operatorCostPerMinute: 'Operator cost per minute:',
    changesInEconomicsSection: '(changes in "Economic Effect" section)',
    changesInEconomicsSectionSavings: '(changes in "Savings in numbers" section)',
    monthlyChatsCount: 'Number of chats per month:',
    // Metric values
    savings500kPerYear: '$500k/year',
    // Calculator texts
    chats: 'chats',
    minutes: 'minutes',
    checks: 'checks',
    withOperators: 'With operators:',
    withAiBot: 'With AI Bot:',
    withCallBot: 'With Call Bot:',
    withQaSpecialists: 'With QA specialists:',
    withQaBot: 'With QA Bot:',
    savings: 'Savings:',
    perMonth: '/month',
    monthlyCallMinutes: 'Number of call minutes per month:',
    monthlyChatChecks: 'Number of chat checks per month:',
    qaSpecialistCostPerCheck: 'QA specialist cost per check:',
    // Chat messages
    helloHowAreYou: 'Hello! How are you?',
    greatReadyToHelp: 'Great! Ready to help you with any questions 😊',
    // Call Center Bot texts
    callCenterBotTitle: 'AI Call Center Bot: call automation without operators',
    callCenterBotSubtitle: 'Reduce call center costs by up to 70% and provide 24/7 phone support.',
    browserNotSupportAudio: 'Your browser does not support audio.',
    upTo80Percent: 'Up to 80%',
    uptime97Percent: 'UPTIME 97%',
    // Economic Effect texts
    economicEffect: 'Economic Effect',
    operatorCostPerCallMinute: 'Operator cost per call minute:',
    perMinute: 'per minute',
    callBot: 'Call Bot',
    perMinuteValue: '/ minute',
    // Calculator titles
    callsCalculator: 'calls',
    qaCalculator: 'QA',
    // Pricing section texts
    serviceCost: 'Service Cost',
    perMinutePricing: 'per minute',
    perCheckPricing: 'per check',
    perTicketPricing: 'per ticket',
    automaticProcessing: 'Automatic processing',
    works247: 'Works 24/7',
    unlimitedScalability: 'Unlimited scalability',
    crmIntegration: 'CRM integration',
    operatorSalary: 'Operator salary',
    vacationSickLeave: 'Vacation/sick leave',
    humanFactor: 'Human factor',
    limitedWorkingHours: 'Limited working hours',
    instantProcessing: 'Instant processing',
    hundredPercentCoverage: '100% chat coverage',
    automaticReports: 'Automatic reports',
    qaSpecialist: 'QA specialist',
    processingTime15to30min: 'Processing time 15-30 min',
    coverage2to5percent: 'Coverage 2-5% chats',
    workInShifts: 'Work in shifts',
    subjectiveAssessment: 'Subjective assessment',
    pspIntegration: 'PSP integration',
    automaticAnalytics: 'Automatic analytics',
    processingTime3to5min: 'Processing time 3-5 min',
    additionalExpenses: 'Additional expenses',
    // Prospects section texts
    developmentProspects: 'Development Prospects',
    // Call Center prospects
    speechSynthesisImprovement: 'Speech synthesis quality improvement',
    speechSynthesisDescription: 'Even more natural sound and emotional voice coloring',
    whatsappTelegramIntegration: 'Integration with WhatsApp/Telegram calls',
    whatsappTelegramDescription: 'Expanding communication channels for maximum coverage',
    smartCallsWithAi: 'Smart calls with AI personalization',
    smartCallsDescription: 'Individual approach to each client based on behavioral analytics',
    // QA prospects
    multilingualQaScripts: 'Support for multilingual QA scripts',
    multilingualQaDescription: 'Expanding the system to work with international teams and multilingual customer support',
    hrLmsIntegration: 'Integration with HR and LMS systems',
    hrLmsDescription: 'Automatic synchronization with personnel management systems and learning platforms',
    automaticOperatorRecommendations: 'Automatic operator recommendations',
    operatorRecommendationsDescription: 'Personalized advice for improving work quality based on error analysis',
    // Payment prospects
    cryptoProcessingIntegration: 'Crypto processing integration',
    cryptoProcessingDescription: 'Integration with blockchain networks and cryptocurrency platforms for decentralized payment processing',
    smartAnomalyChecks: 'Smart anomaly checks',
    anomalyChecksDescription: 'Machine learning for detecting suspicious transactions and preventing fraud',
    predictivePaymentAnalytics: 'Predictive payment failure analytics',
    paymentAnalyticsDescription: 'Predicting possible payment problems and preventive measures to resolve them',
    // Payment Bot texts
    paymentBotTitle: 'AI Payment Bot: payment processing automation',
    paymentBotSubtitle: 'Reduce support workload, automatically process up to 70% of payment tickets',
    keyFacts: 'Key Facts',
    closesUpTo70PercentTickets: 'Closes up to 70% of deposit/withdrawal tickets',
    savingsUpTo20kPerMonth: 'Savings up to $20k/month with 30k tickets',
    paymentSystemsIntegration: 'Integration with payment systems',
    // Payment Bot capabilities
    transactionStatusCheck: 'Transaction status check',
    instantPaymentOperationsCheck: 'Instant payment operations check',
    pspBanksIntegration: 'Integration with PSP/banks',
    directPaymentProvidersConnection: 'Direct connection to payment providers',
    automaticDelayResponses: 'Automatic delay responses',
    delayedPaymentsStatusNotifications: 'Notifications about delayed payment status',
    loggingAndAnalytics: 'Logging and analytics',
    detailedOperationsReporting: 'Detailed reporting on all operations',
    scalabilityTensOfThousands: 'Scalability (tens of thousands of requests)',
    largeVolumeTransactionsProcessing: 'Processing large volumes of transactions',
    // Payment Bot Economic Effect
    paymentBot: 'Payment Bot',
    perTicket: '/ ticket',
    savingsUpTo4x: 'Savings up to 4x',
    seventyPercentAutomation: '70% automation',
    // QA Bot texts
    qaBotTitle: 'AI QA Bot: support quality control',
    qaBotSubtitle: 'Conduct up to 80% of chat and call checks automatically, save time for team leads and supervisors',
    lookAtExample: 'View example',
    // QA Bot Modal
    qaBotExampleTitle: 'QA Bot Work Example',
    qaBotExampleSubtitle: 'See how AI automatically checks chat quality',
    zoomIn: 'Zoom in',
    zoomOut: 'Zoom out',
    qaBotDashboard: 'QA Bot Dashboard',
    qaBotDashboardExample: 'Quality control system interface example',
    qaBotAnalyticsDashboard: 'QA Bot Analytics Dashboard',
    qaBotAnalyticsDescription: 'The analytics panel shows key service quality metrics: total number of chats (4,250), average rating (94.2), total number of errors (1,420) and detailed statistics on operators with their performance indicators.',
    // QA Bot facts
    performsUpTo80PercentQaChecks: 'Performs up to 80% of QA checks',
    savingsUpTo500HoursQaWork: 'Savings up to 500 hours of QA work per month',
    automaticKpiScoring: 'Automatic KPI scoring',
    // QA Bot capabilities
    chatCallChecklistsCheck: 'Chat and call checklist verification',
    comprehensiveStandardsComplianceCheck: 'Comprehensive standards compliance check',
    reportAndMetricsGeneration: 'Report and metrics generation',
    detailedAnalyticsOnAllIndicators: 'Detailed analytics on all indicators',
    automaticOperatorScoring: 'Automatic operator scoring',
    objectiveEmployeeWorkAssessment: 'Objective employee work assessment',
    sentimentAnalysis: 'Sentiment analysis',
    emotionalCommunicationToneDetection: 'Emotional communication tone detection',
    scalabilityTensOfThousandsChats: 'Scalability up to tens of thousands of chats',
    largeVolumeProcessingWithoutQualityLoss: 'Large volume processing without quality loss',
    // QA Bot Economic Effect
    qaOperatorCostPerChatCheck: 'QA operator cost per chat check:',
    perCheck: 'per check',
    qaOperator: 'QA Operator',
    qaBot: 'QA Bot',
    perCheckValue: '/ check',
    timesCheaper: 'x cheaper',
    savingsPercentage: '% savings',
    // How Qodeq Works
    analyticsReports: 'Analytics and Reports',
    detailedReportsAnalytics: 'Detailed reports and analytics for management.',
    // Example questions
    exampleQ1: 'How to top up my account?',
    exampleQ2: 'What documents are needed for verification?',
    exampleQ3: 'What is the status of my withdrawal?',
    exampleQ4: 'Can I withdraw to cryptocurrency if deposit was made with a card?',
    exampleQ5: 'Can I use VPN?',
    exampleQ6: 'Do you have birthday bonuses?',
    exampleQ7: 'How to change website language?',
    exampleQ8: 'How to wager a bonus?',
    exampleQ9: 'How long does document verification take?',
    exampleQ10: 'How long do you process withdrawals?',
    exampleQ11: 'When does cashback arrive?',
    exampleQ12: 'Do you have welcome bonuses?',
    exampleQ13: 'What is RTP?',
    exampleQ14: 'Why is verification needed?',
    exampleQ15: 'Deposit did not arrive, what to do?',
    exampleQ16: 'Do you have a referral program?',
    exampleQ17: 'How to confirm email?',
    exampleQ18: 'Where to enter promo code?',
    exampleQ19: 'Where to find bonus terms?',
    // Example answers
    exampleA1: 'To top up your account, go to the "Deposit" section, select a convenient payment method from the list and specify the amount. Funds will be credited to your balance immediately after transaction confirmation.',
    exampleA2: 'For standard verification you will need: 📋 Photo of the main passport page. 📸 Selfie with the first passport page in hand. 📄 Photo of the registration page. For full verification may be requested: 💳 Photo of the card from both sides (first 6 and last 4 digits visible, expiration date, name; CVV can be covered). All data must be readable and without glare. Verification status can be checked in the "Verification" section.',
    exampleA3: 'Check the status of your withdrawal in the "Transaction History" section in your personal account. There you will see the current status and reason for cancellation.',
    exampleA4: 'No, withdrawal must be made using the same method as the deposit. More details — in the "Terms and Conditions" section.',
    exampleA5: 'Using VPN may affect access to the casino. We recommend using a direct internet connection for stable and secure gaming.',
    exampleA6: 'Yes, the bonus is available 1 day before and 3 days after your birthday. Required: verified account, deposits from 3000 RUB for six months, loyalty level not lower than 2nd. To activate, contact a senior specialist.',
    exampleA7: 'You can change the website language by clicking on the slider in the lower left corner of the screen and selecting the appropriate interface language.',
    exampleA8: 'Wagering conditions depend on the specific bonus. Check the rules in the "My Bonuses" section in your personal account.',
    exampleA9: 'Verification takes up to 24 hours (usually a few hours). Status can be checked in the "Verification" section.',
    exampleA10: 'Official term — up to 24 hours, usually 1–2 hours. Delays are possible due to the payment system. Application status — in "Transaction History".',
    exampleA11: 'Cashback is credited weekly, on Monday at 4:00 MSK. You can see it in the "My Bonuses" section.',
    exampleA12: 'The welcome package includes bonuses for the first 3 deposits. Details — in the "My Bonuses and Rewards" section.',
    exampleA13: 'RTP (Return to Player) — percentage of return to the player from all bets in the game. For example, RTP 96% means that for every 100 rubles, 96 are returned to players. More details — in the game description.',
    exampleA14: 'Verification confirms your identity and protects funds. Upload documents in the "Verification" section. Usually takes up to 24 hours.',
    exampleA15: 'Provide a copy of the bank receipt with successful payment status or certificate/receipt/statement. The receipt can be found in "Transaction History".',
    exampleA16: 'Information about the partner program: https://bit.ly/r7_aff_program. You can register there and learn the conditions.',
    exampleA17: 'Follow the link from the email sent during registration. If you did not receive the email — check "Spam" or request resending in the "Profile" section.',
    exampleA18: 'Promo codes are entered in the "Profile" section in the "Have a bonus code?" field.',
    exampleA19: 'Bonus terms — in the "Bonuses" section on the main page of the site. There are wagering requirements, restrictions and maximum winnings.',
    calculatorTitle: 'Cost Calculator',
    operatorCostLabel: 'Operator cost per chat:',
    dailyChatsLabel: 'Number of chats per day:',
    economicsTitle: 'Savings in numbers',
    serviceCostTitle: 'Service Cost',
    beforeAutomation: 'Before automation',
    afterAutomation: 'After automation',
    operatorResponseTime: 'Operator response time',
    automatedResponseTime: 'Bot response time',
    minutes: 'minutes',
    seconds: 'seconds',
    monthlySavings: 'Monthly savings',
    requestsProcessed: 'requests processed',
    
    // Footer
    footerCopyright: '© 2025 Qodeq. All rights reserved.',
    footerCreatedBy: 'created by softqod.com',
    footerTelegram: 'TG:',
    footerEmail: 'manager@softqod.com',
    
    // Common
    examples: 'Examples',
    keyMetrics: 'Key Metrics',
    systemCapabilities: 'System Capabilities',
    economicEffect: 'Economic Effect',
    costCalculator: 'Cost Calculator',
    serviceCost: 'Service Cost',
    developmentProspects: 'Development Prospects',
    keyFacts: 'Key Facts',
    viewExample: 'View Example',
    close: 'Close'
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key) => {
    return translations[language][key] || key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ru' ? 'en' : 'ru');
  };

  const value = {
    language,
    t,
    toggleLanguage
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
