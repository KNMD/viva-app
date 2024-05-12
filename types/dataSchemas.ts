
interface Asset{
    adminCard: string
    userCard: string
    chat: string
    others?: string[] 
}

interface App {
    id: string,
    name: string,
    description?: string,
    logo?: Asset,
    labels?: string[]
}

export type ValueSelector = string[]

export type FileItem = {
    fileID: string
    file: CustomFile
    progress: number
}

export type CustomFile = File & {
    id?: string
    extension?: string
    mime_type?: string
    created_by?: string
    created_at?: number
  }

export interface BaseChartProps {
    width?: number
    height?: number
}

export interface SearchableChartsProps extends BaseChartProps {
    searchTime?: number
}