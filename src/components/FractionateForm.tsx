import { Box, TextField } from "@mui/material";
import NumericFormatCustom from "components/NumericFormatCustom";
import React from "react";
import { IProduct } from "types/product";
import ConfirmButton from "./ConfirmButton";
import { useUpdateFractionate } from "services/hooks/useUpdateFractionate";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

interface IOrderFromValues {
  isFractionate: boolean;
  meters: string;
  details: string;
}

const defaultValues: IOrderFromValues = {
  isFractionate: false,
  meters: "",
  details: "",
};

interface FractionateForm {
  disabled?: boolean;
}

const FractionateForm = ({ disabled = false }: FractionateForm) => {
  const { productId = "", stockId = "" } = useParams();
  const { mutateAsync: update, isPending } = useUpdateFractionate();
  const [value, setValue] = React.useState<string>("");
  const dialogTitle = "Confirmar acción";
  const dialogContent = "¿Estás seguro de que deseas fraccionar este producto?";
  const label = "Fraccionar";

  const handleMetersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onHandleClick = () => {
    if (!value) {
      toast.warning("No ingresaste la cantidad de mentros para fraccionar");
      return
    }
    update({
      fraccion: Number(value),
      productId,
      stockId,
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 1,
        py: 1,
      }}
    >
      <TextField
        fullWidth
        label="Metros"
        size="small"
        color="secondary"
        value={value}
        onChange={handleMetersChange}
        InputProps={{
          inputComponent: NumericFormatCustom as any,
        }}
      />

      <ConfirmButton
        isLoading={isPending}
        dialogTitle={dialogTitle}
        dialogContent={dialogContent}
        disabled={disabled}
        buttonColor="primary"
        onConfirm={onHandleClick}
        buttonText={label}
      />
    </Box>
  );
};

export default FractionateForm;
