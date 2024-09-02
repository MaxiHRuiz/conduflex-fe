import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { toast } from 'react-toastify';
import { onError } from 'utils/helpers';
import { useParams } from 'react-router-dom';

const authorizeOrder = async (orderId: string): Promise<AxiosResponse<string, any>> => {
    return await axiosCore.post(`/order/${orderId}/authorize`);
};

export const useAuthorizeOrder = (): UseMutationResult<AxiosResponse<string, any>, Error, string, unknown> => {
    const {orderId} = useParams()
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (orderId: string) =>
            authorizeOrder(orderId),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: [ 'get-order-by-id', orderId]})
            toast.success("Se ha aprobado el pedido correctamente");
        },
        onError
    })
}