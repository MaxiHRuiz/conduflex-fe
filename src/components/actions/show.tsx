import { IconButton, ListItemIcon, MenuItem, Tooltip } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate, useParams } from "react-router-dom";
import { IActionsButtonProps } from "./IActionsProps";
import { GridActionsCellItem } from "@mui/x-data-grid";

const Show = ({
  buttonType = "icon",
  productId,
  stockId,
  formType,
}: IActionsButtonProps) => {
  const navigate = useNavigate();
  const label = "Ver detalle";

  const getUrl = () => {
    let page = "";
    if (formType === "stock") {
      return `/productos/${productId}/stocks/${stockId}`;
    }
    if (formType === "product") page = "productos";
    if (formType === "order") page = "pedidos";
    return `/${page}/${productId}`;
  };

  const handleClick = () => navigate(getUrl());

  if (buttonType === "gridAction") {
    return (
      <Tooltip title={label}>
        <GridActionsCellItem
          icon={<VisibilityIcon />}
          label={label}
          onClick={handleClick}
        />
      </Tooltip>
    );
  }

  if (buttonType === "menuItem") {
    <MenuItem onClick={handleClick}>
      <ListItemIcon>
        <VisibilityIcon />
      </ListItemIcon>
      {label}
    </MenuItem>;
  }

  return (
    <Tooltip title={label}>
      <IconButton color="secondary" onClick={handleClick}>
        <VisibilityIcon />
      </IconButton>
    </Tooltip>
  );
};

export default Show;
