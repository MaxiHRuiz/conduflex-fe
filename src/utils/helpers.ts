import { REACT_APP_URL } from "lib/constanst";
import { toast } from "react-toastify";
import { saveAs } from "file-saver";
import * as XLSX from 'xlsx';
import { IOrderResponse, IProductCost, IProductCostResult } from "types/cost";

type TypeColor = "warning" | "success" | "info" | "error" | undefined;

export const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLocaleLowerCase();
}

export const generateRandomId = (length = 6) => {
    return Math.random().toString(36).substring(2, length + 2).toString();
}

export const generateURL = (productId: string, stockId: string) => `${REACT_APP_URL}/productos/${productId}/stocks/${stockId}`

export const numberFormat = (value: number, isCurrency: boolean | undefined = true) => {
    return new Intl.NumberFormat("es-AR", isCurrency ? {
        style: "currency",
        currency: "ARS",
    } : undefined).format(value);
};

export const onError = (error: any): Promise<unknown> | unknown => {
    console.log(error)
    return toast.error(error?.response?.data?.message ?? error.message)
}

export const dateFormatter = (date: string, separator: string | undefined = "-", options: any | undefined = [{ day: 'numeric' }, { month: 'short' }, { year: 'numeric' }]) => {
    if (!date) return date
    function format(option: Intl.DateTimeFormatOptions | undefined) {
        let formatter = new Intl.DateTimeFormat('es-en', option);
        return formatter.format(new Date(date));
    }
    return options.map(format).join(separator);
}

export const ISOdateFormatter = (date: string, otherFormat: boolean = false) => {
    const fecha = new Date(date);
    const dia = fecha.getUTCDate().toString().padStart(2, '0');
    const mes = (fecha.getUTCMonth() + 1).toString().padStart(2, '0');
    const año = fecha.getUTCFullYear();

    if (otherFormat) return `${año}-${mes}-${dia}`

    return `${dia}-${mes}-${año}`
}


export const stockStatusMapper = (state: string): { label: string, variant: TypeColor } => {
    if (state === "no_disponible") {
        return {
            label: "No disponible",
            variant: "error"
        }
    } if (state === "solicitud_para_producir") {
        return {
            label: "Solicitud para producir",
            variant: "warning"
        }
    } if (state === "solicitud_para_producir_aprobada") {
        return {
            label: "Solicitud para producir aprobada",
            variant: "info"
        }
    } if (state === "en_produccion") {
        return {
            label: "En produccion",
            variant: "info"
        }
    }
    if (state === "produccion_finalizada") {
        return {
            label: "Produccion finalizada",
            variant: "info"
        }
    }
    if (state === "en_stock") {
        return {
            label: "En stock",
            variant: "info"
        }
    }
    if (state === "listo_para_entregar") {
        return {
            label: "Listo para entregar",
            variant: "info"
        }
    }
    if (state === "entregado") {
        return {
            label: "Entregado",
            variant: "success"
        }
    }
    return {
        label: state,
        variant: undefined
    }
}

export const orderStatusMapper = (state: string): { label: string, variant: TypeColor } => {
    if (state === "pendiente") {
        return {
            label: "Pendiente",
            variant: "info"
        }
    } if (state === "aprobado" || state === 'aprobada') {
        return {
            label: "Aprobado",
            variant: "success"
        }
    } if (state === "cancelado") {
        return {
            label: "Cancelado",
            variant: "error"
        }
    } if (state === "finalizado") {
        return {
            label: "Finalizado",
            variant: "success"
        }
    }
    return {
        label: state,
        variant: undefined
    }
}

export const getDisponible = (status: string) =>
    status === "todos" ? undefined : status === "disponibles" ? true : false;

export const getStock = (status: string) =>
    status === "todos" ? undefined : status === "con_stock" ? true : false;

export const statuses = [
    "no_disponible",
    "solicitud_para_producir",
    "solicitud_para_producir_aprobada",
    "en_produccion",
    "produccion_finalizada",
    "en_stock",
    "listo_para_entregar",
    "entregado"
];

export const statusLabels = [
    { value: "no_disponible", label: "No Disponible" },
    { value: "solicitud_para_producir", label: "Solicitud para Producir" },
    { value: "solicitud_para_producir_aprobada", label: "Solicitud para Producir Aprobada" },
    { value: "en_produccion", label: "En Producción" },
    { value: "produccion_finalizada", label: "Producción Finalizada" },
    { value: "en_stock", label: "En Stock" },
    { value: "listo_para_entregar", label: "Listo para Entregar" },
    { value: "entregado", label: "Entregado" }
];

export const getStockStatus = (value: string) => statuses.includes(value) ? value : undefined

export function validarCUIT(cuit: string) {
    if (typeof cuit !== 'string') return false;
    cuit = cuit.replace(/-/g, '');

    if (cuit.length !== 11) return false;

    const base = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
    const verificador = parseInt(cuit[10], 10);
    let suma = 0;

    for (let i = 0; i < 10; i++) {
        suma += parseInt(cuit[i], 10) * base[i];
    }

    let resto = 11 - (suma % 11);
    if (resto === 11) resto = 0;
    if (resto === 10) resto = 9;

    return resto === verificador;
}

export const separateProductCosts = (orders: IOrderResponse[]): IProductCostResult[] => {
    let productCosts: IProductCostResult[] = [];
    orders.forEach(order => {
        const filteredProducts = order.costeos.map((product: any): IProductCostResult => {
            return {
                fecha: order.fecha,
                nombre_cliente: order.nombre_cliente,
                order: order.order_id,
                monto_neto: product.monto_neto,
                comisiones_monto_neto: product.comisiones_monto_neto,
                valor_mano_de_obra: undefined,
                sumatoria_d_e_f: undefined,
                formula_valor: undefined,
                kg_cobre: product.material_cost.kg_cobre,
                kg_almas: product.material_cost.kg_almas,
                kg_relleno: product.material_cost.kg_relleno,
                kg_vaina: product.material_cost.kg_vaina,
                fleje: product.material_cost.fleje,
                precio_costo: product.material_cost.precio_costo,
                precio_lista: product.material_cost.precio_lista,
                precio_venta: product.material_cost.precio_venta,
                product: product.product_id
            }
        });
        productCosts = productCosts.concat(filteredProducts);
    });
    return productCosts;
};

export const exportToExcel = (data: any, fileName: any) => {
    const fechaActual = new Date().toLocaleString();
    const modifiedData = data.map((row: any) => {
        const newRow = { ...row }; // Insertar la columna vacía en la octava posición 
        const entries = Object.entries(newRow);
        const updatedEntries = [...entries.slice(0, 7), ['', ''], ...entries.slice(7)];
        return Object.fromEntries(updatedEntries);
    });
    const worksheet = XLSX.utils.json_to_sheet(modifiedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
    });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, `${fileName}-${fechaActual}.xlsx`);
};

export const formatString = (str: string) => {
    return str.split('_') // Divide el string por los guiones bajos 
        .map((word, index) => index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) // Capitaliza la primera palabra 
            : word)
        .join(' '); // Une las palabras con un espacio 
};
