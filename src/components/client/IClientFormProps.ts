import { IClient, IClientDirection, IClientFormData } from "types/client"
import { IComprador, IOrder } from "types/order"

export interface IClientFormProps {
    isEdit?: boolean
    order?: IOrder
    actionIsDisabled: boolean
    estado: string
    onSubmitClient: (client: IClientFormData) => void
    onActiveUpdate: () => void
    onCancel: () => void
}