import { Chip, useTheme } from "@mui/material";
import { blue } from "@mui/material/colors";
import { stockStatusMapper } from "utils/helpers";

interface IOrderStockStateProps {
  state: string;
}

const OrderStockState = ({ state }: IOrderStockStateProps) => {
  let values = stockStatusMapper(state);
  const theme = useTheme();

  const getStateColor = () => {
    if (state === "finalizado" || state === "finalizada")
      return theme.palette.success.main;
    if (state === "entregado") return theme.palette.success.main;
    if (state === "en_stock") return theme.palette.info.main;
    if (state === "listo_para_entregar") return blue[600];
    if (state === "no_disponible") return theme.palette.error.main;
    return theme.palette.secondary.main;
  };

  return (
    <>
      Estado:{" "}
      <Chip
        size="small"
        label={values.label}
        sx={{ bgcolor: getStateColor(), color: "white" }}
      />
    </>
  );
};

export default OrderStockState;
