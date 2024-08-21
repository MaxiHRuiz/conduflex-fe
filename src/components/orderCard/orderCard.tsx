import { Divider, Grid, Paper, Typography } from "@mui/material";
import { IProductStock } from "types/order";
import { formatCurrency } from "utils/helpers";

interface IOrderCardProps {
  productStock: IProductStock;
}

const OrderCard = ({ productStock }: IOrderCardProps) => {
  return (
    <Paper sx={{ p: 2, mb: 1 }}>
      <Grid container spacing={1}>
        <Grid item md={12}>
          <Typography
            component="h3"
            fontWeight="bold"
            gutterBottom
          >{`${productStock.product_id} - ${productStock.descripcion}`}</Typography>
          <Divider />
        </Grid>
        <Grid item md={6}>
          <Typography component="span">{`Es fraccionable: ${
            productStock.es_fraccionable ? "si" : "no"
          }`}</Typography>
        </Grid>
        <Grid item md={6}>
          <Typography component="span">{`metros de cable: ${productStock.cantidad_metros} mts.`}</Typography>
        </Grid>
        <Grid item md={6}>
          <Typography component="span">{`Detalle: ${
            productStock.detalle || "No hay detalles"
          }`}</Typography>
        </Grid>
        <Grid item md={6}>
          <Typography component="span">{`Precio: ${
            formatCurrency(productStock.precio)
          }`}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default OrderCard;
