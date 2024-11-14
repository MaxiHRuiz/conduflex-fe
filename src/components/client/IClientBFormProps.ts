import { IClient } from "types/client"

export interface IClientBFormProps {
    isEdit?: boolean
    title: string
    client?: IClient
    onSubmitClient: (product: IClient) => void
}