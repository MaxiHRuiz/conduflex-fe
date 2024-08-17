import core from '../api/createAxiosClient'

interface IGetProducts {
  descripcion: string
}

export const GetProducts = async (params?: IGetProducts) => {
  try {
    const response = await core.get('/product/search', {
      params: {
        description: 'UNIPOLAR'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching search results:', error);
    throw error;
  }
};
