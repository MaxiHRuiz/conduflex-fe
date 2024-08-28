import Show from "./show";
import Delete from "./delete";
import Edit from "./edit";
import { ActionsProps } from "./IActionsProps";
import {
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Add from "./add";

const Actions = ({ product_id, hiddenShowAction }: ActionsProps) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row'
    }}>
      {!hiddenShowAction && <Show productId={product_id} formType="product" />}
      <Edit productId={product_id} formType="product" />
      <Delete productId={product_id} formType="product" />
      <Add productId={product_id} />
    </Box>
  );
};

export default Actions;
