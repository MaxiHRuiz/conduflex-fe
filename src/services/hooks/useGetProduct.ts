import { QueryObserverResult, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { IProduct } from 'types/product';

const getProduct = async (productId: string): Promise<AxiosResponse<IProduct, any>> => {
    return await axiosCore.get<IProduct>(`/product/${productId}`);
};

export const useGetProduct = (productId: string): QueryObserverResult<IProduct, any> => {
    return useQuery<IProduct, any>({
        queryFn: async () => {
            const { data } = await getProduct(productId);
            return data;
        },
        queryKey: [ 'get-product' ],
        retry: false
    });
};