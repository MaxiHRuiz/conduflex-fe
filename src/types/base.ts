export interface IBaseCollection<T>{
    limit: number
    offset: number
    total: number
    response: Array<T>
}

export interface IBaseParams {
    limit?: number
    offset?: number
}