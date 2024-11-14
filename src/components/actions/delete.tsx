import { Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import { IActionsButtonProps } from "./IActionsProps";
import { useDeleteProduct } from "services/hooks/useDeleteProduct";
import { useDeleteStockById } from "services/hooks/useDeleteStockById";
import ConfirmIconButton from "components/ConfirmIconButton";
import ConfirmGridActionButton from "components/ConfirmGridActionButton";
import { useDeleteClient } from "services/hooks/useDeleteClient";

function Delete({
  buttonType,
  productId = "",
  stockId = "",
  clientId = "",
  formType,
}: IActionsButtonProps) {
  const { mutateAsync: deleteProduct, isPending } = useDeleteProduct();
  const { mutateAsync: deleteStock, isPending: isPendingStock } =
    useDeleteStockById(productId);
  const { mutateAsync: deleteClient, isPending: isPendingClient } =
    useDeleteClient();

  const getLabel = () => {
    switch (formType) {
      case "product":
        return "PRODUCTO"
      case "stock":
        return "STOCK"
      case "order":
        return "ORDEN"
      case "client":
        return "CLIENTE"
      default:
        return formType
    }
  }
  const dialogTitle = "Confirmar acción";
  const dialogContent = `¿Estás seguro de que deseas eliminar este ${getLabel()}?`;
  const label = "Eliminar";

  const onHandleClick = () => {
    if (formType === "product") {
      deleteProduct(productId);
      return;
    }
    if (formType === "stock") {
      deleteStock(stockId);
      return;
    }
    if (formType === "order") {
      // deleteOrder(productId)
    }

    if (formType === "client") {
      deleteClient(clientId);
    }
  };

  if (buttonType === "gridAction") {
    return (
      <Tooltip title={label}>
        <ConfirmGridActionButton
          icon={<DeleteIcon />}
          label={label}
          dialogTitle={dialogTitle}
          dialogContent={dialogContent}
          disabled={isPending || isPendingStock || isPendingClient}
          buttonColor="secondary"
          onConfirm={onHandleClick}
        />
      </Tooltip>
    );
  }

  return (
    <ConfirmIconButton
      ariaLabel={label}
      dialogTitle={dialogTitle}
      dialogContent={dialogContent}
      disabled={isPending || isPendingStock || isPendingClient}
      buttonColor="secondary"
      onConfirm={onHandleClick}
    >
      <DeleteIcon />
    </ConfirmIconButton>
  );
}

export default Delete;
