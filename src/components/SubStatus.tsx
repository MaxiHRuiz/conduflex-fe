import { Chip } from "@mui/material";
import { ISubStatusProps } from "./ISubStatusProps";

const SubStatus = ({status}: ISubStatusProps) => {
    return ( 
        <Chip
          size="small"
          color={status === 'despachado' ? "success" : status === 'en_produccion' ? "default" : status === 'fraccionado' ? "success" : "primary"}
          label={status}
        />
     );
}
 
export default SubStatus;