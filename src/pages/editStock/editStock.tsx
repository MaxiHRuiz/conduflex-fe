import CustomContainer from "components/customContainer/CustomContainer";
import { StockForm } from "components/stock/StockForm";
import { useTodo } from "context/TodoContext";
import { IStock } from "dtos/stock.dto";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditProduct = () => {
  const { stocks, updateStock } = useTodo();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!stocks.find((x) => x.id === id)) {
      alert("No existe este producto");
      navigate("/");
    }
  }, [id]);

  return (
    <>
      <CustomContainer breadCrumbs>
        <StockForm
          title="Editar stock"
          stock={stocks.find((x) => x.id === id)}
          onSubmitStock={function (stock: IStock): void {
            updateStock(stock.id, stock);
            toast.success("Se edito el stock correctamente");
            navigate(-1);
          }}
          isEdit
        />
      </CustomContainer>
    </>
  );
};

export default EditProduct;
