import { IStock } from "dtos/stock.dto";

export interface IStockFormProps {
    isEdit?: boolean
    title: string
    stock?: IStock
    onSubmitStock: (stock: IStock) => void
}