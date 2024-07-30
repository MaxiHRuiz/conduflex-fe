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

const CustomCard = ({ product, hiddenActions }: ICustomCardProps) => {
  const theme = useTheme();

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
            backgroundColor: !product.stock
              ? theme.palette.warning.light
              : theme.palette.info.light,
            height: 5,
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
                product.codigo
              } - ${capitalizeFirstLetter(product.descripcion)}`}</Typography>
                <Stock inStock={product.stock} />
            </Box>
            {!hiddenActions && <Actions code={product.codigo}  />}
          </Box>
          <Typography
            component="h2"
            variant="h4"
            gutterBottom
          >{`$ ${product.precio}`}</Typography>
          <AccordionCustom elevation={0}>
            <AccordionSummaryCustom>Detalles</AccordionSummaryCustom>
            <AccordionDetails sx={{
                overflowX: "auto"
            }}>
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

