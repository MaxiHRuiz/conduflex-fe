import { IStock } from "types/stock"

export interface IStockFormProps {
    isEdit?: boolean
    title: string
    subTitle: string
    stock?: IStock
    onSubmitStock: (stock: IStock, productCount: number) => void
}