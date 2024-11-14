import { QueryObserverResult, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { IClient } from 'types/client';

const getClient= async (clientId: string): Promise<AxiosResponse<IClient, any>> => {
    return await axiosCore.get<IClient>(`/client/${clientId}`);
};

export const useGetClient = (clientId: string): QueryObserverResult<IClient, any> => {
    return useQuery<IClient, any>({
        queryFn: async () => {
            const { data } = await getClient(clientId);
            return data;
        },
        queryKey: [ 'get-client', clientId],
        retry: false,
    });
};