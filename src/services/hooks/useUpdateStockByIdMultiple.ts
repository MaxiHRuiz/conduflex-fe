import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { toast } from 'react-toastify';
import { onError } from 'utils/helpers';
import { IStock, IStockParams } from 'types/stock';

const updateStockByIdMultiple = async (stocks: IStock[]): Promise<AxiosResponse<IStock, any>[]> => {
    const fetchURL = (stock: IStock) => axiosCore.patch<IStock>(`/product/${stock.product_id}/stock/${stock.id}`, {...stock, estado: 'en_stock' });
    const postRequest = stocks.map(stock => {
        return fetchURL(stock)
    })
    
    return Promise.all(postRequest)
};

export const useUpdateStockByIdMultiple = (params?: IStockParams): UseMutationResult<AxiosResponse<IStock, any>[], Error, IStock[], unknown> => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (stocks: IStock[]) =>
            updateStockByIdMultiple(stocks),
        onSuccess: () => {
            toast.success("Los productos se aprobaron correctamente");
            queryClient.invalidateQueries({queryKey: ['get-stocks-by-product-id', params]})
            queryClient.invalidateQueries({queryKey: [ 'get-stocks', params]})
        },
        onError
    })
};
