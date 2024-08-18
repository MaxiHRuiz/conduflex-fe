import { Typography } from "@mui/material";
import CustomContainer from "components/customContainer/CustomContainer";
import Loading from "components/Loading";
import { StockForm } from "components/stock/StockForm";
import { useParams } from "react-router-dom";
import { useCreateStockById } from "services/hooks/useCreateStockById";

const CreateStock = () => {
  const { productId = "" } = useParams();
  const {
    mutateAsync: saveStock,
    isPending,
    isError,
  } = useCreateStockById(productId);

  const createStockContent = () => {
    if (isError)
      return (
        <Typography>
          Hubo un error al cargar el formulario de creación
        </Typography>
      );

    if (isPending) {
      return <Loading />;
    }

    return <StockForm title="Agregar nuevo stock" onSubmitStock={saveStock} />;
  };

  return (
    <>
      <CustomContainer breadCrumbs>{createStockContent()}</CustomContainer>
    </>
  );
};

export default CreateStock;
