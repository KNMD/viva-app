const translation = {
  api: {
    success: 'Успіх',
    actionSuccess: 'Дію виконано успішно',
    saved: 'Збережено',
    create: 'Створено',
    remove: 'Видалено',
  },
  operation: {
    create: 'Створити',
    confirm: 'Підтвердити',
    cancel: 'Скасувати',
    clear: 'Очистити',
    save: 'Зберегти',
    edit: 'Редагувати',
    add: 'Додати',
    added: 'Додано',
    refresh: 'Перезапустити',
    reset: 'Скинути',
    search: 'Пошук',
    change: 'Змінити',
    remove: 'Видалити',
    send: 'Надіслати',
    copy: 'Копіювати',
    lineBreak: 'Перенесення рядка',
    sure: 'Я впевнений',
    download: 'Завантажити',
    delete: 'Видалити',
    settings: 'Налаштування',
    setup: 'Налаштувати',
    getForFree: 'Отримати безкоштовно',
    reload: 'Перезавантажити',
    ok: 'ОК',
    log: 'Журнал',
    learnMore: 'Дізнатися більше',
    params: 'Параметри',
    duplicate: 'дублікат',
    rename: 'Перейменувати',
  },
  placeholder: {
    input: 'Будь ласка, введіть текст',
    select: 'Будь ласка, оберіть параметр',
  },
  voice: {
    language: {
      zhHans: 'Китайська',
      enUS: 'Англійська',
      deDE: 'Німецька',
      frFR: 'Французька',
      esES: 'Іспанська',
      itIT: 'Італійська',
      thTH: 'Тайська',
      idID: 'Індонезійська',
      jaJP: 'Японська',
      koKR: 'Корейська',
      ptBR: 'Португальська',
      ruRU: 'Російська',
      ukUA: 'Українська',
    },
  },
  unit: {
    char: 'символів',
  },
  actionMsg: {
    noModification: 'На даний момент жодних змін немає.',
    modifiedSuccessfully: 'Успішно змінено',
    modifiedUnsuccessfully: 'Змінити не вдалося',
    copySuccessfully: 'Скопійовано успішно',
    paySucceeded: 'Платіж пройшов успішно',
    payCancelled: 'Платіж скасовано',
    generatedSuccessfully: 'Успішно згенеровано',
    generatedUnsuccessfully: 'Не вдалося згенерувати',
  },
  model: {
    params: {
      temperature: 'Температура',
      temperatureTip:
                'Контролює випадковість: зменшення призводить до менш випадкових завершень. Коли температура наближається до нуля, модель стане детермінованою та повторюваною.',
      top_p: 'Топ P',
      top_pTip:
                'Контролює різноманітність за допомогою вибірки ядра: 0,5 означає, що розглядається половина всіх зважених за ймовірністю варіантів.',
      presence_penalty: 'Штраф за присутність',
      presence_penaltyTip:
                'Наскільки штрафувати нові токени залежно від того, чи з\'являються вони в тексті поки що.\nЗбільшує ймовірність того, що модель говоритиме про нові теми.',
      frequency_penalty: 'Штраф за частоту',
      frequency_penaltyTip:
                'Наскільки штрафувати нові токени на основі їхньої існуючої частоти в тексті.\nЗменшує ймовірність того, що модель повторюватиме той самий рядок дослівно.',
      max_tokens: 'Макс. токенів',
      max_tokensTip:
                'Використовується для обмеження максимальної довжини відповіді в токенах.\nБільші значення можуть обмежити простір, залишений для підказок, журналів чатів і знань.\nРекомендується встановити значення нижче двох третин\ngpt-4-1106-preview, gpt-4-vision-preview max token (вхід 128k, вихід 4k)',
      maxTokenSettingTip: 'Ваше максимальне значення токена велике, що може обмежувати простір для запитів, даних тощо. Краще налаштувати його менш як 2/3.',
      setToCurrentModelMaxTokenTip: 'Максимальний токен оновлено до максимуму токена поточної моделі {{maxToken}}.',
      stop_sequences: 'Зупинити послідовності',
      stop_sequencesTip: 'До чотирьох послідовностей, у яких API припинить генерацію подальших токенів. Повернений текст не міститиме зупинку послідовності.',
      stop_sequencesPlaceholder: 'Введіть послідовність і натисніть Tab',
    },
    tone: {
      Creative: 'Креативний',
      Balanced: 'Збалансований',
      Precise: 'Точний',
      Custom: 'Користувацький',
    },
    addMoreModel: 'Перейдіть до налаштувань, щоб додати більше моделей',
  },
  menus: {
    status: 'бета',
    explore: 'Досліджувати',
    apps: 'Студія',
    plugins: 'Плагіни',
    pluginsTips: 'Інтегруйте сторонні плагіни або створіть AI-сумісні плагіни.',
    datasets: 'Знання',
    datasetsTips: 'СКОРО:  імпортуйте власні текстові дані або пишіть дані в реальному часі через Webhook для покращення контексту LLM.',
    newApp: 'Нова програма',
    newDataset: 'Створити знання',
    tools: 'Інструменти',
  },
  userProfile: {
    settings: 'Налаштування',
    workspace: 'Робочий простір',
    createWorkspace: 'Створити робочий простір',
    helpCenter: 'Довідковий центр',
    roadmapAndFeedback: 'відгуки',
    community: 'Спільнота',
    about: 'Про нас',
    logout: 'Вийти',
  },
  settings: {
    accountGroup: 'ОБЛІКОВИЙ ЗАПИС',
    workplaceGroup: 'РОБОЧИЙ ПРОСТІР',
    account: 'Мій обліковий запис',
    members: 'Учасники',
    billing: 'Виставлення рахунків',
    integrations: 'Інтеграції',
    language: 'Мова',
    provider: 'Постачальник моделі',
    dataSource: 'Джерело даних',
    plugin: 'Плагіни',
    apiBasedExtension: 'Розширення API',
  },
  account: {
    avatar: 'Аватар',
    name: 'Ім\'я',
    email: 'Електронна пошта',
    password: 'Пароль',
    passwordTip: 'Ви можете встановити постійний пароль, якщо не хочете використовувати тимчасові коди для входу',
    setPassword: 'Встановити пароль',
    resetPassword: 'Скинути пароль',
    currentPassword: 'Поточний пароль',
    newPassword: 'Новий пароль',
    confirmPassword: 'Підтвердіть пароль',
    notEqual: 'Два паролі різняться.',
    langGeniusAccount: 'Обліковий запис Wonder',
    langGeniusAccountTip: 'Ваш обліковий запис Wonder та пов’язані з ним дані користувача.',
    editName: 'Редагувати ім\'я',
    showAppLength: 'Показати {{length}} програм',
  },
  members: {
    team: 'Команда',
    invite: 'Додати',
    name: 'ІМ\'Я',
    lastActive: 'ОСТАННЯ АКТИВНІСТЬ',
    role: 'РОЛІ',
    pending: 'В очікуванні...',
    owner: 'Власник',
    admin: 'Адміністратор',
    adminTip: 'Може створювати програми та керувати налаштуваннями команди',
    normal: 'Звичайний',
    normalTip: 'Може лише використовувати програми, не може створювати програми',
    inviteTeamMember: 'Додати учасника команди',
    inviteTeamMemberTip: 'Вони зможуть отримати доступ до даних вашої команди безпосередньо після входу.',
    email: 'Електронна пошта',
    emailInvalid: 'Недійсний формат електронної пошти',
    emailPlaceholder: 'Будь ласка, введіть адресу електронної пошти',
    sendInvite: 'Надіслати запрошення',
    invitedAsRole: 'Запрошено як користувача {{role}}',
    invitationSent: 'Запрошення надіслано',
    invitationSentTip: 'Запрошення надіслано, і вони можуть увійти в Wonder, щоб отримати доступ до даних вашої команди.',
    invitationLink: 'Посилання на запрошення',
    failedinvitationEmails: 'Наступних користувачів не було успішно запрошено',
    ok: 'ОК',
    removeFromTeam: 'Видалити з команди',
    removeFromTeamTip: 'Буде видалено доступ до команди',
    setAdmin: 'Призначити адміністратором',
    setMember: 'Встановити як звичайного члена',
    disinvite: 'Скасувати запрошення',
    deleteMember: 'Видалити учасника',
    you: '(Ви)',
  },
  integrations: {
    connected: 'Підключено',
    google: 'Google',
    googleAccount: 'Увійти за допомогою облікового запису Google',
    github: 'GitHub',
    githubAccount: 'Увійти за допомогою облікового запису GitHub',
    connect: 'Підключити',
  },
  language: {
    displayLanguage: 'Мова інтерфейсу',
    timezone: 'Часовий пояс',
  },
  provider: {
    apiKey: 'Ключ API',
    enterYourKey: 'Введіть свій ключ API тут',
    invalidKey: 'Недійсний ключ OpenAI API',
    validatedError: 'Не вдалося підтвердити: ',
    validating: 'Перевірка ключа...',
    saveFailed: 'Не вдалося зберегти ключ API',
    apiKeyExceedBill: 'У цього ключа API немає доступної квоти, будь ласка, прочитайте',
    addKey: 'Додати ключ',
    comingSoon: 'Скоро',
    editKey: 'Редагувати',
    invalidApiKey: 'Недійсний API ключ',
    azure: {
      apiBase: 'API-шлях',
      apiBasePlaceholder: 'Базовий URL-адреса API вашої кінцевої точки Azure OpenAI.',
      apiKey: 'Ключ API',
      apiKeyPlaceholder: 'Введіть свій ключ API тут',
      helpTip: 'Дізнайтеся про послугу Azure OpenAI',
    },
    openaiHosted: {
      openaiHosted: 'Розміщений OpenAI',
      onTrial: 'НА ПРОБНОМУ ПЕРІОДІ',
      exhausted: 'КВОТА ВИЧЕРПАНА',
      desc: 'Служба хостингу OpenAI, надана Wonder, дозволяє використовувати такі моделі, як GPT-3.5. Перш ніж ваша пробна квота буде використана, вам потрібно налаштувати інші постачальники моделі.',
      callTimes: 'Кількість викликів',
      usedUp: 'Пробна квота використана. Додайте власного постачальника моделі.',
      useYourModel: 'Наразі використовується власний постачальник моделі.',
      close: 'Закрити',
    },
    anthropicHosted: {
      anthropicHosted: 'Anthropic Claude',
      onTrial: 'НА ПРОБНОМУ ПЕРІОДІ',
      exhausted: 'КВОТА ВИЧЕРПАНА',
      desc: 'Ця потужна модель чудово справляється з широким спектром завдань: від складних діалогів і створення креативного контенту до докладних інструкцій.',
      callTimes: 'Кількість викликів',
      usedUp: 'Пробна квота використана. Додайте власного постачальника моделі.',
      useYourModel: 'Наразі використовується власний постачальника моделі.',
      close: 'Закрити',
    },
    anthropic: {
      using: 'Функція вбудовування використовує',
      enableTip: 'Щоб активувати модель Anthropic, спочатку потрібно прив’язатись до OpenAI або Azure OpenAI Service.',
      notEnabled: 'Не активовано',
      keyFrom: 'Отримайте ключ API від Anthropic',
    },
    encrypted: {
      front: 'Ваш API-ключ буде зашифрований та збережений за допомогою',
      back: ' технології.',
    },
  },
  modelProvider: {
    notConfigured: 'Системну модель ще не повністю налаштовано, і деякі функції можуть бути недоступні.',
    systemModelSettings: 'Налаштування системної моделі',
    systemModelSettingsLink: 'Чому необхідно налаштовувати системну модель?',
    selectModel: 'Виберіть свою модель',
    setupModelFirst: 'Будь ласка, спочатку налаштуйте свою модель',
    systemReasoningModel: {
      key: 'Системна модель міркування',
      tip: 'Встановіть модель висновку за замовчуванням, яка буде використовуватися для створення програм, а також для таких функцій, як генерація імені діалогу та пропозиція наступного питання також використовуватимуть модель висновку за замовчуванням.',
    },
    embeddingModel: {
      key: 'Модель вбудовування',
      tip: 'Встановіть модель за замовчуванням для обробки вбудовування документа у Знання, як пошук, так і імпорт Знань використовують цю модель вбудовування для векторизації. Перемикання призведе до невідповідності розмірності вектора між імпортованими Знаннями та запитанням, що призведе до збою пошуку. Щоб уникнути збоїв пошуку, не перемикайте цю модель без підстав.',
      required: 'Модель вбудовування обов’язкова',
    },
    speechToTextModel: {
      key: 'Модель перетворення мовлення в текст',
      tip: 'Встановіть модель за замовчуванням для введення мовлення в текст під час розмови.',
    },
    ttsModel: {
      key: 'Модель перетворення тексту в мовлення',
      tip: 'Встановіть модель за замовчуванням для введення тексту в мовлення в розмові.',
    },
    rerankModel: {
      key: 'Модель повторного ранжування',
      tip: 'Модель повторного ранжування змінить порядок списку документів-кандидатів на основі семантичної відповідності запиту користувача, покращуючи результати семантичного ранжування.',
    },
    quota: 'Квота',
    searchModel: 'Пошукова модель',
    noModelFound: 'Модель для {{model}} не знайдено',
    models: 'Моделі',
    showMoreModelProvider: 'Показати більше постачальників моделей',
    selector: {
      tip: 'Цю модель було видалено. Будь ласка, додайте модель або виберіть іншу.',
      emptyTip: 'Доступні моделі відсутні',
      emptySetting: 'Перейдіть до налаштувань, щоб налаштувати',
      rerankTip: 'Будь ласка, налаштуйте модель повторного ранжування',
    },
    card: {
      quota: 'КВОТА',
      onTrial: 'У пробному періоді',
      paid: 'Оплачено',
      quotaExhausted: 'Квоту вичерпано',
      callTimes: 'Кількість викликів',
      tokens: 'Токени',
      buyQuota: 'Придбати квоту',
      priorityUse: 'Пріоритетне використання',
      removeKey: 'Видалити ключ API',
      tip: 'Пріоритет буде надано оплаченій квоті. Пробна квота буде використовуватися після вичерпання платної квоти.',
    },
    item: {
      deleteDesc: '{{modelName}} використовуються як системні моделі міркування. Деякі функції будуть недоступні після видалення. Будь ласка, підтвердьте.',
      freeQuota: 'БЕЗКОШТОВНА КВОТА',
    },
    addApiKey: 'Додайте свій ключ API',
    invalidApiKey: 'Недійсний ключ API',
    encrypted: {
      front: 'Ваш ключ API буде зашифрований та збережений за допомогою',
      back: ' технології.',
    },
    freeQuota: {
      howToEarn: 'Як заробити',
    },
    addMoreModelProvider: 'ДОДАТИ БІЛЬШЕ ПОСТАЧАЛЬНИКІВ МОДЕЛЕЙ',
    addModel: 'Додати модель',
    modelsNum: '{{num}} моделей',
    showModels: 'Показати моделі',
    showModelsNum: 'Показати {{num}} моделей',
    collapse: 'Згорнути',
    config: 'Налаштування',
    modelAndParameters: 'Модель та параметри',
    model: 'Модель',
    featureSupported: '{{feature}} підтримується',
    callTimes: 'Кількість викликів',
    credits: 'Кредити повідомлень',
    buyQuota: 'Придбати квоту',
    getFreeTokens: 'Отримати безкоштовні токени',
    priorityUsing: 'Пріоритезувати використання',
    deprecated: 'Застарілий',
    confirmDelete: 'підтвердити видалення?',
    quotaTip: 'Залишилося доступних безкоштовних токенів',
    loadPresets: 'Завантажити', // If need adjustment, provide more context on 'Load Presets' function
    parameters: 'ПАРАМЕТРИ',
  },
  dataSource: {
    add: 'Додати джерело даних',
    connect: 'Підключити',
    notion: {
      title: 'Notion',
      description: 'Використання Notion як джерела даних для Знань.',
      connectedWorkspace: 'Підключений робочий простір',
      addWorkspace: 'Додати робочий простір',
      connected: 'Підключено',
      disconnected: 'Відключено',
      changeAuthorizedPages: 'Змінити авторизовані сторінки',
      pagesAuthorized: 'Авторизовані сторінки',
      sync: 'Синхронізувати',
      remove: 'Видалити',
      selector: {
        pageSelected: 'Сторінки вибрано',
        searchPages: 'Пошук сторінок ...',
        noSearchResult: 'Результатів пошуку немає',
        addPages: 'Додати сторінки',
        preview: 'ПЕРЕДПЕРЕГЛЯД',
      },
    },
  },
  plugin: {
    serpapi: {
      apiKey: 'Ключ API',
      apiKeyPlaceholder: 'Введіть свій ключ API',
      keyFrom: 'Отримайте свій ключ SerpAPI зі сторінки облікового запису SerpAPI',
    },
  },
  apiBasedExtension: {
    title: 'API-розширення забезпечують централізоване керування API, спрощуючи конфігурацію для зручного використання в різних програмах Wonder.',
    link: 'Дізнайтеся, як розробити власне розширення API.',
    linkUrl: 'https://docs.Wonder.ai/features/extension/api_based_extension',
    add: 'Додати розширення API',
    selector: {
      title: 'Розширення API',
      placeholder: 'Виберіть API розширення',
      manage: 'Керувати розширеннями API',
    },
    modal: {
      title: 'Додати розширення API',
      editTitle: 'Редагувати розширення API',
      name: {
        title: 'Ім\'я',
        placeholder: 'Введіть ім\'я',
      },
      apiEndpoint: {
        title: 'Кінцева точка API',
        placeholder: 'Будь ласка, введіть кінцеву точку API',
      },
      apiKey: {
        title: 'Ключ API',
        placeholder: 'Будь ласка, введіть ключ API',
        lengthError: 'Довжина API-ключа не може бути меньше 5 символів',
      },
    },
    type: 'Тип',
  },
  about: {
    changeLog: 'Журнал змін',
    updateNow: 'Оновити зараз',
    nowAvailable: 'Wonder {{version}} тепер доступна.',
    latestAvailable: 'Wonder {{version}} – це найновіша доступна версія.',
  },
  appMenus: {
    overview: 'Огляд',
    promptEng: 'Налаштування',
    apiAccess: 'Доступ до API',
    logAndAnn: 'Журнали та Повідомлення.',
    logs: 'Журнали',
  },
  environment: {
    testing: 'ТЕСТУВАННЯ',
    development: 'РОЗРОБКА',
  },
  appModes: {
    completionApp: 'Генератор тексту',
    chatApp: 'Чат-додаток',
  },
  datasetMenus: {
    documents: 'Документи',
    hitTesting: 'Тестування пошуку',
    settings: 'Налаштування',
    emptyTip: 'Знання не пов’язані, будь ласка, перейдіть до програми або плагіна, щоб завершити зв’язок.',
    viewDoc: 'Переглянути документацію',
    relatedApp: 'пов\'язані програми',
  },
  voiceInput: {
    speaking: 'Говоріть зараз...',
    converting: 'Перетворення на текст...',
    notAllow: 'мікрофон не авторизований',
  },
  modelName: {
    'gpt-3.5-turbo': 'GPT-3.5-Turbo',
    'gpt-3.5-turbo-16k': 'GPT-3.5-Turbo-16K',
    'gpt-4': 'GPT-4',
    'gpt-4-32k': 'GPT-4-32K',
    'text-davinci-003': 'Text-Davinci-003',
    'text-embedding-ada-002': 'Text-Embedding-Ada-002',
    'whisper-1': 'Whisper-1',
    'claude-instant-1': 'Claude-Instant',
    'claude-2': 'Claude-2',
  },
  chat: {
    renameConversation: 'Перейменувати розмову',
    conversationName: 'Назва розмови',
    conversationNamePlaceholder: 'Будь ласка, введіть назву розмови',
    conversationNameCanNotEmpty: 'Потрібна назва розмови',
    citation: {
      title: 'ЦИТАТИ',
      linkToDataset: 'Посилання на Знання',
      characters: 'Символів:',
      hitCount: 'Кількість звернень:',
      vectorHash: 'Хеш вектора:',
      hitScore: 'Оцінка звернення:',
    },
  },
  promptEditor: {
    placeholder: 'Пишіть свої підказки тут, вводьте \'{\', щоб вставити змінну чи \'/\', щоб вставити блок-підказку',
    context: {
      item: {
        title: 'Контекст',
        desc: 'Вставити шаблон контексту',
      },
      modal: {
        title: '{{num}} Знань у контексті',
        add: 'Додати контекст',
        footer: 'Ви можете керувати контекстами в розділі "Контекст" нижче.',
      },
    },
    history: {
      item: {
        title: 'Історія розмов',
        desc: 'Вставити шаблон історичного повідомлення',
      },
      modal: {
        title: 'ПРИКЛАД',
        user: 'Привіт',
        assistant: 'Привіт! Чим я можу допомогти вам сьогодні?',
        edit: 'Редагувати імена у ролі розмови',
      },
    },
    variable: {
      item: {
        title: 'Змінні та зовнішні інструменти',
        desc: 'Вставити змінні та зовнішні інструменти',
      },
      outputToolDisabledItem: {
        title: 'Змінні',
        desc: 'Вставити змінні',
      },
      modal: {
        add: 'Нова змінна',
        addTool: 'Новий інструмент',
      },
    },
    query: {
      item: {
        title: 'Запит',
        desc: 'Вставити шаблон запиту користувача',
      },
    },
    existed: 'Вже існує в підказці',
  },
  imageUploader: {
    uploadFromComputer: 'Завантажити з комп\'ютера',
    uploadFromComputerReadError: 'Помилка зчитування зображення, повторіть спробу.',
    uploadFromComputerUploadError: 'Помилка завантаження зображення, спробуйте знову.',
    uploadFromComputerLimit: 'Розмір зображення не може перевищувати {{size}} МБ',
    pasteImageLink: 'Вставити посилання на зображення',
    pasteImageLinkInputPlaceholder: 'Вставте посилання на зображення тут',
    pasteImageLinkInvalid: 'Недійсне посилання на зображення',
    imageUpload: 'Завантаження зображення',
  },
  tag: {
    placeholder: 'Усі теги',
    addNew: 'Додати новий тег',
    noTag: 'Без тегів',
    noTagYet: 'Ще немає тегів',
    addTag: 'додати тег',
    editTag: 'Редагувати теги',
    manageTags: 'Керувати тегами',
    selectorPlaceholder: 'Введіть для пошуку або створення',
    create: 'Створити',
    delete: 'Видалити тег',
    deleteTip: 'Тег використовується, видалити його?',
    created: 'Тег створено успішно',
    failed: 'Не вдалося створити тег',
  },
}

export default translation
