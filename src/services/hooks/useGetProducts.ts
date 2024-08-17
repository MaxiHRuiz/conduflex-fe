import { QueryObserverResult, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { IProduct, IProductParams } from 'types/product';
import { IBaseCollection } from 'types/base';

const getProducts = async (params?: IProductParams): Promise<AxiosResponse<IBaseCollection<IProduct>, any>> => {
    return await axiosCore.get<IBaseCollection<IProduct>>('/product/search', { params });
};

export const useGetProducts = (params?: IProductParams): QueryObserverResult<IBaseCollection<IProduct>, any> => {
    return useQuery<IBaseCollection<IProduct>, any>({
        queryFn: async () => {
            const { data } = await getProducts(params);
            return data;
        },
        queryKey: ['get-products']
    });
};