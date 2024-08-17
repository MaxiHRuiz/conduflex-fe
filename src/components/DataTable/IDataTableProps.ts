import { GridPaginationModel } from "@mui/x-data-grid";
import { IOrder } from "dtos/order.dto";
import { IStock } from "dtos/stock.dto";
import { IProduct } from "types/product";

export interface IDataTableProps {
    isLoading: boolean
    product: Array<IProduct>
    pagination: GridPaginationModel
    count: number
    onChangePagination: (pagination: GridPaginationModel) => void
}

export interface IStockTableProps {
    stock: Array<IStock>
}

export interface IOrderTableProps {
    order: Array<IOrder>
}