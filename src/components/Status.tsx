import { Chip } from "@mui/material";
import { IStatusProps } from "./IStatusProps";

const Status = ({status}: IStatusProps) => {
    return ( 
        <Chip
          size="small"
          color={status === 'aprobado' ? "info" : status === 'pendiente' ? "warning" : status === 'finalizado' ? "success" : "primary"}
          label={status}
        />
     );
}
 
export default Status;