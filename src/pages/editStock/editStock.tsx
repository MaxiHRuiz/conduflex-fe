import { Typography } from "@mui/material";
import CustomContainer from "components/customContainer/CustomContainer";
import Loading from "components/Loading";
import { StockForm } from "components/stock/StockForm";
import { useParams } from "react-router-dom";
import { useGetProduct } from "services/hooks/useGetProduct";
import { useGetStockById } from "services/hooks/useGetStockById";
import { useUpdateStockById } from "services/hooks/useUpdateStockById";

const EditProduct = () => {
  const { productId = "", stockId = "" } = useParams();
  const {
    data: dataProduct,
    isFetching: isFetchingProduct,
    isError: isErrorProduct,
  } = useGetProduct(productId);
  const { data, isFetching, isError } = useGetStockById(productId, stockId);
  const { mutateAsync: updateStock, isPending } = useUpdateStockById(
    productId,
    stockId
  );

  if (isError || isErrorProduct)
    return <Typography>No existe este Stock</Typography>;

  if (isFetching || isPending || isFetchingProduct) return <Loading />;

  return (
    <>
      <CustomContainer breadCrumbs>
        <StockForm
          title="Editar stock"
          stock={data}
          onSubmitStock={updateStock}
          isEdit
          subTitle={`Producto: ${data?.id} - ${data?.descripcion}`}
        />
      </CustomContainer>
    </>
  );
};

export default EditProduct;
