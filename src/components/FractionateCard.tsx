import React from "react";
import Paper from "@mui/material/Paper";
import FractionateForm from "./FractionateForm";
import { Typography } from "@mui/material";

interface FractionateCardProps {
  disabled?: boolean;
}

const FractionateCard: React.FC<FractionateCardProps> = ({ disabled }) => {
  return (
    <Paper
      sx={{
        p: 2,
        mt: 1,
      }}
    >
      <Typography component="h2" variant="h6">
        Fraccionar producto
      </Typography>
      <FractionateForm disabled={disabled} />
    </Paper>
  );
};

export default FractionateCard;
