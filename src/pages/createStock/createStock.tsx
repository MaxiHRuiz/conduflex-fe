import { Typography } from "@mui/material";
import CustomContainer from "components/customContainer/CustomContainer";
import Loading from "components/Loading";
import { StockForm } from "components/stock/StockForm";
import { useNavigate, useParams } from "react-router-dom";
import { useCreateStockById } from "services/hooks/useCreateStockById";
import { useGetProduct } from "services/hooks/useGetProduct";
import { IStock } from "types/stock";

const CreateStock = () => {
  const { productId = "" } = useParams();
  const navigate = useNavigate();
  const {
    data,
    isFetching,
    isError: isErrorProduct,
  } = useGetProduct(productId);
  const {
    mutateAsync: saveStock,
    isPending,
    isError,
  } = useCreateStockById(productId);

  const createStockContent = () => {
    if (isError || isErrorProduct)
      return (
        <Typography>
          Hubo un error al cargar el formulario de creación
        </Typography>
      );

    if (isPending || isFetching) {
      return <Loading />;
    }

    const handleSave = (data: IStock) => {
      saveStock(data, {
        onSuccess: () => navigate(`/productos/${productId}`),
      });
    };

    return (
      <StockForm
        title="Agregar nuevo stock"
        onSubmitStock={handleSave}
        subTitle={`Producto: ${data?.id} - ${data?.descripcion}`}
      />
    );
  };

  return (
    <>
      <CustomContainer breadCrumbs excludeLink={['stocks']}>{createStockContent()}</CustomContainer>
    </>
  );
};

export default CreateStock;
