import { IconButton, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { ButtonType } from "./IActionsProps";
import { useNavigate } from "react-router-dom";
import { GridActionsCellItem } from "@mui/x-data-grid";

interface IAddProps {
  productId: string;
  buttonType?: ButtonType;
}

function Add({ productId, buttonType }: IAddProps) {
  const navigate = useNavigate();
  const label = "Crear nuevo stock";

  const onHandleClick = () => {
    navigate(`/productos/${productId}/stocks/crear`);
  };

  if (buttonType === "gridAction") {
    return (
      <Tooltip title={label}>
        <GridActionsCellItem
          icon={<AddIcon />}
          label={label}
          onClick={onHandleClick}
        />
      </Tooltip>
    );
  }

  return (
    <Tooltip title={label}>
      <IconButton size="small" aria-label={label} onClick={onHandleClick}>
        <AddIcon />
      </IconButton>
    </Tooltip>
  );
}

export default Add;
