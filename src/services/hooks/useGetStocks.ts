import { keepPreviousData, QueryObserverResult, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { IStock, IStockParams } from 'types/stock';
import { IBaseCollection } from 'types/base';

const getStocks = async (params?: IStockParams): Promise<AxiosResponse<IBaseCollection<IStock>, any>> => {
    return await axiosCore.get<IBaseCollection<IStock>>(`/product/stock/search`,{params});
};

export const useGetStocks = (params?: IStockParams): QueryObserverResult<IBaseCollection<IStock>, any> => {
    return useQuery<IBaseCollection<IStock>, any>({
        queryFn: async () => {
            const { data } = await getStocks(params);
            return data;
        },
        queryKey: [ 'get-stocks', params],
        placeholderData: keepPreviousData
    });
};