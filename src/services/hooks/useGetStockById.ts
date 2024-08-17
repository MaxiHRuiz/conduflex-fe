import { QueryObserverResult, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { IStock } from 'types/stock';

const getStockById = async (productId: string, stockId: string): Promise<AxiosResponse<IStock, any>> => {
    return await axiosCore.get<IStock>(`/product/${productId}/stock/${stockId}`);
};

export const useGetStockById = (productId: string, stockId: string): QueryObserverResult<IStock, any> => {
    return useQuery<IStock, any>({
        queryFn: async () => {
            const { data } = await getStockById(productId, stockId);
            return data;
        },
        queryKey: [ 'get-stock-by-id' ],
    });
};