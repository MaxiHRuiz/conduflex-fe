export interface ActionsProps {
    product_id: string
}

type ButtonType = 'menuItem' | 'icon' | 'gridAction'
type FormType = 'product' | 'stock' | 'order'

export interface IActionsButtonProps {
    buttonType?: ButtonType
    formType: FormType
    productId?: string
    stockId?: string
}