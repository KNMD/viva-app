const translation = {
  currentPlan: '當前套餐',
  upgradeBtn: {
    plain: '升級套餐',
    encourage: '立即升級',
    encourageShort: '升級',
  },
  viewBilling: '管理賬單及訂閱',
  buyPermissionDeniedTip: '請聯絡企業管理員訂閱',
  plansCommon: {
    title: '選擇適合您的套餐',
    yearlyTip: '訂閱年度計劃可免費獲得 2個月！',
    mostPopular: '最受歡迎',
    planRange: {
      monthly: '按月',
      yearly: '按年',
    },
    month: '月',
    year: '年',
    save: '節省',
    currentPlan: '當前計劃',
    contractSales: '聯絡銷售',
    contractOwner: '聯絡團隊管理員',
    free: '免費',
    startForFree: '免費開始',
    getStartedWith: '開始使用',
    contactSales: '聯絡銷售',
    talkToSales: '聯絡銷售',
    modelProviders: '支援的模型提供商',
    teamMembers: '團隊成員',
    buildApps: '構建應用程式數',
    vectorSpace: '向量空間',
    vectorSpaceTooltip: '向量空間是 LLMs 理解您的資料所需的長期記憶系統。',
    vectorSpaceBillingTooltip: '向量儲存是將知識庫向量化處理後為讓 LLMs 理解資料而使用的長期記憶儲存，1MB 大約能滿足1.2 million character 的向量化後資料儲存（以 OpenAI Embedding 模型估算，不同模型計算方式有差異）。在向量化過程中，實際的壓縮或尺寸減小取決於內容的複雜性和冗餘性。',
    documentsUploadQuota: '文件上傳配額',
    documentProcessingPriority: '文件處理優先順序',
    documentProcessingPriorityTip: '如需更高的文件處理優先順序，請升級您的套餐',
    documentProcessingPriorityUpgrade: '以更快的速度、更高的精度處理更多的資料。',
    priority: {
      'standard': '標準',
      'priority': '優先',
      'top-priority': '最高優先順序',
    },
    logsHistory: '日誌歷史',
    customTools: '自定義工具',
    unavailable: '不可用',
    days: '天',
    unlimited: '無限制',
    support: '支援',
    supportItems: {
      communityForums: '社群論壇',
      emailSupport: '電子郵件支援',
      priorityEmail: '優先電子郵件和聊天支援',
      logoChange: 'Logo更改',
      SSOAuthentication: 'SSO 認證',
      personalizedSupport: '個性化支援',
      dedicatedAPISupport: '專用 API 支援',
      customIntegration: '自定義整合和支援',
      ragAPIRequest: 'RAG API 請求',
      bulkUpload: '批次上傳文件',
      agentMode: '代理模式',
      workflow: '工作流',
    },
    comingSoon: '即將推出',
    member: '成員',
    memberAfter: '個成員',
    messageRequest: {
      title: '訊息額度',
      tooltip: '為不同方案提供基於 OpenAI 模型的訊息響應額度。',
    },
    annotatedResponse: {
      title: '標註回覆數',
      tooltip: '標註回覆功能透過人工編輯標註為應用提供了可定製的高質量問答回覆能力',
    },
    ragAPIRequestTooltip: '指單獨呼叫 Wonder 知識庫資料處理能力的 API。',
    receiptInfo: '只有團隊所有者和團隊管理員才能訂閱和檢視賬單資訊',
  },
  plans: {
    sandbox: {
      name: 'Sandbox',
      description: '200次 GPT 免費試用',
      includesTitle: '包括：',
    },
    professional: {
      name: 'Professional',
      description: '讓個人和小團隊能夠以經濟實惠的方式釋放更多能力。',
      includesTitle: 'Sandbox 計劃中的一切，加上：',
    },
    team: {
      name: 'Team',
      description: '協作無限制並享受頂級效能。',
      includesTitle: 'Professional 計劃中的一切，加上：',
    },
    enterprise: {
      name: 'Enterprise',
      description: '獲得大規模關鍵任務系統的完整功能和支援。',
      includesTitle: 'Team 計劃中的一切，加上：',
    },
  },
  vectorSpace: {
    fullTip: '向量空間已滿。',
    fullSolution: '升級您的套餐以獲得更多空間。',
  },
  apps: {
    fullTipLine1: '升級您的套餐以',
    fullTipLine2: '構建更多的程式。',
  },
  annotatedResponse: {
    fullTipLine1: '升級您的套餐以',
    fullTipLine2: '標註更多對話。',
    quotaTitle: '標註的配額',
  },
}

export default translation
