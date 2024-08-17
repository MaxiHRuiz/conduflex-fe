import { Box, Grid, Paper, styled, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetStockById } from "services/hooks/useGetStockById";
import QR from "./actions/QR";
import { generateURL } from "utils/helpers";
import Loading from "./Loading";

export const StockDetails = () => {
  const { productId = "", stockId = "" } = useParams();

  const { data, isFetching, isError } = useGetStockById(productId, stockId);

  const FormGrid = styled(Grid)(() => ({
    display: "flex",
    flexDirection: "column",
  }));

  if (isFetching) return <Loading />;

  return (
    <>
      <Typography component="h1" variant="h5" gutterBottom>
        Detalle de Stock
      </Typography>
      <Paper
        sx={{
          p: 2,
          display: "grid",
          gridRowGap: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography component="span" variant="h6">
            id: {data?.id}
          </Typography>
          <QR stockId={stockId} value={generateURL(productId, stockId)} />
        </Box>
        <Grid container spacing={1}>
          <FormGrid item xs={12} md={6}>
            <Typography component="span" variant="h6">
              Descripcion: {`${data?.product_id} - ${data?.descripcion}`}
            </Typography>
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <Typography component="span" variant="h6">
              Metros iniciales: {data?.cantidad_metros}
            </Typography>
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <Typography component="span" variant="h6">
              Metros vendidos: {data?.cantidad_metros_vendidos}
            </Typography>
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <Typography component="span" variant="h6">
              Metros restantes: {data?.cantidad_metros_restantes}
            </Typography>
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <Typography component="span" variant="h6">
              Detalle: {data?.detalle}
            </Typography>
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <Typography component="span" variant="h6">
              Disponible: {data?.disponible}
            </Typography>
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <Typography component="span" variant="h6">
              Estado: {data?.estado}
            </Typography>
          </FormGrid>
        </Grid>
      </Paper>
    </>
  );
};

        // "id": "20240816006",
        // "product_id": "104",
        // "descripcion": "UNIPOLAR 1 X 0,75",
        // "cantidad_metros": 1000,
        // "cantidad_metros_vendidos": 0,
        // "cantidad_metros_restantes": 1000,
        // "detalle": "prueba",
        // "disponible": false,
        // "estado": "entregado"