import { Paper, Typography } from "@mui/material";
import Loading from "components/Loading";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateOrder } from "services/hooks/useCreateOrder";
import { numberFormat } from "utils/helpers";
import OrderCard from "./orderCard";
import { IComprador, IOrder, IProductStock } from "types/order";
import TicketFooter from "./TicketFooter";
import TicketHeader from "./TicketHeader";
import { useAppContext } from "context/RoleContext";
import StockStatusChart from "components/orderTicket/StockStatusPieChart";
import { useUpdateOrder } from "services/hooks/useUpdateOrder";
import { useTodo } from "context/TodoContext";
import { useAuthorizeOrder } from "services/hooks/useAuthorizeOrder";
import { useDeleteOrderById } from "services/hooks/useDeleteOrderById";

interface OrderTicketProps {
  order: IOrder;
  onSuccess?: () => void;
}

const defaultValue: IComprador = {
  nombre: "",
  cuit: "",
  cp: 0,
  direccion: "",
};

const OrderTicket = ({ order, onSuccess }: OrderTicketProps) => {
  const navigate = useNavigate();
  const { role } = useAppContext();
  const { deleteOrderProduct, updateOrderProduct, updateOrderComprador } =
    useTodo();
  const { mutateAsync: createOrder, isPending } = useCreateOrder();
  const { mutateAsync: updateOrder, isPending: isPendingOrder } =
    useUpdateOrder();
  const { mutateAsync: deleteOrder, isPending: deleteIsPending } =
    useDeleteOrderById();
  const { mutateAsync: authorizeOrder, isPending: authorizeIsPending } =
    useAuthorizeOrder();
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

  const onSubmitComprador = (comprador: IComprador) => {
    if (order.id) {
      updateOrder({
        ...order,
        comprador,
      });
      return;
    }
    updateOrderComprador(comprador);
  };

  const onSubmitUpdate = (productStock: IProductStock) => {
    if (order.id) {
      updateOrder({
        ...order,
        productos: order.productos.map((product: IProductStock) => {
          if (product.id === productStock.id) {
            return productStock;
          }
          return product;
        }),
      });
      return;
    }
    updateOrderProduct(productStock);
  };

  const onSubmitDelete = (productId: string) => {
    if (order.id) {
      updateOrder({
        ...order,
        productos: order.productos.filter(
          (product: IProductStock) => product.id !== productId
        ),
      });
      return;
    }
    deleteOrderProduct(productId);
  };

  const onDeleteOrder = () => {
    deleteOrder(order.id)
  }

  const onAuthorize = () => {
    authorizeOrder(order.id)
  }

  if (
    isPending ||
    isLoading ||
    isPendingOrder ||
    authorizeIsPending ||
    deleteIsPending
  )
    return <Loading />;

  return (
    <>
      <TicketHeader
        order={order}
        disabledActions={disabled}
        setIsLoading={setIsLoading}
        role={role || ""}
        generateOrderDisabled={setDisabled}
        onSubmitComprador={onSubmitComprador}
        onDelete={onDeleteOrder}
        onAuthorize={onAuthorize}
      />
      {order?.estado === "pendiente" && role !== "admin" && (
        <Typography m={1}>
          Solo un administrador puede aprobar este pedido.
        </Typography>
      )}
      {order?.productos?.length ? (
        order.productos.map((product) => {
          return (
            <OrderCard
              disabledActions={disabled}
              key={product.id}
              productStock={product}
              generateOrderDisabled={setDisabled}
              orderStatus={order.estado}
              onDelete={onSubmitDelete}
              onUpdate={onSubmitUpdate}
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
