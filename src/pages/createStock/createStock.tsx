import CustomContainer from "components/customContainer/CustomContainer";
import { StockForm } from "components/stock/StockForm";
import { useTodo } from "context/TodoContext";
import { IStock } from "dtos/stock.dto";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

const CreateStock = () => {
  const { stocks, saveStock } = useTodo();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!stocks.find((x) => x.codigo === id)) {
      alert("No existe este producto");
      navigate("/");
    }
  }, [id]);
  return (
    <>
      <CustomContainer breadCrumbs>
        <StockForm
          title="Agregar nuevo stock"
          onSubmitStock={function (stock: IStock): void {
            saveStock(stock);
            toast.success("Se creo el producto correctamente");
            navigate("/");
          }}
        />
      </CustomContainer>
    </>
  );
};

export default CreateStock;
