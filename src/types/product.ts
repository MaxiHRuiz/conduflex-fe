import { IBaseParams } from "./base"

export interface IBaseProduct {
    descripcion: string;
    espesor_aislacion_promedio: number;
    espesor_aislacion_minimo: number;
    espesor_envoltura_promedio: number;
    espesor_envoltura_minimo: number;
    diametro_nominal: number;
    diametro_maximo_extremo: number;
    resist_aislacion_70c: number;
    tension_electrodos: string;
    resist_electrica_20c: number;
    tension_en_agua: number;
    cantidad_hilos: number;
    diametros_hilos: number;
    diametro_cuerda: number;
    pico_cuerda: number;
    diametro_conductor_calculado: number;
    diametro_conductor_Produccion: number;
    matriz: string;
    cantidad_almas: number;
    diametro_cableado: number;
    pico_relleno: number;
    diametro_relleno_calculado: number;
    diametro_relleno_produccion: number;
    espesor: number;
    diametro_sobre_fleje: number;
    diametro_envoltura_calculado: number;
    diametro_envoltura_produccion: number;
    matriz_envoltura: number;
    kgs_a: number;
    kgs_r: number;
    kgs_v: number;
    kgs_cu: number;
    kgs_totales: number;
    kgs_terminado: number;
    kgs_produccion: number;
    kgs_armadura_metalica: number;
    paso: string;
    matriz_relleno: string;
    pico: string;
    obs1: string;
    obs2: string;
    obs3: string;
    paso_final: string;
    precio: number;
    hay_stock: boolean;
}

export interface IProduct extends IBaseProduct {
    id: string;
}

export interface IProductParams extends IBaseParams {
    description?: string
    id?: string
}