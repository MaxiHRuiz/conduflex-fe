import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { onError } from 'utils/helpers';

const authorizeOrder = async (orderId: string): Promise<AxiosResponse<string, any>> => {
    return await axiosCore.post(`/order/${orderId}/authorize`);
};

export const useAuthorizeOrder = (): UseMutationResult<AxiosResponse<string, any>, Error, string, unknown> => {
    return useMutation({
        mutationFn: (orderId: string) =>
            authorizeOrder(orderId),
        onSuccess: () => {
            toast.success("Se ha sido aprobado el pedido correctamente");
        },
        onError
    })
}