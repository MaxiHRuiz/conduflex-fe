import { Typography } from "@mui/material";
import CustomContainer from "components/customContainer/CustomContainer";
import OrderTicket from "components/orderTicket/orderTicket";
import { useTodo } from "context/TodoContext";

const NewOrder = () => {
  const { order, deleteOrder } = useTodo();

  return (
    <CustomContainer breadCrumbs>
      <Typography component="h1" variant="h5" gutterBottom>
        Pedido
      </Typography>
      <OrderTicket order={order} />
    </CustomContainer>
  );
};

export default NewOrder;
