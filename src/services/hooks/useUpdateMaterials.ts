import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import axiosCore from 'api/createAxiosClient';
import { toast } from 'react-toastify';
import { onError } from 'utils/helpers';
import { ICostMaterials } from 'types/cost';

const updateMaterials = async (costParameters: ICostMaterials): Promise<AxiosResponse<ICostMaterials, any>> => {
    return await axiosCore.patch<ICostMaterials>(`/materials`, costParameters);
};

export const useUpdateMaterials = (): UseMutationResult<AxiosResponse<ICostMaterials, any>, Error, ICostMaterials, unknown> => {
    return useMutation({
        mutationFn: (costParameters: ICostMaterials) =>
            updateMaterials(costParameters),
        onSuccess: () => {
            toast.success("El costo de los materiales se actualizo correctamente");    
       },
        onError
    })
};

