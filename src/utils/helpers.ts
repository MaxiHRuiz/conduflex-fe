export function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLocaleLowerCase();
}

export function generateRandomId(length = 6) {
    return Math.random().toString(36).substring(2, length + 2).toString();
}

export const generateURL = (productId: string, stockId: string) => `https://${window.location.origin}/productos/${productId}/stocks/${stockId}`