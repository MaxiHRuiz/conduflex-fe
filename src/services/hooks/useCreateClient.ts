import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { onError } from 'utils/helpers';
import { IClient } from 'types/client';

const createClient = async (cliente: IClient): Promise<AxiosResponse<IClient, any>> => {
    return await axiosCore.post<IClient>(`/client`, cliente);
};

export const useCreateClient = (): UseMutationResult<AxiosResponse<IClient, any>, Error, IClient, unknown> => {
    const navigate = useNavigate()

    return useMutation({
        mutationFn: (order: IClient) =>
            createClient(order),
        onSuccess: () => {
            toast.success("Se creo el cliente correctamente");
            navigate('/clientes')
        },
        onError
    })
}