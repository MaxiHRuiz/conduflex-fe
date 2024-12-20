export interface ICost {
    fecha: string,
    nombre_cliente: string,
    numero_factura: string,
    monto_neto: number,
    comisiones_sobre_monto_neto: number,
    valor_mano_de_obra: number,
    sumatoria_DE_F: number,
    columna_H: string,
    acumulado_mensual_G: number,
    kg_cobre: number,
    kg_PVC: number,
    kg_xlple: number,
    kg_TPV: number,
    kg_TPU: number,
    kg_LS0H: number,
    rendimiento_venta: number
}

export interface ICostParams {
    ids: Array<string>
}

export interface ICostMaterials {
    alma_unipolar_pvc: number;
    alma_unipolar_ls0h: number;
    relleno_pvc: number;
    relleno_ls0h: number;
    masterbatch_pe: number;
    xlpe: number;
    hepr: number;
    santoprene: number;
    tpu_poliuretano: number;
    pehd: number;
    pvc: number;
    vaina_taller: number;
    vaina21781: number;
    fleje_acero: number;
    fleje_cu: number;
    fleje_aluminio: number;
    maylar: number;
    dolar: number;
    cobre: number;
    cobre_estanado: number;
}

export interface IMaterialCost {
    kg_cobre: number;
    kg_almas: number;
    kg_relleno: number;
    kg_vaina: number;
    fleje: number;
    precio_costo: number;
    precio_lista: number;
    precio_venta: number;
}

export interface IProductCostResult {
    product: string;
    monto_neto: number;
    comisiones_monto_neto: number;
    fecha: string;
    nombre_cliente: string;
    order: number;
    kg_cobre: number;
    kg_almas: number;
    kg_relleno: number;
    kg_vaina: number;
    fleje: number;
    precio_costo: number;
    precio_lista: number;
    precio_venta: number;
    valor_mano_de_obra?: number;
    sumatoria_d_e_f?: number;
    formula_valor?: number;
}

export interface IProductCost {
    product_id: string;
    monto_neto: number;
    comisiones_monto_neto: number;
    material_cost: IMaterialCost;
}
export interface IOrderResponse {
    order_id: number;
    fecha: string;
    nombre_cliente: string;
    costeos: IProductCost[]
}