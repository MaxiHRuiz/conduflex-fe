import CustomContainer from "../../components/customContainer/CustomContainer";
import { Typography } from "@mui/material";
import CollapsibleTable from "components/collapsibleTable/collapsibleTable";

const Orders = () => {
  return (
    <CustomContainer>
      <Typography component="h1" variant="h5" gutterBottom>
        Pedidos
      </Typography>
      <CollapsibleTable />
    </CustomContainer>
  );
};

export default Orders;
