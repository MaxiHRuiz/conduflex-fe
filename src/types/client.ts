export interface IClient {
    id?: number
    nombre: string,
    cuit: string,
    telefono: string,
    email: string,
    notas: string,
    direccion: IClientDirection
    vendedor?: ISeller

}

export interface IClientDirection {
    cp: number
    provincia: string
    ciudad: string,
    calle: string,
    numero: number,
    departamento: string,
}


export interface IClientDireccion {
    ciudad: string;

    provincia: string;
    calle: string;
    numero: number;
    departamento: string;
    cp: number;
}

export interface IClientComprador {
    email: string;
    telefono: string;
    notas: string;

}
export interface ISeller {
    nombre: string;
    email: string;
    comision: number;
}

export interface IClientFormData {
    direccion: IClientDireccion;
    comprador: IClientComprador;
    vendedor: ISeller;
}

