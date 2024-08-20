import { Grid, Paper, Typography } from "@mui/material";
import { IProductStock } from "types/order";

interface IOrderCardProps {
  productStock: IProductStock;
}

const OrderCard = ({ productStock }: IOrderCardProps) => {
  return (
    <Paper>
      <Grid container spacing={1}>
        <Grid item md={12}>
          <Typography component="h3">{`${productStock.product_id} - ${productStock.descripcion}`}</Typography>
        </Grid>
        <Grid item md={6}>
          <Typography component="span">{`Es fraccionable: ${
            productStock.es_fraccionable ? "si" : "no"
          }`}</Typography>
        </Grid>
        <Grid item md={6}>
          <Typography component="span">{`metros de cable: ${productStock.cantidad_metros}`}</Typography>
        </Grid>
        <Grid item md={6}>
          <Typography component="span">{`Detalle ${productStock.detalle}`}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default OrderCard;
