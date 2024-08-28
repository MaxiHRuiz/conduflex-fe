import { Box, Typography } from "@mui/material";
import CustomContainer from "../../components/customContainer/CustomContainer";
import { useParams } from "react-router-dom";
import OrderTicket from "components/orderTicket/orderTicket";
import { useGetOrderById } from "services/hooks/useGetOrderById";
import Loading from "components/Loading";
import PDF from "components/actions/PDF";

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
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
      <Typography component="h1" variant="h5" gutterBottom>
        Pedido
      </Typography>
      <PDF order={data} />
      </Box>

      <OrderTicket order={data} />
    </CustomContainer>
  );
};

export default ShowOrder;
