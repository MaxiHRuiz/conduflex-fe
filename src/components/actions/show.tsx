import { IconButton, ListItemIcon, MenuItem } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import { IActionsButtonProps } from "./IActionsProps";
import { GridActionsCellItem } from "@mui/x-data-grid";

const Show = ({ buttonType = "icon", code, formType }: IActionsButtonProps) => {
  const navigate = useNavigate();
  const label = "Ver";

  const getUrl = () => {
    let page = "";
    if (formType === "stock") page = "stocks";
    if (formType === "product") page = "productos";
    if (formType === "order") page = "pedidos";
    return `/${page}/${code}`
  };

  const handleClick = () => navigate(getUrl());

  if (buttonType === "gridAction") {
    return (
      <GridActionsCellItem
        icon={<VisibilityIcon />}
        label={label}
        onClick={handleClick}
      />
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
    <IconButton color="secondary" aria-label={label} onClick={handleClick}>
      <VisibilityIcon />
    </IconButton>
  );
};

export default Show;
