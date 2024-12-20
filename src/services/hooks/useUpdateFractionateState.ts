import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { IOrder } from 'types/order';
import { toast } from 'react-toastify';
import { onError } from 'utils/helpers';
import { useParams } from 'react-router-dom';

interface IStateBody {
    estado: string
    id: string
}

const updateFractionateState = async (body: IStateBody): Promise<AxiosResponse<IStateBody, any>> => {
    return await axiosCore.patch<IStateBody>(`/product/stock/fractionate/${body.id}?estado=${body.estado}`);
};

export const useUpdateFractionateState = (): UseMutationResult<AxiosResponse<IStateBody, any>, Error, IStateBody, unknown> => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (body: IStateBody) =>
            updateFractionateState(body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['get-fractionates' ] })
            toast.success("Se actualizo correctamente");
        },
        onError
    })
}