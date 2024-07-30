import { IconButton, ListItemIcon, MenuItem } from "@mui/material";
import EditIcon from "@mui/icons-material/ModeEditOutline";
import { useNavigate } from "react-router-dom";
import { IActionsButtonProps } from "./IActionsProps";
import { GridActionsCellItem } from "@mui/x-data-grid";

function Edit({code, buttonType, formType}: IActionsButtonProps) {
  const navigate = useNavigate();
  const label = "Editar";

  const getUrl = () => {
    let page = "";
    if (formType === "stock") page = "stocks";
    if (formType === "product") page = "productos";
    if (formType === "order") page = "pedidos";
    return `/${page}/${code}/editar`
  };

  const handleClick = () => navigate(getUrl());

  if (buttonType === "gridAction") {
    return (
      <GridActionsCellItem
        icon={<EditIcon />}
        label={label}
        onClick={handleClick}
      />
    );
  }

  if (buttonType === 'menuItem') {
    <MenuItem onClick={handleClick}>
      <ListItemIcon>
        <EditIcon />
      </ListItemIcon>
      {label}
    </MenuItem>;
  }

  return (
    <>
      <IconButton
        color="secondary"
        aria-label={label}
        onClick={handleClick}
      >
        <EditIcon />
      </IconButton>
    </>
  );
}

export default Edit;
