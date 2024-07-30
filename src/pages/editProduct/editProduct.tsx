import CustomContainer from "components/customContainer/CustomContainer";
import { ProductForm } from "components/product/ProductForm";
import { useTodo } from "context/TodoContext";
import { IProduct } from "dtos/product.dto";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";

const EditProduct = () => {
  const { products, updateProduct } = useTodo();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!products.find((x) => x.codigo === id)) {
      alert("No existe este producto");
      navigate("/");
    }
  }, [id]);

  return (
    <>
      <CustomContainer breadCrumbs>
        <ProductForm
          title="Editar Producto"
          product={products.find((x) => x.codigo === id)}
          onSubmitProduct={function (product: IProduct): void {
            updateProduct(product.codigo, product);
            toast.success("Se edito el producto correctamente");
            navigate("/");
          }}
          isEdit
        />
      </CustomContainer>
    </>
  );
};

export default EditProduct;