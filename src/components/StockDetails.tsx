import { Box, Button, Divider, Grid, Paper, styled, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetStockById } from "services/hooks/useGetStockById";
import QR from "./actions/QR";
import { generateURL } from "utils/helpers";
import Loading from "./Loading";
import { useGetRole } from "services/hooks/useGetRole";
import OrderStockState from "./OrderStockState";
import FractionateForm from "./FractionateForm";

export const StockDetails = () => {
  const { productId = "", stockId = "" } = useParams();

  const { data, isFetching, isError } = useGetStockById(productId, stockId);
  const { data: roleData, isFetching: roleIsFetching, isError: isErrorRole } = useGetRole()

  const FormGrid = styled(Grid)(() => ({
    display: "flex",
    flexDirection: "column",
  }));

  if (isFetching || roleIsFetching) return <Loading />;

  if (isError || isErrorRole) return <Typography>Error al obtener los detalles de stocks</Typography>

  return (
    <>
      <Typography component="h1" variant="h5" gutterBottom>
        Detalle de Stock
      </Typography>
      <Grid container spacing={1}>
        <FormGrid item xs={12} md={8}>
          <Paper
            sx={{
              p: 2,
              display: "grid",
              gridRowGap: "10px",
            }}
          >
            {data?.estado === 'no_available' && <>
              <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'end',
                justifyItems: 'center',
              }}>
                <Button variant="contained" color="success" size="small">Aprobar</Button>
              </Box>
              <Divider />
            </>}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography component="span" variant="h6">
                Id: {data?.id}
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
                  Disponible: {data?.disponible ? 'Si' : 'No'}
                </Typography>
              </FormGrid>
              <FormGrid item xs={12} md={6}>
                <OrderStockState state={data?.estado || ''} />
              </FormGrid>
            </Grid>
          </Paper>
        </FormGrid>
        <FormGrid item xs={12} md={4}>
          <Paper
            sx={{
              p: 1
            }}
          >
            <FractionateForm />
          </Paper>
        </FormGrid>
      </Grid>

    </>
  );
};
