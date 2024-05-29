interface ResponseEntity<T> {
    code: number
    message?: string
    data: T
}

interface Page<T> {
    items: T[]
    page: number
    size: number
    total: number
}

interface ImageURL {
    url: string
    high?: string
    low?: string
}
    

interface Assets {
    image: ImageURL 
    type: "square" | "landscape" | "portrait"
}

interface StandardEntity{
    created_at: Date
    created_by: string
    last_update_at?: Date
    last_update_by?: string
    tenant: string
}

interface ModelProviderEntity extends StandardEntity {
    id: string
    name: string
    type: string
    class_name: string
    assets?: Assets
    credential_config: Record<string, any>
}
    

interface ModelEntity extends StandardEntity {
    id: string
    provider_name: string
    provider_id: string
    name: string
    type: string
    context_window: number
    support_vision: boolean
    args?: Record<string, any> 
}
    