import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { IBaseStock, IStock } from 'types/stock';
import { toast } from 'react-toastify';
import { onError } from 'utils/helpers';

const createStockById = async (productId: string, stock: IBaseStock): Promise<AxiosResponse<IStock, any>> => {
    return await axiosCore.post<IStock>(`/product/${productId}/stock`, stock);
};

export const useCreateStockById = (productId: string): UseMutationResult<AxiosResponse<IStock, any>, Error, IStock, unknown> => {
    return useMutation({
        mutationFn: (stock: IStock) =>
            createStockById(productId, stock),
        onSuccess: () => {
            toast.success("El stock se creo correctamente");
        },
        onError
    })
}