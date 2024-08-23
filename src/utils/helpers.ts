import { toast } from "react-toastify";

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

