import { Button, Grid, Paper, styled, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

import { useNavigate, useParams } from "react-router-dom";
import { IStock } from "dtos/stock.dto";
import { IStockFormProps } from "./stock/IStockFormProps";

const defaultValues: IStock = {
  id: "1111",
  codigo: "",
  descripcion: "Unipolar",
  cantidad_metros: 16,
  cantidad_metros_vendidos: 150,
  detalle: "cable verde",
};

export const StockDetails = () => {
  const {stock} = useParams()
  const {
    codigo = stock,
    cantidad_metros,
    descripcion,
    cantidad_metros_vendidos,
    detalle,
  } = defaultValues;

  const FormGrid = styled(Grid)(() => ({
    display: "flex",
    flexDirection: "column",
  }));

  return (
    <Paper
      sx={{
        p: 2,
        display: "grid",
        gridRowGap: "20px",
      }}
    >
      <Typography component="h1" variant="h4">
        Stock
      </Typography>

      <Grid container spacing={3}>
        <FormGrid item xs={12} md={6}>
          <Typography component="h1" variant="h4">
            {codigo}
          </Typography>
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <Typography component="h1" variant="h4">
            {descripcion}
          </Typography>
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <Typography component="h1" variant="h4">
            {cantidad_metros}
          </Typography>
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <Typography component="h1" variant="h4">
            {cantidad_metros_vendidos}
          </Typography>
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <Typography component="h1" variant="h4">
            {detalle}
          </Typography>
        </FormGrid>
      </Grid>
    </Paper>
  );
};
