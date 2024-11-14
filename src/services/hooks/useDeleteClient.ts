import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { toast } from 'react-toastify';
import { onError } from 'utils/helpers';
import { IClient } from 'types/client';
import { useNavigate } from 'react-router-dom';

const deleteClient = async (clientId: string): Promise<AxiosResponse<IClient, any>> => {
    return await axiosCore.delete<IClient>(`/client/${clientId}`);
};

export const useDeleteClient = (): UseMutationResult<AxiosResponse<IClient, any>, Error, string, unknown> => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (clientId: string) =>
            deleteClient(clientId),
        onSuccess: () => {
            toast.success("Se elimino correctamente");
            queryClient.invalidateQueries({queryKey: ['get-clients']})
            navigate('/clientes')
        },
        onError
    })
}