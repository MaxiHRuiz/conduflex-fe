import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { IOrder } from 'types/order';
import { toast } from 'react-toastify';
import { onError } from 'utils/helpers';
import { useParams } from 'react-router-dom';

const updateOrder = async (order: IOrder): Promise<AxiosResponse<IOrder, any>> => {
    return await axiosCore.patch<IOrder>(`/order/${order.id}`, order);
};

export const useUpdateOrder = (): UseMutationResult<AxiosResponse<IOrder, any>, Error, IOrder, unknown> => {
    const {orderId} = useParams()
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (order: IOrder) =>
            updateOrder(order),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['get-order-by-id', orderId]})
            toast.success("Se actualizo el pedido correctamente");
        },
        onError
    })
}