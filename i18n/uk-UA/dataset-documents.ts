const translation = {
  list: {
    title: 'Документи',
    desc: 'Тут відображаються всі файли Знання, і все Знання можна зв’язати з цитатами Wonder або проіндексувати за допомогою плагіна Chat.',
    addFile: 'додати файл',
    addPages: 'Додати сторінки',
    table: {
      header: {
        fileName: 'НАЗВА ФАЙЛУ',
        words: 'КІЛЬКІСТЬ СЛІВ',
        hitCount: 'КІЛЬКІСТЬ ВИЛУЧЕНЬ',
        uploadTime: 'ЧАС ЗАВАНТАЖЕННЯ',
        status: 'СТАТУС',
        action: 'ДІЯ',
      },
    },
    action: {
      uploadFile: 'Завантажити новий файл',
      settings: 'Налаштування сегмента',
      addButton: 'Додати фрагмент',
      add: 'Додати фрагмент',
      batchAdd: 'Пакетне додавання',
      archive: 'Архів',
      unarchive: 'Розархівувати',
      delete: 'Видалити',
      enableWarning: 'Архівований файл неможливо активувати',
      sync: 'Синхронізувати',
    },
    index: {
      enable: 'Активувати',
      disable: 'Деактивувати',
      all: 'Усі',
      enableTip: 'Файл можна індексувати',
      disableTip: 'Файл не можна індексувати',
    },
    status: {
      queuing: 'В черзі',
      indexing: 'Індексування',
      paused: 'Призупинено',
      error: 'Помилка',
      available: 'Доступно',
      enabled: 'Активовано',
      disabled: 'Деактивовано',
      archived: 'Архівовано',
    },
    empty: {
      title: 'Документації ще немає',
      upload: {
        tip: 'Ви можете завантажувати файли, синхронізувати з веб-сайту або з веб-програм, таких як Notion, GitHub тощо.',
      },
      sync: {
        tip: 'Wonder періодично завантажуватиме файли з вашого Notion і завершуватиме обробку.',
      },
    },
    delete: {
      title: 'Ви впевнені, що хочете видалити?',
      content: 'Файл видалено успішно.',
    },
    batchModal: {
      title: 'Пакетне додавання фрагментів',
      csvUploadTitle: 'Перетягніть файл CSV сюди або натисніть, щоб',
      browse: 'переглянути',
      tip: 'CSV-файл повинен мати таку структуру:',
      question: 'запитання',
      answer: 'відповідь',
      contentTitle: 'назва вмісту',
      content: 'вміст',
      template: 'Завантажити шаблон',
      cancel: 'Скасувати',
      run: 'Запуск пакетної обробки',
      runError: 'Помилка запуску пакетної обробки',
      processing: 'Триває пакетна обробка',
      completed: 'Імпорт завершено',
      error: 'Помилка імпорту',
      ok: 'ОК',
    },
  },
  metadata: {
    title: 'Метадані',
    desc: 'Маркування метаданих для документів дозволяє штучному інтелекту своєчасно отримувати до них доступ і викриває джерело посилань для користувачів.',
    dateTimeFormat: 'MMMM D, YYYY hh:mm A',
    docTypeSelectTitle: 'Будь ласка, виберіть тип документа',
    docTypeChangeTitle: 'Змінити тип документа',
    docTypeSelectWarning: 'Якщо тип документа буде змінено, наразі заповнені метадані більше не зберігатимуться',
    firstMetaAction: 'Почнімо',
    placeholder: {
      add: 'Додати ',
      select: 'Вибрати ',
    },
    source: {
      upload_file: 'Завантажити файл',
      notion: 'Синхронізувати з Notion',
      github: 'Синхронізувати з Github',
    },
    type: {
      book: 'Книга',
      webPage: 'Веб-сторінка',
      paper: 'Наукова праця',
      socialMediaPost: 'Пост у соціальних медіа',
      personalDocument: 'Особистий документ',
      businessDocument: 'Діловий документ',
      IMChat: 'Чат миттєвих повідомлень',
      wikipediaEntry: 'Стаття у Вікіпедії',
      notion: 'Синхронізувати з Notion',
      github: 'Синхронізувати з Github',
      technicalParameters: 'Технічні параметри',
    },
    field: {
      processRule: {
        processDoc: 'Обробка документа',
        segmentRule: 'Правило сегментування',
        segmentLength: 'Довжина фрагментів',
        processClean: 'Очищення тексту',
      },
      book: {
        title: 'Назва',
        language: 'Мова',
        author: 'Автор',
        publisher: 'Видавець',
        publicationDate: 'Дата публікації',
        ISBN: 'ISBN',
        category: 'Категорія',
      },
      webPage: {
        title: 'Назва',
        url: 'URL',
        language: 'Мова',
        authorPublisher: 'Автор/видавець',
        publishDate: 'Дата публікації',
        topicsKeywords: 'Теми/ключові слова',
        description: 'Опис',
      },
      paper: {
        title: 'Назва',
        language: 'Мова',
        author: 'Автор',
        publishDate: 'Дата публікації',
        journalConferenceName: 'Назва журналу/конференції',
        volumeIssuePage: 'Випуск/номер/сторінка',
        DOI: 'DOI',
        topicsKeywords: 'Теми/ключові слова',
        abstract: 'Анотація',
      },
      socialMediaPost: {
        platform: 'Платформа',
        authorUsername: 'Автор/ім’я користувача',
        publishDate: 'Дата публікації',
        postURL: 'URL-адреса посту',
        topicsTags: 'Теми/теги',
      },
      personalDocument: {
        title: 'Назва',
        author: 'Автор',
        creationDate: 'Дата створення',
        lastModifiedDate: 'Дата останньої зміни',
        documentType: 'Тип документа',
        tagsCategory: 'Теги/категорії',
      },
      businessDocument: {
        title: 'Назва',
        author: 'Автор',
        creationDate: 'Дата створення',
        lastModifiedDate: 'Дата останньої зміни',
        documentType: 'Тип документа',
        departmentTeam: 'Відділ/команда',
      },
      IMChat: {
        chatPlatform: 'Платформа чату',
        chatPartiesGroupName: 'Сторони чату/назва групи',
        participants: 'Учасники',
        startDate: 'Дата початку',
        endDate: 'Дата завершення',
        topicsKeywords: 'Теми/ключові слова',
        fileType: 'Тип файлу',
      },
      wikipediaEntry: {
        title: 'Назва',
        language: 'Мова',
        webpageURL: 'URL-адреса вебсторінки',
        editorContributor: 'Редактор/автор',
        lastEditDate: 'Дата останнього редагування',
        summaryIntroduction: 'Резюме/вступ',
      },
      notion: {
        title: 'Назва',
        language: 'Мова',
        author: 'Автор',
        createdTime: 'Час створення',
        lastModifiedTime: 'Час останньої зміни',
        url: 'URL',
        tag: 'Тег',
        description: 'Опис',
      },
      github: {
        repoName: 'Назва репозиторію',
        repoDesc: 'Опис репозиторію',
        repoOwner: 'Власник репозиторію',
        fileName: 'Назва файлу',
        filePath: 'Шлях до файлу',
        programmingLang: 'Мова програмування',
        url: 'URL',
        license: 'Ліцензія',
        lastCommitTime: 'Час останнього коміту',
        lastCommitAuthor: 'Автор останнього коміту',
      },
      originInfo: {
        originalFilename: 'Оригінальна назва файлу',
        originalFileSize: 'Оригінальний розмір файлу',
        uploadDate: 'Дата завантаження',
        lastUpdateDate: 'Дата останнього оновлення',
        source: 'Джерело',
      },
      technicalParameters: {
        segmentSpecification: 'Специфікація фрагментів',
        segmentLength: 'Довжина фрагментів',
        avgParagraphLength: 'Середня довжина абзаців',
        paragraphs: 'Абзаци',
        hitCount: 'Кількість вилучень',
        embeddingTime: 'Час вбудовування',
        embeddedSpend: 'Витрачено на вбудовування',
      },
    },
    languageMap: {
      zh: 'Китайська',
      en: 'Англійська',
      es: 'Іспанська',
      fr: 'Французька',
      de: 'Німецька',
      ja: 'Японська',
      ko: 'Корейська',
      ru: 'Російська',
      ar: 'Арабська',
      pt: 'Португальська',
      it: 'Італійська',
      nl: 'Голландська',
      pl: 'Польська',
      sv: 'Шведська',
      tr: 'Турецька',
      he: 'Іврит',
      hi: 'Гінді',
      da: 'Данська',
      fi: 'Фінська',
      no: 'Норвезька',
      hu: 'Угорська',
      el: 'Грецька',
      cs: 'Чеська',
      th: 'Тайська',
      id: 'Індонезійська',
      uk: 'Українська',
    },
    categoryMap: {
      book: {
        fiction: 'Фантастика',
        biography: 'Біографія',
        history: 'Історія',
        science: 'Наука',
        technology: 'Технології',
        education: 'Навчальна література',
        philosophy: 'Філософія',
        religion: 'Релігія',
        socialSciences: 'Соціальні науки',
        art: 'Мистецтво',
        travel: 'Подорожі',
        health: 'Здоровʼя',
        selfHelp: 'Самодопомога',
        businessEconomics: 'Бізнес-економіка',
        cooking: 'Куховаріння',
        childrenYoungAdults: 'Книги з виховання',
        comicsGraphicNovels: 'Комікси',
        poetry: 'Поезія',
        drama: 'Драма',
        other: 'Інше',
      },
      personalDoc: {
        notes: 'Замітки', // General notes or memos
        blogDraft: 'Чернетка блогу',
        diary: 'Щоденник',
        researchReport: 'Науковий звіт',
        bookExcerpt: 'Уривок з книги',
        schedule: 'Розклад',
        list: 'Список',
        projectOverview: 'Огляд проекту',
        photoCollection: 'Колекція фотографій',
        creativeWriting: 'Творче письмо',
        codeSnippet: 'Фрагмент коду',
        designDraft: 'Дизайн-проект',
        personalResume: 'Особисте резюме',
        other: 'Інше',
      },
      businessDoc: {
        meetingMinutes: 'Протокол зустрічі',
        researchReport: 'Науковий звіт',
        proposal: 'Пропозиція',
        employeeHandbook: 'Посібник для працівників',
        trainingMaterials: 'Навчальні матеріали',
        requirementsDocument: 'Документ з вимогами',
        designDocument: 'Проєктний документ',
        productSpecification: 'Специфікація продукту',
        financialReport: 'Фінансовий звіт',
        marketAnalysis: 'Аналіз ринку',
        projectPlan: 'План проекту',
        teamStructure: 'Структура команди',
        policiesProcedures: 'Політики та процедури',
        contractsAgreements: 'Контракти та угоди',
        emailCorrespondence: 'Електронне листування',
        other: 'Інше',
      },
    },
  },
  embedding: {
    processing: 'Обробка векторного представлення слів...',
    paused: 'Побудова векторів призупинена',
    completed: 'Побудова векторів завершена',
    error: 'Помилка побудови векторів',
    docName: 'Попередня обробка документа',
    mode: 'Правило сегментації',
    segmentLength: 'Довжина фрагментів',
    textCleaning: 'Попереднє визначення тексту та очищення',
    segments: 'Параграфи',
    highQuality: 'Режим високої якості',
    economy: 'Економний режим',
    estimate: 'Розрахунок',
    stop: 'Зупинити обробку',
    resume: 'Продовжити обробку',
    automatic: 'Автоматичний',
    custom: 'Користувацький',
    previewTip: 'Попередній перегляд параграфа буде доступний після завершення побудови векторів',
  },
  segment: {
    paragraphs: 'Параграфи',
    keywords: 'Ключові слова',
    addKeyWord: 'Додати ключове слово',
    keywordError: 'Максимальна довжина ключового слова – 20 символів',
    characters: 'символів',
    hitCount: 'Кількість пошуку',
    vectorHash: 'Векторний хеш: ',
    questionPlaceholder: 'додайте запитання тут',
    questionEmpty: 'Питання не може бути порожнім',
    answerPlaceholder: 'додайте відповідь тут',
    answerEmpty: 'Відповідь не може бути порожньою',
    contentPlaceholder: 'додайте вміст тут',
    contentEmpty: 'Вміст не може бути порожнім',
    newTextSegment: 'Новий текстовий сегмент',
    newQaSegment: 'Новий сегмент запитань та відповідей',
    delete: 'Видалити цей фрагмент?',
  },
}

export default translation