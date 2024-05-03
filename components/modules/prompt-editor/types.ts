
import type { RoleName } from './plugins/history-block'


export type Option = {
  value: string
  name: string
}

export type ExternalToolOption = {
  name: string
  variableName: string
  icon?: string
  icon_background?: string
}

export type ContextBlockType = {
  show?: boolean
  selectable?: boolean
  datasets?: Record<string, any>[]
  canNotAddContext?: boolean
  onAddContext?: () => void
  onInsert?: () => void
  onDelete?: () => void
}

export type QueryBlockType = {
  show?: boolean
  selectable?: boolean
  onInsert?: () => void
  onDelete?: () => void
}

export type HistoryBlockType = {
  show?: boolean
  selectable?: boolean
  history?: RoleName
  onInsert?: () => void
  onDelete?: () => void
  onEditRole?: () => void
}

export type VariableBlockType = {
  show?: boolean
  variables?: Option[]
}

export type ExternalToolBlockType = {
  show?: boolean
  externalTools?: ExternalToolOption[]
  onAddExternalTool?: () => void
}

export type WorkflowVariableBlockType = {
  show?: boolean
  variables?: Record<string, any>[]
  workflowNodesMap?: Record<string, Pick<Record<string, any>['data'], 'title' | 'type'>>
  onInsert?: () => void
  onDelete?: () => void
}

export type MenuTextMatch = {
  leadOffset: number
  matchingString: string
  replaceableString: string
}
