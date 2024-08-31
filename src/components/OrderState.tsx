import { Box, Chip, Typography } from "@mui/material";
import { orderStatusMapper } from "utils/helpers";

interface IOrderStateProps {
  label?: boolean
  bold?: boolean
  state: string;
}

const OrderState = ({ state, label, bold}: IOrderStateProps) => {
  let values = orderStatusMapper(state);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 1
      }}
    >
      {label && <Typography fontWeight={bold ? 'bold' : undefined}>Estado:</Typography>}
      <Chip size="small" variant="filled" color={values.variant} label={values.label} />
    </Box>
  );
};

export default OrderState;
