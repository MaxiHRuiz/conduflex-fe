import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import OrderStockState from "./OrderStockState"; // Asegúrate de importar el componente OrderStockState
import styled from "styled-components";
import QR from "./actions/QR";
import { IStock } from "types/stock";
import { generateURL, numberFormat } from "utils/helpers";
import { useAppContext } from "context/RoleContext";

interface IStockDetailCardProps {
  data?: IStock;
  stockId: string;
  productId: string;
  onAprobeStock: () => void
}

const StockDetailCard: React.FC<IStockDetailCardProps> = ({
  data,
  stockId,
  productId,
  onAprobeStock
}) => {
  const { role } = useAppContext();
  const FormGrid = styled(Grid)(() => ({
    display: "flex",
    flexDirection: "column",
  }));
  return (
    <Paper
      sx={{
        p: 2,
        display: "grid",
        gridRowGap: "10px",
      }}
    >
      {data?.estado === "no_disponible" && (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              justifyItems: "center",
            }}
          >
            <Button
              variant="contained"
              color="success"
              size="small"
              disabled={role !== "admin"}
              onClick={onAprobeStock}
            >
              Aprobar
            </Button>
          </Box>
          <Divider />
        </>
      )}
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
            Descripción: {`${data?.product_id} - ${data?.descripcion}`}
          </Typography>
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <Typography component="span" variant="h6">
            Metros iniciales: {numberFormat(data?.cantidad_metros || 0, false)}
          </Typography>
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <Typography component="span" variant="h6">
            Metros vendidos: {numberFormat(data?.cantidad_metros_vendidos || 0, false)}
          </Typography>
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <Typography component="span" variant="h6">
            Metros restantes: {numberFormat(data?.cantidad_metros_restantes || 0, false)}
          </Typography>
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <Typography component="span" variant="h6">
            Disponible: {data?.disponible ? "Sí" : "No"}
          </Typography>
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <Typography component="span" variant="h6">
            Detalle: {data?.detalle}
          </Typography>
        </FormGrid>
        <FormGrid item xs={12} md={6}>
          <div>
            <OrderStockState state={data?.estado || ""} />
          </div>
        </FormGrid>
      </Grid>
    </Paper>
  );
};

export default StockDetailCard;
