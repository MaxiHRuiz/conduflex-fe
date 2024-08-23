import { Chip } from "@mui/material";

interface IOrderStateProps {
  state: string;
}

type TypeColor = "warning" | undefined;

const OrderState = ({ state }: IOrderStateProps) => {
  let label = "";
  let variant: TypeColor = undefined;
  if (state === "no_disponible") {
    label = "no disponible";
    variant = "warning";
  }
  return (
    <>
      Estado: <Chip size="small" color={variant} label={label} />
    </>
  );
};

export default OrderState;
