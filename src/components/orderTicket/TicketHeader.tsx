import { Box, Divider, Paper, Typography } from "@mui/material";
import { IOrder } from "types/order";
import { ISOdateFormatter } from "utils/helpers";
import OrderState from "components/OrderState";
import TicketActionsContainer from "./TicketActionsContainer";
import ConfirmButton from "components/ConfirmButton";
import { useState } from "react";
import { ClientForm } from "components/client/ClientForm";
import ClientModal from "components/clientModal/ClientModal";
import { IClient, IClientFormData } from "types/client";

interface TicketHeader {
  role: string;
  order: IOrder;
  disabledActions: boolean;
  setIsLoading: (value: boolean) => void;
  generateOrderDisabled: (value: boolean) => void;
  onSubmitComprador: (comprador: IClient) => void;
  onSubmitCompradorForm: (update: IClientFormData) => void;
  onDelete: () => void;
  onAuthorize: () => void;
}
const TicketHeader = ({
  role,
  order,
  disabledActions,
  setIsLoading,
  generateOrderDisabled,
  onSubmitComprador,
  onDelete,
  onSubmitCompradorForm,
  onAuthorize,
}: TicketHeader) => {
  const [editActive, setEditActive] = useState(false);

  const handleUpdateForm = (update: IClientFormData) => {
    onSubmitCompradorForm(update);
    generateOrderDisabled(false);
    setEditActive(false);
  };

  const handleUpdate = (update: IClient) => {
    onSubmitComprador(update);
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
              onConfirm={onAuthorize}
            />
          </div>
          <div>
            <ConfirmButton
              buttonText="Eliminar"
              dialogTitle="Confirmar acción"
              dialogContent="¿Estás seguro de que deseas eliminar este pedido?"
              buttonColor="error"
              disabled={disabledActions}
              onConfirm={onDelete}
            />
          </div>
        </TicketActionsContainer>
      )}
      {order.vendedor && (
        <Typography fontWeight="bold">{`Vendedor: ${order.vendedor}`}</Typography>
      )}
      {order.fecha && (
        <Typography fontWeight="bold">{`Fecha: ${ISOdateFormatter(
          order.fecha
        )}`}</Typography>
      )}
      {order.id && <OrderState label bold state={order.estado} />}

      <Divider sx={{ pt: order.id ? 1 : undefined }}>
        {!order.id && (
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <Typography component="h3" variant="h6">
              Cliente
            </Typography>
            <ClientModal onHandleClient={handleUpdate} />
          </Box>
        )}
      </Divider>
      <ClientForm
        order={order}
        isEdit={editActive}
        onSubmitClient={handleUpdateForm}
        actionIsDisabled={disabledActions}
        onActiveUpdate={handleActiveUpdate}
        onCancel={handleCancel}
        estado={order.estado}
      />
    </Paper>
  );
};

export default TicketHeader;
