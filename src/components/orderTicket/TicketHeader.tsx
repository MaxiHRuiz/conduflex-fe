import { Grid, Paper, styled, Typography } from "@mui/material";
import { IComprador, IOrder } from "types/order";
import { dateFormatter, ISOdateFormatter } from "utils/helpers";
import OrderState from "components/OrderState";
import TicketActionsContainer from "./TicketActionsContainer";
import { useDeleteOrderById } from "services/hooks/useDeleteOrderById";
import ConfirmButton from "components/ConfirmButton";
import { useParams } from "react-router-dom";
import { useAuthorizeOrder } from "services/hooks/useAuthorizeOrder";
import { useState } from "react";
import { ClientForm } from "components/client/ClientForm";

interface TicketHeader {
  role: string;
  order: IOrder;
  disabledActions: boolean;
  setIsLoading: (value: boolean) => void;
  generateOrderDisabled: (value: boolean) => void;
  onSubmitComprador: (comprador: IComprador) => void;
}
const TicketHeader = ({
  role,
  order,
  disabledActions,
  setIsLoading,
  generateOrderDisabled,
  onSubmitComprador,
}: TicketHeader) => {
  const { orderId = "" } = useParams();
  const { mutateAsync: deleteOrder } = useDeleteOrderById();
  const { mutateAsync: authorize } = useAuthorizeOrder();
  const [editActive, setEditActive] = useState(false);

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
    authorize(orderId, {
      onSettled() {
        setIsLoading(false);
      },
    });
  };

  const handleUpdate = (comprador: IComprador) => {
    onSubmitComprador(comprador)
    generateOrderDisabled(false);
    setEditActive(false);
  };

  const handleCancel = () => {
    generateOrderDisabled(false);
    setEditActive(false);
  };

  const handleActiveUpdate = () => {
    generateOrderDisabled(true);
    setEditActive(true);
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
        <Typography fontWeight="bold">{`Fecha: ${ISOdateFormatter(
          order.fecha
        )}`}</Typography>
      )}
      {order.id && <OrderState label bold state={order.estado} />}
      <ClientForm
        comprador={order.comprador}
        isEdit={editActive}
        onSubmitComprador={handleUpdate}
        actionIsDisabled={disabledActions}
        onActiveUpdate={handleActiveUpdate}
        onCancel={handleCancel}
      />
    </Paper>
  );
};

export default TicketHeader;
