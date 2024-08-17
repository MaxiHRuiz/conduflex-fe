import { IBaseParams } from "./base"

export interface IProduct {
    id: string
    cantidad_almas: number
    cantidad_hilos: number
    descripcion: string
    hay_stock: boolean
    diametro_cableado: number
    diametro_conductor_Produccion: number
    diametro_conductor_calculado: number
    diametro_cuerda: number
    diametro_envoltura_calculado: number
    diametro_envoltura_produccion: number
    diametro_maximo_extremo: number
    diametro_nominal: number
    diametro_relleno_calculado: number
    diametro_relleno_produccion: number
    diametro_sobre_fleje: number
    diametros_hilos: number
    espesor: number
    espesor_aislacion_minimo: number
    espesor_aislacion_promedio: number
    espesor_envoltura_minimo: number
    espesor_envoltura_promedio: number
    kgs_a: number
    kgs_armadura_metalica: number
    kgs_cu: number
    kgs_produccion: number
    kgs_r: number
    kgs_terminado: number
    kgs_totales: number
    kgs_v: number
    matriz: string
    matriz_envoltura: number
    matriz_relleno: string
    obs1: string
    obs2: string
    obs3: string
    paso: string
    paso_final: string
    pico: string
    pico_cuerda: number
    pico_relleno: number
    precio: number
    resist_aislacion_70c: number
    resist_electrica_20c: number
    tension_electrodos: string
    tension_en_agua: number
}

export interface IProductParams extends IBaseParams {
    descripcion?: string
    codigo?: string
}