import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { onError } from 'utils/helpers';

const deleteOrderById = async (orderId: number): Promise<AxiosResponse<number, any>> => {
    return await axiosCore.delete(`/order/${orderId}`);
};

export const useDeleteOrderById = (): UseMutationResult<AxiosResponse<number, any>, Error, number, unknown> => {
    const navigate = useNavigate()

    return useMutation({
        mutationFn: (orderId: number) =>
            deleteOrderById(orderId),
        onSuccess: () => {
            toast.success("Se elimino el pedido correctamente");
            navigate("/pedidos");
        },
        onError
    })
}