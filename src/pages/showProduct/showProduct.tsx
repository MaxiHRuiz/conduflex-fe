import {
  Box,
  Button,
  Checkbox,
  Grid,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import CustomContainer from "../../components/customContainer/CustomContainer";
import { useTodo } from "../../context/TodoContext";
import { useNavigate, useParams } from "react-router-dom";
import CustomCard from "../../components/customCard/customCard";
import { IProduct } from "dtos/product.dto";
import { useEffect, useMemo } from "react";
import StockTable from "components/DataTable/StockTable";

const ShowProduct = () => {
  const { products, stocks, updateProduct } = useTodo();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!products.find((x) => x.codigo === id)) {
      navigate("/");
    }
  }, [id]);

  return (
    <CustomContainer breadCrumbs>
      <Typography component="h1" variant="h5" gutterBottom>
        Detalle
      </Typography>
      <Box sx={{
        mb:1
      }}>
      {products.find((x) => x.codigo === id) && (
        <CustomCard
          product={products.find((x) => x.codigo === id) || ({} as IProduct)}
          hiddenActions
        />
      )}
      </Box>

      <StockTable stock={stocks.filter(x=> x.codigo === id)} />
    </CustomContainer>
  );
};

export default ShowProduct;
