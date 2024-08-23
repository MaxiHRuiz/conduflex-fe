import CustomContainer from "../../components/customContainer/CustomContainer";
import { Typography } from "@mui/material";
import CollapsibleTable from "components/collapsibleTable/collapsibleTable";

const Orders = () => {
  // const { orders } = useTodo();
  return (
    <CustomContainer>
      <Typography component="h1" variant="h5" gutterBottom>
        Pedidos
      </Typography>
      <CollapsibleTable />
      {/* <OrderTable order={orders} /> */}
    </CustomContainer>
  );
};

export default Orders;
