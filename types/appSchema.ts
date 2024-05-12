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