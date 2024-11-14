import { IconButton, ListItemIcon, MenuItem, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/ModeEditOutline";
import { useNavigate } from "react-router-dom";
import { IActionsButtonProps } from "./IActionsProps";
import { GridActionsCellItem } from "@mui/x-data-grid";

function Edit({ productId, clientId, buttonType, formType }: IActionsButtonProps) {
  const navigate = useNavigate();
  const label = "Editar";

  const getUrl = () => {
    let page = "";
    if (formType === "stock") page = "stocks";
    if (formType === "product") page = "productos";
    if (formType === "order") page = "pedidos";
    if (formType === "client") page = "clientes";
    return `/${page}/${productId ?? clientId}/editar`;
  };

  const handleClick = () => navigate(getUrl());

  if (buttonType === "gridAction") {
    return (
      <Tooltip title={label}>
        <GridActionsCellItem
          icon={<EditIcon />}
          label={label}
          onClick={handleClick}
        />
      </Tooltip>
    );
  }

  return (
      <Tooltip title={label}>
        <IconButton size="small" color="secondary" onClick={handleClick}>
          <EditIcon />
        </IconButton>
      </Tooltip>
  );
}

export default Edit;
