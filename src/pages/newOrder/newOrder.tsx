import { Box, Grid } from "@mui/material";
import CustomContainer from "components/customContainer/CustomContainer";
import OrderCard from "components/orderCard/orderCard";
import { useTodo } from "context/TodoContext";

const NewOrder = () => {
  const { order } = useTodo();

  return (
    <CustomContainer>
      <Box sx={{ p: 1, m: 1 }}>
        {order.product_stock.map((product) => {
          return <OrderCard key={product.id} productStock={product} />;
        })}
      </Box>
    </CustomContainer>
  );
};

export default NewOrder;
