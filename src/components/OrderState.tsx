import { Box, Chip, Typography } from "@mui/material";
import { orderStatusMapper } from "utils/helpers";

interface IOrderStateProps {
  state: string;
}

const OrderState = ({ state }: IOrderStateProps) => {
  let values = orderStatusMapper(state);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 1
      }}
    >
      <Typography fontWeight="bold">Estado:</Typography>
      <Chip size="small" color={values.variant} label={values.label} />
    </Box>
  );
};

export default OrderState;
