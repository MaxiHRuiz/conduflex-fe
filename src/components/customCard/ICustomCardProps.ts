import { IProductGet } from "dtos/product.dto";
import { IProduct } from "types/product";

export interface ICustomCardProps {
    product: IProduct;
    hiddenActions?: boolean
}

export interface ICustomCardTableProps {
    product: IProduct;
}

