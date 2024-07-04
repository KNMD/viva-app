import type { AnnotationReplyConfig, ChatPromptConfig, CompletionPromptConfig, DatasetConfigs, PromptMode } from '@/types/debug'
import type { LanguagesSupported } from '@/i18n/language'
import { Node, NodeProps } from 'reactflow';
import React from 'react';
import { DialogProps } from '@radix-ui/react-dialog';

export enum ProviderType {
  openai = 'openai',
  anthropic = 'anthropic',
  azure_openai = 'azure_openai',
  replicate = 'replicate',
  huggingface_hub = 'huggingface_hub',
  minimax = 'minimax',
  tongyi = 'tongyi',
  spark = 'spark',
}

export enum AppType {
  'chat' = 'chat',
  'completion' = 'completion',
}

export enum ModelModeType {
  'chat' = 'chat',
  'completion' = 'completion',
  'unset' = '',
}

export enum RETRIEVE_TYPE {
  oneWay = 'single',
  multiWay = 'multiple',
}

export enum RETRIEVE_METHOD {
  semantic = 'semantic_search',
  fullText = 'full_text_search',
  hybrid = 'hybrid_search',
  invertedIndex = 'invertedIndex',
  keywordSearch = 'keyword_search',
}

export type VariableInput = {
  key: string
  name: string
  value: string
}

/**
 * App modes
 */
export const AppModes = ['advanced-chat', 'agent-chat', 'chat', 'completion', 'workflow'] as const
export type AppMode = typeof AppModes[number]

/**
 * Variable type
 */
export const VariableTypes = ['string', 'number', 'select'] as const
export type VariableType = typeof VariableTypes[number]

/**
 * Prompt variable parameter
 */
export type PromptVariable = {
  /** Variable key */
  key: string
  /** Variable name */
  name: string
  /** Type */
  type: VariableType
  required: boolean
  /** Enumeration of single-selection drop-down values */
  options?: string[]
  max_length?: number
}

export type TextTypeFormItem = {
  default: string
  label: string
  variable: string
  required: boolean
  max_length: number
}

export type SelectTypeFormItem = {
  default: string
  label: string
  variable: string
  required: boolean
  options: string[]
}

export type ParagraphTypeFormItem = {
  default: string
  label: string
  variable: string
  required: boolean
}
/**
 * User Input Form Item
 */
export type UserInputFormItem = {
  'text-input': TextTypeFormItem
} | {
  'select': SelectTypeFormItem
} | {
  'paragraph': TextTypeFormItem
}



export type ToolItem = {
  dataset: {
    enabled: boolean
    id: string
  }
} | {
  'sensitive-word-avoidance': {
    enabled: boolean
    words: string[]
    canned_response: string
  }
}

export enum AgentStrategy {
  functionCall = 'function_call',
  react = 'react',
}

/**
 * Model configuration. The backend type.
 */
