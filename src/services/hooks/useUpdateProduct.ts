import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { IBaseProduct, IProduct } from 'types/product';
import { toast } from 'react-toastify';

const updateProduct = async (productId: string, product: IBaseProduct): Promise<AxiosResponse<IProduct, any>> => {
    return await axiosCore.patch<IProduct>(`/product/${productId}`, product);
};

export const useUpdateProduct = (productId: string): UseMutationResult<AxiosResponse<IProduct, any>, Error, IBaseProduct, unknown> => {
    return useMutation({
        mutationFn: (product: IBaseProduct) =>
            updateProduct(productId, product),
        onSuccess: () => {
            toast.success("El producto se actualizo correctamente correctamente");
        },
    })
};

