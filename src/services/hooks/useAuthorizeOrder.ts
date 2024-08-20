import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { IOrder } from 'types/order';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const authorizeOrder = async (orderId: string): Promise<AxiosResponse<string, any>> => {
    return await axiosCore.post(`/order/${orderId}/authorize`);
};

export const useAuthorizeOrder = (): UseMutationResult<AxiosResponse<string, any>, Error, string, unknown> => {
    const navigate = useNavigate()

    return useMutation({
        mutationFn: (orderId: string) =>
            authorizeOrder(orderId),
        onSuccess: () => {
            toast.success("Se creo el pedido correctamente");
            navigate("/");
        },
    })
}