import { IBaseParams } from "./base";

export interface IProductStock {
    id: number
    product_id: string;
    descripcion: string;
    cantidad_metros: number;
    es_fraccionable: boolean;
    detalle: string;
    precio: number
}

export interface IBaseOrder {
    estado: string,
    vendedor: string,
    actualizado_por: string,
    fecha: string,
    product_stock: IProductStock[];
}

export interface IOrder extends IBaseOrder {
    id: number
}

export interface IOrderParams extends IBaseParams {
    id: string,
    estado: string
}

export interface IProductStock {
    id: number
    product_id: string;
    descripcion: string;
    cantidad_metros: number;
    es_fraccionable: boolean;
    detalle: string;
    estado: string;
    precio: number
}
