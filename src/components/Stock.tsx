import { Chip } from "@mui/material";
import { IStockProps } from "./IStockProps"

const Stock = ({inStock}: IStockProps) => {
    return ( 
        <Chip
          size="small"
          color={inStock ? "info" : "warning"}
          label={inStock ? "En Stock" : "Sin stock"}
        />
     );
}
 
export default Stock;