import { IClient, IClientDirection } from "types/client"
import { IComprador } from "types/order"

export interface IClientFormProps {
    isEdit?: boolean
    client?: IClient
    actionIsDisabled: boolean
    estado: string
    onSubmitClient: (client: IClient) => void
    onActiveUpdate: () => void
    onCancel: () => void
}