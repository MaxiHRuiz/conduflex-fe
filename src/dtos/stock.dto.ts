export interface IStock {    
    id: string,
    codigo:string,
    descripcion:string,
    cantidad_metros: number,
    cantidad_metros_vendidos: number,
    detalle: string
}

export interface IStockGet extends IStock {
    productCode: string
    productDescription: string
    metersSold: number
}

export interface IStockPost extends IStock {}

export interface IStockPut extends IStock {}


