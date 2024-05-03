const translation = {
  title: 'Журнали',
  description: 'Журнали фіксують робочий статус додатка, включаючи введення користувачів та відповіді штучного інтелекту.',
  dateTimeFormat: 'MM/DD/YYYY hh:mm A',
  table: {
    header: {
      time: 'Час',
      endUser: 'Кінцевий Користувач',
      input: 'Введення',
      output: 'Виведення',
      summary: 'Заголовок',
      messageCount: 'Кількість Повідомлень',
      userRate: 'Рейтинг Користувача',
      adminRate: 'Рейтинг Оператора',
      startTime: 'ЧАС ПОЧАТКУ',
      status: 'СТАТУС',
      runtime: 'ЧАС ВИКОНАННЯ',
      tokens: 'ТОКЕНИ',
      user: 'КІНЦЕВИЙ КОРИСТУВАЧ',
      version: 'ВЕРСІЯ',
    },
    pagination: {
      previous: 'Попередня',
      next: 'Наступна',
    },
    empty: {
      noChat: 'Ще немає розмов',
      noOutput: 'Немає виводу',
      element: {
        title: 'Хтось тут?',
        content: 'Спостерігайте та анотуйте взаємодії між кінцевими користувачами та додатками штучного інтелекту тут, щоб постійно покращувати точність штучного інтелекту. Ви можете спробувати <shareLink>поділитися</shareLink> або <testLink>протестувати</testLink> веб-додаток самостійно, а потім повернутися на цю сторінку.',
      },
    },
  },
  detail: {
    time: 'Час',
    conversationId: 'ID Розмови',
    promptTemplate: 'Шаблон Запитання',
    promptTemplateBeforeChat: 'Шаблон Запитання Перед Чатом · Як Системне Повідомлення',
    annotationTip: 'Покращення Позначені Користувачем {{user}}',
    timeConsuming: '',
    second: 'с',
    tokenCost: 'Витрати Токенів',
    loading: 'завантаження',
    operation: {
      like: 'подобається',
      dislike: 'не подобається',
      addAnnotation: 'Додати Покращення',
      editAnnotation: 'Редагувати Покращення',
      annotationPlaceholder: 'Введіть очікувану відповідь, яку ви хочете, щоб штучний інтелект повертав, це може бути використано для налаштування моделі та постійного покращення якості генерації тексту в майбутньому.',
    },
    variables: 'Змінні',
    uploadImages: 'Завантажені Зображення',
  },
  filter: {
    period: {
      today: 'Сьогодні',
      last7days: 'Останні 7 днів',
      last4weeks: 'Останні 4 тижні',
      last3months: 'Останні 3 місяці',
      last12months: 'Останні 12 місяців',
      monthToDate: 'Місяць до сьогодні',
      quarterToDate: 'Квартал до сьогодні',
      yearToDate: 'Рік до сьогодні',
      allTime: 'За весь час',
    },
    annotation: {
      all: 'Всі',
      annotated: 'Покращення з Анотацією ({{count}} елементів)',
      not_annotated: 'Без Анотації',
    },
  },
  workflowTitle: 'Журнали Робочого Процесу',
  workflowSubtitle: 'Журнал зареєстрував роботу Автоматизації.',
  runDetail: {
    title: 'Журнал Розмови',
    workflowTitle: 'Деталі Журналу',
  },
  promptLog: 'Журнал Запитань',
  agentLog: 'Журнал агента',
  viewLog: 'Переглянути журнал',
  agentLogDetail: {
    agentMode: 'Режим агента',
    toolUsed: 'Використаний інструмент',
    iterations: 'Ітерації',
    iteration: 'Ітерація',
    finalProcessing: 'Остаточна обробка',
  },
}

export default translation
