interface Navigation {
    type: string,
    name: string,
    label?: string,
    leftIcon?: string,
}

interface AppSchema {
    leftNavs: Navigation[]
}