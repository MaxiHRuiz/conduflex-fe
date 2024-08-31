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
import { useGetRole } from "services/hooks/useGetRole";
import { useAppContext } from "context/RoleContext";
import StockStatusChart from "components/orderTicket/StockStatusPieChart";

interface OrderTicketProps {
  order: IOrder;
  onSuccess?: () => void;
}

const OrderTicket = ({ order, onSuccess }: OrderTicketProps) => {
  const navigate = useNavigate();
  const { role } = useAppContext();
  const { mutateAsync: createOrder, isPending, isError } = useCreateOrder();
  const [disabled, setDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const total = useCallback(
    () =>
      numberFormat(
        order.productos
          .map((product) => product.precio)
          .reduce((a, b) => a + b, 0)
      ),
    [order.productos]
  );

  if (isError) return <Typography>Error al cargar los datos</Typography>;

  if (isPending || isLoading) return <Loading />;

  return (
    <>
      <TicketHeader
        order={order}
        disabledActions={disabled}
        setIsLoading={setIsLoading}
        role={role || ""}
      />
      {order?.productos?.length ? (
        order.productos.map((product) => {
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
        disabled={disabled || !order?.productos?.length}
        total={numberFormat(order.precio)}
        onCreateOrder={() =>
          createOrder(order as unknown as IOrder, {
            onSuccess: () => {
              onSuccess?.();
              navigate("/pedidos");
            },
          })
        }
      />
      {!!order.id && !!order?.productos?.length && (
        <StockStatusChart productStock={order.productos} />
      )}
    </>
  );
};

export default OrderTicket;
