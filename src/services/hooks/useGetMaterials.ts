import { QueryObserverResult, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { ICostMaterials } from 'types/cost';

const getMaterials = async (): Promise<AxiosResponse<ICostMaterials, any>> => {
    return await axiosCore.get<ICostMaterials>(`/materials`);
};

export const useGetMaterials = (): QueryObserverResult<ICostMaterials, any> => {
    return useQuery<ICostMaterials, any>({
        queryFn: async () => {
            const { data } = await getMaterials();
            return data;
        },
        queryKey: [ 'get-materials'],
        retry: false,
    });
};