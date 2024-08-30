import React from 'react';
import Button from '@mui/material/Button';

interface IDeliveryActionProps {
  status: string;
}

const DeliveryAction: React.FC<IDeliveryActionProps> = ({ status }) => {
  const handleReadyToDeliverClick = () => {

  };

  const handleDeliveredClick = () => {

  };

  if (status === 'in_stock') return (
    <Button size="small" color="info" variant="contained" onClick={handleReadyToDeliverClick}>
      Listo para entregar
    </Button>
  )

  if (status === 'listo_para_entregar') return (
    <Button size="small" color="success" variant="contained" onClick={handleDeliveredClick}>
      Entregado
    </Button>
  )

  return (<></>)
};

export default DeliveryAction;