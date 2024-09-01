import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { IOrder } from 'types/order';
import { toast } from 'react-toastify';
import { onError } from 'utils/helpers';
import { useParams } from 'react-router-dom';

interface IFractionateBody {
    productId: string
    stockId: string
    fraccion: number
}

const updateFractionate = async (body: IFractionateBody): Promise<AxiosResponse<IFractionateBody, any>> => {
    return await axiosCore.post<IFractionateBody>(`/product/${body.productId}/stock/${body.stockId}/fractionate`, body);
};

export const useUpdateFractionate = (): UseMutationResult<AxiosResponse<IFractionateBody, any>, Error, IFractionateBody, unknown> => {
    const { stockId, productId } = useParams()
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (body: IFractionateBody) =>
            updateFractionate(body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['get-stock-by-id', productId, stockId ] })
            toast.success("Se fracciono correctamente");
        },
        onError
    })
}