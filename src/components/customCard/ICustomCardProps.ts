import { IProduct, IProductGet } from "dtos/product.dto";

export interface ICustomCardProps {
    product: IProduct;
    hiddenActions?: boolean
}

export interface ICustomCardTableProps {
    product: IProduct;
}

