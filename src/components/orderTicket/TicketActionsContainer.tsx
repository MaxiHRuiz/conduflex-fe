import { Divider, Box } from "@mui/material";
import { ReactNode } from "react";

const TicketActionsContainer = ({children}: { children: ReactNode }) => {
    return (
      <>
        <Divider sx={{ mt: 1 }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            mt: 1,
            gap: 1,
          }}
        >
          {children}
        </Box>
      </>
    );
  };

  export default TicketActionsContainer