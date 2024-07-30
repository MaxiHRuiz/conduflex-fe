export interface ActionsProps {
    code: string
}

type ButtonType = 'menuItem' | 'icon' | 'gridAction'
type FormType = 'product' | 'stock' | 'order'

export interface IActionsButtonProps {
    buttonType?: ButtonType
    formType: FormType
    code: string
}