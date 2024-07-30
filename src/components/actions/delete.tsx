import { IconButton, ListItemIcon, MenuItem } from "@mui/material";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import { IActionsButtonProps } from "./IActionsProps";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { useTodo } from "context/TodoContext";
import { toast } from "react-toastify";

function Delete({ buttonType, code, formType }: IActionsButtonProps) {
  const { deleteProduct, deleteStock, deleteOrder } = useTodo();
  const label = "Eliminar";

  const onHandleClick = () => {
    if (formType === "product") {
      deleteProduct(code);
    }
    if (formType === "stock") {
      deleteStock(code);
    }
    if (formType === "order") 
      deleteOrder(code);
    toast.success("Se elimino correctamente");
  };

  if (buttonType === "gridAction") {
    return (
      <GridActionsCellItem
        icon={<DeleteIcon />}
        label={label}
        onClick={onHandleClick}
      />
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
    <IconButton color="secondary" aria-label="Delete" onClick={onHandleClick}>
      <DeleteIcon />
    </IconButton>
  );
}

export default Delete;
