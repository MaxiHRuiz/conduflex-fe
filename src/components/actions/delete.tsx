import { IconButton, ListItemIcon, MenuItem } from "@mui/material";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import { IActionsButtonProps } from "./IActionsProps";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { useTodo } from "context/TodoContext";
import { toast } from "react-toastify";

function Delete({ buttonType, code, formType }: IActionsButtonProps) {
  const { deleteProduct, deleteStock } = useTodo();
  const label = "Eliminar";

  const onHandleClick = () => {
    if (formType === "product") deleteProduct(code);
    if (formType === "stock") deleteStock(code);
    // if (formType === "order") () => undefined;
    toast.success("Se elimino el producto correctamente");
  };

  if (buttonType === "gridAction") {
    return <GridActionsCellItem icon={<DeleteIcon />} label={label} />;
  }

  if (buttonType === "menuItem") {
    <MenuItem>
      <ListItemIcon>
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
