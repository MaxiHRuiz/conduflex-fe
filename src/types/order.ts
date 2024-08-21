import { IBaseParams } from "./base";

export interface IProductStock {
    idProductStock: number
    product_id: string;
    descripcion: string;
    cantidad_metros: number;
    es_fraccionable: boolean;
    detalle: string;
    precio: number
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