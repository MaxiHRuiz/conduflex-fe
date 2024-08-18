import { Typography } from "@mui/material";
import CustomContainer from "components/customContainer/CustomContainer";
import Loading from "components/Loading";
import { ProductForm } from "components/product/ProductForm";
import { useParams } from "react-router-dom";
import { useGetProduct } from "services/hooks/useGetProduct";
import { useUpdateProduct } from "services/hooks/useUpdateProduct";

const EditProduct = () => {
  const {productId = ''} = useParams()
  const { data, isFetching, isError } = useGetProduct(productId)
  const {mutateAsync: updateProduct, isPending} = useUpdateProduct(productId)

  if (isError) return <Typography>No existe este producto</Typography>

  if (isFetching || isPending) return <Loading />

  return (
    <>
      <CustomContainer breadCrumbs>
        <ProductForm
          title="Editar Producto"
          product={data}
          onSubmitProduct={updateProduct}
          isEdit
        />
      </CustomContainer>
    </>
  );
};

export default EditProduct;