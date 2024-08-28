import { Paper, Typography } from "@mui/material";
import { IOrder } from "types/order";
import { dateFormatter } from "utils/helpers";
import OrderState from "components/OrderState";
import TicketActionsContainer from "./TicketActionsContainer";
import { useDeleteOrderById } from "services/hooks/useDeleteOrderById";
import { useAuthorizeById } from "services/hooks/useAuthorizeById";
import ConfirmButton from "components/ConfirmButton";

interface TicketHeader {
  role: string
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
  const { mutateAsync: deleteOrder } = useDeleteOrderById();
  const { mutateAsync: authorize } = useAuthorizeById();

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
    authorize(order.id, {
      onSettled() {
        setIsLoading(false);
      },
    });
  };

  return (
    <Paper
      sx={{
        p: 1,
        mb: 1,
      }}
    >
      <Typography fontWeight="bold">{`Vendedor: ${
        order.vendedor || "-"
      }`}</Typography>
      {order.fecha && (
        <Typography fontWeight="bold">{`Fecha: ${dateFormatter(
          order.fecha
        )}`}</Typography>
      )}
      {order.estado && <OrderState state={order.estado} />}
      {order.estado === "pendiente" && (
        <TicketActionsContainer>
          <ConfirmButton
            buttonText="Aprobar"
            dialogTitle="Confirmar acción"
            dialogContent="¿Estás seguro de que deseas aprobar este pedido?"
            buttonColor="success"
            disabled={disabledActions || role !== 'admin'}
            onConfirm={handleAuthorize}
          />
          <ConfirmButton
            buttonText="Eliminar"
            dialogTitle="Confirmar acción"
            dialogContent="¿Estás seguro de que deseas eliminar este pedido?"
            buttonColor="error"
            disabled={disabledActions}
            onConfirm={handleDelete}
          />
        </TicketActionsContainer>
      )}
    </Paper>
  );
};

export default TicketHeader;
