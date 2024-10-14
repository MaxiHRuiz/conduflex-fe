import { UseMutationResult, useQueryClient, useMutation } from "@tanstack/react-query";
import axiosCore from "api/createAxiosClient";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { IStock } from "types/stock";
import { onError } from "utils/helpers";


const deleteStockById = async (productId: string, stockId: string): Promise<AxiosResponse<IStock, any>> => {
    return await axiosCore.delete<IStock>(`/product/${productId}/stock/${stockId}`);
};

export const useDeleteStockById = (productId: string): UseMutationResult<AxiosResponse<IStock, any>, Error, string, unknown> => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (stockId: string) =>
            deleteStockById(productId, stockId),
        onSuccess: () => {
            toast.success("Se elimino correctamente");
            queryClient.invalidateQueries({queryKey: ['get-stocks']})
            queryClient.invalidateQueries({queryKey: ['get-stocks-by-product-id']})
        },
        onError
    })
}