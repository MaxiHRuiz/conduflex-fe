import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { validarCUIT } from "utils/helpers";

interface CUITTextFieldProps {
  name: string;
  cuit: string;
  label: string;
  setCuit: (value: string) => void;
}

const CUITTextField: React.FC<CUITTextFieldProps> = ({
  cuit,
  setCuit,
  name,
  label
}) => {
  const [error, setError] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value.replace(/[^0-9]/g, "");

    if (value.length > 11) {
      value = value.slice(0, 11);
    }

    if (value.length > 2) {
      value = `${value.slice(0, 2)}-${value.slice(2)}`;
    }
    if (value.length > 11) {
      value = `${value.slice(0, 11)}-${value.slice(11)}`;
    }

    setCuit(value);

    setError(validarCUIT(value));
  };

  return (
    <TextField
      name={name}
      label={label}
      value={cuit}
      onChange={handleChange}
      error={error}
      size="small"
      helperText={error ? "CUIT inválido. Debe tener 11 dígitos." : "Ingresar el numero sin guiones"}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        ),
      }}
      variant="outlined"
      fullWidth
    />
  );
};

export default CUITTextField;
