import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { IOrder } from 'types/order';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const createOrder = async (order: IOrder): Promise<AxiosResponse<IOrder, any>> => {
    return await axiosCore.post<IOrder>(`/order`, order);
};

export const useCreateOrder = (): UseMutationResult<AxiosResponse<IOrder, any>, Error, IOrder, unknown> => {
    const navigate = useNavigate()

    return useMutation({
        mutationFn: (order: IOrder) =>
            createOrder(order),
        onSuccess: () => {
            toast.success("Se creo el pedido correctamente");
            navigate("/");
        },
    })
}