import { keepPreviousData, QueryObserverResult, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { IOrder, IOrderParams } from 'types/order';
import { IBaseCollection } from 'types/base';

const getOrders = async (params?: IOrderParams): Promise<AxiosResponse<IBaseCollection<IOrder>, any>> => {
    return await axiosCore.get<IBaseCollection<IOrder>>('/order/search', { params });
};

export const useGetOrders = (params?: IOrderParams): QueryObserverResult<IBaseCollection<IOrder>, any> => {
    return useQuery<IBaseCollection<IOrder>, any>({
        queryFn: async () => {
            const { data } = await getOrders(params);
            return data;
        },
        queryKey: ['get-orders', params],
        placeholderData: keepPreviousData,
        retry: false
    });
};