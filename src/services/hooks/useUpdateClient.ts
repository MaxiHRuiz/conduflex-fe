import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { toast } from 'react-toastify';
import { onError } from 'utils/helpers';
import { IClient } from 'types/client';

const updateClient = async (clientId: string, client: IClient): Promise<AxiosResponse<IClient, any>> => {
    return await axiosCore.patch<IClient>(`/client/${clientId}`, client);
};

export const useUpdateClient = (clientId: string): UseMutationResult<AxiosResponse<IClient, any>, Error, IClient, unknown> => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (client: IClient) =>
            updateClient(clientId, client),
        onSuccess: () => {
            toast.success("El cliente se actualizó correctamente correctamente");    
            queryClient.invalidateQueries({queryKey: ['get-client', clientId]})
        },
        onError
    })
};

