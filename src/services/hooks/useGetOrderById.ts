import { QueryObserverResult, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { IOrder } from 'types/order';

const getOrderById = async (orderId: string): Promise<AxiosResponse<IOrder, any>> => {
    return await axiosCore.get<IOrder>(`/order/${orderId}`);
};

export const useGetOrderById = (orderId: string): QueryObserverResult<IOrder, any> => {
    return useQuery<IOrder, any>({
        queryFn: async () => {
            const { data } = await getOrderById(orderId);
            return data;
        },
        queryKey: [ 'get-order-by-id', orderId],
    });
};