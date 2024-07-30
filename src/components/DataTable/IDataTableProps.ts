import { IOrder } from "dtos/order.dto";
import { IProduct } from "dtos/product.dto";
import { IStock } from "dtos/stock.dto";

export interface IDataTableProps {
    product: Array<IProduct>
}

export interface IStockTableProps {
    stock: Array<IStock>
}

export interface IOrderTableProps {
    order: Array<IOrder>
}