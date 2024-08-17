import { IBaseParams } from "./base"

export interface IStock {
    id: string,
    product_id: string,
    descripcion: string,
    cantidad_metros: number,
    cantidad_metros_vendidos: number,
    cantidad_metros_restantes: number,
    disponible: boolean,
    estado: string
    detalle: string
}

export interface IStockParams extends IBaseParams {}