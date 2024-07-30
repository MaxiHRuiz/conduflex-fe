import { Chip } from "@mui/material";
import { ISubStatusProps } from "./ISubStatusProps";

const SubStatus = ({status}: ISubStatusProps) => {
    return ( 
        <Chip
          size="small"
          color={status === 'despachado' ? "success" : status === 'en_produccion' ? "warning" : status === 'fraccionado' ? "primary" : "info"}
          label={status}
        />
     );
}
 
export default SubStatus;