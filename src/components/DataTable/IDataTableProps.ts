import { GridPaginationModel } from "@mui/x-data-grid";
import { IOrder } from "dtos/order.dto";
import { IProduct } from "types/product";
import { IStock } from "types/stock";

export interface IDataTableProps<T> {
    isLoading: boolean
    data: Array<T>
    pagination: GridPaginationModel
    count: number
    rowsPerPageOptions?: number[]
    onChangePagination: (pagination: GridPaginationModel) => void
}

export interface IStockTableProps {
    stock: Array<IStock>
}

export interface IOrderTableProps {
    order: Array<IOrder>
}