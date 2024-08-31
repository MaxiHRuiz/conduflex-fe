import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { toast } from 'react-toastify';
import { onError } from 'utils/helpers';

interface IAuthorizeBody {
    productStock: string[]
}

const authorizeById = async (orderId: string, body: IAuthorizeBody): Promise<AxiosResponse<IAuthorizeBody, any>> => {
    return await axiosCore.post(`/order/${orderId}/authorize`, body);
};

export const useAuthorizeById = (orderId: string): UseMutationResult<AxiosResponse<IAuthorizeBody, any>, Error, IAuthorizeBody, unknown> => {
    return useMutation({
        mutationFn: (body: IAuthorizeBody) =>
            authorizeById(orderId, body),
        onSuccess: () => {
            toast.success("Se autorizo la orden correctamente");
        },
        onError
    })
}