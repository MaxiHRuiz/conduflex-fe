import { QueryObserverResult, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { IRole } from 'types/role';

const getRole = async (): Promise<AxiosResponse<IRole, any>> => {
    return await axiosCore.get<IRole>(`/user/rol`);
};

export const useGetRole = (): QueryObserverResult<IRole, any> => {
    return useQuery<IRole, any>({
        queryFn: async () => {
            const { data } = await getRole();
            return data;
        },
        queryKey: ['get-role'],
    });
};