import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { IOrder } from 'types/order';
import { toast } from 'react-toastify';
import { onError } from 'utils/helpers';
import { useParams } from 'react-router-dom';
import { IClientFormData } from 'types/client';

interface IOrderInformation {
    orderId: string
    body: IClientFormData
}

const updateOrderInformation = async ({orderId, body} : IOrderInformation): Promise<AxiosResponse<IOrderInformation, any>> => {
    return await axiosCore.patch<IOrderInformation>(`/order/${orderId}`, body);
};

export const useUpdateOrderInformation = (): UseMutationResult<AxiosResponse<IOrderInformation, any>, Error, IOrderInformation, unknown> => {
    const {orderId} = useParams()
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (order: IOrderInformation) =>
            updateOrderInformation(order),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['get-order-by-id', orderId]})
            toast.success("Se actualizo el pedido correctamente");
        },
        onError
    })
}