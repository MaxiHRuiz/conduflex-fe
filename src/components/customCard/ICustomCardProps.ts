import { IProduct } from "types/product";

export interface ICustomCardProps {
    product: IProduct;
    hiddenShowAction?: boolean
}

export interface ICustomCardTableProps {
    product: IProduct;
}

