import { IconButton, ListItemIcon, MenuItem, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import { IActionsButtonProps } from "./IActionsProps";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { useTodo } from "context/TodoContext";
import { toast } from "react-toastify";
import { useDeleteProduct } from "services/hooks/useDeleteProduct";
import { useDeleteStockById } from "services/hooks/useDeleteStockById";

function Delete({ buttonType, productId = "", stockId = "", formType }: IActionsButtonProps) {
  const { deleteOrder } = useTodo();
  const { mutateAsync: deleteProduct, isPending } = useDeleteProduct();
  const { mutateAsync: deleteStock, isPending: isPendingStock } = useDeleteStockById(productId)

  const label = "Eliminar";

  const onHandleClick = () => {
    if (formType === "product") {
      deleteProduct(productId);
      return
    }
    if (formType === "stock") {
      deleteStock(stockId);
      return
    }
    if (formType === "order") {
      // deleteOrder(productId)
    };
  };

  if (buttonType === "gridAction") {
    return (
      <Tooltip title={label}>
        <GridActionsCellItem
          disabled={isPending || isPendingStock}
          icon={<DeleteIcon />}
          label={label}
          onClick={onHandleClick}
        />
      </Tooltip>
    );
  }

  if (buttonType === "menuItem") {
    <MenuItem disabled={isPending || isPendingStock}>
      <ListItemIcon onClick={onHandleClick}>
        <DeleteIcon />
      </ListItemIcon>
      {label}
    </MenuItem>;
  }

  return (
    <Tooltip title={label}>
      <IconButton
        color="secondary"
        onClick={onHandleClick}
        disabled={isPending || isPendingStock}
      >
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
}

export default Delete;
