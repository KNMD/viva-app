import { Url } from "next/dist/shared/lib/router/router";

export interface Navigation {
    type: string,
    name: string,
    label?: string,
    leftIcon?: string,
    iconProps?: any,
    link: Url,
}

export interface AppSchema {
    leftNavs: Navigation[]
}

export interface BuildYupConfig {
    errorMessages: Record<string, any>
}

export interface FormFieldUI {
    component: string,
    displayName?: string,
}

export interface FormFieldSchema {
    schema: Record<string, any>
    config: BuildYupConfig,
    ui: Record<string, FormFieldUI>
}

