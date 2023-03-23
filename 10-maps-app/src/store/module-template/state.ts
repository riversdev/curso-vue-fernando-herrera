export interface ExampleState {
    prop: boolean
}

export function state(): ExampleState {
    return {
        prop: true,
    }
}