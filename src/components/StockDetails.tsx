import { Box, Button, Divider, Grid, Paper, styled, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetStockById } from "services/hooks/useGetStockById";
import QR from "./actions/QR";
import { generateURL } from "utils/helpers";
import Loading from "./Loading";
import { useGetRole } from "services/hooks/useGetRole";
import OrderStockState from "./OrderStockState";
import FractionateForm from "./FractionateForm";
import StockDetailCard from "./StockDetailCard";
import FractionateCard from "./FractionateCard";

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

  if (roleData?.rol === 'admin') {
    <>
      <Typography component="h1" variant="h5" gutterBottom>
        Detalle de Stock
      </Typography>
      <Grid container spacing={1}>
        <FormGrid item xs={12} md={8}>
          <StockDetailCard data={data} stockId={stockId} productId={productId} />
        </FormGrid>
        {/* solo puedo fraccionar si esta en stock + disponible + admim */}
        <FormGrid item xs={12} md={4}>
          <FractionateCard />
        </FormGrid>
      </Grid>
    </>
  }

  return (
    <>
      <Typography component="h1" variant="h5" gutterBottom>
        Detalle de Stock
      </Typography>
      <StockDetailCard data={data} stockId={stockId} productId={productId} />
    </>
  );
};
