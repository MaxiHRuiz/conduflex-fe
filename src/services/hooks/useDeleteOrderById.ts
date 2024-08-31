import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { onError } from 'utils/helpers';

const deleteOrderById = async (orderId: string): Promise<AxiosResponse<string, any>> => {
    return await axiosCore.delete(`/order/${orderId}`);
};

export const useDeleteOrderById = (): UseMutationResult<AxiosResponse<string, any>, Error, string, unknown> => {
    const navigate = useNavigate()

    return useMutation({
        mutationFn: (orderId: string) =>
            deleteOrderById(orderId),
        onSuccess: () => {
            toast.success("Se elimino el pedido correctamente");
            navigate("/pedidos");
        },
        onError
    })
}