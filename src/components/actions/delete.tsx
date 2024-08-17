import { IconButton, ListItemIcon, MenuItem, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import { IActionsButtonProps } from "./IActionsProps";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { useTodo } from "context/TodoContext";
import { toast } from "react-toastify";

function Delete({ buttonType, productId = "", formType }: IActionsButtonProps) {
  const { deleteProduct, deleteStock, deleteOrder } = useTodo();
  const label = "Eliminar";

  const onHandleClick = () => {
    if (formType === "product") {
      deleteProduct(productId);
    }
    if (formType === "stock") {
      deleteStock(productId);
    }
    if (formType === "order") deleteOrder(productId);
    toast.success("Se elimino correctamente");
  };

  if (buttonType === "gridAction") {
    return (
      <Tooltip title={label}>
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label={label}
          onClick={onHandleClick}
        />
      </Tooltip>
    );
  }

  if (buttonType === "menuItem") {
    <MenuItem>
      <ListItemIcon onClick={onHandleClick}>
        <DeleteIcon />
      </ListItemIcon>
      {label}
    </MenuItem>;
  }

  return (
    <Tooltip title={label}>
      <IconButton color="secondary" onClick={onHandleClick}>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
}

export default Delete;
