import {
  Box,
  Typography,
} from "@mui/material";
import CustomContainer from "../../components/customContainer/CustomContainer";
import { useTodo } from "context/TodoContext";
import StockTable from "components/DataTable/StockTable";

const Stocks = () => {
  const { stocks } = useTodo();

  return (
    <CustomContainer>
      <Box
        sx={{
          mb: 1,
        }}
      >
        <Typography component="h1" variant="h5" gutterBottom>
          Stocks
        </Typography>
      </Box>
      <StockTable stock={stocks} />
    </CustomContainer>
  );
};

export default Stocks;
