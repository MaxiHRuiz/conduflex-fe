import { IStock } from "types/stock"

export interface IStockFormProps {
    isEdit?: boolean
    title: string
    stock?: IStock
    onSubmitStock: (stock: IStock) => void
}