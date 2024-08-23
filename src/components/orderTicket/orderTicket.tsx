import { Paper, Typography, Button } from "@mui/material";
import CustomContainer from "components/customContainer/CustomContainer";
import Loading from "components/Loading";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateOrder } from "services/hooks/useCreateOrder";
import { dateFormatter, numberFormat } from "utils/helpers";
import OrderCard from "./orderCard";
import { IOrder } from "types/order";

interface OrderTicketProps {
  order: IOrder;
  onSuccess?: () => void;
}

const OrderTicket = ({ order, onSuccess }: OrderTicketProps) => {
  const navigate = useNavigate();
  const { mutateAsync: createOrder, isPending } = useCreateOrder();
  const [disabled, setDisabled] = useState(false);

  const total = useCallback(
    () =>
      numberFormat(
        order.product_stock
          .map((product) => product.precio)
          .reduce((a, b) => a + b, 0)
      ),
    [order.product_stock]
  );

  if (isPending) return <Loading />;

  return (
    <>
      <Paper
        sx={{
          p: 1,
          mb: 1,
        }}
      >
        <Typography fontWeight="bold">{`Vendedor: ${
          order.vendedor || "-"
        }`}</Typography>
        {order.fecha && <Typography fontWeight="bold">{`Fecha: ${
          dateFormatter(order.fecha)
        }`}</Typography>}
        {order.estado && <Typography fontWeight="bold">{`Estado: ${
          order.estado
        }`}</Typography>}
      </Paper>
      {order.product_stock.length ? (
        order.product_stock.map((product) => {
          return (
            <OrderCard
              disabledActions={disabled}
              key={product.id}
              productStock={product}
              generateOrderDisabled={setDisabled}
            />
          );
        })
      ) : (
        <Paper sx={{ p: 1, mb: 1 }}>
          <Typography component="h6">No hay datos</Typography>
        </Paper>
      )}
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
        <Button
          variant="contained"
          disabled={disabled || !order.product_stock.length}
          onClick={() =>
            createOrder(order as unknown as IOrder, {
              onSuccess: () => {
                onSuccess?.();
                navigate("/pedidos");
              },
            })
          }
        >
          Hacer pedido
        </Button>
      </Paper>
    </>
  );
};

export default OrderTicket;
