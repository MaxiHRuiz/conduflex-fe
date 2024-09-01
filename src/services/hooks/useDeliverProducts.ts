import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { toast } from 'react-toastify';
import { onError } from 'utils/helpers';

interface IAuthorizeBody {
    stocks: string[]
}

const deliverProducts = async (orderId: string, body: IAuthorizeBody): Promise<AxiosResponse<IAuthorizeBody, any>> => {
    return await axiosCore.post(`/order/${orderId}/deliver`, body);
};

export const useDeliverProducts = (orderId: string): UseMutationResult<AxiosResponse<IAuthorizeBody, any>, Error, IAuthorizeBody, unknown> => {
    return useMutation({
        mutationFn: (body: IAuthorizeBody) =>
            deliverProducts(orderId, body),
        onSuccess: () => {
            toast.success("Se cambio a orden a entregado");
        },
        onError
    })
}