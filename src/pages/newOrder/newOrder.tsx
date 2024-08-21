import { Button, Paper, Typography } from "@mui/material";
import CustomContainer from "components/customContainer/CustomContainer";
import Loading from "components/Loading";
import OrderCard from "components/orderCard/orderCard";
import { useTodo } from "context/TodoContext";
import { useCallback } from "react";
import { Navigate } from "react-router-dom";
import { useCreateOrder } from "services/hooks/useCreateOrder";
import { formatCurrency } from "utils/helpers";

const NewOrder = () => {
  const { order } = useTodo();
  const { mutateAsync: createOrder, isPending } = useCreateOrder();

  const total = useCallback(
    () =>
      formatCurrency(
        order.product_stock
          .map((product) => product.precio)
          .reduce((a, b) => a + b, 0)
      ),
    [order.product_stock]
  );

  if (isPending) return <Loading />;

  return (
    <CustomContainer>
      <Paper
        sx={{
          p: 1,
          mb: 1,
        }}
      >
        <Typography fontWeight="bold">{`Vendedor: ${order.vendor}`}</Typography>
      </Paper>
      {order.product_stock.map((product) => {
        return (
          <OrderCard key={product.idProductStock} productStock={product} />
        );
      })}
      <Paper
        sx={{
          p: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography fontWeight="bold">{`Total: ${total()}`}</Typography>
        <Button variant="contained" onClick={() => createOrder(order, {onSuccess: () => <Navigate to={"/pedidos"} /> })}>
          Hacer pedido
        </Button>
      </Paper>
    </CustomContainer>
  );
};

export default NewOrder;
