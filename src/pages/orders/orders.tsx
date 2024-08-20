import OrderTable from "components/DataTable/OrderTable";
import CustomContainer from "../../components/customContainer/CustomContainer";
import { useTodo } from "context/TodoContext";
import { Typography } from "@mui/material";

const Orders = () => {
  // const { orders } = useTodo();
  return (
    <CustomContainer>
      <Typography component="h1" variant="h5" gutterBottom>
        Pedidos
      </Typography>
      {/* <OrderTable order={orders} /> */}
    </CustomContainer>
  );
};

export default Orders;
