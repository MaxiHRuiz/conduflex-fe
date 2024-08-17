import { QueryObserverResult, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { IStock, IStockParams } from 'types/stock';
import { IBaseCollection } from 'types/base';

const getStocksByProductId = async (productId: string, params?: IStockParams): Promise<AxiosResponse<Array<IStock>, any>> => {
    return await axiosCore.get<Array<IStock>>(`/product/${productId}/stock`);
};

export const useGetStocksByProductId = (productId: string, params?: IStockParams): QueryObserverResult<IBaseCollection<IStock>, any> => {
    return useQuery<IBaseCollection<IStock>, any>({
        queryFn: async () => {
            const { data } = await getStocksByProductId(productId, params);
            return { response: data } as IBaseCollection<IStock>;
        },
        queryKey: [ 'get-stocks-by-product-id' ],
    });
};