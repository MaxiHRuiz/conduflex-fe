import {
  Box,
  Typography,
  FormControlLabel,
  Switch,
  Button,
} from "@mui/material";
import CustomContainer from "../../components/customContainer/CustomContainer";
import CustomCard from "../../components/customCard/customCard";
import { IProduct } from "dtos/product.dto";
import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTodo } from "context/TodoContext";
import DataTable from "components/DataTable/DataTable";

export const Products = () => {
  const { products } = useTodo();
  const navigate = useNavigate();
  const { tableChecked, setTableChecked } = useTodo();

  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    checked: boolean
  ) => {
    setTableChecked(checked);
  };

  return (
    <CustomContainer>
      <Box
        sx={{
          mb: 1,
        }}
      >
        <Typography component="h1" variant="h5" gutterBottom>
          Productos
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <FormControlLabel
              value={tableChecked}
              onChange={handleChange}
              control={<Switch name="Interruptor para cambiar tabla" />}
              label="Cambiar tabla"
            />
          </Box>

          <Box sx={{ flexShrink: 0 }}>
            <Button
              variant="contained"
              disableElevation
              onClick={() => navigate("/productos/crear")}
            >
              Agregar producto
            </Button>
          </Box>
        </Box>
      </Box>
      {!tableChecked &&
        products.map((x, index) => {
          return (
            <>
              <CustomCard key={x.codigo} product={x} />
            </>
          );
        })}
      {tableChecked && <DataTable product={products} />}
    </CustomContainer>
  );
};
