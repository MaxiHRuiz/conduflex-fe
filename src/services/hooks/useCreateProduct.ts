import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { IProduct } from 'types/product';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const createProduct = async (product: IProduct): Promise<AxiosResponse<IProduct, any>> => {
    return await axiosCore.post<IProduct>(`/product`, product);
};

export const useCreateProduct = (): UseMutationResult<AxiosResponse<IProduct, any>, Error, IProduct, unknown> => {
    const navigate = useNavigate()

    return useMutation({
        mutationFn: (product: IProduct) =>
            createProduct(product),
        onSuccess: () => {
            toast.success("Se creo el producto correctamente");
            navigate("/");
        },
    })
}