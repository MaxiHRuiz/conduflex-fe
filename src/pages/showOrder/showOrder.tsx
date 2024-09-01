import { Box, Typography } from "@mui/material";
import CustomContainer from "../../components/customContainer/CustomContainer";
import { useParams } from "react-router-dom";
import OrderTicket from "components/orderTicket/orderTicket";
import { useGetOrderById } from "services/hooks/useGetOrderById";
import Loading from "components/Loading";
import PDF from "components/actions/PDF";

const Content = () => {
  const { orderId = "" } = useParams();
  const { data, isFetching, isError } = useGetOrderById(orderId);

  if (isFetching) return <Loading />;

  if (isError)
    return <Typography>Hubo un error al obtener la orden.</Typography>;

  if (!data) return <></>;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          pb: 1,
        }}
      >
        <Typography component="h1" variant="h5" gutterBottom>
          Pedido
        </Typography>
        {data.id && !isFetching && <PDF order={data} />}
      </Box>
      <OrderTicket order={data} />
    </>
  );
};

const ShowOrder = () => {
  return (
    <CustomContainer breadCrumbs>
      <Content />
    </CustomContainer>
  );
};

export default ShowOrder;