export type ModelConfig = {
  opening_statement: string
  suggested_questions?: string[]
  pre_prompt: string
  prompt_type: PromptMode
  chat_prompt_config: ChatPromptConfig | {}
  completion_prompt_config: CompletionPromptConfig | {}
  user_input_form: UserInputFormItem[]
  dataset_query_variable?: string
  more_like_this: {
    enabled: boolean
  }
  suggested_questions_after_answer: {
    enabled: boolean
  }
  speech_to_text: {
    enabled: boolean
  }
  text_to_speech: {
    enabled: boolean
    voice?: string
    language?: string
  }
  retriever_resource: {
    enabled: boolean
  }
  sensitive_word_avoidance: {
    enabled: boolean
  }
  annotation_reply?: AnnotationReplyConfig
  agent_mode: {
    enabled: boolean
    strategy?: AgentStrategy
    tools: ToolItem[]
  }
  model: {
    /** LLM provider, e.g., OPENAI */
    provider: string
    /** Model name, e.g, gpt-3.5.turbo */
    name: string
    mode: ModelModeType
    /** Default Completion call parameters */
    completion_params: {
      /** Maximum number of tokens in the answer message returned by Completion */
      max_tokens: number
      /**
       * A number between 0 and 2.
       * The larger the number, the more random the result;
       * otherwise, the more deterministic.
       * When in use, choose either `temperature` or `top_p`.
       * Default is 1.
       */
      temperature: number
      /**
       * Represents the proportion of probability mass samples to take,
       * e.g., 0.1 means taking the top 10% probability mass samples.
       * The determinism between the samples is basically consistent.
       * Among these results, the `top_p` probability mass results are taken.
       * When in use, choose either `temperature` or `top_p`.
       * Default is 1.
       */
      top_p: number
      /** When enabled, the Completion Text will concatenate the Prompt content together and return it. */
      echo: boolean
      /**
       * Specify up to 4 to automatically stop generating before the text specified in `stop`.
       * Suitable for use in chat mode.
       * For example, specify "Q" and "A",
       * and provide some Q&A examples as context,
       * and the model will give out in Q&A format and stop generating before Q&A.
       */
      stop: string[]
      /**
       * A number between -2.0 and 2.0.
       * The larger the value, the less the model will repeat topics and the more it will provide new topics.
       */
      presence_penalty: number
      /**
       * A number between -2.0 and 2.0.
       * A lower setting will make the model appear less cultured,
       * always repeating expressions.
       * The difference between `frequency_penalty` and `presence_penalty`
       * is that `frequency_penalty` penalizes a word based on its frequency in the training data,
       * while `presence_penalty` penalizes a word based on its occurrence in the input text.
       */
      frequency_penalty: number
    }
  }
  dataset_configs: DatasetConfigs
  file_upload?: {
    image: VisionSettings
  }
  files?: VisionFile[]
  created_at?: number
}

export type Language = typeof LanguagesSupported[number]

/**
 * Web Application Configuration
 */
export type SiteConfig = {
  access_token: string
  /** Public Title */
  title: string
  /** Application Description will be shown in the Client  */
  description: string
  /** Author */
  author: string
  /** User Support Email Address */
  support_email: string
  /**
   * Default Language, e.g. zh-Hans, en-US
   * Use standard RFC 4646, see https://www.ruanyifeng.com/blog/2008/02/codes_for_language_names.html
   */
  default_language: Language
  /**  Custom Domain */
  customize_domain: string
  /** Theme */
  theme: string
  /** Custom Token strategy Whether Terminal Users can choose their OpenAI Key */
  customize_token_strategy: 'must' | 'allow' | 'not_allow'
  /** Is Prompt Public */
  prompt_public: boolean
  /** Web API and APP Base Domain Name */
  app_base_url: string
  /** Copyright */
  copyright: string
  /** Privacy Policy */
  privacy_policy: string

  icon: string
  icon_background: string
}

/**
 * App
 */
export type App = {
  /** App ID */
  id: string
  /** Name */
  name: string
  /** Description */
  description: string

  /** Icon */
  icon: string
  /** Icon Background */
  icon_background: string

  /** Mode */
  mode: AppMode
  /** Enable web app */
  enable_site: boolean
  /** Enable web API */
  enable_api: boolean
  /** API requests per minute, default is 60 */
  api_rpm: number
  /** API requests per hour, default is 3600 */
  api_rph: number
  /** Whether it's a demo app */
  is_demo: boolean
  /** Model configuration */
  model_config: ModelConfig
  app_model_config: ModelConfig
  /** Timestamp of creation */
  created_at: number
  /** Web Application Configuration */
  site: SiteConfig
  /** api site url */
  api_base_url: string
}

/**
 * App Template
 */
export type AppTemplate = {
  /** Name */
  name: string
  /** Description */
  description: string
  /** Mode */
  mode: AppMode
  /** Model */
  model_config: ModelConfig
}

export enum Resolution {
  low = 'low',
  high = 'high',
}

export enum TransferMethod {
  all = 'all',
  local_file = 'local_file',
  remote_url = 'remote_url',
}

export const ALLOW_FILE_EXTENSIONS = ['png', 'jpg', 'jpeg', 'webp', 'gif']

