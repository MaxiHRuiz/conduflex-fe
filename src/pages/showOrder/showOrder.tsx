import { Typography } from "@mui/material";
import CustomContainer from "../../components/customContainer/CustomContainer";
import { useParams } from "react-router-dom";
import OrderTicket from "components/orderTicket/orderTicket";
import { useGetOrderById } from "services/hooks/useGetOrderById";
import Loading from "components/Loading";

const ShowOrder = () => {
  // const { orders } = useTodo();
  const { orderId = "" } = useParams();
  const { data, isLoading, isError } = useGetOrderById(orderId);

  if (isLoading) return <Loading />;

  if (isError)
    return <Typography>Hubo un error al obtener la orden.</Typography>;

  if (!data) return <></>;

  return (
    <CustomContainer breadCrumbs>
      <Typography component="h1" variant="h5" gutterBottom>
        Pedido
      </Typography>
      <OrderTicket order={data} />
      {/* <Grid container spacing={2}>
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
        </Grid> */}
    </CustomContainer>
  );
};

export default ShowOrder;
