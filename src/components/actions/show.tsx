import { IconButton, Tooltip } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import { IActionsButtonProps } from "./IActionsProps";
import { GridActionsCellItem } from "@mui/x-data-grid";

const Show = ({
  buttonType = "icon",
  productId,
  stockId,
  orderId,
  formType,
  clientId,
}: IActionsButtonProps) => {
  const navigate = useNavigate();
  const label = "Ver detalle";

  const getUrl = () => {
    if (formType === "stock")
      return `/productos/${productId}/stocks/${stockId}`;
    if (formType === "product") return `/productos/${productId}`;
    if (formType === "order") return `/pedidos/${orderId}`;
    if (formType === "client") return `/clientes/${clientId}`;
    return "";
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

  return (
    <Tooltip title={label}>
      <IconButton size="small" color="secondary" onClick={handleClick}>
        <VisibilityIcon />
      </IconButton>
    </Tooltip>
  );
};

export default Show;
