import { toast } from "react-toastify";

export const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLocaleLowerCase();
}

export const generateRandomId = (length = 6) => {
    return Math.random().toString(36).substring(2, length + 2).toString();
}

export const generateURL = (productId: string, stockId: string) => `${window.location.origin}/productos/${productId}/stocks/${stockId}`

export const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
    }).format(value);
};

export const onError =  (error: Error): Promise<unknown> | unknown =>
    toast.error(error.message)