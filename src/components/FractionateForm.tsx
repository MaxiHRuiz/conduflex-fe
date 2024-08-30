import {
    Box,
    TextField,
} from "@mui/material";
import NumericFormatCustom from "components/NumericFormatCustom";
import React from "react";
import { IProduct } from "types/product";
import ConfirmButton from "./ConfirmButton";

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

interface IOrderFromProps {
    product: IProduct;
}

const FractionateForm = () => {
    const isPending = true
    const [values, setValues] = React.useState<IOrderFromValues>(defaultValues);
    const dialogTitle = "Confirmar acción";
    const dialogContent = "¿Estás seguro de que deseas fraccionar este producto?";
    const label = "Fraccionar";

    const handleMetersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            meters: event.target.value,
        });
    };

    const onHandleClick = () => {

    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                py: 3,
                px: 2,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <TextField
                fullWidth
                label="Metros"
                size="small"
                color="secondary"
                value={values.meters}
                onChange={handleMetersChange}
                InputProps={{
                    inputComponent: NumericFormatCustom as any,
                }}
            />

            <ConfirmButton
                isLoading={false}
                dialogTitle={dialogTitle}
                dialogContent={dialogContent}
                disabled={false}
                buttonColor="primary"
                onConfirm={onHandleClick}
                buttonText={label} />
        </Box>
    );
};

export default FractionateForm;
