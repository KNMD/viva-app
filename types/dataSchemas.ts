
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