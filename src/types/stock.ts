import { IBaseParams } from "./base"

export interface IBaseStock {
    product_id: string;
    descripcion: string;
    cantidad_metros: number;
    cantidad_metros_vendidos: number;
    cantidad_metros_restantes: number;
    detalle: string;
    disponible: boolean;
    estado: string;
}

export interface IStock extends IBaseStock {
    id: string;
}

export interface IStockBulk extends IStock {
    cantidad: number;
}

export interface IStockParams extends IBaseParams {
    id: string,
    estado?: string
    disponible?: boolean
}