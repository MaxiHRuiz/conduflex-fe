import { IBaseParams } from "./base";

export interface IProductStock {
    id: number
    product_id: string;
    descripcion: string;
    cantidad_metros: number;
    es_fraccionable: boolean;
    detalle: string;
}

export interface IBaseOrder {
    vendor: string;
    product_stock: IProductStock[];
}

export interface IOrder extends IBaseOrder {
    id: string
}

export interface IOrderParams extends IBaseParams {
    id: string,
    estado: string
}