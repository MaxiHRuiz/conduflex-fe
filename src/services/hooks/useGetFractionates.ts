import { keepPreviousData, QueryObserverResult, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { IBaseCollection } from 'types/base';
import { IFractionate, IFractionateParams } from 'types/fractionate';

const getFractionates = async (params?: IFractionateParams): Promise<AxiosResponse<IBaseCollection<IFractionate>, any>> => {
    return await axiosCore.get<IBaseCollection<IFractionate>>(`/product/stock/fractionate/search`, { params });
};

export const useGetFractionates = (params?: IFractionateParams): QueryObserverResult<IBaseCollection<IFractionate>, any> => {
    return useQuery<IBaseCollection<IFractionate>, any>({
        queryFn: async () => {
            const { data } = await getFractionates(params);
            return data;
        },
        queryKey: ['get-fractionates', params],
        placeholderData: keepPreviousData,
        retry: false
    });
};