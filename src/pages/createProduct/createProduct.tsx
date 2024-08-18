import { Typography } from "@mui/material";
import CustomContainer from "components/customContainer/CustomContainer";
import Loading from "components/Loading";
import { ProductForm } from "components/product/ProductForm";
import { useCreateProduct } from "services/hooks/useCreateProduct";
import { IProduct } from "types/product";

const CreateProduct = () => {
  const { mutateAsync: saveProduct, isPending, isError } = useCreateProduct();

  const createProductContent = () => {
    if (isError) return <Typography>Hubo un error al cargar el formulario de creación</Typography>

    if (isPending) {
      return <Loading />;
    }

    return (
      <ProductForm
        title="Agregar nuevo producto"
        onSubmitProduct={function (product: IProduct): void {
          saveProduct(product);
        }}
      />
    );
  };

  return (
    <CustomContainer breadCrumbs>{createProductContent()}</CustomContainer>
  );
};

export default CreateProduct;
