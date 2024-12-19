import { IBaseParams } from "./base";
import { IClient, IClientDirection } from "./client";

export interface IComprador {
    nombre: string,
    cuit: string,
    cp: number,
    direccion: string
}

export interface IBaseOrder {
    estado: string,
    vendedor: string,
    actualizado_por: string,
    fecha: string,
    productos: IProductStock[],
    precio: number,
    comprador: IClient,
}

export interface IOrder extends IBaseOrder {
    id: string
    direccion?: IClientDirection
    id_comprador?: string
}

export interface IOrderParams extends IBaseParams {
    estado: string,
    comprador: string
    fecha: string
    desde: string
    hasta: string
}

export interface IProductStock {
    id: string
    product_id: string;
    descripcion: string;
    cantidad_metros: number;
    es_fraccionable: boolean;
    detalle: string;
    estado: string;
    precio: number
}
