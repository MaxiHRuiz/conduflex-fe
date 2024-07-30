import { IProduct } from "dtos/product.dto";

export interface IProductFormProps {
    isEdit?: boolean
    title: string
    product?: IProduct
    onSubmitProduct: (product: IProduct) => void
}