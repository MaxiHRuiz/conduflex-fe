import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";
import CUITTextField from "components/CUITTextField";

export const FormInputCUIT = ({
  name,
  control,
  label,
  type,
  disabled,
  required,
}: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required,
      }}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <CUITTextField
          label={label}
          name={name}
          cuit={value}
          setCuit={onChange}
        />
      )}
    />
  );
};
