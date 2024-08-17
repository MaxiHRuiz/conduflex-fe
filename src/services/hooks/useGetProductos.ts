import { QueryObserverResult, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { IProductCollection, IProductParams } from 'types/product';

const getProducts = async (params?: IProductParams): Promise<AxiosResponse<IProductCollection, any>> => {
    return await axiosCore.get<IProductCollection>('/product/search', {params});
};

export const useGetProducts = (params?: IProductParams): QueryObserverResult<IProductCollection, any> => {
    return useQuery<IProductCollection, any>({
        queryFn: async () => {
            const { data } = await getProducts(params);
            return data;
        },
        queryKey: [ 'get-products' ],
    });
};