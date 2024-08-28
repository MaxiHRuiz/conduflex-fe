import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { FormInputProps } from "./FormInputProps";
import NumericFormatCustom from "components/NumericFormatCustom";

export const FormInputText = ({
  name,
  control,
  label,
  type,
  disabled,
  required
}: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required
      }}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
          type={type}
          disabled={disabled}
        />
      )}
    />
  );
};