export type VisionSettings = {
  enabled: boolean
  number_limits: number
  detail: Resolution
  transfer_methods: TransferMethod[]
  image_file_size_limit?: number | string
}

export type ImageFile = {
  type: TransferMethod
  _id: string
  fileId: string
  file?: File
  progress: number
  url: string
  base64Url?: string
  deleted?: boolean
}

export type VisionFile = {
  id?: string
  type: string
  transfer_method: TransferMethod
  url: string
  upload_file_id: string
  belongs_to?: string
}

export type RetrievalConfig = {
  search_method: RETRIEVE_METHOD
  reranking_enable: boolean
  reranking_model: {
    reranking_provider_name: string
    reranking_model_name: string
  }
  top_k: number
  score_threshold_enabled: boolean
  score_threshold: number
}



export type AppListResponse = {
  data: App[]
  has_more: boolean
  limit: number
  page: number
  total: number
}

export type AppDetailResponse = App

export type AppTemplatesResponse = {
  data: AppTemplate[]
}

export type CreateAppResponse = App

export type UpdateAppSiteCodeResponse = { app_id: string } & SiteConfig

export type AppDailyConversationsResponse = {
  data: Array<{ date: string; conversation_count: number }>
}

export type WorkflowDailyConversationsResponse = {
  data: Array<{ date: string; runs: number }>
}

export type AppStatisticsResponse = {
  data: Array<{ date: string }>
}

export type AppDailyEndUsersResponse = {
  data: Array<{ date: string; terminal_count: number }>
}

export type AppTokenCostsResponse = {
  data: Array<{ date: string; token_count: number; total_price: number; currency: number }>
}

export type UpdateAppModelConfigResponse = { result: string }

export type ApikeyItemResponse = {
  id: string
  token: string
  last_used_at: string
  created_at: string
}

export type ApikeysListResponse = {
  data: ApikeyItemResponse[]
}

export type CreateApiKeyResponse = {
  id: string
  token: string
  created_at: string
}

export type ValidateOpenAIKeyResponse = {
  result: string
  error?: string
}

export type UpdateOpenAIKeyResponse = ValidateOpenAIKeyResponse

export type GenerationIntroductionResponse = {
  introduction: string
}

export type AppVoicesListResponse = [{
  name: string
  value: string
}]

export type Action = {
  id: string,
  actionType: string,
  preIcon: string,
  title: string,
  subTitle?: string,
  suffixIcon?: string,
  enableOutput: boolean
  params?: Record<string, any>
}

export type ActionGroup = {
  id: string,
  actionGroupType: string,
  enableInput: boolean,
  actions: Action[]
}

export type NodeTheme = {
  colorName?: "slate" | "purple" | "green" | "violet"
}

export type BaseNodeData = {
  themes?: NodeTheme
}

export type BaseActivityData = {
  title: string
  enableDebug: boolean
  groups: ActionGroup[],
  themes?: NodeTheme,
  
};

export type BaseActiviyNodeProps = NodeProps<BaseActivityData> & {
  preIcon?: React.ReactNode
  onNodeSidebar?: React.ReactNode
};

export type ActivityGroupData = {
  themes?: NodeTheme
  enableDebug: boolean
  title: string
}

export type ActivityGroupNode = Node<ActivityGroupData>;

export type StartNode = Node<BaseNodeData>;

export interface BaseSidebarProps extends DialogProps {
  nodeProps: BaseActiviyNodeProps 
  footerSlot?: React.ReactNode  
}

export type Message = {
  role: string,
  content: string
}

export type ChatMessage = Message & {
  time: number,
  enableRefresh?: boolean
  enableCopy?: boolean
  tokens?: number
  audioURL?: string
  options?: string[]
}


export interface EventCallbacks {
  onMessage: (message: any) => void;
  onFinally: (sentence: string) => void;
}

export class RestResponseError extends Error {
  public data: Record<string, any>;

  constructor(message: string, data: Record<string, any>) {
    super(message);
    this.name = "RestResponseError";
    this.data = data;
  }
}