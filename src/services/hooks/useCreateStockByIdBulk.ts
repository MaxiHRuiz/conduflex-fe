import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { IBaseStock, IStockBulk } from 'types/stock';
import { toast } from 'react-toastify';
import { onError } from 'utils/helpers';

const createStockByIdBulk = async (productId: string, stock: IBaseStock): Promise<AxiosResponse<IStockBulk, any>> => {
    return await axiosCore.post<IStockBulk>(`/product/${productId}/stock/bulk`, stock);
};

export const useCreateStockByIdBulk = (productId: string): UseMutationResult<AxiosResponse<IStockBulk, any>, Error, IStockBulk, unknown> => {
    return useMutation({
        mutationFn: (stock: IStockBulk) =>
            createStockByIdBulk(productId, stock),
        onSuccess: () => {
            toast.success("El stock se creo correctamente");
        },
        onError
    })
}