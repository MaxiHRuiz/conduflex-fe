export interface IClient {
    id?: number
    nombre: string,
    cuit: string,
    telefono: string,
    email: string,
    notas: string,
    direccion: IClientDirection
}

export interface IClientDirection {
    cp: number
    provincia: string
    ciudad: string,
    calle: string,
    numero: number,
    departamento: string,
}

