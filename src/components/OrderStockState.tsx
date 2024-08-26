import { Chip } from "@mui/material";
import { stockStatusMapper } from "utils/helpers";

interface IOrderStockStateProps {
  state: string;
}

const OrderStockState = ({ state }: IOrderStockStateProps) => {
  let values = stockStatusMapper(state)
  
  return (
    <>
      Estado: <Chip size="small" color={values.variant} label={values.label} />
    </>
  );
};

export default OrderStockState;
