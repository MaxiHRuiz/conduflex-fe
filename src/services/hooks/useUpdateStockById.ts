import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { IBaseStock, IStock } from 'types/stock';
import { toast } from 'react-toastify';

const updateStockById = async (productId: string, stockId: string, stock: IBaseStock): Promise<AxiosResponse<IStock, any>> => {
    return await axiosCore.patch<IStock>(`/product/${productId}/stock/${stockId}`, stock);
};

export const useUpdateStockById = (productId: string, stockId: string): UseMutationResult<AxiosResponse<IStock, any>, Error, IBaseStock, unknown> => {
    return useMutation({
        mutationFn: (stock: IBaseStock) =>
            updateStockById(productId, stockId, stock),
        onSuccess: () => {
            toast.success("El producto se actualizo correctamente correctamente");
        },
    })
};

// export const useUpdateProduct = (productId: string): UseMutationResult<AxiosResponse<IProduct, any>, Error, IBaseProduct, unknown> => {
//     return useMutation({
//         mutationFn: (product: IBaseProduct) =>
//             updateProduct(productId, product),
//         onSuccess: () => {
//             toast.success("El producto se actualizo correctamente correctamente");
//         },
//     })
// };