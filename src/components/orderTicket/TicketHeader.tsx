import { Paper, Typography } from "@mui/material";
import { IOrder } from "types/order";
import { dateFormatter } from "utils/helpers";
import OrderState from "components/OrderState";
import TicketActionsContainer from "./TicketActionsContainer";
import { useDeleteOrderById } from "services/hooks/useDeleteOrderById";
import ConfirmButton from "components/ConfirmButton";
import { useParams } from "react-router-dom";
import { useAuthorizeOrder } from "services/hooks/useAuthorizeOrder";

interface TicketHeader {
  role: string;
  order: IOrder;
  disabledActions: boolean;
  setIsLoading: (value: boolean) => void;
}
const TicketHeader = ({
  role,
  order,
  disabledActions,
  setIsLoading,
}: TicketHeader) => {
  const { orderId = "" } = useParams();
  const { mutateAsync: deleteOrder } = useDeleteOrderById();
  const { mutateAsync: authorize } = useAuthorizeOrder();

  const handleDelete = () => {
    setIsLoading(true);
    deleteOrder(order.id, {
      onSettled() {
        setIsLoading(false);
      },
    });
  };

  const handleAuthorize = () => {
    setIsLoading(true);
    authorize(orderId,
      {
        onSettled() {
          setIsLoading(false);
        },
      }
    );
  };

  return (
    <Paper
      sx={{
        p: 2,
        mb: 1,
      }}
    >
      {order.estado === "pendiente" && (
        <TicketActionsContainer buttonDivider>
          <div>
            <ConfirmButton
              buttonText="Aprobar"
              dialogTitle="Confirmar acción"
              dialogContent="¿Estás seguro de que deseas aprobar este pedido?"
              buttonColor="success"
              disabled={disabledActions || role !== "admin"}
              onConfirm={handleAuthorize}
            />
          </div>
          <div>
            <ConfirmButton
              buttonText="Eliminar"
              dialogTitle="Confirmar acción"
              dialogContent="¿Estás seguro de que deseas eliminar este pedido?"
              buttonColor="error"
              disabled={disabledActions}
              onConfirm={handleDelete}
            />
          </div>
        </TicketActionsContainer>
      )}
      <Typography fontWeight="bold">{`Vendedor: ${
        order.vendedor || "-"
      }`}</Typography>
      {order.fecha && (
        <Typography fontWeight="bold">{`Fecha: ${dateFormatter(
          order.fecha
        )}`}</Typography>
      )}
      <Typography fontWeight="bold">{`Cliente: ${
        order.comprador.nombre || "-"
      }`}</Typography>
      <Typography fontWeight="bold">{`CUIT: ${order.comprador.cuit  || "-"}`}</Typography>
      <Typography fontWeight="bold">{`Dirección: ${order.comprador.direccion  || "-"}`}</Typography>
      <Typography fontWeight="bold">{`C.P.: ${order.comprador.cp || "-"}`}</Typography>
      <OrderState label bold state={order.estado} />
    </Paper>
  );
};

export default TicketHeader;
