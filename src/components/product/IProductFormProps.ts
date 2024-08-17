import { IProduct } from "types/product"

export interface IProductFormProps {
    isEdit?: boolean
    title: string
    product?: IProduct
    onSubmitProduct: (product: IProduct) => void
}