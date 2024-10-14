import { IProduct } from "types/product";

export interface ICustomCardProps {
    product: IProduct & { metros_disponibles: number };
    hiddenShowAction?: boolean
}

export interface ICustomCardTableProps {
    product: IProduct;
}

