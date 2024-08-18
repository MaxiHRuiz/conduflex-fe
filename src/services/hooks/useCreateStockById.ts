import { QueryObserverResult, useMutation, UseMutationResult, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { IBaseStock, IStock } from 'types/stock';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const createStockById = async (productId: string, stock: IBaseStock): Promise<AxiosResponse<IStock, any>> => {
    return await axiosCore.patch<IStock>(`/product/${productId}/stock`, stock);
};

export const useCreateStockById = (productId: string): UseMutationResult<AxiosResponse<IStock, any>, Error, IStock, unknown> => {
    const navigate = useNavigate()

    return useMutation({
        mutationFn: (stock: IStock) =>
            createStockById(productId, stock),
        onSuccess: (response) => {
            toast.success("El stock se creo correctamente");
            navigate(`productos/${response.data.id}`);
        },
    })
}