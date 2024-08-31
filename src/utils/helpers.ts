import { REACT_APP_URL } from "lib/constanst";
import { toast } from "react-toastify";

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

export const ISOdateFormatter = (date: string) => {
    const fecha = new Date(date);
    const dia = fecha.getUTCDate().toString().padStart(2, '0');
    const mes = (fecha.getUTCMonth() + 1).toString().padStart(2, '0');
    const año = fecha.getUTCFullYear();

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
    } if (state === "aprobado") {
        return {
            label: "Aprobado",
            variant: "success"
        }
    } if (state === "cancelado") {
        return {
            label: "Cancelado",
            variant: "error"
        }
    }    if (state === "finalizado") {
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
