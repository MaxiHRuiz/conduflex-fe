export type StatusType = 'aprobado' | 'pendiente' | 'finalizado' | 'cancelado' | 'aprobada' 
export type SubStatusType = 'en_produccion' | 'despachado' | 'listo_para_despachar' |'fraccionado'

export interface IOrderList {
    id_stock: string
    id_producto: string,
    descripcion_producto: string
    contindad_producto: number
    subStatus: SubStatusType
}

export interface IOrder {
    id: string
    list: Array<IOrderList>
    status: StatusType
    vendedor: string
}