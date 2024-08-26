import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { toast } from 'react-toastify';
import { onError } from 'utils/helpers';

const authorizeById = async (orderId: number): Promise<AxiosResponse<number, any>> => {
    return await axiosCore.post(`/order/${orderId}/authorize`);
};

export const useAuthorizeById = (): UseMutationResult<AxiosResponse<number, any>, Error, number, unknown> => {
    return useMutation({
        mutationFn: (orderId: number) =>
            authorizeById(orderId),
        onSuccess: () => {
            toast.success("Se autorizo la orden correctamente");
        },
        onError
    })
}