import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { IProduct } from 'types/product';
import { toast } from 'react-toastify';
import { onError } from 'utils/helpers';

const deleteProduct = async (productId: string): Promise<AxiosResponse<IProduct, any>> => {
    return await axiosCore.delete<IProduct>(`/product/${productId}`);
};

export const useDeleteProduct = (): UseMutationResult<AxiosResponse<IProduct, any>, Error, string, unknown> => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (productId: string) =>
            deleteProduct(productId),
        onSuccess: () => {
            toast.success("Se elimino correctamente");
            queryClient.invalidateQueries({queryKey: ['get-products']})
        },
        onError
    })
}