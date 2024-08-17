import {
  Paper,
  Box,
  Typography,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  Accordion,
  styled,
} from "@mui/material";
import Actions from "../actions/actions";
import { capitalizeFirstLetter } from "../../utils/helpers";
import { ICustomCardProps } from "./ICustomCardProps";
import CustomCardTable from "./customCardTable";
import Stock from "components/Stock";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CustomCard = ({ product, hiddenActions}: ICustomCardProps) => {
  const theme = useTheme();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(value);
  };

  return (
    <>
      <Paper
        elevation={0}
        variant="outlined"
        sx={{
          width: "auto",
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
          mt: 0.5,
        }}
      >
        <Box
          sx={{
            backgroundColor: !product.hay_stock
              ? theme.palette.warning.light
              : theme.palette.info.light,
            height: 4,
            width: "auto",
            borderTopRightRadius: 5,
            borderTopLeftRadius: 5,
          }}
        />
        <Box
          sx={{
            px: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              pt: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography component="h2" variant="h6">{`${
                product.id
              } - ${capitalizeFirstLetter(product.descripcion)}`}</Typography>
              <Stock inStock={product.hay_stock} />
            </Box>
            {!hiddenActions && <Actions product_id={product.id} />}
          </Box>
          <Typography component="h2" variant="h4" gutterBottom>
            {formatCurrency(product.precio)}
          </Typography>
          <AccordionCustom elevation={0}>
            <AccordionSummaryCustom expandIcon={<ExpandMoreIcon />}>
              Detalles
            </AccordionSummaryCustom>
            <AccordionDetails
              sx={{
                overflowX: "auto",
              }}
            >
              <CustomCardTable product={product} />
            </AccordionDetails>
          </AccordionCustom>
        </Box>
      </Paper>
    </>
  );
};

const AccordionCustom = styled(Accordion)`
  .MuiAccordionDetails-root {
    padding: 0 16px 16px;
  }
  .MuiAccordionSummary-root.Mui-expanded {
    min-height: 0 !important; /* Sobrescribe el min-height */
  }
`;

const AccordionSummaryCustom = styled(AccordionSummary)`
  .Mui-expanded {
    margin: 10px 0 10px !important;
  }
`;

export default CustomCard;
