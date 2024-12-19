import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { toast } from 'react-toastify';
import { onError } from 'utils/helpers';
import { ICostParams, IOrderResponse } from 'types/cost';

const postCost = async (orders: ICostParams): Promise<AxiosResponse<Array<IOrderResponse>, any>> => {
    return await axiosCore.post<Array<IOrderResponse>>('/order/cost', orders);
};

export const usePostCost = (): UseMutationResult<AxiosResponse<Array<IOrderResponse>, any>, Error, ICostParams, unknown> => {
    return useMutation({
        mutationFn: (orders: ICostParams) =>
            postCost(orders),
        onSuccess: () => {
            toast.success("El costo se calculo correctamente");
        },
        onError
    })
}