import { toast } from "react-toastify";

type TypeColor = "warning" | "success" | "info" | "error" | undefined;

export const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLocaleLowerCase();
}

export const generateRandomId = (length = 6) => {
    return Math.random().toString(36).substring(2, length + 2).toString();
}

export const generateURL = (productId: string, stockId: string) => `${window.location.origin}/productos/${productId}/stocks/${stockId}`

export const numberFormat = (value: number, isCurrency: boolean | undefined = true) => {
    return new Intl.NumberFormat("es-AR", isCurrency ? {
        style: "currency",
        currency: "ARS",
    } : undefined).format(value);
};

export const onError = (error: Error): Promise<unknown> | unknown =>
    toast.error(error.message)

export const dateFormatter = (date: string, separator: string | undefined = "-", options: any | undefined = [{ day: 'numeric' }, { month: 'short' }, { year: 'numeric' }]) => {
    if (!date) return date
    function format(option: Intl.DateTimeFormatOptions | undefined) {
        let formatter = new Intl.DateTimeFormat('es-en', option);
        return formatter.format(new Date(date));
    }
    return options.map(format).join(separator);
}


export const stockStatusMapper = (state: string): { label: string, variant: TypeColor } => {
    if (state === "no_disponible") {
        return {
            label: "no disponible",
            variant: "warning"
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
        return {label: "Entregado",
        variant: "success"}
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
            variant: "warning"
        }
    } if (state === "aceptado") {
        return {
            label: "Aceptado",
            variant: "success"
        }
    } if (state === "cancelado") {
        return {
            label: "Cancelado",
            variant: "error"
        }
    }
    return {
        label: state,
        variant: undefined
    }
}

