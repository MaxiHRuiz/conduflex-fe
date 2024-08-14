import core from './createAxiosClient'

interface IGetProducts {
  descripcion: string
}

export const GetProducts = async (params?: IGetProducts) => {
  try {
    const response = await core.get('https://conduflex-be.onrender.com/product/search?description=UNIPOLAR');
    return response.data;
  } catch (error) {
    console.error('Error fetching search results:', error);
    throw error;
  }
};
