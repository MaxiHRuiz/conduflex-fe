import { IBaseParams } from "./base"

export interface IFractionate {
    id: string
    stock_id: string,
    product_id: string,
    cantidad: number
    email: string,
    fecha: string,
}

export interface IFractionateParams extends IBaseParams {
    email?: string
    stock_id?: string
    product_id?: string
    estado?: string
}