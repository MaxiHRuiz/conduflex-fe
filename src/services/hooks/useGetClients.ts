import { keepPreviousData, QueryObserverResult, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { IBaseCollection, IBaseParams } from 'types/base';
import { IClient } from 'types/client';

interface IClientsParams extends IBaseParams {
    nombre: string
}


const getClients = async (params?: {}): Promise<AxiosResponse<IBaseCollection<IClient>, any>> => {
    return await axiosCore.get<IBaseCollection<IClient>>('/client/search', { params });
};

export const useGetClients = (params?: IClientsParams): QueryObserverResult<IBaseCollection<IClient>, any> => {
    return useQuery<IBaseCollection<IClient>, any>({
        queryFn: async () => {
            const { data } = await getClients(params);
            return data;
        },
        queryKey: ['get-clients', params],
        placeholderData: keepPreviousData,
        retry: false
    });
};