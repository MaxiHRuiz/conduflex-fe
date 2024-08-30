import { Divider, Box } from "@mui/material";
import { ReactNode } from "react";

const TicketActionsContainer = ({ children, topDivider, buttonDivider }: { children: ReactNode, topDivider?: boolean, buttonDivider?: boolean }) => {
  return (
    <>
      {topDivider && <Divider sx={{ my: 1 }} />}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          gap: 1,
        }}
      >
        {children}
      </Box>
      {buttonDivider && <Divider sx={{ my: 1 }} />}
    </>
  );
};

export default TicketActionsContainer