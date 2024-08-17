import { Button } from "@mui/material";
import CustomContainer from "components/customContainer/CustomContainer";
import { ProductForm } from "components/product/ProductForm";
import { useTodo } from "context/TodoContext";
import { useNavigate } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { IProduct } from "types/product";

const CreateProduct = () => {
  const { saveProduct } = useTodo();
  const navigate = useNavigate();

  return (
    <CustomContainer breadCrumbs>
      <ProductForm
        title="Agregar nuevo producto"
        onSubmitProduct={function (product: IProduct): void {
          saveProduct(product);
          toast.success("Se creo el producto correctamente");
          navigate("/");
        }}
      />
    </CustomContainer>
  );
};

export default CreateProduct;
