import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import CustomContainer from "../../components/customContainer/CustomContainer";
import { useTodo } from "../../context/TodoContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IOrder } from "dtos/order.dto";
import Status from "components/Status";
import SubStatus from "components/SubStatus";

const ShowOrders = () => {
  // const { orders } = useTodo();
  const { id } = useParams();
  const [order, setOrder] = useState<IOrder | undefined>();
  // useEffect(() => {
  //   setOrder(orders.find((x) => x.id === id));
  // }, [id]);

  if (!order) return <></>;

  return (
    <CustomContainer breadCrumbs>
      <Typography component="h1" variant="h5" gutterBottom>
        Detalle
      </Typography>
      <Paper
        sx={{
          mb: 1,
          p: 3,
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <Typography>{order.id}</Typography>
          </Grid>
          <Grid item>
            <Typography>{order.vendedor}</Typography>
          </Grid>
          <Grid item>
            <Typography>{<Status status={order.status} />}</Typography>
          </Grid>

          <Grid item xs={12}>
            {order.list.map((x) => {
              return (
                <>
                  <Divider sx={{
                    my:1
                  }}/>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Typography>{x.id_producto}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography>{x.descripcion_producto}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography>{x.id_stock}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography>{`${x.contindad_producto} Mts`}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography>{<SubStatus status={x.subStatus} />}</Typography>
                    </Grid>
                    <Divider />
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Grid>
      </Paper>
    </CustomContainer>
  );
};

export default ShowOrders;
