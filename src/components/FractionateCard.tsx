import React from 'react';
import Paper from '@mui/material/Paper';
import FractionateForm from './FractionateForm';

const FractionateCard: React.FC = () => {
  return (
    <Paper
      sx={{
        p: 1,
      }}
    >
      <FractionateForm />
    </Paper>
  );
};

export default FractionateCard;
