import { IComprador } from "types/order"

export interface IClientFormProps {
    isEdit?: boolean
    comprador?: IComprador
    actionIsDisabled: boolean
    estado: string
    onSubmitComprador: (comprador: IComprador) => void
    onActiveUpdate: () => void
    onCancel: () => void
}