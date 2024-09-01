import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import dayjs, { Dayjs } from "dayjs";
import 'dayjs/locale/es';
dayjs.locale('es');

interface CustomDateFieldProps {
  onSetValue: (value: string) => void
}

const CustomDateField = ({onSetValue}: CustomDateFieldProps) => {
  const [value, setValue] = React.useState<Dayjs | null>();
  const handleSetValue = (newValue: dayjs.Dayjs | null) => {
    setValue(newValue)
    console.log(newValue)
    const value = newValue?.format("YYYY-MM-DD") || ''
    if (value)
      onSetValue(newValue?.format("YYYY-MM-DD") || '')
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateField
      format="DD/MM/YYYY"
        size="small"
        label="Fecha"
        value={value}
        onChange={handleSetValue}
      />
    </LocalizationProvider>
  );
}

export default CustomDateField