import { Paper, Typography } from "@mui/material";
import Loading from "components/Loading";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateOrder } from "services/hooks/useCreateOrder";
import { numberFormat } from "utils/helpers";
import OrderCard from "./orderCard";
import { IOrder } from "types/order";
import TicketFooter from "./TicketFooter";
import TicketHeader from "./TicketHeader";

interface OrderTicketProps {
  order: IOrder;
  onSuccess?: () => void;
}

const OrderTicket = ({ order, onSuccess }: OrderTicketProps) => {
  const navigate = useNavigate();
  const { mutateAsync: createOrder, isPending } = useCreateOrder();
  const [disabled, setDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const total = useCallback(
    () =>
      numberFormat(
        order.product_stock
          .map((product) => product.precio)
          .reduce((a, b) => a + b, 0)
      ),
    [order.product_stock]
  );

  if (isPending || isLoading) return <Loading />;

  return (
    <>
      <TicketHeader order={order} disabledActions={disabled} setIsLoading={setIsLoading} />
      {order.product_stock.length ? (
        order.product_stock.map((product) => {
          return (
            <OrderCard
              disabledActions={disabled}
              key={product.id}
              productStock={product}
              generateOrderDisabled={setDisabled}
              orderStatus={order.estado}
            />
          );
        })
      ) : (
        <Paper sx={{ p: 1, mb: 1 }}>
          <Typography component="h6">No hay datos</Typography>
        </Paper>
      )}
      <TicketFooter
        disabled={disabled || !order.product_stock.length}
        total={total()}
        onCreateOrder={() =>
          createOrder(order as unknown as IOrder, {
            onSuccess: () => {
              onSuccess?.();
              navigate("/pedidos");
            },
          })
        }
      />
    </>
  );
};

export default OrderTicket;
