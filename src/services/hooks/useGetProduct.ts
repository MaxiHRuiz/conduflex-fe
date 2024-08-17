import { QueryObserverResult, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { IProduct } from 'types/product';

const getProduct = async (codeId: string): Promise<AxiosResponse<IProduct, any>> => {
    return await axiosCore.get<IProduct>(`/product/${codeId}`);
};

export const useGetProduct = (codeId: string): QueryObserverResult<IProduct, any> => {
    return useQuery<IProduct, any>({
        queryFn: async () => {
            const { data } = await getProduct(codeId);
            return data;
        },
        queryKey: [ 'get-product' ],
    });
};