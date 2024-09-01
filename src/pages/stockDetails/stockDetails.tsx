import CustomContainer from "../../components/customContainer/CustomContainer";
import { StockDetails } from "components/StockDetails";

const ShowProduct = () => {
  return (
    <CustomContainer breadCrumbs excludeLink={["stock"]}>
      <StockDetails />
    </CustomContainer>
  );
};

export default ShowProduct;
