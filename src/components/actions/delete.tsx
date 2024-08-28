import { IconButton, ListItemIcon, MenuItem, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import { IActionsButtonProps } from "./IActionsProps";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { useTodo } from "context/TodoContext";
import { toast } from "react-toastify";
import { useDeleteProduct } from "services/hooks/useDeleteProduct";
import { useDeleteStockById } from "services/hooks/useDeleteStockById";
import ConfirmIconButton from "components/ConfirmIconButton";
import ConfirmGridActionButton from "components/ConfirmGridActionButton";

function Delete({
  buttonType,
  productId = "",
  stockId = "",
  formType,
}: IActionsButtonProps) {
  const { deleteOrder } = useTodo();
  const { mutateAsync: deleteProduct, isPending } = useDeleteProduct();
  const { mutateAsync: deleteStock, isPending: isPendingStock } =
    useDeleteStockById(productId);
  const dialogTitle = "Confirmar acción";
  const dialogContent = "¿Estás seguro de que deseas eliminar este producto?";
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
  };

  if (buttonType === "gridAction") {
    return (
      <Tooltip title={label}>
        <ConfirmGridActionButton
          icon={<DeleteIcon />}
          label={label}
          dialogTitle={dialogTitle}
          dialogContent={dialogContent}
          disabled={isPending || isPendingStock}
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
      disabled={isPending || isPendingStock}
      buttonColor="secondary"
      onConfirm={onHandleClick}
    >
      <DeleteIcon />
    </ConfirmIconButton>
  );
}

export default Delete;
